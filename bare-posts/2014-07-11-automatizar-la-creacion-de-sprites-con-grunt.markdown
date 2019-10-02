---
author: anareyna
comments: true
date: 2014-07-11 20:47:13+00:00
layout: post
link: https://frontendlabs.io/889--automatizar-la-creacion-de-sprites-con-grunt
slug: automatizar-la-creacion-de-sprites-con-grunt
title: "Automatizar la creación de sprites con Grunt "
wordpress_id: 889
categories:
  - Automatización
  - Css
tags:
  - Automatización
  - Código
  - CSS3
  - Grunt
  - HTML5
  - Nodejs
  - Stylus
---

## ¿Por qué usar sprites en nuestro proyecto?

Si combinamos varias imágenes pequeñas en una grande, el navegador requerirá menos conexiones al servidor, se ahorran bytes en cada petición y dependiendo del nivel de optimización del sprite, esto puede llevarnos a ahorrar una gran cantidad de ancho de banda.

Este es el sprite que utiliza [Pinterest](http://pinterest.com).

![webapp-desktop-main-1x.356df158](https://frontendlabs.io/wp-content/uploads/2014/06/webapp-desktop-main-1x.356df158.png)

Imaginemos que necesitamos agregar una nueva imagen en ese sprite y reordenar las otras que se encuentran alrededor, tendríamos que recalcular las posiciones de los estilos para cada imagen en nuestra hoja de estilos...

¡Seguro que a nadie le gustaría tener que mantener manualmente un sprite así!...

Es por eso que vamos a aprender a automatizar este proceso con la ayuda de Grunt, si no lo tienes  instalado no te preocupes que tenemos un tutorial de uso básico en [este post](https://frontendlabs.io/146--gruntjs-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos).

La tarea en Grunt a usar es la de **grunt-spritesmith**, para ver su documentación puedes visitar el repositorio en Github [https://github.com/Ensighten/grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith)

Ahora vamos a armar la estructura de archivos para empezar a crear el sprite de nuestro proyecto:

[![Captura de pantalla 2014-06-26 a la(s) 17.29.52](https://frontendlabs.io/wp-content/uploads/2014/06/Captura-de-pantalla-2014-06-26-a-las-17.29.52.png)](https://frontendlabs.io/wp-content/uploads/2014/06/Captura-de-pantalla-2014-06-26-a-las-17.29.52.png)Dentro de mi-proyecto tenemos las carpetas css (en donde se creará automáticamente la hoja de estilos) y la carpeta img que a su vez contiene la carpeta sprites en donde guardaremos todos los iconos independientes que se unirán más adelante. (Para mantener este ejemplo básico solo se trabajará con imágenes de extensión .png)

El contenido de package.json es el siguiente:

[code lang="javascript"]
{
"name": "mi-proyecto",
"version": "0.1.0",
"devDependencies": {
"grunt": "~0.4.5",
"grunt-spritesmith": "^2.1.0"
}
}
[/code]

y el de Gruntfile.js es:

[code lang="javascript"]

module.exports = function(grunt) {
grunt.initConfig({
sprite:{
all: {
src: 'img/sprites/\*.png',
destImg: 'img/spritesheet.png',
destCSS: 'css/sprites.css',
algorithm: 'binary-tree'
}
}
});

// Cargar tarea
grunt.loadNpmTasks('grunt-spritesmith');
};

[/code]

Luego en terminal nos ubicamos en la raíz de nuestro proyecto y ponemos la línea

[code lang="javascript"]
npm install
[/code]

Nos quedaría de la siguiente manera:

![Captura de pantalla 2014-06-26 a la(s) 17.19.51](https://frontendlabs.io/wp-content/uploads/2014/07/Captura-de-pantalla-2014-06-26-a-las-17.19.51.png)

Al presionar enter, ésto creará una nueva carpeta node_modules en donde se descargarán las dependencias que son leídas del archivo package.json

![Captura de pantalla 2014-06-26 a la(s) 17.21.48](https://frontendlabs.io/wp-content/uploads/2014/07/Captura-de-pantalla-2014-06-26-a-las-17.21.48.png)

Después ejecutar la tarea grunt sprite
![Captura de pantalla 2014-06-26 a la(s) 17.22.15](https://frontendlabs.io/wp-content/uploads/2014/07/Captura-de-pantalla-2014-06-26-a-las-17.22.15.png)

![Captura de pantalla 2014-06-26 a la(s) 17.22.37](https://frontendlabs.io/wp-content/uploads/2014/07/Captura-de-pantalla-2014-06-26-a-las-17.22.37.png)

Esto creará el archivo spritesheet.png y sprites.css en las rutas especificadas anteriormente:

![Captura de pantalla 2014-06-26 a la(s) 17.23.13](https://frontendlabs.io/wp-content/uploads/2014/07/Captura-de-pantalla-2014-06-26-a-las-17.23.13.png)

![Captura de pantalla 2014-06-26 a la(s) 17.23.26](https://frontendlabs.io/wp-content/uploads/2014/07/Captura-de-pantalla-2014-06-26-a-las-17.23.26.png)

Los estilos generados y listos para usar se encontrarán en sprite.css

[code lang="css"]
/\*
Icon classes can be used entirely standalone. They are named after their original file names.

```html
<i class="icon-home"></i>
```

\*/
.icon-ico_alert {
background-image: url(../img/spritesheet.png);
background-position: -93px 0px;
width: 21px;
height: 18px;
}
.icon-ico_check {
background-image: url(../img/spritesheet.png);
background-position: 0px 0px;
width: 65px;
height: 60px;
}
.icon-ico_fb {
background-image: url(../img/spritesheet.png);
background-position: -65px 0px;
width: 28px;
height: 28px;
}
.icon-ico_google {
background-image: url(../img/spritesheet.png);
background-position: -65px -28px;
width: 28px;
height: 28px;
}
.icon-ico_mail {
background-image: url(../img/spritesheet.png);
background-position: 0px -60px;
width: 28px;
height: 28px;
}
.icon-ico_time {
background-image: url(../img/spritesheet.png);
background-position: -28px -60px;
width: 28px;
height: 28px;
}
.icon-ico_twitter {
background-image: url(../img/spritesheet.png);
background-position: -56px -60px;
width: 28px;
height: 28px;
}
[/code]

## ¿Utilizas Preprocesadores?

Tenemos también la opción de generar nuestros estilos en distintos formatos (CSS, SASS, SCSS, LESS, Stylus).

Para generar el archivo de estilos en [Stylus](http://learnboost.github.io/stylus/), cambiamos la línea 7 de Gruntfile.js por la siguiente:

[code lang="javascript"]
destCSS: 'css/sprites.styl',
[/code]

Y ejecutamos nuevamente la tarea grunt sprite
![Captura de pantalla 2014-06-26 a la(s) 17.22.15](https://frontendlabs.io/wp-content/uploads/2014/07/Captura-de-pantalla-2014-06-26-a-las-17.22.15.png)

Eso creará un conjunto de mixins en sprites.styl con todas las variables necesarias para ser utilizadas con un simple nombre, por ejemplo:

[code lang="javascript"]
.icoFacebook
sprite(\$ico_fb) // el nombre de la imagen es el mismo "ico_fb.png"
display: inline-block
[/code]

Lo cual compila en css a:

[code lang="css"]
.icoFacebook {
background-image: url("../img/spritesheet.png");
background-position: -65px 0px;
width: 28px;
height: 28px;
display: inline-block;
}
[/code]

Debemos tener en cuenta que los nombres de las variables generadas en el archivo sprites.styl son los mismos nombres que los archivos .png que se encuentran en la ruta img/sprite.
