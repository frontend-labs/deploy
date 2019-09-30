---
author: jansanchez
comments: true
date: 2014-04-03 05:38:54+00:00
layout: post
link: https://frontendlabs.io/146--grunt-js-espanol-tutorial-basico-primeros-pasos
slug: grunt-js-espanol-tutorial-basico-primeros-pasos
title: Grunt.js en español - tutorial básico y primeros pasos
wordpress_id: 146
categories:
- Automatización
- Javascript
tags:
- Automatización
- Coffescript
- Grunt
- Gulp
- Javascript
- Nodejs
---

## Grunt.js



Es un corredor de tareas desarrollado en Javascript con [Node.js](http://nodejs.org/).
Vamos a comenzar con una pregunta clave igual que en su [web](http://gruntjs.com/) oficial.



## ¿Por qué utilizar un corredor de tareas?



La respuesta en tan solo dos palabras sería: **Para Automatizar!**.
Ya que, cuanto menos trabajo tengas que hacer cuando realizas tareas repetitivas como: **minificación, compilación, validación de sintaxis, **pruebas unitarias, observar cambios de tus archivos, concatenaci**ó**n de archivos, copiado de archivos de una ruta a otra, borrado de archivos, generar documentación, crear sprites, **etc**, tu trabajo será más fácil y rápido de realizar.

Una vez configurado, un corredor de tareas, este puede convertir todo ese trabajo o esfuerzo "manual" a prácticamente cero esfuerzo de tú parte.

Con esto queremos decir que al configurar tu corredor de tareas, esas tareas se harán automáticamente, en el orden que tú definas, bajo las instrucciones que tú le des. Con esto olvidate de hacer cosas "manuales".
Bueno ahora veamos ¿Como lo instalo en mi equipo?



## Instalando Grunt.js



Grunt.js y sus plugins se instalan y se gestionan a través de [NPM](https://www.npmjs.org/), que es el gestor de paquetes de [Node.js](http://nodejs.org/).

Para empezar, tendrás que instalar la interfaz de línea de comandos de Grunt.js (CLI) a nivel global en tu equipo. Es posible que necesites usar sudo (para OSX, *nix, BSD, etc) o ejecutar el shell de comandos como administrador (en Windows) para lograr esto.

Asumiendo que ya tienes instalado NodeJS, que ahora ya viene con el npm instalado por defecto, solo tendrás que escribir la siguiente instrucción.


    
    <code>
    npm install -g grunt-cli
    
    </code>



Con esto ya tenemos instalado Grunt.js en nuestro equipo, si no instala de esta forma entonces intenta con administrador, anteponiendo la palabra **sudo** de la siguiente manera:


    
    <code>
    sudo npm install -g grunt-cli
    
    </code>



Si no tienes instalado NodeJs en linux puedes pasar por nuestro post [Como instalar Nodejs en Debian Linux](https://frontendlabs.io/232--como-instalar-nodejs-debian-linux).



## Nuestro primer proyecto con Grunt.js



Ahora comenzaremos a crear nuestro primer proyecto usando Grunt.js, primero creamos una carpeta para nuestro proyecto y la llamaremos: **grunt-primerospasos**.

Luego abrimos nuestro terminal o consola y accedemos hasta nuestra nueva carpeta, por ejemplo en mi caso la ruta es la siguiente:


    
    <code>
    cd /home/jan/htdocs/grunt-primerospasos/
    
    </code>



y procedemos a crear nuestro archivo **package.json** con la siguiente línea de comando:


    
    <code>
    npm init
    
    </code>



Luego de esto npm nos pedirá la información básica de nuestro proyecto, la iremos ingresando línea por línea y al completar cada línea presionaremos **Enter**.**
**Al final nos quedará así.


[![Grunt.js npm init](https://frontendlabs.io/wp-content/uploads/2014/03/npm-init.png)](https://frontendlabs.io/wp-content/uploads/2014/03/npm-init.png)


A continuación para finalizar nos pide escribir **yes** y nos mostrará la siguiente pantalla.

[![Grunt.js npm-init-finish](https://frontendlabs.io/wp-content/uploads/2014/03/npm-init-finish.png)](https://frontendlabs.io/wp-content/uploads/2014/03/npm-init-finish.png)

Como podemos observar ya hemos creado nuestro archivo **package.json**.
Si no lo lograste o te confundio un poco el proceso aquí dejo el contenido básico del archivo para copiar, pegar y nombrarlo así: **package.json**


    
    <code>
    {
     "name": "grunt-primerospasos",
     "version": "0.0.1",
     "description": "Mi primer proyecto en Grunt.js",
     "author": "jansanchez"
    }
    
    </code>



Luego iremos agregando las dependencias de nuestro proyecto, dentro de nuestra carpeta **grunt-primerospasos** agregaremos **grunt** como dependencia así:


    
    <code>
    npm install grunt --save-dev
    
    </code>



Si abrimos nuestro archivo **package.json** podremos observar que han sido agregadas las 3 siguientes lineas.


    
    <code>
    "devDependencies": {
     "grunt": "~0.4.4"
     }
    
    </code>



La llave **devDependencies** indica que dentro de este objeto javascript se irán agregando las dependencias que instalemos a nuestro proyecto, en este caso nuestra primera dependencia es **Grunt.js** en su versión** 0.4.4**



## Grunt.js Plugins



Los **plugins** de Grunt.js, también llamados **contribs** de Grunt.js, estos no son más que módulos que se encargan de tareas comunes con Grunt.js, son parte vital del uso de Grunt.js y existen más de 2500.

Algunos de los más usados son:

**    [grunt-contrib-jade](https://github.com/gruntjs/grunt-contrib-jade)**:  _Compila plantillas Jade_.
**    [grunt-contrib-stylus](https://github.com/gruntjs/grunt-contrib-stylus)**:  _Compila archivos stylus a css_.
**    [grunt-contrib-coffee](https://github.com/gruntjs/grunt-contrib-coffee)**:  _Compila archivos coffee a js_.
**    [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)**:  Minifica archivos con UglifyJS.



## Gruntfile.js



El Gruntfile.js es un archivo JavaScript válido que debe encontrarse en el directorio raíz del proyecto, junto al archivo package.json

Se compone de las siguientes partes:



  
  * La función contenedora.

  
  * Configuración de proyectos y tareas.

  
  * Carga de plugins.

  
  * Registro de tareas.




### La función contenedora



Esta función es la que contendrá todo nuestro código de Grunt.js.



    
    <code>
    module.exports = function(grunt) {
        // Configuración de Grunt.js
    };
    
    </code>





### Configuración de proyectos y tareas



Aquí encontramos el método **grunt.initConfig**, este método inicializa un objeto de configuración para el proyecto actual.

El objeto se utiliza para las tareas y se puede acceder a él mediante el método **grunt.config**, dicho objeto es un objeto Javascript que nosotros ingresaremos.
Por lo general este objeto lo iremos alimentando con todas las configuraciones de tareas que deseemos poner en nuestro proyecto.


    
    <code>
        grunt.initConfig({
            // Configuración para proyectos y tareas.
        });
    
    </code>





### Carga de plugins


Para la carga de plugins de Grunt.js, usaremos el método **loadNpmTasks**, con el siguiente código cargaremos el plugin "grunt-contrib-uglify".


    
    <code>
    // Cargar la tarea grunt-contrib-uglify
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    </code>





### Registro de tareas



Para el registro de tareas usaremos el método **registerTask **de Grunt.js.


    
    <code>
    // Tarea por defecto.
    grunt.registerTask('default', ['uglify']);
    
    </code>



Este método tiene 2 parámetros:
El primero es el **nombre** que queremos ponerle a la tarea y con este mismo nombre podremos acceder a ejecutar la tarea por ejemplo:



    
    <code>
    grunt default
    
    </code>



El segundo parámetro es un **Array de nombres de tareas**, donde podemos  agregar una o más tareas, como podemos ver en el siguiente ejemplo.


    
    <code>
    grunt.registerTask('default', ['js', 'uglify']);
    
    </code>



En este ejemplo vemos que se registró la tarea llamada **default** y dentro de esta tarea se ejecutarán en el orden indicado las siguientes tareas: **js** y **uglify**.



## Vamos a poner Grunt.js a prueba!



Ahora vamos a hacer una prueba sencilla de como minificar archivos js con una tarea para mostrar un poquito del gran potencial de Grunt.js, para este ejemplo usaremos el [**grunt-contrib-uglify **](https://github.com/gruntjs/grunt-contrib-uglify)y lo haremos sobre nuestro proyecto **grunt-primerospasos**.

Entonces vamos a agregar la dependencia para **uglify**(~0.3.3), abrimos el terminal en nuestra carpeta y escribimos lo siguiente:


    
    <code>
    npm install grunt-contrib-uglify --save-dev
    
    </code>



De esta forma instalamos esta dependencia en nuestro proyecto, con lo cual solo nos faltaría configurar la tarea en el **grunt.initConfig**.

Ahora creamos nuestro archivo **Gruntfile.js**  y insertamos el siguiente contenido base:


    
    <code>
    module.exports = function (grunt) {
      // Project configuration.
      grunt.initConfig({
        //
      });
    };
    
    </code>



Agregamos la tarea **uglify**, con algunas de las opciones que nos indica en su [documentación](https://github.com/gruntjs/grunt-contrib-uglify#getting-started)


    
    <code>
    module.exports = function (grunt) {
      // Project configuration.
      grunt.initConfig({
        // uglify
        uglify: {
          options: {
            mangle: false,
            compress: {
              drop_console: true
            }
          },
          js: {
            files: [{
              cwd: 'js/src/',  // ruta de nuestro javascript fuente
              expand: true,    // ingresar a las subcarpetas
              src: '*.js',     // patrón relativo a cwd
              dest: 'js/min/'  // destino de los archivos compresos
            }]
          }
        }
     });
    };
    
    </code>



Ahora cargaremos el plugin que necesitamos usar:


    
    <code>
    // cargamos grunt-contrib-uglify
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    </code>



Luego registramos nuestra tarea:


    
    <code>
    // Registramos la tarea default
    // que ejecutará la tarea grunt uglify
    grunt.registerTask('default', ['uglify']);
    
    </code>



Finalmente nuestro Gruntfile quedaría así:


    
    <code>
    module.exports = function (grunt) {
      // Project configuration.
      grunt.initConfig({
        //uglify
        uglify: {
          options: {
            mangle: false,
            compress: {
              drop_console: true
            }
          },
          js: {
            files: [{
              cwd: 'js/src/',
              expand: true,
              src: '*.js',
              dest: 'js/min/'
            }]
          }
        }
     });
    
     // loadNpmTasks
     grunt.loadNpmTasks('grunt-contrib-uglify');
    
     // Run Default task(s).
     grunt.registerTask('default', ['uglify']);
    };
    
    </code>



Con esto solo tenemos que ingresar por medio del terminal a nuestra carpeta donde esta alojado el Gruntfile.js y ejecutar la tarea registrada.


    
    <code>
    grunt default
    
    </code>



Al ejecutar la tarea, Grunt.js minificará los archivos ***.js** que se encuentren en la carpeta **js/src/** y pondrá el resultado en la carpeta **js/min/**.

Los archivos de este post se encuentran en el siguiente [repositorio](https://github.com/jansanchez/grunt-primerospasos) en github.


Existe un automatizador más moderno llamado Gulp.js, este automatizador tiene muchas mejoras con respecto a Grunt.js, si deseas saber más, no dudes en visitar nuestro post sobre [Gulp.js](https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos).

