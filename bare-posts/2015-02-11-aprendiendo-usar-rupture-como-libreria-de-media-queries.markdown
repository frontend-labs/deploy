---
author: VictorJSV
comments: true
date: 2015-02-11 05:27:32+00:00
layout: post
link: https://frontendlabs.io/2321--aprendiendo-usar-rupture-como-libreria-de-media-queries
slug: aprendiendo-usar-rupture-como-libreria-de-media-queries
title: Aprender a usar "rupture" como librería de media queries con stylus
wordpress_id: 2321
categories:
  - Automatización
  - Css
  - Mobile
tags:
  - CSS3
  - HTML5
  - Responsive
  - Stylus
---

## ¿Que es rupture y cómo funciona?

[Rupture ](http://jenius.github.io/rupture/)es una librería de media queries, que nos ayuda fácilmente a maquetar una pagina web para tamaños mobile, tablet y desktop. Se aprovecha de los mixins de bloque en Stylus para que sea más facil de usar.

Rupture proporciona una variable llamada escala(scale) que por defecto lleva la siguiente configuración.

    <code>
    scale= 0 400px 600px 800px 1050px
    </code>

Se puede agregar o quitar escalas como tu desees, todo depende de cómo estás pensando tener tus [breakpoints](http://mydevice.io/devices/). Hay que tener en cuenta que siempre se empezará con el numero 0, que indica el inicio de la escala.

    <code>
    Breakpoint:           0            400px     600px      800px      1050px
                ├───────────────────┼─────────┼─────────┼───────────┼─────────>
    Slice #   :           0              1         2          3          4
    </code>

Para entender cómo funciona rupture, se explica con la siguiente imagen:

[![rupture](https://frontendlabs.io/wp-content/uploads/2015/02/rupture.png)](https://frontendlabs.io/wp-content/uploads/2015/02/rupture.png)

<table >

<tr >
Slicer usage
Breakpoint equivalent
The resulting media query
</tr>

<tbody >
<tr >

<td >at(1)
</td>

<td >breakpoint(401px 600px)
</td>

<td >(min-width: 401px) and (max-width: 600px)
</td>
</tr>
<tr >

<td >from(1)
</td>

<td >breakpoint(401px)
</td>

<td >(min-width: 401px)
</td>
</tr>
<tr >

<td >to(1)
</td>

<td >breakpoint(max-width 600px)
</td>

<td >(max-width: 600px)
</td>
</tr>
<tr >

<td >between(1, 3)
</td>

<td >breakpoint(401px 1050px)
</td>

<td >(min-width: 401px) and (max-width: 1050px)
</td>
</tr>
</tbody>
</table>
Tener en cuenta que la medidas de mobile(), tablet(), desktop(), hd() marcadas de color naranja son definidas por defecto con Rupture y pueden ser modificadas según como usted desee.

## Los mixins:

**+above(medida)**
Cuando el tamaño de la pantalla está por encima de la medida proporcionada, los estilos en el bloque tendrán efecto.

**+from-width(medida)**
Alias ​​de **above**. Los estilos tendrán efecto desde la medida proporcionada y por encima.

**+below(medida)**
Cuando el tamaño de la pantalla está por debajo de la medida prevista , los estilos en el bloque tendrán efecto.

**+to-width(medida)**
Alias ​​de **below**. Los estilos tendrán efecto desde cero hasta la medida proporcionada .

**+between(medida, medida)**
Cuando el tamaño de la pantalla esté entre las dos medidas proporcionadas, los estilos en el bloque tendrán efecto.

**+at(medida)**
Previsto para el uso de las medidas de escala, cuando el tamaño de la pantalla esté entre la escala proporcionada y la de abajo, los estilos en el bloque tendrán efecto.

**+mobile()**
Cuando el tamaño de la pantalla es de 400px (definido por rupture.mobile-cutoff ) o menos, los estilos en el bloque tendrán efecto.

**+tablet()**
Cuando el tamaño de la pantalla es de entre 1050px (definido por rupture.desktop-cutoff ) y 400px (definido por mobile-cutoff ), los estilos en el bloque tendrán efecto.

**+desktop()**
Cuando el tamaño de la pantalla es de 1050px (definido por rupture.desktop-cutoff ) o más, los estilos en el bloque tendrán efecto.

**+hd()**
Cuando el tamaño de la pantalla es de 1800px (definido por rupture.hd-cutoff) o más , los estilos en el bloque tendrán efecto.

**+density(valor)**
Cuando el dispositivo tiene una densidad de píxeles de al menos el valor dado, los estilos en el bloque tendrán efecto. El valor debe ser un número sin unidades en pixeles tal como (1), (1,5) ó (2). El valor también puede ser retina, en cuyo caso se utilizará la variable rupture.retina-density.

**+retina()**
Cuando el dispositivo tiene una densidad de píxeles de más de rupture.retina-density (por defecto 1.5), los estilos en el bloque tendrán efecto.

**+landscape()**
Cuando la ventana es más ancha que el alto, los estilos en el bloque tendrán efecto. También puede pasar como: **+tablet(orientation: landscape)**

**+portrait()**
Cuando la ventana es más alto que el ancho, los estilos en el bloque tendrán efecto. También puede pasar como: **+mobile(orientation: portrait)**

---

### Instalando rupture

Debemos crear una carpeta para nuestro proyecto e instalar Rupture por medio de la consola.

    <code>
    npm install rupture
    </code>

Si no tenemos instalado [stylus](http://learnboost.github.io/stylus/), debemos ejecutar lo siguiente.

    <code>
    npm install stylus -g
    </code>

Luego de instalar las dependencias, tenemos que compilar y para ello creamos un archivo llamado config.js. Con este pequeño script implementado en NodeJS podemos compilar un archivo stylus usando la librería Rupture. Tomando de referencia la [ejecución de la API de JavaScript para stylus](http://learnboost.github.io/stylus/docs/js.html).

    <code>
    var fs = require('fs'),
        stylus = require('stylus'),
        rupture = require('rupture');

    var generateFile = function(outputCode){
        fs.writeFile("example.css", outputCode, function(err) {
            if (err) return console.error(err);
        });
    }

    stylus(fs.readFileSync('example.styl', 'utf8'))
        .use(rupture())
        .render(function(err, css){
            if (err) return console.error(err);
            generateFile(css);
        });
    </code>

Además podemos compilar Stylus con rupture con una tarea en [Glupjs](https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos)

    <code><span class="pl-s">var</span> gulp <span class="pl-k">=</span> <span class="pl-s3">require</span>(<span class="pl-s1"><span class="pl-pds">'</span>gulp<span class="pl-pds">'</span></span>),
        stylus = require('gulp-stylus'),
        rupture <span class="pl-k">=</span> <span class="pl-s3">require</span>(<span class="pl-s1"><span class="pl-pds">'</span>rupture<span class="pl-pds">'</span></span>);

    gulp.task('css',function(){
        gulp.src('proyecto/stylus/*.styl')
        .pipe(stylus({use:[rupture()]}))
        .pipe(gulp.dest('proyecto/css'));
    });

    </code>

Creamos un archivo stylus de nombre example.styl, donde se pondrá el siguiente código:

    <code>
    .columna
        color green
        +mobile()
            color red
    </code>

Por último, para compilar nuestro archivo stylus tendremos que poner en la consola:

    <code>
    node config.js
    </code>

Con esto creará un archivo css llamado example.css donde nos mostrará lo compilado:

    <code>
    .columna {
      color: #008000;
    }
    @media only screen and (max-width: 400px) {
      .columna {
        color: #f00;
      }
    }
    </code>

#### La estructura de carpetas del proyecto quedaría como la siguiente:

[![Screenshot Editor](https://frontendlabs.io/wp-content/uploads/2015/02/Screenshot-Editor.png)](https://frontendlabs.io/wp-content/uploads/2015/02/Screenshot-Editor.png)

**Debemos tener en cuenta que podemos integrar la librería Rupture con un procesador de tareas automatizadas como [Gulp](https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos) y con su plugin [gulp-stylus](https://github.com/stevelacy/gulp-stylus), esto nos permitirá usar [escuchadores o watchers](https://github.com/floatdrop/gulp-watch) para cualquier cambio en nuestros archivos stylus.**
