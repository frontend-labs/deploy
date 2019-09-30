---
author: luisnatividad
comments: true
date: 2015-04-06 22:56:24+00:00
layout: post
link: https://frontendlabs.io/2287--aprendiendo-directivas-en-angularjs
slug: aprendiendo-directivas-en-angularjs
title: Aprendiendo Directivas en AngularJS
wordpress_id: 2287
categories:
- AngularJS
- Código
- Html
- Javascript
tags:
- AngularJS
- Javascript
---

## Directivas





En la entrada anterior sobre AngularJS, nos centramos en aprender sobre [Módulos y Controladores](https://frontendlabs.io/2264--modulos-y-controladores-en-angularjs), en el ejemplo que realizamos sobre la pregunta vimos algunas **directivas**, pero ahora vamos estudiar completamente como funcionan.   
Recordando un poco el concepto, en la [primera entrada](https://frontendlabs.io/2152--hablemos-de-angularjs) mencionamos que **las directivas vienen a ser la forma en la que extendemos nuestro HTML**, permiten agregar desde pequeños trozos de código hasta una funcionalidad completa.   
  

Comencemos a ver las directivas nativas de AngularJS y explicar para que sirve cada una de ellas, cabe mencionar que los nombres de las directivas se crean en camelcase (ngApp), aunque en la vista se separan por un guion (ng-app).




## ngApp (ng-app)




Es la directiva encargada de auto arrancar una aplicación Angular, indica el elemento raíz y se debe colocar como atributo en la etiqueta que quieres que sea la raíz de la aplicación.   
La directiva **ngApp** la declaramos de la siguiente manera:



    
    
    <code>
    <html ng-app>
    </code>
    







ngApp puede contener un módulo de AngularJS como vimos en el post anterior, y se declara de la siguiente manera:



    
    
    <code>
    <html ng-app="nombre_del_modulo">
    </code>
    







## ngController (ng-controller)




Es la directiva que permite indicarle a la vista donde trabajará nuestro controlador y enlazar un $scope, todo modelo que este dentro del ámbito de la directiva podrá ser accedido desde el controlador asignado. **ngController** se declara de la siguiente manera:



    
    
    <code>
    <body>
       <div ng-controller="nombre_de_controlador">
          <h1>Hola AngularJS desde @frontendlabs</h1>
       <div/>
    </body>
    </code>
    







## ngModel (ng-model)




Es la directiva que representa el modelo o dato, permite obtener la información ingresada por el usuario en algún elemento del formulario, sea un input, select o textarea. Si desea obtener el texto que un usuario ingresa en un input, solo bastará asociarle un modelo y éste podrá ser accedido tanto en el controlador como la vista mediante el nombre del modelo.   
Veamos como funciona esto: 



    
    
    <code>
    <body>
       <div ng-controller="miControlador">
          <label>Ingrese su nombre</label>
          <input type="text" ng-model="nombre">
          <span>Hola {{nombre}}</span>
       <div/>
    </body>
    </code>
    




En el momento en que comencemos a escribir en el input, iremos viendo como se refleja lo escrito dentro del span, esto debido al principio "Two-Way data binding", por otro lado en el controlador también tenemos acceso al modelo mediante $scope.nombre.




## ngClick (ng-click)




Esta directiva trabaja directamente relacionado al evento click, se le puede asociar alguna funcionalidad en cuanto el usuario haga click sobre algún elemento.   
Como ejemplo veamos el siguiente código, dentro del html creamos un botón al cual le asociamos la directiva **ng-click**, en cuanto se detecte el evento se realizará la funcionalidad que tengamos en el método enviar(), que probablemente enviemos el nombre hacia algún servidor o la guardemos en un array:



    
    
    <code>
    <body>
       <div ng-controller="miControlador">
          <label>Ingrese su nombre</label>
          <input type="text" ng-model="nombre">
          <button ng-click="enviar()">Enviar</button>
       </div>
    </body>
    </code>
    







## ngInit (ng-init)




Esta directiva permite evaluar una expresión en el scope donde se esta trabajando, veamos un ejemplo de como funciona:



    
    
    <code>
    <body>
       <div ng-controller="miControlador">
          <div>
             <button ng-click="count = count + 1" ng-init="count = 0">Enviar</button>
             <span>{{count}}</span>
          </div>
       </div>
    </body>
    </code>
    







## ngRepeat (ng-repeat)




Esta directiva permite iterar una colección de datos, generar un template por cada elemento de la colección y pintarlo en la vista, cada template o plantilla recibe su propio ámbito ($scope).   
Vemos en el siguiente ejemplo, como inicializamos una variable que contiene una colección de objetos y luego mediante la directiva **ng-repeat** iteramos la colección y pintamos una etiqueta "li" por cada elemento de la colección mostrando tanto el nombre como la edad de cada alumno:



    
    
    <code>
    <body>
       <div ng-controller="miControlador">
          <div ng-init="alumnos = [
          {nombre:Paul, edad:12},
          {nombre:Carlos, edad:13},
          {nombre:Jan, edad:14},
          {nombre:Ana, edad:15},
          {nombre:Victor, edad:16}
          ]">
             <ul>
                <li ng-repeat="alumno in alumnos">{{alumno.nombre}}: {{alumno.edad}} años</li>
             </ul>
          </div>
       </div>
    </body>
    </code>
    







## ngChange (ng-change)




Esta directiva detecta cualquier cambio que se produzca dentro de una etiqueta de entrada, sean inputs, checkbox, etc., la forma de usarla es la siguiente.   
En el lado de la vista tenemos dos opciones a marcar, si esta a favor o en contra, lo cual incrementará o restará las votaciones según sea el caso, veamos:



    
    
    <code>
    <body>
       <div ng-controller="miControlador">
          <input type="checkbox" ng-model="si" ng-change="aFavor()"> A favor
          <input type="checkbox" ng-model="no" ng-change="enContra()"> En contra
          <h3>Total Votos: {{total}}</h3>
       </div>
    </body>
    </code>
    







En el lado del controlador sería de la siguiente manera:



    
    
    <code>
    app.controller('miControlador', function($scope){
       $scope.total = 0;
       $scope.aFavor = function (){
          $scope.total++;
       };
       $scope.enContra = function (){
          $scope.total--;
       };
    });
    </code>
    







## ngShow (ng-show) | ngHide (ng-hide)




Estas directivas permiten mostrar y ocultar alguna parte de la vista según la condición que le asignemos. Como seguramente todos ya deben saber **ngShow** permite mostrar y **ngHide** permite ocultar, veamos un ejemplo sencillo de como trabajan estas dos directivas.  

Tenemos dos opciones "mostrar" y "ocultar", y el mensaje a mostrar, como vemos en el código tenemos los dos checkbox y los dos mensajes, uno de los mensajes con la directiva ng-show y la otra con ng-hide, lo que nos indica que en cuanto "dato1" sea true(este marcada) se mostrará en caso contrario se ocultará, de forma inversa en el segundo mensaje, donde en caso "dato2" se true se ocultará y en caso contrario se mostrará.  

En primera instancia al estar ambos sin check, estarán en estado false, por lo cual el único mensaje que se mostrará es el segundo.



    
    
    <code>
    <body>
       <div ng-controller="miControlador">
          <input type="checkbox" ng-model="dato1"> Mostrar
          <input type="checkbox" ng-model="dato2"> Ocultar
          <h3 ng-show="dato1">@frontendlabs 1</h3>
          <h3 ng-hide="dato2">@frontendlabs 2</h3>
       </div>
    </body>
    </code>
    







## ngBind (ng-bind)




Esta directiva cumple la misma funcionalidad que las llaves **{{}}**, sin embargo, **ng-bind** tiene una mejor performance en cuanto a tiempo. En el siguiente ejemplo vemos la forma de uso, y tanto **{{}}** como **ng-bind** muestran el texto que se ingresa en la caja de texto.



    
    
    <code>
    <body>
       <div ng-controller="miControlador">
          <input type="text" ng-model="nombre">
          <span>{{nombre}}</span>
          <span ng-bind="nombre"></span>
       </div>
    </body>
    </code>
    


  
  



Existen muchas más directivas, he querido mostrarles las más importantes y aquellas que darán pie a que puedan acudir a la [Documentación oficial de AngularJS](https://docs.angularjs.org/api) y puedan poner en practica las que les sea útiles al proyecto en el cual están trabajando.


  
  



## Creando nuestras propias directivas




Como lo mencioné antes, por más que hayan muchas directivas y la gente de Google haya pensado en todas las posibles directivas necesarias para todos los proyectos, sin embargo, existen muchas veces en que necesitamos construir nuestra propia directiva y antes eso AngularJS nos da la facilidad de poder crearla a nuestro gusto y a medida de nuestra necesidad.


  
  



Veamos la forma simple de implementar una directiva:



    
    
    <code>
    var app = angular.module('MiModulo',[]);
    app.controller('MiControlador', function($scope){
      $scope.cliente = {
        nombre: 'Jhon',
        direccion: 'Av. Jose pardo 481'
      };
    });
    
    //Aquí creamos la directiva
    app.directive('miCliente', function() {
      return {
        template: 'Nombre: {{cliente.nombre}} Dirección: {{cliente.direccion}}'
      };
    });
    </code>
    




En la parte de la vista usaríamos nuestra directiva asi:



    
    
    <code>
    <body>
       <div ng-controller="MiControlador">
          <div mi-cliente></div>
       </div>
    </body>
    </code>
    


  
  



Otra forma de usar nuestra directiva sería usarlo como etiqueta, pero antes definamos unos detalles adicionales, en la primera directiva que hemos creado vemos como retornamos un template pasando los parámetros que creamos necesarios, ahora bien, imaginemos que el template que queremos renderizar en la vista es un formulario gigante, tendríamos mucho html dentro de nuestra directiva, lo que quiere decir que estaríamos combinando JavaScript y html, lo cual como todos sabemos merece "pena de cárcel" para quien lo haga.




La solución ante esto es usar **templateUrl**, que a diferencia de **template** carga el html desde un archivo externo, lo cual nos permite desacoplar el html de JavaScript y quedamos todos felices. Veamos como funciona:



    
    
    <code>
    app.directive('miCliente', function() {
      return {
        templateUrl: 'cliente.html'
      };
    });
    </code>
    




La vista cliente.html:



    
    
    <code>
       Nombre: {{cliente.nombre}} Dirección: {{cliente.direccion}}
    </code>
    


  
  



En el tema de la vista donde se va renderizar nuestra directiva no se produce ningún cambio y lo seguimos mostrando como un atributo. Como se habrán dado cuenta he mencionado que puedo mostrar o usar una directiva como atributo o elemento, asi que les explico a que me refiero:
  
  

Dentro de las directivas existe una propiedad llamada **restrict** que indica la restricción que podemos incluir, la cual define si nuestra directiva es elemento(E), atributo(A) o ambas(AE), siendo AE la restricción por defecto. He podido ver que también usan las directivas como clases(C) y mensaje o comentarios(M), sin embargo, me enfoco en los 3 primeros que a mi parecer son los más usados e importantes. 
  
  

Veamos un ejemplo de como implementar una directiva con restricción y la forma de renderizarla.




    
    
    <code>
      app.directive('miCliente', function() {
        return {
          restrict: 'E', //puede ser 'A' o 'AE'
          templateUrl: 'cliente.html'
        }
      });
    </code>
    


  
  



Como vemos en el ejemplo, hemos agregado la restricción 'E', lo cual nos restringe a solo usar nuestra directiva como elemento, sin embargo, un punto importante a tomar en cuenta al usar una directiva como elemento es nuestro viejo amigo **Internet Explorer** donde en algunas versiones no funciona, mas allá de ese "simple detalle" lo usaríamos de la siguiente manera:



    
    
    <code>
    <body>
       <div ng-controller="MiControlador">
          <mi-cliente></mi-cliente>
       </div>
    </body>
    </code>
    


  
  



De igual forma si definiéramos la restricción como 'A', solo podríamos usarlo como atributo.  

Hasta el momento hemos visto como los parámetros que estamos renderizando en nuestra directiva son estáticos, pues bien, ahora vamos a ver como hacer dinámico los parámetros u objetos vamos a hacer match con nuestro template.




    
    
    <code>
      app.controller('MiControlador', function($scope) {
        $scope.cliente1 = {nombre: 'Percy', direccion: 'Calle Los Manzanos'};
        $scope.cliente2 = {nombre: 'Gerardo', direccion: 'Calle Dueñas'};
      })
      app.directive('miCliente', function() {
        return {
          restrict: 'AE',
          scope: {
            clienteDinamico: '=cliente'
          },
          templateUrl: 'cliente.html'
        }
      });
    </code>
    


  
  



Nuestro template cliente.html quedaría de la siguiente manera:



    
    
    <code>
       <div class="page">
          <h1>{{clienteDinamico.nombre}} vive en {{clienteDinamico.direccion}}</h1>
       </div>
    </code>
    


  
  



Ya hemos definido nuestra directiva y nuestro template, lo único que no falta es la vista en donde vas a mostrarla:



    
    
    <code>
    <body>
       <div ng-controller="MiControlador">
          <mi-cliente cliente="cliente1" ></mi-cliente>
          <mi-cliente cliente="cliente2" ></mi-cliente>
       </div>
    </body>
    </code>
    


  
  



Imagino que en esta parte algunos se han perdido un poco, pero paciencia, expliquemos al detalle:
Hasta el momento hemos estado interactuando dentro del mismo ámbito($scope) del controlador, lo cual hace que nuestra directiva sea estática, pues bien, ahora lo que hacemos es crear un scope aislado, esto nos permite poder indicarle el elemento con el cual vamos a trabajar.
¿De que manera creamos nuestro scope aislado?, la respuesta seguro ya la saben, se agrega el atributo scope a nuestra directiva y le asignamos un nombre al objeto con el cual vamos a trabajar, en nuestro caso, **"clienteDinamico"** viene a ser el nombre de nuestro objeto a usar en el template, y su **"=cliente"** viene a ser el atributo a usar dentro de la directiva en la vista.
Dentro de nuestra vista usamos **"=cliente"** como atributo y le indicamos sobre que objeto va trabajar, en este caso le indicamos los objetos **cliente1 y cliente2**, por lo tanto, **"clienteDinamico"** toma el valor de cliente1 y cliente2 para renderizar nuestra directiva.
  

Aislar el scope de nuestra directiva es la forma correcta de crear nuestras directivas, sin embargo, existen diferentes situaciones en nuestros proyectos que nos hacen elegir una u otra, seguramente a partir de estos pequeños conceptos y ejemplos van a poder ahondar más en temas de las directivas y animarse por crear directivas geniales y apoyar a la comunidad.




Existen muchas directivas que vienen implementadas con el mismo framework y otras más creadas por la comunidad que seria bueno darse el tiempo en buscarlos y estudiarlos antes de estar inventando la rueda. [Bootstrap](https://angular-ui.github.io/bootstrap/) tiene directivas ya implementadas que las pone al alcance de nosotros para solo agregarlo a nuestros proyectos y comenzar a usarlos.




Como todo, hemos llegado al final de este post, que demoré en realizarlo por motivos de trabajo, pero espero que pueda servirles como base para comenzar a usar las directivas existentes y crear las suyas propias, ya viendo que son fáciles de hacer.  
  

Finalmente, como siempre recomiendo, acudan a la [Documentación Oficial de AngularJS](https://docs.angularjs.org/guide).

