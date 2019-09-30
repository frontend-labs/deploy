---
author: Carlos Huamani
comments: true
date: 2015-06-10 22:01:57+00:00
layout: post
link: https://frontendlabs.io/2797--la-gramatica-en-javascript
slug: la-gramatica-en-javascript
title: 'JavaScript y su Gramática '
wordpress_id: 2797
categories:
- Código
- Javascript
- tutorial
tags:
- español
- Javascript
- Tutorial
---

## ¿la gramática de JavaScript?


La gramática se define actualmente como el estudio de las reglas y principios que estandariza el uso del lenguaje dentro de la oración. Entonces si llevamos este término a la programación podríamos entender el concepto de la gramática de JavaScript como las reglas y principios que regulan la escritura del código. Por ende entendemos que no es solo es el hecho de escribir código como se me da la gana, sino que debemos escribir un código que sea entendible y ordenado.

Ahora, una buena manera de comenzar a escribir un código legible y ordenado es entendiendo cómo funciona lo básico de JavaScript. Así que a continuación explicaremos las cosas básicas que debes aprender de JavaScript.

![grammar JavaScript](https://frontendlabs.io/wp-content/uploads/2015/06/grammar-300x186.jpg)


### Espacios en blanco


Los espacios en blanco suelen ser insignificantes, un espacio más o uno menos no hará que nuestro código tenga errores, ¿o si? Bueno, se suele agregar espacios en blancos más que nada para tener legibilidad al leerlo. Sin embargo algunas veces es realmente necesario. Aunque parezca algo obvio es bueno resaltar que no es lo mismo poner “var numero = 5;” que ” varnumero=5;” . El espacio que hay entre “var” y “numero” es muy importante, ya que sino lo hacemos estaríamos asignando el número 5 a la variable “varnumero” y no a “numero”.

En JavaScript tenemos dos tipos de comentarios: el de bloque (“**/* … */**”) y el de línea ( “**//**” ). La diferencia es que el primero tiene la opción de encerrar varias líneas de código. Mientras que el segundo solo comenta una línea de código. Si evaluamos la usabilidad de estos dos métodos de comentar, se recomienda utilizar la segunda forma, puesto que el primero puede generar ciertos errores. ¿Cuales? Pues si queremos usar alguna expresión regular puede darse el caso de usar algo como “**/d*/**” y este coincide con el cierre del comentario de bloque “***/**”. Es decir que si comentamos en bloque de un código que contenga esa expresión regular en vez de cerrar donde hemos puesto el cierre del comentario “*/”, este se cerrará al ver la expresión regular. Por eso se recomienda usar el de comentario en línea “**//**”.


### Nombres


Cuando hablamos de nombres no nos referimos al nombre de tu gato o el tuyo. Hablamos de algo más importante y crítico en el desarrollo de sistemas, en este caso hablamos del nombre que recibirá nuestra variable, parámetro o propiedad. El nombre es una letra y luego puede ser seguida por más letras, números o guiones bajos. Además como en todo lenguaje, existen palabras reservadas las cuales no pueden ser usadas. En el caso de JavaScript existen palabras reservadas que no pueden ser usadas para nombrar declaraciones, variables, parámetros, propiedades, etc. Por último, se recomienda asignar nombres que tengan sentido y relación a lo que estás haciendo en el algoritmo. Poner nombres como demo123, prueba3, zzz, zzz2, terceraLaVencida, conFe, es el primer paso para tener un código que no será fácil de mantener en un futuro.

**Palabras reservadas en orden alfabético:**



	
  * A: abstract

	
  * B: boolean, break, byte

	
  * C: case, catch, char, class, const, continue

	
  * D: debugger, default, delete, do, double

	
  * E: else, enum, export, extends

	
  * F: false, final, finally, float, for, function

	
  * G: goto

	
  * I: if, implements, import, in, instanceof, int, interface

	
  * L: long

	
  * N: native, new, null

	
  * P: package, private, protected, public

	
  * R: return

	
  * S: short, static, super, switch, synchronized

	
  * T: this, throw, throws, transient, true, try, typeof

	
  * V: var, volatile, void

	
  * W: while, with




### Números


En JavaScript es igual decir 1 que 1.0. Esto se debe a que JavaScript solo usa un tipo de número para almacenarlo en memoria. Además, 100 seria igual a escribir 100.00 pero también sería igual si lo escribo así: “1e2”. ¿Qué es eso? Pues es el número 100 escrito de manera científica ¿Para que te sirve? Si no eres científico quizás no mucho ¿Porque eso dice 100? Pues no es muy complicado, tomemos como ejemplo el número 100, es decir 1e2. La sección antes de la “e” significa el número que irá a la izquierda, en este caso el 1, y lo que está después de la e, es decir el número 2, se refiere al número de ceros que tendrá el número. Entendemos entonces que si tenemos el uno y dos ceros, 1 y 00 y si lo juntas tienes el 100. Entonces el 2e3 significa 2 y 000 por ende tendremos el número 2000.

Los números negativos son creados agregando un guión en el lado izquierdo.

La propiedad NaN es el resultado de una operación matemática fallida. Si se te ocurre la gran idea de multiplicar 2 por ‘a’ no obtienes ‘aa’ como en Python, aquí obtienes un NaN. Además, NaN no puede ser igualado por nada porque siempre te dará false como respuesta. Ni siquiera es igual a NaN entonces quizás te estés preguntando cómo rayos saber si la operación matemática que estas haciendo te devuelve un NaN. Para eso basta con usar isNaN(variable), esto te devuelve true si es NaN. ¿Que rayos significa NaN? Not a Number, en español significa No un Número. El operador typeof nos devuelve el tipo de la variable que tenemos. Sin embargo cuando se escribe typeof(NaN) te devuelve “number” y se supone que NaN significa Not a Number.

La propiedad Infinity no es infinito, es un valor que representa a todo número menor o igual a 1.79769313486231570e+308.

Por último podemos recordarte o hacerte saber que JavaScript cuenta con varias funciones matemáticas que pueden ser llamadas desde el objeto Math.


### Cadenas


Una cadena puede ser creada encerrando el texto en comillas simples o en doble comillas. Este texto puede estar compuesto de ningún carácter o de muchos caracteres. Las cadenas son inmutables, es decir una vez creada no pueden ser modificadas por nada del mundo. Pero claro, siempre puedes crear una nueva cadena que tenga la antigua con la modificación que quieres realizar. Además las cadenas poseen métodos. Recuerda que con el backslash “\” puedes ingresar caracteres como la comilla simple o comillas dobles sin preocuparte que este carácter cierre tu cadena de texto.

Ejemplo:

    
    <code>var texto = 'prueba de cd';
    </code>


Aqui tenemos un ejemplo de como se usan las comillas para alamacenar una cadena dentro de una variable.

    
    <code>var texto = 'prueba de cd\'s';
    </code>


El código de arriba usa el backslash para omitir la comilla simple que este a su costado. 

    
    <code>var texto = "prueba de cd's";
    </code>


En el ejemplo de arriba hemos decidido usar comilla doble en vez de comilla simple.

    
    <code>texto.toUpperCase()
    >> PRUEBA DE CD'S
    </code>


Como había dicho anteriormente esta cadena contiene métodos como toUpperCase().
Si quieres saber más sobre métodos, [puedes visitar este post](https://frontendlabs.io/2456--javascript-ejemplos-substring-split-replace-trim) el cual te explica sobre las funciones mas usadas en JavaScript


### Declaraciones


Las declaraciones es el código JavaScript en acción, indica al navegador que, cuando y como hacer algo. Los navegadores web procesan el JavaScript en un solo ambiente global. Puedes tener varios archivos JavaScript pero al final de la compilación todos estos archivos JavaScript estarán en un mismo namespace. En otras palabras, se puede decir que todo se junta en un solo archivo JS. Así que debes tener mucho pero mucho cuidado cuando declares variables de manera global, porque si esta variable se vuelve a declarar en otro lado es muy probable que tu aplicativo deje de funcionar y que no tengas la mas minima idea del porque. ¿Cómo evitas la declaración de variables globales? Pues una manera efectiva es declarar las variables dentro de una función. Al hacer esto la variable se encuentra dentro del contexto de la función, ya no del documento, sin embargo la función estaría en el contexto global así que ahora deberás tener cuidado en no volver a declarar esta función porque sino estaríamos volviendo a caer en el mismo problema que intentamos solucionar.

Actualmente ya existen varias soluciones las cuales te ayudan a tener un código muy ordenado. Si quieres aprender como hacerlo [visita este otro post](https://frontendlabs.io/2643--patron-modular-en-javascript) que te explica paso a paso cómo tener una buena estructura modular en JavaScript.


### Expresiones


Se refiere a la combinación de variables, operadores, y declaraciones para evaluar un valor.

Tenemos dos tipos de expresiones, los que asignan un valor a una variable (por ejemplo, color = ‘Rojo’) y los que simplemente poseen un valor (por ejemplo, 12+5).

En el primer tipo observamos la siguiente estructura: una variable (color), un operador ( = ) y el valor (“Rojo”) .

La segunda expresión solo posee un valor y tiene la siguiente estructura: un primer valor (12) , un operador ( + ) y un segundo valor ( 5 ).

Para entender mejor esto es conveniente conocer los operadores básicos que se pueden usar.

asignación
=
+=
-=
*=
/=
%=
<<= >>=
>>>=
&=
^=
|=

multiplicación, división, adición/concatenación, sustracción
*
/
%
+
-

Mayor o igual que, Menor o igual que, mayor que, menor que
>=
<= >
<

Igualdad/Desigualdad
===
!==

Lógica
&&
||

Condicional
? :


### Funciones


Una función está estructurada principalmente de lo siguiente: la palabra function, el nombre de la función, sus parámetros, el cuerpo de la función y un return.

Ejemplo

    
    <code>function nombre(parametro1, parametro2){
    //Cuerpo de la función
    return null;
    }
    </code>


Donde el nombre de la función es opcional y los parámetros tambien, pero si es obligatorio los paréntesis que encierran los parámetros.

Osea puedo hacer esto?

    
    <code>function(){
    return 'valor retornado';
    }
    </code>


No, no puedes hacer esto debido a que no es la sintaxis correcta. Si quieres aplicar esto debes almacenarlo en una variables.

    
    <code>miFuncion = function(){
    return 'valor retornado';
    }
    </code>


Ahora cada vez que llames a miFuncion() invocará a la función con la cual está relacionada.

Este post sobre JavaScript y su Gramática nace gracias a lo comprendido por el libro “JavaScript: The Good Parts” y por la documentación de [Mozilla Developer Network](https://developer.mozilla.org/). Gracias por haber leído este post y esto seria todo por hoy.
