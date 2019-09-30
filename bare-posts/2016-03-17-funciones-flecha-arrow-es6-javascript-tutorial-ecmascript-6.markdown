---
author: luissardon
comments: true
date: 2016-03-17 22:40:05+00:00
layout: post
link: https://frontendlabs.io/3410--funciones-flecha-arrow-es6-javascript-tutorial-ecmascript-6
slug: funciones-flecha-arrow-es6-javascript-tutorial-ecmascript-6
title: 'Aprendiendo ECMAScript 6: Funciones Flecha (Arrow)'
wordpress_id: 3410
categories:
- ES6
- Javascript
tags:
- arrow
- arrow function
- ECMAScript 6
- es6
- flecha
- funciones
- funciones flecha
- IIFE
- Javascript
- this binding
---

![Aprendiendo ECMAScript 6: Funciones Flecha (Arrow)](https://frontendlabs.io/wp-content/uploads/2016/02/cabecera-aprendiendo-es6.jpg)


          

Este es el 3º de 20 capítulos de la serie [Aprendiendo ECMAScript 6](https://frontendlabs.io/?s=Aprendiendo+ECMAScript+6) de Frontend-labs, en donde cada semana veremos una nueva característica de ES6, el nuevo y actual estándar de Javascript. Si quieren estar al tanto de los próximos capítulos los invito a seguirme en Twitter como [@lmsardon](https://twitter.com/lmsardon).


          

En el 1er capítulo, [Aprendiendo ECMAScript 6: Constantes](https://frontendlabs.io/3210--constantes-es6-javascript-tutorial-ecmascript-6), aprendimos a declarar variables usando la sentencia _const_; y en el capítulo anterior, [Aprendiendo ECMAScript 6: Scoping](https://frontendlabs.io/3357--scoping-es6-javascript-tutorial-ecmascript-6), hablamos del alcance que tienen las variables al ser declaradas usando las nuevas sentencias _let_ y _const_.
            
          


          

En este capítulo hablaremos de una de las características más interesantes que trae ES6: Las _Funciones Flecha (Arrow)_. Gran parte de lo que veremos ha sido tomado del libro [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read) de Nicholas C. Zakas, pero adaptado a mi forma de explicar las cosas y por supuesto al español...
            
          


          

## Funciones Flecha (Arrow)


          

Como su nombre lo indica, son funciones definidas usando una **flecha** =>, pero estas se comportan de una manera diferente a las _funciones tradicionales_ en varios aspectos.
            
          


          

### Sintaxis


          

La sintaxis de las funciones flecha tiene diferentes formas, dependiendo de la tarea que se quiera realizar. Todas las variaciones comienzan con los **argumentos de la función**, seguidos por la **flecha**, seguidos por el **contenido de la función**. Tanto los argumentos como el contenido pueden tener diferentes formas dependiendo de su uso. En el siguiente ejemplo, la _funcion flecha_ toma un único argumento y simplemente lo devuelve.
            
          


          
    
    <code>var reflect = value => value;
    
    // Que sería lo mismo que hacer esto:
    var reflect = function (value) {
      return value;
    };</code>

  

          

<blockquote>
            
> 
> Cuando las _funciones flecha_ reciben un solo argumento, ese único argumento puede ser utilizado directamente sin necesidad de agregar los paréntesis. La flecha viene después y la expresión final se evalúa y es retornada. No es necesario declarar el _return_ de manera explícita, _la función flecha_ retorna el primer argumento que encuentre.
              
            
> 
> 
          </blockquote>


          


            En caso la función reciba más de un argumento, entonces sí debemos incluir los paréntesis, como en el siguiente ejemplo:
            
          


          
    
    <code>var sum = (n1, n2) => n1 + n2;
    
    // Que sería lo mismo que hacer esto:
    var sum = function (n1, n2) {
      return n1 + n2;
    };</code>

  

          


            Un caso similar sería si la función no recibe ningún argumento, en ese caso van los paréntesis solos, como en el siguiente ejemplo:
            
          


          
    
    <code>var getName = () => "Luis Miguel";
    
    // Que sería lo mismo que hacer esto:
    var getName = function () {
      return "Luis Miguel";
    };</code>

  

          


            Pero esto no quiere decir que no podemos usar una sintaxis más tradicional para el contenido de nuestras funciones flecha, es más, si vamos a realizar otras tareas, necesariamente vamos a tener que encapsular nuestro contenido entre llaves y declarar explícitamente el _return_, como en el siguiente ejemplo:
            
          


          
    
    <code>var sum = (n1, n2) => {
      return n1 + n2;
    };
    
    // Que sería lo mismo que hacer esto:
    var sum = function (n1, n2) {
      return n1 + n2;
    };</code>

  

          

<blockquote>
            
> 
> Podemos tratar el contenido de las llaves casi como lo hacíamos de la manera tradicional, con la excepción de que el valor _arguments_ no estará disponible.
              
            
> 
> 
          </blockquote>


          


            Si queremos crear una función que no haga absolutamente nada, entonces ahí también debemos incluir las llaves, como en el siguiente ejemplo:
            
          


          
    
    <code>var doNothing = () => {};
    
    // Que sería lo mismo que hacer esto:
    var doNothing = function () {};</code>

  

          

La cosa cambia un poco cuando lo que queremos retornar es un _objeto_, en ese caso tenemos que encapsularlo entre paréntesis. Por ejemplo:
            
          


          
    
    <code>var getTempItem = id => ({id: id, name: "Temp"});
    
    // Que sería lo mismo que hacer esto:
    var getTempItem = function (id) {
      return {
        id: id,
        name: "Temp"
      };
    };</code>

  

          

<blockquote>
            
> 
> Esto se hace por que al encapsular el _objeto_ entre paréntesis declaramos que las llaves son el _objeto_ y no que pertenecen al cuerpo de la función.
              
            
> 
> 
          </blockquote>


          

### Expresiones de Función Invocadas Inmediatamente (IIFE)


          

Las _IIFEs_ por sus siglas en inglés, nos permiten crear funciones anónimas y llamarlas inmediatamente sin guardar una referencia de estas. Este patrón es muy útil cuando necesitamos crear un ámbito aislado del resto del programa. Por ejemplo:
            
          


          
    
    <code>let person = function (name) {
      return {
        getName: function() {
          return name;
        }
      }
    }("Luis Miguel");
    
    console.log(person.getName()); // <- Luis Miguel</code>

  

          

<blockquote>
            
> 
> En este código, la _IIFE_ es usada para crear un objeto con un método getName(). Este método usa el argumento name como valor de retorno, haciendo de name un valor _privado_ dentro del objeto retornado.
              
            
> 
> 
          </blockquote>


          

Para lograr el mismo resultado usando _funciones flecha_, debemos encapsularlas entre paréntesis:
            
          


          
    
    <code>let person = ((name) => {
      return {
        getName: function() {
          return name;
        }
      }
    })("Luis Miguel");
    
    console.log(person.getName()); // <- Luis Miguel</code>

  

          

<blockquote>
            
> 
> Notemos que los paréntesis sólo están alrededor de la _función flecha_ y no llegan hasta ("Luis Miguel").
              
            
> 
> 
          </blockquote>


          

### No hay _this_ binding


          


            Algunos de los errores más comúnes en JavaScript ocurren precisamente por la asignación que tiene la palabra clave _this_. Dado que el valor de _this_ puede cambiar dentro de una función dependiendo del ámbito donde ésta es ejecutada, es muy posible afectar por error un objeto cuando la intención es afectar a otro, veamos el siguiente ejemplo:
            
          


          
    
    <code>let PageHandler = {
      id: "123456",
    
      init: function () {
        document.addEventListener("click", function (event) {
          this.doSomething(event.type); // <- TypeError: this.doSomething is not a function
        }, false);
      },
    
      doSomething: function (type) {
        console.log("Handling " + type + "for " + this.id);
      }
    };</code>

  

          

En el código anterior, el objeto PageHandler está diseñado para manejar interacciones en la página. El método init() es llamado para establecer las interacciones, y este método a su vez asigna un controlador de eventos que ejecuta this.doSomething(). Sin embargo, este código no va a funcionar como esperamos.
            
          


          

La llamada a this.doSomething() falla debido a que this es una referencia del objetivo del evento (en este caso document), y no de PageHandler como esperamos. Si intentamos correr este código, tendremos un error cuando el controlador del evento se ejecute, porque this.doSomething() no existe en el objeto document.
            
          


          

Podríamos solucionar esto asignando el valor de this del PageHandler de manera explícita, usando el método bind() en la función, como en este ejemplo:
            
          


          
    
    <code>let PageHandler = {
      id: "123456",
    
      init: function () {
        document.addEventListener("click", function (event) {
          this.doSomething(event.type); // No hay error
        }.bind(this), false);
      },
    
      doSomething: function (type) {
        console.log("Handling " + type + "for " + this.id);
      }
    };</code>

  

          

Ahora nuestro código funciona, pero se ve un poco extraño. Al usar bind(this), lo que hacemos es crear una nueva función cuyo this está ligado al this actual, que en este caso es PageHandler. Para evitar crear una función extra, una mejor forma de solucionar este problema es usando _funciones flecha_.
            
          


          

Cuando hablamos de que no hay _this Binding_, significa que el valor de this dentro de la _función flecha_ solo puede ser determinado buscando en la cadena de ámbitos. Por lo que, si la _función flecha_ está dentro de una función contenedora tradicional, el valor de this va a ser igual a la función contenedora; de lo contrario, el valor de this será undefined. Veamos el ejemplo:
            
          


          
    
    <code>let PageHandler = {
      id: "123456",
    
      init: function () {
        document.addEventListener("click", event => this.doSomething(event.type), false);
      },
    
      doSomething: function (type) {
        console.log("Handling " + type + "for " + this.id);
      }
    };</code>

  

          

## Conclusión


          

Las _funciones flecha (arrow)_ son muy útiles a la hora de retornar un valor de manera inmediata, escribiendo muy poco código y hasta en una sola línea, además nos permiten tener un mejor control sobre this con lo cual podemos hacer nuestro código mucho más mantenible.
            
          


          

Los espero en el próximo capítulo **Aprendiendo ECMAScript 6: Manejando Parámetros Extendidos**.
            
          


          

## Fuentes


          


            
  * [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read)

            
  * [ECMAScript 6 — New Features: Overview & Comparison](http://es6-features.org/)

          
