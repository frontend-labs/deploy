---
author: luisnatividad
comments: true
date: 2014-12-18 22:56:35+00:00
layout: post
link: https://frontendlabs.io/2152--hablemos-de-angularjs
slug: hablemos-de-angularjs
title: Hablemos de Angular.JS
wordpress_id: 2152
categories:
- AngularJS
- Código
- Javascript
- tutorial
---

## **AngularJS**


AngularJS es un framework javascript del lado del frontend mantenido por Google, nace en el 2009, pero se hace popular a finales del 2012. Se discute mucho acerca de si AngularJS es un framework MVC o no, seguramente todos aquellos que hemos buscado aprender este framework nos hemos topado con que algunos desarrolladores mencionan que es del tipo MVC(Model-View-Controller) y otros a lo mejor mencionan del tipo MVVM(Model-View-ViewModel), lo cierto es que ante variadas ideas acerca del patrón que usa AngularJS, en la misma página podemos encontrar que se define como un framework MVW(Model-View-Whatever), donde whatever nos indica **"lo que nos sirva a cada uno"**.
AngularJS extiende el HTML de tal manera que podemos decir que le da súper poderes, permitiéndonos crear aplicaciones dinámicas, con mucha interacción del usuario y altamente escalables.
La filosofía de AngularJS cambia de manera sustancial la forma en que accedemos o manipulamos el DOM usando JQuery, incluso al hacer uso de otro framework del frontend como BackboneJS seguimos en la filosofía de JQuery, pero AngularJS con el uso de directivas y atributos permite interactuar con el HTML de una manera diferente.



### "Two-Way Data Binding"



Uno de los principios más importantes de AngularJS es "Two Way Data Binding"(Enlace de datos bidireccional), que significa que cualquier cambio en el modelo se refleja en la vista y cualquier cambio en la vista se refleja en el modelo de forma automática.
Siempre, aunque sin tener claro el concepto de ello, hemos usado el "One-Way Data Binding", lo que implicaba unas líneas mas de código para actualizar los cambios que se den de uno u otro lado, sin embargo, AngularJS soluciona esta deficiencia con el principio "Two-Way Data Binding".


![One Way Data Binding](https://frontendlabs.io/wp-content/uploads/2014/12/One_Way_Data_Binding-300x191.png)![Two Way Data Binding](https://frontendlabs.io/wp-content/uploads/2014/12/Two_Way_Data_Binding-300x217.png)






### Inyección de dependencias



AngularJS hace uso intensivo de la inyección de dependencias, ¿y que es inyección de dependencias?, de manera simple podemos decir que la inyección de dependencias no es más que pasar a un objeto sus dependencias por parámetro.  Al crear un módulo, un controlador, una fábrica o cualquier otro componente en AngularJS, tan solo basta indicarle las dependencias que necesita y el framework se encarga de proporcionarlo.



### $scope



El término $scope es otra de las cosas importantes en AngularJS, definido literalmente viene a ser ámbito o alcance, dentro de este alcance se tiene acceso a las variables y los métodos que enlazan el controlador con la vista. Dicho de otra manera, podemos decir que todo controlador tiene asociado un $scope que le permite interactuar con la vista.



### Directivas



Las directivas vienen a ser la forma en la que extendemos nuestro HTML, nos permite crear nuevas características, añadir comportamiento, incluso crear trozos de código a renderearse en nuestra vista.
Cuando comenzamos a ver AngularJS, nos topamos con muchas directivas que por default trae el framework, como son ng-app, ng-controller, ng-model, ng-repeat, ng-click, ng-show, entre otros. Todas las directivas que trae AngularJS cumplen una función en particular, sin embargo como imaginarán no se puede cubrir todas la funcionalidades que podamos tener, ante lo cual podemos crear nuestras propias directivas.
En el ejemplo siguiente vemos dos directivas muy usadas en aplicaciones AngularJS, como son ng-controller y ng-repeat, el primero define el controlador "Ctrl" que va trabajar en esa capa, el segundo sirve para iterar el array items y renderear un elemento de la lista con el nombre del item, seguramente la pregunta es ¿De donde sale items?, pues bien, items es un array de objetos definido en el controlador "Ctrl", que posee como atributo "nombre".

    
    <code><div ng-controller="Ctrl">
      <ul>
        <li ng-repeat="item in items">{{item.nombre}}</li>
      </ul>
    </div></code>






### Filtros



Los filtros son los encargados de transformar los datos para posteriormente mostrarlo. AngularJS posee filtros nativos como son lowercase, uppercase, limitTo, currency, date, entre otros, estoy seguro que de tan solo conocer los nombres ya se imaginan para que sirven cada uno.
Los filtros se añaden con el caracter "|", en el ejemplo vemos como le añadimos un filtro "uppercase" al nombre del item, el cual convertirá el nombre en mayúscula. Algo a tomar en cuenta es que se puede anidar múltiples filtros.

    
    <code><div ng-controller="Ctrl">
      <ul>
        <li ng-repeat="item in items">{{item.nombre | uppercase}}</li>
      </ul>
    </div>
    </code>




AngularJS tiene otros conceptos importantes como son los controladores(controller), las fábricas(factory) y servicios(service) que permiten agrupar funcionalidades que puedan ser reutilizadas en diferentes controladores, manejo de rutas, providers, módulos, y muchos más. Algo que siempre recomiendo al hacer uso de algún framework, librería o cualquier software es acudir a la documentación oficial, que por cierto AngularJS posee una excelente [documentación](https://docs.angularjs.org/guide) sobre todas sus funcionalidades.

Estoy seguro que todos están con ganas de ver código, de como funciona realmente, de saber porque AngularJS  y no otros frameworks, solo me queda decirles que este es el primero de los muchos posts que tendremos acerca de AngularJS. He querido a modo de introducción mostrarles los conceptos más importantes sin entrar en mucho detalle, sin embargo vamos a ir creando ejemplos con código acerca de todo lo que nos ofrece AngularJS hasta finalmente poder crear una aplicación completa.

El tema que veremos en el siguiente post será [Módulos y Controladores](https://frontendlabs.io/2264--modulos-y-controladores-en-angularjs), ya comenzaremos a codear y crear un ejemplo sencillo pero completo acerca de como crear un Módulo y un Controlador, enlazarlo a nuestras vistas y poner a prueba el "Two-Way Data Binding".


