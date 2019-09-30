---
author: VictorJSV
comments: true
date: 2014-08-08 16:00:18+00:00
layout: post
link: https://frontendlabs.io/1621--aprender-expresiones-regulares-en-espanol-videotutorial-parte-1
slug: aprender-expresiones-regulares-en-espanol-videotutorial-parte-1
title: Aprende Expresiones Regulares en español (videoTutorial) - Parte 1
wordpress_id: 1621
categories:
- tutorial
tags:
- Código
- Expresiones regulares
- Javascript
---

Muchas veces nos encontramos con situaciones en donde se tiene que validar un campo o hacer un filtro con expresiones regulares y otras situaciones como:



	
  * Validar un campo que sólo ingrese números.

	
  * Validar un correo

	
  * Realizar filtros de búsquedas

	
  * etc ..


Y lo que comúnmente se hace es buscar la expresiones regulares, copiarlas y pegarlas en nuestro código, dejando de lado lo que significan esos misteriosos símbolos que están en la expresión regular.

En esta oportunidad aprenderemos por medio de un video-tutorial lo que son estos símbolos en las expresiones regulares y de cómo entenderlas.

Las expresiones regulares que serán explicadas en el video, se detallan a continuación:
<table width="790" style="height: 177px;" class="cheatsheet" >
<tbody >
<tr >
Expresiones Regulares
</tr>
<tr >

<td >.
</td>

<td >cualquier carácter excepto saltos de linea
</td>
</tr>
<tr >

<td >\w \d \s
</td>

<td >palabra, dígito, espacios en blanco
</td>
</tr>
<tr >

<td >\W \D \S
</td>

<td >todo lo que no sea palabra, espacios en blanco
</td>
</tr>
<tr >

<td >[abc]
</td>

<td >cualquiera que sea "a" o "b", o "c"
</td>
</tr>
<tr >

<td >[^abc]
</td>

<td >cualquiera que no sea "a" ni "b", ni "c"
</td>
</tr>
<tr >

<td >[a-g]
</td>

<td >cualquier carácter que esté entre a & g
</td>
</tr>
</tbody>
</table>



## Métodos javascript donde se usa expresiones regulares




### Test :


Función para revisar si la cadena cumple o no con la expresión regular.

[code lang="javascript"]
var str = 'los buenos tacos son opacos';
console.log(/o/g.test(str));
//true
[/code]
Explicación: Evalua en toda la cadena si contiene o no la letra o



### Replace :


Función para reemplazar en la cadena lo que buscamos por un expresión regular y luego reemplazarla.

[code lang="javascript"]
var str = 'los buenos tacos son opacos';
console.log(str.replace(/buenos/g,’malos’));
//los malos tacos son opacos
[/code]
Explicación: Reemplaza en la cadena la palabra buenos por malos



### Split :


Función para dividir una cadena según la expresión regular que indiquemos.

[code lang="javascript"]
var str = 'los buenos tacos son opacos';
console.log(str.split(/ /g));
//[“los”,“buenos”,“tacos”, “son”,”opacos”]
[/code]
Explicación: Divide la cadena cada vez que se encuentre un espacio en blanco



### Match :


Función para buscar en una cadena por medio de una expresión regular.

[code lang="javascript"]
var str = 'los buenos tacos son opacos';
console.log(str.match(/o/g));
//["o", "o", "o", "o", "o", "o"] 
[/code]
Explicación: Busca en la cadena todas las letras o

**Más adelante seguiremos explicando sobre este tema**
