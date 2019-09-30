---
author: andru255
comments: true
date: 2014-07-16 17:18:25+00:00
layout: post
link: https://frontendlabs.io/979--documentar-con-yuidoc-y-gruntjs
slug: documentar-con-yuidoc-y-gruntjs
title: Documentar con YUIDoc y GruntJS
wordpress_id: 979
categories:
- Automatización
- Javascript
- tutorial
tags:
- documentador
- Javascript
- YUIDoc
---

Existen muchas herramientas para poder generar una buena documentación de código en JavaScript hoy en día.

En este caso hablaremos y veremos el uso de una buena herramienta llamada [YUIDoc](http://yui.github.io/yuidoc/) y proviene de la familia de [YUI](https://yuilibrary.com/) (Yahoo User Interface), con ello podemos hacer que nuestro código tenga un valor agregado.


### **Requisitos:**


Necesitamos tener instalado el servidor nodejs, en caso no lo tengas instalado y estás bajo debian puedes visitar este buen [post](https://frontendlabs.io/232--como-instalar-nodejs-debian-linux).

Luego necesitamos instalar GruntJS, aquí también puedes ver como instalarlo [aqui](https://frontendlabs.io/146--gruntjs-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos).


### **Escenario:**


Tengo un archivo llamado calculadora.js y se encuentra en la siguiente ruta

_/home/dru/Projects/JS/docmycode/src/calculadora.js_

y  su unica función es hacer de una simple calculadora :

[code lang="javascript"]
var calculadora = function(){

};
calculadora.prototype.sumar = function(a, b){
 return a + b;
};
calculadora.prototype.restar = function(a, b){
 return a - b;
};
calculadora.prototype.multiplicar = function(a, b){
 return a * b;
};
calculadora.prototype.dividir = function(){
 return a / b;
};
[/code]

Por el momento solo realiza operaciones muy básicas y como podemos ver: todos los métodos de la calculadora sólo reciben 2 parámetros.


### **Estableciendo el entorno de trabajo con las herramientas necesarias**


OJO: Ten en cuenta que antes de seguir y ejecutar los comandos de cada paso debes ubicarte en la carpeta docmycode y para que esteas seguro de ello debes ejecutar este comando:

[code lang="bash"]
$ pwd
[/code]

**Paso 1**
Creamos nuestro archivo package.json pero de una manera práctica que es ejecutando en consola o terminal el siguiente comando, si ya lo tienes creado previamente entonces puedes saltar al paso 2 :

[code lang="bash"]
$ npm init
[/code]

Con el comando anterior te generará una serie de preguntas para que formes un archivo llamado package.json como standard propio de un paquete para el npm (Node Package Manager), pero en nuestro caso será para manejar nuestro pequeña demo, aqui mi pantalla una vez ejecutado ese comando:

[![demo-terminal](https://frontendlabs.io/wp-content/uploads/2014/07/demo-terminal.jpg)](https://frontendlabs.io/wp-content/uploads/2014/07/demo-terminal.jpg)

Tenemos nuestro archivo package.json generado, luego tenemos que agregarle los paquetes necesarios para usar el documentador con GruntJS

**Paso 2**
Editamos el package.json creando un nuevo nodo llamado "devDependencies" agregando los paquetes necesarios que son [grunt](https://www.npmjs.org/package/grunt), [grunt-cli](https://www.npmjs.org/package/grunt-cli), y  [YUIDoc](https://www.npmjs.org/package/grunt-contrib-yuidoc)

quedando así:

[![package-yuidoc](https://frontendlabs.io/wp-content/uploads/2014/07/package-yuidoc.jpg)](https://frontendlabs.io/wp-content/uploads/2014/07/package-yuidoc.jpg)

**Paso 3**
Teniendo nuestras dependencias y estando en la carpeta donde está nuestro archivo package.json ejecutamos en terminal o en consola el siguiente comando:

[code lang="bash"]
$ npm install
[/code]

Haciendo ello instalamos los paquetes indicados en el paso 2 y nos quedaría un último paso que es configurar el automatizador.

**Paso 4**
Creamos un archivo llamado Gruntfile.js dentro de nuestra carpeta docmycode, y en ella ingresamos lo siguiente:

[code lang="javascript"]
module.exports = function(grunt){
 //establecemos la configuración para el grunt en si
 grunt.initConfig({
   //pasándole con un nodo con nombre pkg
   //se puede trabajar las variables del archivo package.json
   //y poder pasarlos a otras configuraciones
   pkg: grunt.file.readJSON('package.json'),
   //estableciendo la configuración para el YUIDoc
   //este nodo servirá para ejecutar la tarea de documentar
   yuidoc:{
     all: {
        //Aqui se está usando el nodo pkg indicado arriba
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options:{
          //leerá nuestra carpeta src donde está el archivo calculadora.js
          paths: ['src'],
          //creará una carpeta llamada docs donde estará lo que documentemos
          outdir: './docs/'
        }
     }
   }
 });

 grunt.log.write("Iniciando GruntJS");
 //cargando el contrib de YUIDoc
 grunt.loadNpmTasks('grunt-contrib-yuidoc');
 //adicionando la tarea yuidoc a ser la tarea por defecto en grunt
 grunt.registerTask('default', 'yuidoc');
};
[/code]

**Paso 5**
Teniendo esa pequeña configuración ya podemos ejecutar este comando en consola:

[code lang="bash"]
$ grunt
[/code]

En donde verás en la carpeta docs y en ella se encuentra un archivo de nombre index.html y abriendolo en un navegador podemos apreciar esto por el momento.

[![yui-browser](https://frontendlabs.io/wp-content/uploads/2014/07/yui-browser.jpg)](https://frontendlabs.io/wp-content/uploads/2014/07/yui-browser.jpg)

**Documentando con YUIDoc**
Cuando empezamos un comentario que entienda YUIDoc debe contener al inicio "/**" o también se pueden usar los [estilos de comentar](http://yui.github.io/yuidoc/syntax/index.html#comment-styles).

Teniendo claro ello, YUIDoc tiene una jerarquía de uso de etiquetas, las clasifica en [primarias](http://yui.github.io/yuidoc/syntax/index.html#primary-tags) y [secundarias.](http://yui.github.io/yuidoc/syntax/index.html#secondary-tags)

Guiándonos de lo que indica [la sintaxis de documentar](http://yui.github.io/yuidoc/syntax/index.html) y  de [cómo documentar](http://yui.github.io/yuidoc/) podemos usarlo con nuestro pequeño script llamado calculadora si lo tomamos como una clase lo actualizamos comentándolo así:

[code lang="javascript"]
/**
 * Clase donde realizamos cálculos básicos
 *
 * @class calculadora
 * @constructor
 */
 var calculadora = function(){

 };
[/code]

Y al método "sumar":

[code lang="javascript"]
/**
 * Retorna el resultado de la suma de 2 valores ingresados
 * @method sumar
 * @param {Integer} a El 1er valor a sumar
 * @param {Integer} b El 2do valor a sumar
 * @return {Integer} la suma de a y b
 */
calculadora.prototype.sumar = function(a, b){
 return a + b;
};
[/code]

Continuando con los métodos restantes:

[code lang="javascript"]
/**
 * Retorna el resultado de la resta de 2 valores ingresados
 * @method restar
 * @param {Integer} a El 1er valor a restar
 * @param {Integer} b El 2do valor a restar
 * @return {Integer} la resta de a y b
 */
calculadora.prototype.restar = function(a, b){
 return a - b;
};

/**
 * Retorna el resultado de la multiplicación de 2 valores ingresados
 * @method multiplicar
 * @param {Integer} a El 1er valor a multiplicar
 * @param {Integer} b El 2do valor a multiplicar
 * @return {Integer} la multiplicación de a y b
 */
calculadora.prototype.multiplicar = function(a, b){
 return a * b;
};

/**
 * Retorna el resultado de la división de 2 valores ingresados
 * @method dividir
 * @param {Integer} a El 1er valor a dividir
 * @param {Integer} b El 2do valor a dividir
 * @return {Integer} la división de a y b
 */
calculadora.prototype.dividir = function(){
 return a / b;
};
[/code]

Y luego volvemos al terminal y ejecutamos:

[code lang="bash"]
$ grunt
[/code]

Documentando hasta ahora debería salir algo como esto:[![documentando-con-yuidoc](https://frontendlabs.io/wp-content/uploads/2014/07/documentando-con-yuidoc.jpg)](https://frontendlabs.io/wp-content/uploads/2014/07/documentando-con-yuidoc.jpg)

Como se puede apreciar la forma de comentar para YUIDoc nos da muchas facilidades para tener una documentación agradable para el usuario.




