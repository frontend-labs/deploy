---
author: luisnatividad
comments: true
date: 2015-01-05 23:18:38+00:00
layout: post
link: https://frontendlabs.io/2264--modulos-y-controladores-en-angularjs
slug: modulos-y-controladores-en-angularjs
title: Módulos y Controladores en AngularJS
wordpress_id: 2264
categories:
  - AngularJS
  - Html
  - Javascript
tags:
  - AngularJS
  - Javascript
---

## Módulos y controladores en AngularJS

En el post anterior, [Hablemos de AngularJS](https://frontendlabs.io/2152--hablemos-de-angularjs), nos centramos en conocer los conceptos principales, como "Two-Way Data Binding", \$scope, Inyección de dependencias, directivas, filtros entre otros. Seguramente todos se quedaron con ganas de ver código, de saber como funcionan las directivas, como asi AngularJS es genial, pues bien, desde este post en adelante vamos a ver mucho código y veremos ejemplificados los conceptos e iremos profundizando en cada uno.

## Módulos (module)

Los módulos vienen a ser contenedores de diferentes partes de nuestra aplicación. Podemos definir la cantidad de módulos que nos sean necesarios para desacoplar totalmente el código, sea por características, por funcionalidad, por componente reusable, etc. Es bueno tener en cuenta que cuanto más desacoplado tengamos nuestro código será mucho más fácil mantenerlo y escalarlo.  
Un módulo se declara de la siguiente manera

    <code>
       angular.module('Nombre_del_modulo', []);
    </code>

Como vemos es muy sencillo declarar un módulo, simplemente usamos el método **module** de angular, asignamos el nombre que lo identificará y seguidamente declaramos las dependencias, **¿Cómo? ¿Dependencias?**, Así es, dentro de los corchetes podemos declarar las múltiples dependencias que tenga nuestro módulo. Por ejemplo, imaginemos que vamos a construir una aplicación **"One page"**, donde vamos hacer uso de las rutas de AngularJS, pues bien, vamos a tener que indicarle a nuestro módulo la dependencia del cual va hacer uso, y en ese caso será **"ngRoute"**, veamos como quedaría.

    <code>
       angular.module('Nombre_del_modulo', ['ngRoute']);
    </code>

Las dependencias que inyectemos dentro de los módulos u otros componentes, pueden ser funcionalidades que el mismo AngularJS nos brinda o alguna funcionalidad que nosotros mismos desarrollemos. Si deseamos añadir mas de una dependencia, bastará con separarlos por comas, de la siguiente manera.

    <code>
       angular.module('Nombre_del_modulo', ['dependencia1','dependencia2','dependencia3']);
    </code>

Si bien es cierto hemos definido o declarado un módulo en la parte de javascript, nos falta aún un paso importante para que realmente funcione, y es enlazarlo a la vista en la cual trabajaremos. Para asociar el módulo declarado a nuestra vista solo basta con usar la directiva ng-app de la siguiente manera.

    <code>
    <!DOCTYPE html>
    <html lang="es" ng-app="Nombre_del_modulo">
    <head>
       <meta charset="UTF-8">
       <title>AngularJS</title>
       <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.min.js"></script>
       <script src="app.js"></script>
    </head>
    <body>
       <h1>Hola AngularJS desde @frontendlabs</h1>
    </body>
    </html>
    </code>

Como vemos, añadimos la directiva **ng-app** en la etiqueta html y le indicamos que módulo es el que trabajará en la vista, importamos el framework AngularJS y también añadimos el archivo donde tengamos guardado nuestro módulo, en este caso es app.js. Algo a tener en cuenta es que la directiva **"ng-app"** podemos declararla en cualquier etiqueta de nuestro código, solo basta añadirlo por encima del ámbito donde vayamos a trabajar, podríamos declararlo en la etiqueta "body" u otra capa contenedora que creamos necesario.

## Controladores (controller)

Los controladores en AngularJS son objetos que permiten desarrollar la lógica de la aplicación, enlaza el ámbito, **\$scope**, con la vista y permite tener un control total de los datos. Explicándolo de otra manera, es el encargado de gestionar los eventos.  
Los controladores se enlazan a la vista mediante la directiva ng-controller, aunque existe una excepción que lo veremos cuando toquemos el tema de rutas, ahora veamos como declarar un controlador.

    <code>
    var app = angular.module('MyApp', []);
    app.controller('mainController', function($scope){
       //contenido
    });
    </code>

Crear un controlador es bastante sencillo, tan solo basta con asignarle un nombre e inyectar las dependencias. En primera instancia, todo controlador tiene un $scope asociado, por ende, vemos que inyectamos el **$scope\*\* dentro del controlador. Ahora bien, podemos inyectar otros componentes dentro del controlador, sean nativos de AngularJS o los nuestros propios.  
Como vemos AngularJS hace un uso intenso de la inyección de dependencias en todos sus componentes, para inyectar nuevas dependencias basta con separarlos por comas.

    <code>
    app.controller('mainController', function($scope, servicio, fabrica){
       //contenido
    });
    </code>

Dentro de la vista, como mencionamos anteriormente, usamos la directiva **"ng-controller"** para asociar nuestro controlador a nuestra vista, el controlador debemos añadirlo por encima del contenido html en el cual queremos que trabaje.

    <code>
    <body>
       <div ng-controller="mainController">
          <h1>Hola AngularJS desde @frontendlabs</h1>
       <div/>
    </body>
    </code>

Dentro del ámbito donde se ha declarado el controlador **ng-controller="mainController"** se tiene un **\$scope** que permite tener el control total de los datos, veamos a continuación un ejemplo sencillo de como podemos mostrar los datos del controlador en la vista.

    <code>
    app.controller('mainController', function($scope){
       $scope.frontendlabs = "frontendlabs";
    });
    </code>






    <code>
    <body>
       <div ng-controller="mainController">
          <h1>Hola AngularJS desde @{{frontendlabs}}</h1>
       <div/>
    </body>
    </code>

En el controlador podemos ver como hemos creado la variable **"frontendlabs"** dentro del **\$scope**, al cual le hemos asignado un valor. Por otra parte, en la vista podemos ver la forma en la cual accedemos a la variable y la mostramos.  
Como buenos observadores que son, han de haberse dado cuenta que AngularJS permite mostrar los datos mediante "{{}}", esto debido a que trae incorporado su propio motor de plantillas.

Ahora crearemos un controlador que nos permita presentar una pregunta con sus respuestas y con la posibilidad de que el usuario pueda responderla, veamos:

    <code>
    var app = angular.module('MyApp', []);
    app.controller('questionController', function($scope){
       //objeto pregunta
       $scope.pregunta = {
          id: 1,
          premisa: '¿Que tipo de Framework es AngularJS?',
          respuestas: [
             {
                id: 1,
                text: 'MVC',
                active: 'false'
             },
             {
                id: 2,
                text: 'MVVM',
                active: 'false'
             },
             {
                id: 3,
                text: 'MVR',
                active: 'false'
             },
             {
                id: 4,
                text: 'MVW',
                active: 'false'
             }
          ]
       };
    });
    </code>

Hemos creado un objeto llamado **"pregunta"**, que contiene la estructura básica, la premisa y un array de respuestas, este objeto lo mostraremos en nuestra vista de la siguiente manera:

    <code>
    <!DOCTYPE html>
    <html lang="es" ng-app="MyApp">
    <head>
       <meta charset="UTF-8">
       <title>AngularJS</title>
       <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.min.js"></script>
      	<script src="app.js"></script>
    </head>
    <body>
       <div ng-controller="questionController">
          <h1>Pregunta {{pregunta.id}}</h1>
          <div class="pregunta">
             <h3>{{pregunta.premisa}}</h3>
             <ul>
                <li ng-repeat="respuesta in pregunta.respuestas">
                   {{respuesta.text}}
                </li>
             </ul>
          </div>
          <button>Responder</button>
       </div>
    </body>
    </html>
    </code>

Mostramos el objeto pregunta en la vista y para mostrar las claves hacemos uso de la directiva ng-repeat que nos permite iterar el array de objetos **"respuestas"**, dentro de cada clave mostramos la variable **"text"** que contiene el texto de la respuesta.

Ahora agregaremos funcionalidad para marcar una clave, para lo cual necesitamos de la directiva ng-click que lo añadimos dentro de cada elemento de la lista.

    <code>
       <li ng-repeat="respuesta in pregunta.respuestas" ng-click="marcar()">
          {{respuesta.text}}
       </li>
    </code>

Ahora definiremos el método dentro de nuestro controlador, que nos permitirá cambiar el estado de nuestra clave a **"true"** que identifica que elemento esta marcado.

    <code>
    $scope.marcar = function(){
       angular.forEach($scope.pregunta.respuestas, function(value, key) {
          value.active = false;
       });
       this.respuesta.active = true;
    };
    </code>

Lo primero que realizamos es recorrer el array de claves y cambiamos el estado a todos como false, luego al elemento elegido le cambiamos el estado a true, esto nos permitirá saber la clave que se encuentra marcada a la hora de validar las respuestas.  
Finalmente vamos a agregar la funcionalidad para nuestro botón **"Responder"** que nos permitirá añadir un objeto al vector de respuestas, dicho objeto contendrá tanto el id de la pregunta como el id de la clave marcada.

    <code>
    $scope.respuestas = [];
    $scope.responder = function(){
       angular.forEach($scope.pregunta.respuestas, function(respuesta, i) {
          if (respuesta.active)
             $scope.respuestas.push({ id:$scope.id, key:respuesta.id });
       });
    };
    </code>

Como vemos, hemos añadido el método que nos permite recorrer el array de respuestas de nuestra pregunta e identificar qué clave fue marcada y luego agregarlo al array **"respuestas"** como un objeto, seguramente ya deben haberse dado cuenta que en la vista nos falta enlazar el método mediante la directiva ng-click dentro del boton **"Responder"**.

Ahora veamos como queda nuestro ejemplo completo en ambos lados, primero del lado de app.js

    <code>
    var app = angular.module('MyApp', []);
    app.controller('questionController', function($scope){
       //objeto pregunta
       $scope.pregunta = {
          id: 1,
          premisa: '¿Que tipo de Framework es AngularJS?',
          respuestas: [
             {
                id: 1,
                text: 'MVC',
                active: 'false'
             },
             {
                id: 2,
                text: 'MVVM',
                active: 'false'
             },
             {
                id: 3,
                text: 'MVR',
                active: 'false'
             },
             {
                id: 4,
                text: 'MVW',
                active: 'false'
             }
          ]
       };
       $scope.marcar = function(){
          angular.forEach($scope.pregunta.respuestas, function(value, key) {
             value.active = false;
          });
          this.key.active = true;
       };
       $scope.respuestas = [];
       $scope.responder = function(){
          angular.forEach($scope.pregunta.respuestas, function(respuesta, i) {
             if (respuesta.active)
                $scope.respuestas.push({ id:$scope.id, key:respuesta.id });
          });
       };
    });
    </code>

Y del lado de index.html

    <code>
    <!DOCTYPE html>
    <html lang="es" ng-app="MyApp">
    <head>
       <meta charset="UTF-8">
       <title>AngularJS</title>
       <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.min.js"></script>
      	<script src="app.js"></script>
    </head>
    <body>
       <div ng-controller="questionController">
          <h1>Pregunta {{pregunta.id}}</h1>
          <div class="pregunta">
             <h3>{{pregunta.premisa}}</h3>
             <ul>
                <li ng-repeat="respuesta in pregunta.respuestas" ng-click="marcar()">
                   {{respuesta.text}}
                </li>
             </ul>
          </div>
          <button ng-click="responder()">Responder</button>
       </div>
    </body>
    </html>
    </code>

En resumen, podemos decir que los módulos y controladores en AngularJS son componentes que nos permiten desacoplar el código, englobar funcionalidades y tener un código más limpio. Sin embargo, un componente que hemos visto mucho en esta entrada es el de $scope y no nos hemos referido mucho a el, podemos decir en conclusión que los controladores extienden o construyen el $scope, quien es el encargado de contener los datos y de transferirlos de la vista al controlador y viceversa.

La siguiente entrada sobre AngularJS, hablaremos de **Directivas**, ya hemos visto algunas en estas primeras entradas, pero ahora profundizaremos en los conceptos y conoceremos las más importantes, explicaremos como se usa y aprenderemos a crear las nuestras, y seguiremos viendo módulos y controladores y así iremos incrementando los conocimientos.
Finalmente, no olviden siempre acudir a [la documentación oficial de AngularJS](https://docs.angularjs.org/api) que es realmente muy buena.
