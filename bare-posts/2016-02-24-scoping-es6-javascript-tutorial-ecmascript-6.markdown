---
author: luissardon
comments: true
date: 2016-02-24 23:43:50+00:00
layout: post
link: https://frontendlabs.io/3357--scoping-es6-javascript-tutorial-ecmascript-6
slug: scoping-es6-javascript-tutorial-ecmascript-6
title: "Aprendiendo ECMAScript 6: Scoping"
wordpress_id: 3357
categories:
  - ES6
  - Javascript
tags:
  - block scope
  - const
  - ECMAScript 6
  - function scope
  - Javascript
  - let
  - scope
  - scoping
---

![Aprendiendo ECMAScript 6: Scoping](https://frontendlabs.io/wp-content/uploads/2016/02/cabecera-aprendiendo-es6.jpg)

Este es el 2º capítulo de la serie [Aprendiendo ECMAScript 6](https://frontendlabs.io/?s=Aprendiendo+ECMAScript+6) de Frontend Labs, en donde cada semana veremos una nueva característica de ES6; el nuevo y actual estándar de Javascript, si quieren estar al tanto de los próximos capítulos los invito a seguirme en Twitter como [@lmsardon](https://twitter.com/lmsardon).

En el capítulo anterior [Aprendiendo ECMAScript 6: Constantes](https://frontendlabs.io/3210--constantes-es6-javascript-tutorial-ecmascript-6), hablamos de que las variables declaradas usando _const_ tenían un alcance de bloque y las declaradas usando _var_ un alcance de función, lo que nos lleva al tema de hoy **Scoping**.
  


## Scoping

Cuando hablamos de _scoping_ hacemos referencia a la determinación del alcance de las variables, pero para poder entender bien esto, primero tenemos que tener claro lo que es el **scope**.
  


### Scope

El _scope_ es el ámbito donde declaramos nuestras variables, por lo tanto, el scope es la lista de variables a las cuales tenemos acceso.
  


<blockquote>
            
> 
> 
              En JavaScript, objetos y funciones también son variables.

              En JavaScript, el scope es la lista de variables, objetos y funciones a las cuales tenemos acceso.

              JavaScript tiene un alcance de función (function scope): Por lo que el scope cambia cuando estamos dentro de una función.



>

          </blockquote>




#### Function Scope

            Las variables declaradas dentro de una función se vuelven locales, por lo que solo podemos acceder a ellas dentro de la función en sí, veamos un ejemplo:






    <code>// Ámbito global
    var x = "X";

    function test() {
      // Ámbito local
      var y = "Y";

      // Como (x) está definida en un ámbito global,
      // podemos acceder a ella desde cualquier lado.
      console.log(x); // <- X
    }
    test();

    // Pero como (y) está definida en un ámbito local (dentro la función test)
    // no podemos acceder a ella desde fuera.
    console.log(y) // <- ReferenceError: y is not defined</code>





<blockquote>
            
> 
> Las variables declaradas usando _const_ no son las únicas con alcance de bloque (block scope), pues en ECMAScript 6 también podemos declarar variables usando la sentencia _let_...
              
            
> 
> 
          </blockquote>

#### Block Scope

Las variables declaradas usando _let_ o _const_ también se vuelven locales, pero la gran diferencia es que solo podemos acceder a ellas dentro del bloque donde fueron declaradas, pero no en todo el ámbito local, veamos un ejemplo:
  


    <code>function test() {
      // Ámbito local
      if(true) {
        // Bloque condicional
        var x = "X"; // var tiene un alcance de función
        const y = "Y"; // const tiene un alcance de bloque
        let z = "Z"; // let tiene un alcance de bloque

        console.log(x); // <- X
        console.log(y); // <- Y
        console.log(z); // <- Z
      }

      // Como (x) tiene un alcance de función, se puede acceder
      // a ella en cualquier parte de la función.
      console.log(x); // <- X

      // Pero como (y) y (z) tienen un alcance de bloque, solo
      // se puede acceder a ellas en el bloque donde fueron declaradas.
      console.log(y); // <- ReferenceError: y is not defined
      console.log(z); // <- ReferenceError: z is not defined
    }
    test();</code>





#### LET es el nuevo VAR

Como hemos visto, se pueden declarar variables usando _let_ en vez de _var_, teniendo un mejor control sobre el alcance de la variable gracias a su block scope, pero esto no es lo único diferente de _let_, veamos sus características:
  


##### No se comportan como propiedades en el ámbito global

Si declaramos una variable usando _let_ en el entorno global, no podremos acceder a ella mediante window.miVariable, pues parece que vive dentro de un bloque invisible que teóricamente encierra todo el código js de nuestra web.
  


##### Cuando trabajamos con closures asíncronos dentro de un bloque iterador, preservan su valor en cada ciclo

    <code>// Usando VAR
    for (var i = 0; i < 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, i * 100);
    }
    // <- 4
    // <- 4
    // <- 4
    // <- 4
    // <- 4

    // Usando LET
    for (let i = 0; i < 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, i * 100)
    }
    // <- 0
    // <- 1
    // <- 2
    // <- 3
    // <- 4</code>





##### No podemos intentar acceder a la variable antes del momento de su declaración

    <code>// Usando VAR
    function testVar() {
      console.log(mensaje); // <- undefined
      var mensaje = "prueba";
    }
    testVar();

    // Usando LET
    function testLet() {
      console.log(mensaje); // <- ReferenceError: mensaje is not defined
      let mensaje = "prueba";
    }
    testLet();</code>





##### No podemos redeclarar la variable

    <code>// Usando VAR
    var authorA = "Luis Miguel"
    var authorA = "Juan Pablo"
    console.log(authorA); // <- "Juan Pablo"

    // Usando LET
    let authorB = "Luis Miguel";
    let authorB = "Juan Pablo" // <- SyntaxError: Identifier 'authorB' has already been declared</code>





## Conclusión

Scoping es cuando uno declara una variable con alcance de bloque (const/let) o con alcance de función (var), hemos visto también que al declarar nuestras variables usando _let_ podemos tener un mejor control de estas y evitar algunos errores comunes, **mi recomendación personal es que declaren sus variables siempre con _let_ y solo usar _var_ en caso necesiten un alcance fuera del bloque**.
  


Los espero en el próximo capítulo [Aprendiendo ECMAScript 6: Funciones Flecha (Arrow)](https://frontendlabs.io/3410--funciones-flecha-arrow-es6-javascript-tutorial-ecmascript-6), donde hablaremos de la **expresión de función flecha** (también llamada función flecha gruesa).
  


## Fuentes

- [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read)

- [ECMAScript 6 — New Features: Overview & Comparison](http://es6-features.org/)
