---
author: jansanchez
comments: true
date: 2014-10-03 08:03:15+00:00
layout: post
link: https://frontendlabs.io/1752--gulp-js-plugins-como-configurar-tareas
slug: gulp-js-plugins-como-configurar-tareas
title: "Gulp.js: Plugins más usados y sus configuraciones básicas"
wordpress_id: 1752
categories:
  - Automatización
tags:
  - Automatización
  - Coffescript
  - Front-End
  - Grunt
  - Gulp
  - Jade
  - Javascript
  - Nodejs
  - Sass
  - Stylus
---

En nuestro artículo anterior aprendimos [¿Qué es Gulp.js?](https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos) y ¿Cómo funciona?, es por eso que ahora nos enfocaremos en la configuración de tareas comunes mediante los [plugins](http://gulpjs.com/plugins/) que Gulp.js nos ofrece.

A continuación listaremos algunos de los plugins más usados de Gulp.js y sus configuraciones básicas:

## [gulp-concat](https://github.com/wearefractal/gulp-concat)

Plugin de Gulp.js que sirve para concatenar archivos. Concatena archivos usando el salto de línea(newLine) desde el sistema operativo.

Lo instalamos en nuestro proyecto.

    <code>
    npm install --save-dev gulp-concat
    </code>

Luego en nuestro gulpfile.js escribímos lo siguiente:

    <code>
    var gulp = require('gulp'),
        concat = require('gulp-concat');

    gulp.task('concatenar', function() {
        gulp.src(['./lib/1.js', './lib/2.js', './lib/3.js'])
            .pipe(concat('libs.js'))
            .pipe(gulp.dest('./dist/js/'))
    });
    </code>

Y finalmente ejecutamos la tarea concatenar.

    <code>
    gulp concatenar
    </code>

Para cambiar el salto de línea simplemente pasamos un objeto como segundo parámetro, por ejemplo así:

    <code>
    .pipe(concat('libs.js', {newLine: ';'}))
    </code>

Con lo cual concatenaremos los archivos indicados pero en vez de que se separen por un salto de línea, estarán separados por un punto y coma(;).

## [gulp-stylus](https://www.npmjs.org/package/gulp-stylus)

Plugin de Gulp.js que sirve para compilar archivos stylus(.styl) a .css utilizando el API de [Stylus](http://learnboost.github.io/stylus/).

Lo instalamos en nuestro proyecto.

    <code>
    npm install --save-dev gulp-stylus
    </code>

Luego en nuestro gulpfile.js escribímos lo siguiente:

    <code>
    var gulp = require('gulp'),
        stylus = require('gulp-stylus');

    var path = {
        stylus: ['stylus/**/*.styl'],
        css: 'public/css/'
    };

    gulp.task('estilos', function () {
        return gulp.src(path.stylus)
            .pipe(stylus({
                compress: true
            }))
            .pipe(gulp.dest(path.css));
    });
    </code>

Y finalmente ejecutamos la tarea estilos.

    <code>
    gulp estilos
    </code>

Adicionalmente, al plugin le estamos pasando como parámetro un objeto { compress: true } para que comprima el css resultante.

## [gulp-coffee](https://www.npmjs.org/package/gulp-coffee)

Plugin de Gulp.js que sirve para compilar archivos CoffeeScript(.coffee) a .js utilizando [CoffeeScript](http://coffeescript.org/#usage).

Lo instalamos en nuestro proyecto.

    <code>
    npm install --save-dev gulp-coffee
    </code>

Luego en nuestro gulpfile.js escribímos lo siguiente:

    <code>
    var gulp = require('gulp'),
        coffee = require('gulp-coffee');

    var path = {
        coffee: ['coffee/**/*.coffee'],
        js: 'public/js/'
    };

    gulp.task('coffee', function() {
        return gulp.src(path.coffee)
            .pipe(coffee({bare: true}).on('error', function(err){
                console.log(err.name + " en " + err.plugin);
            }))
            .pipe(gulp.dest(path.js));
    });
    </code>

Y finalmente ejecutamos la tarea coffee.

    <code>
    gulp coffee
    </code>

Adicionalmente, al plugin le estamos pasando como parámetro un objeto { bare: true } para que genere código Javascript sin un wrapper(envoltorio) de código.

CoffeeScript emitirá un error para casos en los que la sintaxis de CoffeeScript sea inválida,
es por eso que le agregamos el listener(oyente) .on('error', function(err){ } para poder estar atentos a cualquier fallo al compilar.

Si están interesados en profundizar más sobre CoffeeScript aquí les dejo un enlace bastante interesante sobre [CoffeeScript](http://wiht.link/CoffeeScript).

## [gulp-jade](https://www.npmjs.org/package/gulp-jade)

Plugin de Gulp.js que sirve para compilar plantillas .jade hacia archivos .html utilizando el API de [jade language](https://github.com/visionmedia/jade).

Lo instalamos en nuestro proyecto.

    <code>
    npm install --save-dev gulp-jade
    </code>

Luego en nuestro gulpfile.js escribímos lo siguiente:

    <code>
    var gulp = require('gulp'),
        jade = require('gulp-jade');

    var path = {
        jade: ['jade/**/*.jade'],
        html: 'public/'
    };

    gulp.task('html', function() {
        return gulp.src(path.jade)
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(path.html))
    });
    </code>

Y finalmente ejecutamos la tarea html.

    <code>
    gulp html
    </code>

Adicionalmente al plugin le estamos pasando un objeto { pretty: true } en el que le indicamos que el código HTML generado sea legible y este correctamente tabulado.

Así como la opción pretty, existen otras opciones más. Las puedes encontrar en la documentación oficial del [API de jade language](http://jade-lang.com/api/).

Y si aún tienes dudas sobre algo como ['jade/**/*.jade'] dale una revisada a este [artículo](https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos#glob).

## [gulp-rename](https://www.npmjs.org/package/gulp-rename)

Plugin de Gulp.js que sirve para renombrar archivos, usualmente se utiliza para cambiar extensiones de archivos.

Lo instalamos en nuestro proyecto.

    <code>
    npm install --save-dev gulp-rename
    </code>

Vamos a usar como ejemplo nuestra tarea html, por lo cual en nuestro gulpfile.js escribímos lo siguiente:

    <code>
    var gulp = require('gulp'),
        jade = require('gulp-jade'),
        rename = require('gulp-rename');

    var path = {
        jade: ['jade/**/*.jade'],
        html: 'public/'
    };

    gulp.task('html', function() {
        return gulp.src(path.jade)
        .pipe(jade({
            pretty: true
        }))
        .pipe(rename({extname: '.phtml'}))
        .pipe(gulp.dest(path.html))
    });
    </code>

Y finalmente ejecutamos la tarea html.

    <code>
    gulp html
    </code>

Como necesitamos que nos devuelva archivos con la extensión .phtml, entonces al plugin le pasamos como único parámetro el siguiente objeto: {extname: '.phtml'}.

En el cual le dicemos al plugin que la nueva extensión de los archivos será .phtml.

## [gulp-uglify](https://github.com/terinjokes/gulp-uglify)

Plugin de Gulp.js que sirve para comprimir código JavaScript con [UglifyJS2](https://github.com/mishoo/UglifyJS2).

Lo instalamos en nuestro proyecto.

    <code>
    npm install --save-dev gulp-uglify
    </code>

Luego en nuestro gulpfile.js escribímos lo siguiente:

    <code>
    var gulp = require('gulp'),
        uglify = require('gulp-uglify');

    gulp.task('min', function() {
        return gulp.src('source/scripts/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('dist/scripts/'))
    });
    </code>

Y finalmente ejecutamos la tarea min.

    <code>
    gulp min
    </code>

En nuestro ejemplo, al ejecutar la tarea min, esta comprimirá todos los archivos .js dentro de la carpeta source/scripts/ y los guardará en la carpeta dist/scripts/.

Este plugin tiene más opciones para personalizar la compresión de los archivos y las puedes encontrar [aquí](https://github.com/terinjokes/gulp-uglify#options).

## [gulp-if](https://www.npmjs.org/package/gulp-if)

Plugin de Gulp.js que sirve para controlar condicionalmente el flujo de la ejecución de subtareas.

Lo instalamos en nuestro proyecto.

    <code>
    npm install --save-dev gulp-if
    </code>

Para este ejemplo usaremos la tarea min, así que en nuestro gulpfile.js escribímos lo siguiente:

    <code>
    var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        if = require('gulp-if');

    var comprimir = false;

    gulp.task('min', function() {
        return gulp.src('source/scripts/*.js')
                   .pipe(if(comprimir, uglify()))
                   .pipe(gulp.dest('dist/scripts/'))
    });
    </code>

Y finalmente ejecutamos la tarea min.

    <code>
    gulp min
    </code>

En nuestro ejemplo, al ejecutar la tarea min, esta comprimirá los archivos sólo si la variable comprimir es true, de lo contrario simplemente avanzará hacia la siguiente subtarea.

Si no hay más subtareas sencillamente finalizará la subtarea.

## [gulp-debug](https://www.npmjs.org/package/gulp-debug)

Plugin de Gulp.js que sirve para ver información de archivos formato [vinyl](https://github.com/wearefractal/vinyl)(el formato que tienen los archivos que pasan por el método gulp.src()).

Lo instalamos en nuestro proyecto.

    <code>
    npm install --save-dev gulp-debug
    </code>

Para este ejemplo usaremos la tarea min, así que en nuestro gulpfile.js escribímos lo siguiente:

    <code>
    var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        debug = require('gulp-debug');

    gulp.task('min', function() {
        return gulp.src('source/scripts/*.js')
                   .pipe(debug({verbose: true})
                   .pipe(gulp.dest('dist/scripts/'))
    });
    </code>

Y finalmente ejecutamos la tarea min.

    <code>
    gulp min
    </code>

Le pasamos como único parámetro el siguiente objeto: {verbose: true} para que nos muestre la mayor información posible de cada archivo.

Este plugin es muy útil para poder detectar errores, por ejemplo si una tarea esta fallando, con este plugin realizamos una depuración de la tarea archivo por archivo, esto hará que la tarea se detenga justo en el archivo que nos esta dando problemas y a su vez nos dará toda la información relacionada.

## [gulp-imagemin](https://www.npmjs.org/package/gulp-imagemin)

Plugin de Gulp.js que sirve para minificar imágenes PNG, JPEG, GIF y SVG con [imagemin](https://github.com/imagemin/imagemin).

Lo instalamos en nuestro proyecto.

    <code>
    npm install --save-dev gulp-imagemin
    </code>

En nuestro gulpfile.js escribímos lo siguiente:

    <code>
    var gulp = require('gulp');
    var imagemin = require('gulp-imagemin');

    gulp.task('imagenes', function () {
        return gulp.src(['src/images/*.*'])
            .pipe(imagemin())
            .pipe(gulp.dest('dist/images/'));
    });
    </code>

Y finalmente ejecutamos la tarea imagenes.

    <code>
    gulp imagenes
    </code>

Este plugin tiene más opciones para personalizar la compresión de las imágenes y las puedes encontrar [aquí](https://github.com/sindresorhus/gulp-imagemin#imageminoptions).

## [gulp-minify-css](https://www.npmjs.org/package/gulp-minify-css)

Plugin de Gulp.js que sirve para minificar archivos css con [clean-css](https://github.com/jakubpawlowicz/clean-css).

Lo instalamos en nuestro proyecto.

    <code>
    npm install --save-dev gulp-minify-css
    </code>

En nuestro gulpfile.js escribímos lo siguiente:

    <code>
    var gulp = require('gulp'),
        minifyCSS = require('gulp-minify-css');

    gulp.task('mincss', function() {
        gulp.src('./source/css/*.css')
            .pipe(minifyCSS())
            .pipe(gulp.dest('./dist/css/'))
    });
    </code>

Y finalmente ejecutamos la tarea mincss.

    <code>
    gulp mincss
    </code>

Este plugin tiene más opciones para personalizar la compresión de css, las toma de [clean-css](https://github.com/GoalSmashers/clean-css/) y las puedes encontrar [aquí](https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-programmatically).

## [gulp-rimraf](https://github.com/robrich/gulp-rimraf)

Plugin de Gulp.js que sirve para eliminar archivos, directorios, enlaces simbólicos, etc. Se utiliza generalmente para limpiar las carpetas o archivos que generamos con alguna tarea, como por ejemplo: Javascript compilado desde CoffeeScript.

Lo instalamos en nuestro proyecto.

    <code>
    npm install --save-dev gulp-rimraf
    </code>

Luego en nuestro gulpfile.js escribímos lo siguiente:

    <code>
    var gulp = require('gulp'),
        clean = require('gulp-rimraf');

    gulp.task('limpiar', function() {
        return gulp.src(['../dist/js/*.js'], { read: false })
               .pipe(clean({ force: true }));
    });
    </code>

Y finalmente ejecutamos la tarea limpiar.

    <code>
    gulp limpiar
    </code>

En nuestro ejemplo, al ejecutar la tarea limpiar, esta eliminará todos los archivos .js dentro de la carpeta ../dist/js/

Adicionalmente, al método .src() le pasamos como segundo parámetro { read: false } para que cuando encuentre estos archivos, no los lea. Ya que no queremos perder tiempo leyendolos porque finalmente los borraremos.

Y al plugin le pasamos como único parámetro un objeto { force: true } para que este pueda eliminar archivos fuera del directorio actual de trabajo.

## [gulp.watch](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob-opts-tasks)

gulp.watch() observa cambios en los archivos que le indiquemos y luego nos permite realizar las tareas que deseemos. Como ven este no es un plugin, es parte del API de Gulp.js y es un método muy usado.

Para probarlo en nuestro gulpfile.js escribíremos lo siguiente:

    <code>
    var gulp = require('gulp'),
        path = {},
        jadeTasks = ['html:frontend'],
        coffeeTasks = ['js'],
        stylusTasks = ['styles'];

    path.watch = {
        jade: ['jade/**/*.jade'],
        stylus: ['stylus/**/*.styl'],
        coffee: ['coffee/**/*.coffee']
    };

    gulp.task('watch', function () {

        gulp.watch(path.watch.jade, jadeTasks);
        gulp.watch(path.watch.coffee, coffeeTasks);
        gulp.watch(path.watch.stylus, stylusTasks);
    });

    </code>

Y finalmente ejecutamos la tarea watch.

    <code>
    gulp watch
    </code>

Luego veremos algo parecido a lo siguiente:

    <code>
    [11:17:05] Using gulpfile ~/frontend/gulpfile.js
    [11:17:05] Starting 'watch'...
    [11:17:05] Finished 'watch' after 126 ms
    </code>

Con lo cual veremos Gulp.js se quedará observando si existe algún cambio y apenas lo hagamos se ejecutarán las tareas que le indiquemos.

    <code>
    [11:32:13] Starting 'js'...
    [11:32:15] Finished 'js' after 1.36 s
    </code>

Es muy probable que una vez que empiezes a usar este método, no lo dejes de usar nunca más!.

Si continuamos listando todos los plugins de Gulp.js esta lista sería muy grande ya que actualmente existen alrededor de 780 plugins oficiales de Gulp.js tales como [gulp-minify-css](https://www.npmjs.org/package/gulp-minify-css), [gulp-jshint](https://www.npmjs.org/package/gulp-jshint), [gulp.spritesmith](https://www.npmjs.org/package/gulp-spritesmith), [gulp-connect](https://www.npmjs.org/package/gulp-connect), [gulp-zip](https://github.com/sindresorhus/gulp-zip), [run-sequence](https://www.npmjs.org/package/run-sequence), [gulp-load-plugins](https://www.npmjs.org/package/gulp-load-plugins), [gulp-bump](https://www.npmjs.org/package/gulp-bump) y muchos [plugins](http://gulpjs.com/plugins/) más.

Estoy seguro que este artículo le servirá a más de uno para comenzar a programar sus tareas con Gulp.js, hasta la próxima.
