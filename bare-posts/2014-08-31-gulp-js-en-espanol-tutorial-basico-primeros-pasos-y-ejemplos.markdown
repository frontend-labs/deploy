---
author: jansanchez
comments: true
date: 2014-08-31 21:53:43+00:00
layout: post
link: https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos
slug: gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos
title: Gulp.js en español - tutorial básico y primeros pasos
wordpress_id: 1669
categories:
  - Automatización
tags:
  - brunch
  - Grunt
  - Gulp
  - Javascript
  - Jshint
  - mimosa
  - Nodejs
  - React js
  - UglifyJS
---

En este artículo, vamos a aprender a utilizar Gulp.js para mejorar y acelerar nuestro flujo de trabajo al desarrollar y tratar de entender su funcionamiento.

## ¿Qué es Gulp.js?

Gulp.js es un build system(sistema de construcción) que permite automatizar tareas comunes de desarrollo, tales como la minificación de código JavaScript, recarga del navegador, compresión de imágenes, validación de sintaxis de código y un sin fin de tareas más.

Como verás no importa si eres un desarrollador Front-End, Back-End ó los dos a la vez. Si hoy en día no quieres perder tiempo realizando tareas comunes "manualmente", es momento de que aprendas a usar un automatizador como Gulp.js.

Adicionalmente Gulp.js está construído con Javascript, funciona sobre Node.js y es Open Source, así que su código fuente lo puedes encontrar en [github](https://github.com/gulpjs/gulp/).

## ¿Por qué te debería interesar usar Gulp.js?

Porque hoy en día el flujo de trabajo de un desarrollador se ha vuelto más complejo, usamos muchas herramientas de desarrollo, por lo cual configurar cada tarea y ejecutarla "manualmente" y por separado requiere demasiado tiempo.

Porque Gulp.js no sólo soluciona este problema sino que le aporta mejoras, convirtiendose en una herramienta que tiene prácticamente todo en uno, así mismo nos permite administrar y controlar todas esas tareas en un solo lugar.

Porque Gulp.js prefiere el **código sobre la configuración**, esto no sólo lo hace muy fácil para escribir tareas, sino también lo hace más simple de leer y mantener.

Porque Gulp.js tiene directrices estrictas para la creación de sus plugins, lo cual asegura que estos sean simples y que funcionen como se espera.

Solo por mencionarlo, una de las directrices es la siguiente: **"Un plugin sólo debe hacer una cosa y hacerla bien"**. Esta directriz ha sido muy positiva para los usuarios de Gulp.js, lo comprobaremos más adelante cuando veamos como configurar una tarea con Gulp.js.

## ¿Cómo funciona Gulp.js?

Gulp.js utiliza el [módulo Stream de Node.js](http://nodejs.org/api/stream.html), lo cual lo hace más rápido para construir, a diferencia de Grunt.js.

Gulp.js no necesita escribir archivos y/o carpetas temporales en el disco duro, lo cual supone que realizará las mismas tareas que [Grunt.js](https://frontendlabs.io/146--gruntjs-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos) pero en menor tiempo.

Gulp.js utiliza el método pipe(), este método obtiene todos los datos de un Stream legible(readable) y lo escribe en destino que le indiquemos ó de lo contrario lo entrega o sirve hacia otro pipe.

En la siguiente imagen veremos como **Grunt.js** manipula los archivos al realizar sus tareas:

![grunt-file-manipulation](https://frontendlabs.io/wp-content/uploads/2014/08/grunt-file-manipulation.png)

Y en esta veremos como **Gulp.js** manipula los archivos al realizar sus tareas:

![gulp-file-manipulation](https://frontendlabs.io/wp-content/uploads/2014/08/gulp-file-manipulation.png)

Como podemos ver, aunque los 2 hicieron la misma tarea **Gulp.js** no escribió archivos temporales en el disco duro. Gulp.js realizó 4 operaciones y en cambio Grunt.js realizó 8 operaciones.

Gulp.js utiliza el poder del paquete Node.js [vinyl-fs](https://github.com/wearefractal/vinyl-fs) para leer y escribir Streams.

Gulp.js también utiliza un paquete Node.js para la secuenciación, ejecución de tareas y dependencias en máxima concurrencia, llamado [Orchestrator](https://github.com/orchestrator/orchestrator).

Más adelante veremos con mayor detalle como trabajan los Streams de Node.js.

## ¿Cómo instalar Gulp.js?

Para instalar Gulp.js el único requisito es tener instalado [Node.js](http://nodejs.org/). si usas Linux Ubuntu y aún no lo tienes instalado este [post](https://frontendlabs.io/232--como-instalar-nodejs-debian-linux) te puede servir.

### Instalando Gulp.js de forma global en nuestro sistema

    <code>
    npm install -g gulp
    </code>

Si estás usando Linux o Mac, tal vez necesites anteponer la palabra sudo para poder ejecutar este comando con los permisos de administrador, así:

    <code>
    sudo npm install -g gulp
    </code>

Verificamos que Gulp.js ha sido instalado correctamente.

    <code>
    gulp -v
    </code>

Si lo tenemos instalado correctamente, nos mostrará lo siguiente:

    <code>
    CLI version 3.8.6
    Local version undefined
    </code>

Donde **CLI version** es la versión de Gulp.js instalada en nuestro sistema y **Local version** es la versión de Gulp.js instalada en nuestro proyecto local, pero como aún no hemos creado nuestro proyecto nos saldrá undefined.

## ¿Cómo usar Gulp.js?

Una vez instalado en nuestro sistema estamos listos para crear nuestro primer proyecto usando Gulp.js, nuestro pequeño proyecto concatenará dos archivos .js en uno solo y luego lo minificará. Así que configuraremos 2 tareas(concatenar y minificar), todo esto contenido en una tarea llamada "demo".

Creamos una carpeta llamada: gulp-primeros-pasos, ingresamos a esa carpeta mediante terminal.

Luego allí dentro creamos nuestro archivo: gulpfile.js, que es el archivo que Gulp.js necesita para saber que tareas realizará y de momento no le podremos ningún contenido.

Luego escribimos lo siguiente(en este punto suponemos que tenemos instalado Node.js):

    <code>
    npm init
    </code>

Npm nos pedirá los datos de nuestro proyecto, ya que en esta ocasión sólo estamos haciendo un demo. Simplemente presionaremos Enter a todas las preguntas.

Con esto, Npm nos debe haber creado un archivo llamado: package.json, que contendrá algo parecido a lo siguiente:

    <code>
    {
      "name": "gulp-primeros-pasos",
      "version": "0.0.1",
      "description": "Gulp: Primeros pasos",
      "main": "gulpfile.js",
      "author": "jansanchez",
      "license": "MIT"
    }
    </code>

Ahora agregaremos las dependencias de desarrollo a nuestro proyecto, la primera a instalar será: **gulp**, así que escribimos lo siguiente en nuestra terminal:

    <code>
    npm install --save-dev gulp
    </code>

Luego instalamos: [gulp-concat](https://www.npmjs.org/package/gulp-concat)

    <code>
    npm install --save-dev gulp-concat
    </code>

Y finalmente instalamos: [gulp-uglify](https://www.npmjs.org/package/gulp-uglify)

    <code>
    npm install --save-dev gulp-uglify
    </code>

Tengamos en cuenta que sí no agregamos el parámetro: --save-dev, entonces Npm no agregará este paquete como una dependencia de desarrollo de nuestro proyecto y mucho menos lo agregará a nuestro archivo package.json.

Como podremos observar, nuestro archivo package.json a cambiado y debería contener algo parecido a lo siguiente:

    <code>
    {
      "name": "gulp-primeros-pasos",
      "version": "0.0.1",
      "description": "Gulp: Primeros pasos",
      "main": "gulpfile.js",
      "author": "jansanchez",
      "license": "MIT",
      "devDependencies": {
        "gulp": "^3.8.7",
        "gulp-concat": "^2.3.4",
        "gulp-uglify": "^0.3.1"
      }
    }
    </code>

Como vemos, se agregó la clave devDependencies y en su interior se comienzan a guardar nuestras dependencias de desarrollo y la versión que hemos instalado localmente.

Luego vamos a crear las siguientes carpetas y archivos:

Creamos la carpeta js y dentro de esta carpeta crearemos la carpeta source.

Dentro de la carpeta source crearemos el archivo 1.js y le agregaremos el siguiente contenido:

    <code>
    // contenido del archivo 1.js

    var sumar = function (a, b){
      return a + b;
    };
    </code>

Nuevamente dentro de la carpeta source crearemos el archivo 2.js y le agregaremos el siguiente contenido:

    <code>
    // contenido del archivo 2.js

    var restar = function (a, b){
      return a - b;
    };
    </code>

Ahora vamos a poner el siguiente contenido a nuestro archivo gulpfile.js:

    <code>
    /*
    * Dependencias
    */
    var gulp = require('gulp'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify');

    /*
    * Configuración de la tarea 'demo'
    */
    gulp.task('demo', function () {
      gulp.src('js/source/*.js')
      .pipe(concat('todo.js'))
      .pipe(uglify())
      .pipe(gulp.dest('js/build/'))
    });
    </code>

Con esto ya tenemos todo configurado, así que para ponerlo a prueba en nuestra terminal escribimos lo siguiente:

    <code>
    gulp demo
    </code>

Y si todo anda bien, nos dará el siguiente mensaje:

    <code>
    [11:23:09] Using gulpfile ~/htdocs/gulp-primeros-pasos/gulpfile.js
    [11:23:09] Starting 'demo'...
    [11:23:09] Finished 'demo' after 9 ms
    </code>

El cual nos indica que la tarea **demo** se ejecutó con éxito en 9 milisegundos.

Para comprobar si se ejecutaron las 2 tareas requeridas, nos dirigimos a la carpeta js/build y abrimos el archivo todo.js y nos debe mostrar el siguiente contenido:

    <code>
    var sumar=function(r,n){return r+n},restar=function(r,n){return r-n};
    </code>

Como vemos, con unas simples y limpias lineas de código hemos realizado 2 tareas de desarrollo comunes(concatenar y minificar archivos .js).

Para esto usamos 2 plugins de Gulp.js, la buena noticia es que actualmente existen más de 1800 plugins para Gulp.js, así que imagínate todo lo que puedes automatizar en tu flujo de trabajo con Gulp.js.

## Analizando el gulpfile.js

Ahora vamos a analizar el código que escribimos en nuestro gulpfile.js para entender un
poco más como funciona Gulp.js.

Primero para llevar a cabo las tareas que deseamos, requerimos los siguientes paquetes: gulp, gulp-concat y gulp-uglify, así:

    <code>
    /*
    * Dependencias
    */
    var gulp = require('gulp'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify');
    </code>

## API

Gulp.js tiene una pequeña API, esto te permitirá aprender Gulp.js rápidamente.

### gulp.task()

Con el método gulp.task() definimos una tarea, este método toma 3 argumentos: **el nombre de la tarea**, **la ó las tareas de las que depende esta tarea** y **la función que ejecutará al llamar esta tarea**.

En nuestro ejemplo sólo usamos 2 parámetros: el nombre y la función, así:

    <code>
    /*
    * Configuración de la tarea 'demo'
    */
    gulp.task('demo', function () {
      // Contenido de la tarea 'demo'
    });
    </code>

Con lo cual declaramos "demo" como nombre de la tarea y dentro escribimos lo que deseamos que haga nuestra tarea.

Así que si queremos llamar esta tarea tan solo escribimos en nuestra terminal:

    <code>
    gulp demo
    </code>

#### Lista de tareas

Una tarea también puede actuar como una lista de tareas, supongamos que queremos definir una tarea que corra otras 3 tareas por ejemplo: **imágenes**, **css** y **js**. Entonces escribiríamos lo siguiente:

    <code>
    gulp.task('estaticos', ['imagenes', 'css', 'js']);
    </code>

Lo que quiere decir que al ejecutar la tarea "estaticos" con el comando gulp estaticos se ejecutarán estas 3 tareas.

El detalle es que estas tareas correran asíncronamente, osea que correrán todas juntas al mismo tiempo sin ningún orden de ejecución.

#### Tareas como dependencia

Si deseamos que una tarea se ejecute **sí y solo sí** otra tarea haya terminado antes, entonces podemos hacer lo siguiente:

    <code>
    gulp.task('css', ['imagenes'], function () {
      /*
      * Aquí iría el contenido de mi tarea 'css'
      * Que se ejecutará solo cuando la tarea
      * 'imagenes' haya terminado.
      */
    });
    </code>

Entonces, cuando corramos la tarea "css", Gulp.js ejecutará primero la tarea "imagenes", esperará a que esta tarea termine y luego recién ejecutará la tarea "css".

#### Tarea por defecto(default)

Gulp.js nos permite definir una tarea por defecto, que corra tan solo al escribir el comando gulp. Esto se puede hacer tan solo poniendole a la tarea el nombre de default, así:

    <code>
    gulp.task('default', function () {
      /*
      * Código de nuestra tarea por defecto.
      */
    });
    </code>

Y claro, también puedes hacer que tu tarea por defecto sea una lista de tareas, así:

    <code>
    gulp.task('default', ['css', 'js']);
    </code>

Esta tarea ejecutará las tarea 'css' y 'js', tan solo escribiendo en nuestra terminal:

    <code>
    gulp
    </code>

### gulp.src()

El método gulp.src() toma como parámetro un valor **glob** es decir, una cadena que coincida con uno o más archivos usando los patrones que usa el intérprete de comandos de unix(shell) y retorna un stream que puede ser "pipeado" a un plugin adicional ó hacia el método gulp.dest().

Este parámetro puede ser una cadena o una colección(Array) de valores glob.

Gulp.js usa el paquete de Node.js [node-glob](https://github.com/isaacs/node-glob) para obtener los archivos especificados en él ó los globs ingresados.

#### Ejemplos de globs

- js/source/1.js coincide exactamente con el archivo.

* js/source/\*.js coincide con los archivos que terminen en .js dentro de la carpeta js/source.

- js/\*_/_.js coincide con los archivos que terminen en .js dentro de la carpeta js y dentro de todas sus sub-carpetas.

* !js/source/3.js Excluye especificamente el archivo 3.js.

- static/\*.+(js|css) coincide con los archivos que terminen en .js ó .css dentro de la carpeta static/

Existen más patrones, los puedes revisar desde la documentación de la librería [minimatch](https://github.com/isaacs/minimatch).

Así que tienes la oportunidad de realizar todas las combinaciones posibles, según lo necesites.

Como en nuestra demo, necesitabamos encontrar todos los archivos que terminen en .js dentro de la carpeta js/source, así:

    <code>
    gulp.src('js/source/*.js')
    </code>

Cada vez que Gulp.js encuentre un archivo que coincida con nuestro patrón, lo irá metiendo dentro de un Stream, que será como una colección de archivos. Claro, respetando las propiedades de cada archivo(ruta, etc).

Entonces podemos decir que tendremos todos esos archivos con sus respectivas propiedades dentro de un Stream, Este Stream puede ser manipulado por Gulp.js.

#### el método pipe() de Node.js

El método pipe() puede leer, ayudar a transformar y grabar los datos de un Stream.

Es por eso que en nuestro ejemplo usamos el método pipe() 3 veces.

La primera vez lo usamos para leer el Stream y se lo pasamos al plugin "concat" para que este realize la concatenación y así transforme los datos del Stream, así:

    <code>
    .pipe(concat('todo.js'))
    </code>

La segunda vez lo usamos para leer los datos actuales(js concatenado) y se lo pasamos al plugin "uglify", para que realize la minificación del archivo concatenado. Todo esto sin escribir en el disco ningún archivo temporal, así:

    <code>
    .pipe(uglify())
    </code>

La tercera vez se lo pasamos a el método gulp.dest(), así que veamos que hace este método.

### gulp.dest()

Canaliza y escribe archivos desde un Stream, por lo que puede canalizar a varias carpetas. Creará las carpetas que no existan y retornará el Stream, por si deseamos realizar alguna acción más.

En pocas palabras, sirve para escribir los datos actuales de un Stream.

Y en nuestro ejemplo lo usamos así:

    <code>
    .pipe(gulp.dest('js/build/'))
    </code>

Con lo cual escribimos los datos resultantes del Stream dentro de la carpeta js/build/.

El código final nos quedó así:

    <code>
    /*
    * Dependencias
    */
    var gulp = require('gulp'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify');

    /*
    * Configuración de la tarea 'demo'
    */
    gulp.task('demo', function () {
      gulp.src('js/source/*.js')
      .pipe(concat('todo.js'))
      .pipe(uglify())
      .pipe(gulp.dest('js/build/'))
    });
    </code>

Así como realizé 2 tareas consecutivas, con Gulp.js se pueden realizar muchas más.

### gulp.watch()

Ver archivos y hacer algo cuando se modifique un archivo. Esto siempre devuelve un EventEmitter que emite los eventos de cambio.

Tiene 2 formas de usar:

gulp.watch(glob, tareas) ó gulp.watch(glob, callback).

    <code>
    gulp.watch('js/source/*.js', ['js']);
    </code>

Con lo cual, cada vez que se modifique un archivo .js que se encuentre dentro de la carpeta js/source/ automáticamente se ejecutará la tarea js.

    <code>
    gulp.watch('js/source/*.js', function(){
      /*
      * Aquí iría el código de la acción que deseas realizar,
      * Cuando hayan cambios en dichos archivos.
      *
      * También podrías ejecutar una tarea mediante el método
      * gulp.start('js')
      *
      * Pero este método no es oficial, le pertenece al
      * paquete 'Orchestrator' ya que Gulp hereda los
      * métodos de 'Orchestrator'.
      */
    });
    </code>

Con esto ya podemos usar el API de Gulp.js con mucha facilidad.

## Plugins

Como dije anteriormente Gulp.js tiene alrededor de 1800 plugins "oficiales" y otros cuantos no-oficiales, los plugins "oficiales" los puedes encontrar en la [página de plugins](http://gulpjs.com/plugins/) de Gulp.js o buscando con la palabra clave gulpplugin en [npm](https://www.npmjs.org/).

Actualmente existen plugins para casí todo lo que se necesita al desarrollar, si deseas puedes pasar por nuestro post sobre los [plugins](https://frontendlabs.io/1752--gulp-js-plugins-como-configurar-tareas) más usados de Gulp.js y sus configuraciones básicas.

La mayoría de los plugins son bastante fáciles de usar, tienen una buena documentación y se ejecutan de la misma forma (mediante la canalización de un Stream de objetos de archivo). Estos plugins normalmente modifican los archivos (aunque algunos, como validadores, no lo harán) y devuelven los archivos nuevos que se pasarán al siguiente plugin en un Stream.

Por ejemplo digamos que en ejemplo que teníamos quiero agregarle la funcionalidad de validación de sintaxis, entonces haríamos lo siguiente:

    <code>
    npm install --save-dev gulp-jshint
    </code>

Y luego nuestro gulpfile.js quedaría así:

    <code>
    /*
    * Dependencias
    */
    var gulp = require('gulp'),
      jshint = require('gulp-jshint'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify');

    /*
    * Configuración de la tarea 'demo'
    */
    gulp.task('demo', function () {
      gulp.src('js/source/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('todo.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/build/'))
    });
    </code>

Solo agregé 3 lineas especificas a mi gulpfile.js y ya estoy realizando otra tarea más sobre los mismos archivos, es por eso que es más simple que Grunt.js, donde no puedes codificar sino que tienes que poner en el objeto JSON tu configuración, lo cual te limita mucho y hace que generes un archivo de configuración muy grande y siempre llega a verse muy desordenado.

Dejo en [github](https://github.com/jansanchez/gulp-primeros-pasos) el repositorio del ejemplo que trabajamos en este artículo.

## Sobre los Pipes en unix

Para entender aun más el proceso Gulp.js a continuación veamos como funcionan los pipes en Unix.

En unix, los comandos bash pueden "pipear" o "canalizar" la salida de otro comando bash, permitiendo operar esa información antes de ser devuelta, veamos un ejemplo práctico.

Por ejemplo si deseamos averiguar nuestra MAC address en unix ejecutamos el siguiente comando:

    <code>
    ifconfig
    </code>

Lo cual nos devuelve toda esta información:

    <code>
    eth0
      inet addr:192.111.77.27  Bcast:192.111.77.255
      Link encap:Ethernet  HWaddr 00:1b:00:bb:1c:ab
      Mask:255.255.255.0 Scope:Link
      collisions:0 txqueuelen:1000
    </code>

Pero nosotros no queremos toda esa información, sino solamente nuestra MAC address, entonces aquí podemos utilizar el poder de los pipes para lograr esto con el siguiente código.

    <code>
    ifconfig | grep "HWaddr"
    </code>

Ahora sí obtuvimos especificamente lo que necesitabamos:

    <code>
    HWaddr 00:1b:00:bb:1c:ab Link encap:Ethernet
    </code>

### Aclaraciones

- El comando ifconfig, nos devuelve toda la información de red en nuestro ordenador.

* El comando grep, busca las líneas que contengan una coincidencia con un patrón que le pasemos.

- pipe = |

### Explicación del proceso

El proceso fue el siguiente:

1. El comando ifconfig generó una respuesta.

2) Antes que sea escrita "canalizamos" esa respuesta usando un pipe.

3. A esa respuesta le aplicamos el comando grep con el patrón: "HWaddr".

4) Y finalmente nos devuelve sólo la MAC address.

Todo esto se hizo directamente sobre la respuesta inicial y sin almacenarla, ni escribirla en disco de manera temporal.

De la misma forma trabaja Gulp.js, canalizando el stream resultante de una función o plugin y pasando esa respuesta para ser operada por una nueva función y así sucesivamente.

## ¿Existen otros sistemas de construcción hechos con Javascript?

Claro que sí, a continuación listaré los que me parecen más interesantes:

- [Mimosa](http://mimosa.io/) (2014).

* [Broccoli](https://github.com/joliss/broccoli) (2014).

- [Bud](https://github.com/azer/bud) (2013).

* [Simplebuild](https://github.com/jamesshore/simplebuild) (2013).

- [Gruntjs](http://gruntjs.com/) (2012 ).

* [Brunch](http://brunch.io/) (2011).

- [NPM](https://www.npmjs.com/) (2009).

Si ya se animaron a usar Gulp.js entonces les recomiendo leer nuestro artículo [Plugins más usados de Gulp.js y sus configuraciones básicas](https://frontendlabs.io/1752--gulp-js-plugins-como-configurar-tareas). Para crear tareas en Gulp.js, comenzar a automatizar sus proyectos y empezar a ahorrar tiempo.

Espero que este artículo les haya servido para conocer Gulp.js, si tienen alguna duda, consulta ó aclaración solo háganla dejando sus comentarios, que estaremos prestos a ayudarlos.

Aquí en Frontend Labs estamos dispuestos a compartir el conocimiento, a enseñar y aprender!.

Si el artículo les gustó, por favor compartanlo en las redes sociales. De esa manera nos ayudan muchísimo! las opciones para compartir se encuentran aquí abajo, muchas gracias.
