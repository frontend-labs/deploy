---
author: VictorJSV
comments: true
date: 2014-04-21 17:09:44+00:00
layout: post
link: https://frontendlabs.io/138--la-misteriosa-propiedad-lastindex-al-validar-un-campo-con-regex
slug: la-misteriosa-propiedad-lastindex-al-validar-un-campo-con-regex
title: La misteriosa propiedad "lastIndex" al validar un campo con Regex
wordpress_id: 138
categories:
  - Javascript
tags:
  - Expresiones regulares
  - Javascript
---

Muchas veces hemos visto casos donde era necesario validar campos como correos electrónicos, números telefónicos o cualquier otro caso con expresiones regulares y no hemos tenido ningún problema en su correcto funcionamiento, pero aveces suceden casos extraños donde es necesario revisar más a fondo el flujo de la validación.

Primero debemos entender lo que significa el **lastIndex** en una **expresión regular**.

Esta propiedad solo se asocia a los objetos **RegExp** (Expresión regular) - "global".
Para entender mejor el significado de "global",  lo explicaremos con el siguiente ejemplo.

En una expresión regular existen las banderas o flags que modifican el comportamiento de la búsqueda.

[code lang="javascript"]
var str = '\_x_x'; //Definimos una cadena

// Caso 1:
var regex1 = /x/; //Definimos la expresión regular
console.log(str.match(regex1));
//En consola saldrá: x
//Encontró una coincidencia

//Caso 2:
var regex2 = /x/g; //Definimos la expresión regular con una bandera "g" que significa "global".
console.log(str.match(regex2));
//En consola saldrá: x,x
//Encontró 2 coincidencias
[/code]

Como vemos en el CASO 2, al tener una expresión regular con la bandera "g" significa que en un contexto global va a buscar todas las coincidencias "x" que encuentre en la cadena, a diferencia del CASO 1 donde solo busca la primera coincidencia y no sigue buscando.

## LastIndex:

La propiedad lastIndex es un número que cambia cada vez que se produce una coincidencia correcta.
Los métodos test del objeto RegExp, y los métodos match, replace y split del objeto String modifican la propiedad lastIndex.

Tenemos el siguiente código, donde observamos que al aplicar el método "test" varias veces el "lastindex" se va modificando.
[code lang="javascript"]
var str = '\_x_x';
var regex = /x/g;
console.log(regex.lastIndex) //0
regex.test(str)
console.log(regex.lastIndex) //2
regex.test(str)
console.log(regex.lastIndex) //4
[/code]

La posición del lastIndex es referente a la posición donde se encontró la coincidencia.

[![lasIndex](https://frontendlabs.io/wp-content/uploads/2014/04/lasIndex1-300x220.jpg)](https://frontendlabs.io/wp-content/uploads/2014/04/lasIndex1.jpg)

Con el siguiente ejemplo podemos ver cómo se comporta el lastIndex cuando se realiza una validación por el método test():

### HTML:

[code lang="html"]
<button type="click" id="btnTest">Test</button>

<p>Cadena: _x_x</p>
<p>lastIndex: <span></span></p>
[/code]

### JavaScript:

[code lang="javascript"]
var regex = /x/g,
str = '\_x_x';

$("span").text(regex.lastIndex) //0
$('#btnTest').on('click', function(){
regex.test(str);
\$("span").text(regex.lastIndex);
/\*

- Al primer click
  //1
- Al segundo click
  //2
- Al tercer click
  //4
- Al cuarto click
  //0
  //...
  \*/
  });
  [/code]

### Ejemplo en vivo:

Como vemos el lastIndex por defecto comienza en "0" y cada vez que hacemos clic, se va actualizando hasta llegar a "4" y al no encontrar otra siguiente coincidencia se reinicia a "0".

En algunos casos vamos a encontrar con situaciones donde el "lastIndex" va a cumplir un rol muy importante a la hora de hacer validaciones por expresiones regulares, como por ejemplo la validación de un correo.

### HTML:

[code lang="html"]
<input id="txtMail" type="text" value="mi_correo@frontend.pe">
<button type="click" id="btnValidate">Validar!</button>

<p>LastIndex: <span id="spanIndex"></span></p>
<p id="pMessage"></p>
[/code]

### JavaScript:

[code lang="javascript"]
var spanIndex = $("#spanIndex"),
	message = $("#pMessage"),
txtMail = $("#txtMail"),
	regex = /^[\w-\.]+@[\w-]+(\.[A-Za-z_-]{2,4}){1,3}$/g;

spanIndex.text(regex.lastIndex);
\$('#btnValidate').on('click', function(){
var value = txtMail.val(),
valueText;

    if(regex.test(value)){
        valueText = 'SI';
    }else{
            valueText = 'NO';
    }
        message.show().text(valueText).fadeOut();
    spanIndex.text(regex.lastIndex);

});
[/code]

### Ejemplo en vivo:

En el ejemplo anterior, el correo siempre es válido, pero
**¿porqué muestra algunas veces que no lo es?**. Esto se debe al lastIndex.

## Explicación:

Después que se declara una expresión regular y se almacena en una variable con la propiedad lastIndex, este va a tomar por defecto el valor de 0.

[code lang="javascript"]
var regex = /^[\w-\.]+@[\w-]+(\.[A-Za-z_-]{2,4}){1,3}\$/g;
console.log(regex.lastIndex); //0
[/code]

En primer lugar notamos que el lastIndex por defecto está en "0" y al hacer el **1er click**, valida correctamente mostrando que el **correo sí es válido**, pero notamos que el lastIndex se modificó a 21 (que es la posición donde lo encontró).

En segundo lugar notamos que lastIndex tiene el valor de 21 y al hacer el 2do click, notamos que vuelve a "0", pero **muestra que el correo no es válido**.

Esto sucede debido a que el lastIndex (en el segundo click) tiene el valor de 21 y va a buscar a partir de esa posición la siguiente coincidencia, pero al estar en la última posición de la cadena va a volver a "0", **mostrando que el correo no es válido.**

[![explicacion](https://frontendlabs.io/wp-content/uploads/2014/04/explicacion.jpg)](https://frontendlabs.io/wp-content/uploads/2014/04/explicacion.jpg)

Para poder solucionar este problema y que siempre se muestre válido, hay que **volver a asignar el valor del lastindex a "0"** dentro de la función click.
[code lang="javascript"]
regex.lastIndex = 0; //Aqui donde le volvemos a asignar el valor "0"
[/code]

El código quedaría de la siguiente forma.
[code lang="javascript"]
var spanIndex = $("#spanIndex"),
    message = $("#pMessage"),
txtMail = $("#txtMail"),
    regex = /^[\w-\.]+@[\w-]+(\.[A-Za-z_-]{2,4}){1,3}$/g;

spanIndex.text(regex.lastIndex);
\$('#btnValidate').on('click', function(){
var value = txtMail.val(),
valueText;

    regex.lastIndex = 0; //Aqui donde le volvemos a asignar el valor "0"
    if(regex.test(value)){
        valueText = 'SI';
    }else{
        valueText = 'NO';
    }
        message.show().text(valueText).fadeOut();
    spanIndex.text(regex.lastIndex);

});
[/code]

### Ejemplo en vivo:

De esta manera solucionamos el problema de la validación por expresión regular manipulando el lastIndex. Hay que observar que la declaración de la expresión regular es almacenada en la variable **"regex"** que está fuera de la función.

[code lang="javascript"]
var regex = /^[\w-\.]+@[\w-]+(\.[A-Za-z_-]{2,4}){1,3}\$/g;
[/code]

Si la variable **"regex"** hubiese estado dentro de la función click, ya no era necesario igualar a "0" porque cada vez que se ejecuta la función "click", se volverá a declarar la variable regex por ende su lastIndex es "0".

[code lang="javascript"]
var spanIndex = $("#spanIndex"),
    message = $("#pMessage span"),
txtMail = \$("#txtMail");

$('#btnValidate').on('click', function(){
   // La variable regex está dentro de la función
   var value = txtMail.val(),
       regex = /^[\w-\.]+@[\w-]+(\.[A-Za-z_-]{2,4}){1,3}$/g,
valueText;
//regex.lastIndex = 0; // Ya no es necesario.
if(regex.test(value)){
valueText = 'SI'
}else{
valueText = 'NO'
}
message.show().text(valueText).fadeOut();
spanIndex.text(regex.lastIndex);
});
[/code]

### Ejemplo en vivo:

Para aprender sobre expresiones regulares, puedes visitar este [link](https://frontendlabs.io/1621--aprender-expresiones-regulares-en-espanol-videotutorial-parte-1) donde explica cómo entenderlos.
