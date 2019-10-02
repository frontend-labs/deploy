---
author: luissardon
comments: true
date: 2016-02-13 00:19:03+00:00
layout: post
link: https://frontendlabs.io/3210--constantes-es6-javascript-tutorial-ecmascript-6
slug: constantes-es6-javascript-tutorial-ecmascript-6
title: "Aprendiendo ECMAScript 6: Constantes"
wordpress_id: 3210
categories:
  - ES6
  - Javascript
tags:
  - const
  - constantes
  - ECMAScript 6
  - es6
  - Javascript
  - Object.freeze
---

![Aprendiendo ECMAScript 6: Constantes](https://frontendlabs.io/wp-content/uploads/2016/02/cabecera-aprendiendo-es6.jpg)

Este es el 1º de 20 capítulos de la serie [Aprendiendo ECMAScript 6](https://frontendlabs.io/?s=Aprendiendo+ECMAScript+6) de Frontend Labs, en donde cada semana veremos una nueva característica de ES6; El nuevo actual estándar de JavaScript, si quieren estar al tanto de los próximos capítulos los invito a seguirme en Twitter como [@lmsardon](https://twitter.com/lmsardon).

Hoy hablaremos de las **constantes** en ES6 (también llamadas _variables inmutables_ o _de solo lectura_).

## Constantes

Las variables declaradas usando _const_ son consideradas inmutables, es decir, su valor no puede ser redefinido y solo sirven para lectura, por esta razón las constantes deben ser inicializadas en la declaración, como en el siguiente ejemplo:

    <code>
    // Declaración correcta
    const AUTHOR = "Luis";

    // Declaración incorrecta
    const NAME; // <- SyntaxError: Missing Initializer in const declaration
    </code>

<blockquote>Habrán notado que estoy definiendo las constantes en MAYÚSCULAS, ¿Por qué? Bueno esto no es un requerimiento a la hora de la definición, pero es una buena práctica para acostumbrarnos a identificar constantes y evitar errores posteriores al creer que se está manejando una variable común.</blockquote>

Cabe señalar que existe una inconsistencia con las constantes, pues esta declaración solo hace a la variable en sí inmutable, mas no a sus propiedades, ni metodos, en caso de que el valor sea un objeto, esto significaría que el objeto en sí todavía puede ser alterado, como en el siguiente ejemplo:

    <code>
    // Declaramos un objeto como constante
    const AUTHOR = { name: "Luis" };

    // No esta permitido redefinir el valor de una constante
    AUTHOR = { name: "Luis Miguel" }; // <- SyntaxError: AUTHOR is read-only

    // Pero podemos modificar sus propiedades
    AUTHOR.name += " Miguel"
    console.log(AUTHOR.name); // <- Luis Miguel
    </code>

... dejando una puerta abierta al error, veamos el caso de los Array:

    <code>
    const AUTHORS = [ "Luis", "Jan", "Andrés", "Julio" ];

    AUTHORS[1] = "Juan";
    console.log(AUTHORS); // <- Luis,Juan,Andrés,Julio

    AUTHORS.shift();
    AUTHORS.pop();
    AUTHORS.push("JOAQUÍN");
    console.log(AUTHORS); // <- Juan,Andrés,JOAQUÍN

    AUTHORS.length = 5;
    console.log(AUTHORS); // <- Juan,Andrés,JOAQUÍN,undefined,undefined

    delete AUTHORS[1];
    console.log(AUTHORS); // <- Juan,undefined,JOAQUÍN,undefined,undefined
    </code>

Pero si fuese completamente necesario que esto no ocurra, podemos usar el método [freeze](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/freeze) para proteger sus propiedades, vean este ejemplo:

    <code>
    var AUTHORS = Object.freeze(["Luis", "Jan", "Andrés"]);

    AUTHORS[1] = "Juan"; // <- TypeError: Cannot assign to read only property 1 of object
    </code>

Otro detalle importante sobre las constantes es que estas tienen un alcance de bloque (block-scoping), esto significa que si la definimos dentro de un bloque condicional (if) esta variable se podrá utilizar solo en el bloque donde haya sido definida, como podemos ver en el siguiente ejemplo:

    <code>
    // Bloque condicional
    if(true) {
      const AUTHOR = "Luis Miguel";
      // Accediendo a la constante dentro del bloque condicional
      console.log(AUTHOR); // <- Luis Miguel
    }
    // Accediendo a la constante fuera del bloque condicional
    console.log(AUTHOR); // <- ReferenceError: AUTHOR is not defined
    </code>

... a diferencia de las definidas con _var_ que tienen un alcance de función y pueden ser utilizadas en toda la función, así hayan sido definidas dentro de un bloque, a este concepto se le conoce como _Scoping_ y lo veremos a fondo en el siguiente capítulo de esta serie [Aprendiendo ECMAScript 6: Scoping](https://frontendlabs.io/3357--scoping-es6-javascript-tutorial-ecmascript-6)

## Conclusión

Aunque haya una inconsistencia (solucionable) con el hecho de poder modificar sus propiedades, utilizar **constantes** para datos que sabemos no van a cambiar durante todo nuestro flujo, siempre será una buena práctica, ya que nos permiten tener nuestro código organizado y mantenible.

## Fuentes

- [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read)

- [ECMAScript 6 — New Features: Overview & Comparison](http://es6-features.org/)
