---
author: jansanchez
comments: true
date: 2015-10-09 18:44:02+00:00
layout: post
link: https://frontendlabs.io/3065--javascript-lenguaje-programacion-mas-incomprendido-mundo
slug: javascript-lenguaje-programacion-mas-incomprendido-mundo
title: 'Javascript: El lenguaje de programación más incomprendido del mundo'
wordpress_id: 3065
categories:
- Javascript
tags:
- AngularJS
- Código
- Coffescript
- ECMAScript
- Estándar
- Expresiones regulares
- Front-End
- Javascript
- jQuery
- json
- Lenguaje de programación
- Nodejs
- Sintaxis
---

## Javascript



Javascript, conocido como LiveScript, JScript, ECMAScript, es uno de los lenguajes de programación más populares del mundo. Virtualmente cada computadora en el mundo tiene al menos un intérprete Javascript instalado y sin duda debe estar siendo usado frecuentemente. La popularidad que tiene Javascript se debe enteramente a su rol como lenguaje de script en la Web.

A pesar de su popularidad, pocos saben que Javascript es un lenguaje de programación dinámico, orientado a objetos y de propósito general.



### ¿Cómo esto puede ser aún un secreto para muchos?




### ¿Por qué este lenguaje es tan mal entendido?



Analizemos los siguientes aspectos:



## El Nombre



El prefijo 'Java' sugiere que Javascript está de alguna forma relacionado con Java, que Javascript es una parte de Java o una versión menos capaz de Java. Parece que el nombre fue seleccionado intencionalmente para crear confusión y sabemos que de la confusión vienen los malos entendidos.

Aclaremos lo siguiente:



### Javascript no es intérprete de Java.




### Java es interpretado por Java.




### Javascript es un lenguaje diferente.



Javascript tiene una similitud sintáctica a Java, al igual como Java tiene similitud con C. Pero Javascript no es una parte de Java y Java no es una parte de C. Javascript es mejor que Java en las aplicaciones para las que fue pensado originalmente Java (antes conocido como Oak).

Javascript no fue desarrollado en Sun Microsystems, Sun Microsystems es donde fue creado Java. Javascript fue desarrollado en Netscape. Originalmente fue llamado LiveScript, pero ese nombre no era lo suficientemente confuso (sarcasmo).

El sufijo 'script' sugiere que Javascript no es un lenguaje de programación real, sugiere que un lenguaje de script es menos que un lenguaje de programación. Pero Javascript realmente es una materia de especialización.

En comparación con C, Javascript sacrifica rendimiento por 'poder expresivo' y 'dinamismo'.



## Lisp disfrazado del lenguaje C



La sintaxis Javascript es como la sintaxis del lenguaje C, incluyendo llaves y la vieja declaración  for , estos elementos hacen que Javascript parezca un lenguaje de procedimentos común y corriente. Esto es muy engañoso porque Javascript tiene más cosas en común con los lenguajes funcionales como Lisp o Scheme que con C o Java. 

Tiene arreglos (arrays) en vez de listas y objetos en vez de listas de propiedades. Las funciones son de primera clase (first class). Tiene cierres (closures). Y también se puede obtener lambdas mediante funciones anónimas.



## Conversión de tipos



Javascript fue diseñado para funcionar en Netscape Navigator. Su éxito dio lugar a que se convierta parte del equipamiento estándar en casi todos los navegadores web. Esto dio como resultado la conversión de tipos. Javascript se adapta bien a una amplia clase de aplicaciones no relacionadas con la Web.



## Objetivos Cambiantes



Las primeras versiones de Javascript eran bastante débiles. Carecían de manejo de excepciones, funciones internas, y herencia. En su forma actual, ahora es un lenguaje de programación orientado a objetos completo. Pero muchas opiniones sobre este lenguaje se basan en sus versiones anteriores.

El comité ECMA que es el que tiene la administración sobre el lenguaje, actualmente está desarrollando extensiones, que aunque son bien intencionadas, agravarán uno de los mayores problemas del lenguaje: Ya hay demasiadas versiones. Esto crea confusión.



## Errores de diseño



Un lenguaje de programación no es perfecto. Javascript tiene su cuota de errores de diseño, como la sobrecarga de + que significa suma y concatenación con coerción de tipos y la sentencia  with  propensa a errores, la cual debe ser evitada. La políticas sobre las palabras reservadas son demasiado estrictas. La inserción del punto y coma (;) fue un gran error, al igual que la notación literal para las expresiones regulares. Estos errores han dado lugar a errores de programación, y se ha puesto en tela de juicio todo el diseño del lenguaje. Afortunadamente, muchos de estos problemas pueden ser mitigados con un buen programa de linteo (jsLint, JsHint).

El diseño del lenguaje en general es bastante sólido. Sorprendentemente, el comité de ECMAScript no parece estar interesado en corregir estos problemas. 

Tal vez están más interesados en crear otros nuevos problemas (sarcasmo).




## Pésimas Implementaciones



Algunas de las implementaciones anteriores de Javascript eran bastante defectuosas. Esto se refleja negativamente en el lenguaje. Para agravar eso, esas implementaciones fueron incrustadas horriblemente en navegadores web defectuosos.



## Malos libros



Casi todos los libros sobre Javascript son bastante malos. Contienen errores, malos ejemplos, y promueven las malas prácticas. Las características importantes del lenguaje  a menudo se explican mal, o son dejados de lado por completo. He revisado docenas de libros de Javascript, y sólo puedo recomendar uno: Javascript: The Definitive Guide (5ta edición) de David Flanagan. (Atención autores: Si usted ha escrito un libro bueno, por favor me envía una copia para revisión).



## Un estándar por debajo de lo normal



La especificación oficial para el lenguaje es publicada por ECMA. La especificación es de muy mala calidad. Es difícil de leer y muy difícil de entender. Esto ha sido un contribuidor al problema de los malos libros, porque los autores no han podido utilizar el documento estándar para mejorar su propia comprensión del lenguaje. ECMA y el comité TC39 deberían estar profundamente avergonzados.



## Aficionados



La mayoría de las personas que utilizan Javascript no son programadores. Ellos carecen de la formación y la disciplina para escribir buenos programas. Javascript tiene tanta fuerza expresiva que son capaces de hacer cosas útiles con él, de todos modos. Esto ha dado a Javascript una reputación de ser estrictamente para los aficionados, que Javascript no es adecuado para la programación profesional. Pensar así, es estar muy equivocado.




## Orientado a objetos





### ¿Javascript está orientado a objetos?



Tiene objetos que pueden contener datos y métodos que actúan sobre los datos. Los objetos pueden contener otros objetos. No tiene clases, pero tiene constructores, que hacen lo mismo que las clases hacen, incluyendo actuar como contenedores de las variables y los métodos de la clase. No tiene herencia orientada a clases, pero tiene la herencia orientada al prototipo.

Las dos formas principales de construir sistemas de objetos son por herencia y por agregación. Javascript hace las dos cosas, pero su naturaleza dinámica le permite sobresalir en la agregación.

Algunos argumentan que Javascript no está verdaderamente orientado a objetos, ya que no provee una forma para ocultar información. Es decir, los objetos no pueden tener variables privadas y métodos privados: Todos los miembros son públicos.

Pero resulta que los objetos Javascript pueden tener variables privadas y métodos privados. Por supuesto, pocos entienden esto porque Javascript es el lenguaje de programación más incomprendido del mundo.

Algunos argumentan que Javascript no está verdaderamente orientado a objetos, ya que no proporciona herencia. Pero resulta que Javascript, no sólo soporta la herencia clásica, sino que también soporta otros patrones de reutilización de código.




## Acerca del artículo:



Esta es una traducción del artículo “The World's Most Misunderstood Programming Language” (Javascript: El lenguaje de programación más incomprendido del mundo) de Douglas Crockford.

Me encontré con este artículo hace unos meses y al leerlo no podía creer que este artículo tan valioso era del 2001, por lo cual decidí traducirlo ya que considero que tiene una explicación muy práctica de las razones de ¿Por qué no se entiende el lenguaje Javascript? y sin duda aunque tenga tantos años de escrito sea tan aplicable hoy en día.

Actualmente es el año 2015 y Javascript es el lenguaje más usado por la gente que desarrolla y sube sus proyectos en Github.

![javascript-2015](https://frontendlabs.io/wp-content/uploads/2015/10/javascript-2015.png)

Si les gusto el artículo, por favor compartanlo, para que cada vez más gente conozca un poco más de este gran lenguaje de programación.



## Referencias bibliográficas:



CROCKFORD, Douglas. Javascript:
The World's Most Misunderstood Programming Language, 2001. Disponible en: [http://www.crockford.com/javascript/javascript.html](http://www.crockford.com/javascript/javascript.html)

CROCKFORD, Douglas. JSLint: The Javascript Code Quality Tool, 2011, [http://javascript.crockford.com/code.html](http://javascript.crockford.com/code.html)

ECMA INTERNATIONAL. Welcome, [2005?]. Disponible en: [http://www.ecma-international.org/](http://www.ecma-international.org/)

FLANAGAN DAVID. Javascript: The Definitive Guide. 3era Edición. Estados unidos: O'Reilly Media, 1998. Disponible en: [http://www.amazon.com/exec/obidos/ASIN/0596101996/wrrrldwideweb ISBN-13: 978-0596101992](http://www.amazon.com/exec/obidos/ASIN/0596101996/wrrrldwideweb ISBN-13: 978-0596101992)

W3SCHOOLS. Javascript Introduction, [2005?]. Disponible en: [http://www.w3schools.com/js/js_intro.asp](http://www.w3schools.com/js/js_intro.asp)

