---
author: jansanchez
comments: true
date: 2015-05-02 16:59:04+00:00
layout: post
link: https://frontendlabs.io/2456--javascript-ejemplos-substring-split-replace-trim
slug: javascript-ejemplos-substring-split-replace-trim
title: Javascript Ejemplos de uso de los métodos substring, split, replace y trim
wordpress_id: 2456
categories:
- Javascript
tags:
- Coffescript
- download
- ECMAScript
- Estándar
- Front-End
- Javascript
- jQuery
- json
- Lenguaje de programación
- Nodejs
- pdf
- Sintaxis
- Tutorial
- ya
---

## Javascript Ejemplos de métodos más usados



En este artículo buscamos clarificar un poco más la definición y los ejemplos funcionales de algunos de los métodos Javascript más usados, realizando un ejemplo para cada regla dentro de cada método y así poder entender mejor ¿cómo? y ¿en que casos usarlos?.



## Método Substring de Javascript



El método substring() sirve para extraer un conjunto de carácteres desde una cadena de texto.
Para usar este método se deben especificar como máximo 2 parámetros. Al ejecutar este método nos retornará la sub-cadena que se encuentre dentro del rango que hemos especificado.

Este método extrae los carácteres de una cadena entre el **"inicio"** y **"fin"**, sin incluir el **"fin"** en el resultado, veamos un ejemplo.


    
    
    <code>
    var cadena = "cadena de texto",
        inicio = 10,
        fin    = 15,
        subCadena = cadena.substring(inicio, fin);
    
    console.log(subCadena); // la consola devolverá: texto
    </code>
    



Si ingresamos un **"inicio"** ó **"fin"** que sea menor a 0, el método substring() lo tratará como sí hubiésemos puesto 0(cero es el valor mínimo), cabe resaltar que el parámetro **"fin"** es opcional(si no le damos un fin entonces usa el final de la cadena de texto original), veamos un ejemplo.


    
    
    <code>
    var cadena = "cadena de texto",
        inicio = -5,
        subCadena = cadena.substring(inicio);
    
    console.log(subCadena); // la consola devolverá: cadena de texto
    </code>
    


  
  

Si el **"inicio"** es mayor que el **"fin"**, este método intercambiará los dos argumentos, veamos un ejemplo.


    
    
    <code>
    var cadena = "cadena de texto",
        subCadena = cadena.substring(15, 10);
    
    console.log(subCadena); // la consola devolverá: texto
    </code>
    



Javascript recibe la siguiente instrucción cadena.substring(15, 10) y al validar que el 1er argumento es mayor que el 2do, entonces nos retornará el resultado de cadena.substring(10, 15).



<blockquote>Nota: El [método substring()](http://www.w3schools.com/jsref/jsref_substring.asp) no modifica la cadena original.</blockquote>






## Método Split de Javascript



El método split() sirve para dividir o cortar una cadena de texto en sub-cadenas y luego retornar un arreglo(array) de estas.
Este método también tiene como máximo 2 parámetros, el primer parámetro es el **separador** y el segundo parámetro es el **limite**, ambos son opcionales.

El parámetro **separador** especifica el carácter o la expresión regular que se utilizará para la dividir la cadena de texto principal.
Si se omite este parámetro, entonces Javascript devuelve toda la cadena original en un arreglo con un solo elemento.

El parámetro **limite** especifica el número limite de divisiones permitidas, los elementos después del límite de la división no serán incluidos en el arreglo.

Veamos un ejemplo:
 

    
    
    <code>
    var cadena = "cadena de texto",
        separador = " ", // un espacio en blanco
        limite    = 2,
        arregloDeSubCadenas = cadena.split(separador, limite);
    
    console.log(arregloDeSubCadenas); // la consola devolverá: ["cadena", "de"]
    </code>
    




Probemos ahora omitiendo el parámetro **limite**:


    
    
    <code>
    var cadena = "cadena de texto",
        separador = " ", // un espacio en blanco
        arregloDeSubCadenas = cadena.split(separador);
    
    console.log(arregloDeSubCadenas); // la consola devolverá: ["cadena", "de", "texto"]
    </code>
    




Y ahora omitamos los 2 parámetros:


    
    
    <code>
    var cadena = "cadena de texto",
        arregloDeSubCadenas = cadena.split();
    
    console.log(arregloDeSubCadenas); // la consola devolverá: ["cadena de texto"]
    </code>
    





Y ¿Qué pasa sí especificamos una cadena vacía como separador?:


    
    
    <code>
    var cadena = "cadena de texto",
        separador = "",
        arregloDeSubCadenas = cadena.split(separador);
    
    console.log(arregloDeSubCadenas);
    // la consola devolverá: ["c", "a", "d", "e", "n", "a", " ", "d", "e", " ", "t", "e", "x", "t", "o"]
    </code>
    





<blockquote>Nota: El [método split()](http://www.w3schools.com/jsref/jsref_split.asp) no modifica la cadena original.</blockquote>








## Método replace de Javascript



El método replace() busca un valor dentro de una cadena y devuelve una nueva cadena en la que se sustituyen los valores especificados por un nuevo valor indicado previamente. 

Este método tiene 2 parámetros, el primer parámetro es el **patrón** ó valor a buscar, este también puede ser una expresión regular y será remplazado por el nuevo valor. 
El segundo parámetro es el **nuevo valor**, el cual será quien remplazé al valor indicado en el patrón, el segundo parámetro también puede ser una función.

Veamos un ejemplo:
 

    
    
    <code>
    var cadena = "cadena de texto",
        patron = "texto",
        nuevoValor    = "oro",
        nuevaCadena = cadena.replace(patron, nuevoValor);
    
    console.log(nuevaCadena); // la consola devolverá: cadena de oro
    </code>
    




Probemos ahora usando expresiones regulares, con remplazo global:


    
    
    <code>
    var cadena = "cadena de texto",
        patron = /e/g,
        nuevoValor    = "3",
        nuevaCadena = cadena.replace(patron, nuevoValor);
    
    console.log(nuevaCadena); // la consola devolverá: cad3na d3 t3xto
    </code>
    




Ahora probemos ahora usando expresiones regulares, con remplazo global pero case-insensitive:


    
    
    <code>
    var cadena = "cadena DE texto",
        patron = /e/gi,
        nuevoValor    = "3",
        nuevaCadena = cadena.replace(patron, nuevoValor);
    
    console.log(nuevaCadena); // la consola devolverá: cad3na D3 t3xto
    </code>
    



Y finalmente probemos usando una función anonima como segundo parámetro, y modificaremos el resultado conviertendolo a mayúsculas:


    
    
    <code>
    var cadena = "cadena de texto",
        patron = /e/gi,
        nuevoValor = function(texto){return texto.toUpperCase()},
        nuevaCadena = cadena.replace(patron, nuevoValor);
    
    console.log(nuevaCadena); // la consola devolverá: cadEna dE tExto
    </code>
    





<blockquote>Nota: El [método replace()](http://www.w3schools.com/jsref/jsref_replace.asp) no modifica la cadena original.</blockquote>

















## Método trim de Javascript



El método trim() devuelve la misma cadena pero sin de los espacios en blanco en ambos extremos.

Actualmente este método es soportado de manera nativa por algunos navegadores modernos como Google Chrome, Mozilla Firefox, IE9+.

Un ejemplo de su uso:


    
    
    <code>
    var cadena = "  cadena de texto con espacios en blanco  ",
        nuevaCadena = cadena.trim();
    
    console.log(nuevaCadena); // la consola devolverá: cadena de texto con espacios en blanco
    </code>
    





### Polyfill



Para hacer que funcione en un navegador en el cual no esta implementado podemos usar el siguiente polyfill, poniendo este código antes de llamar a tus scripts: 

 

    
    
    <code>
    if(typeof String.prototype.trim !== 'function') {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, ''); 
        }
    }
    </code>
    




Si no te convence, aquí te dejamos otro polyfill, creado por nuestros amigos de Mozilla:


    
    
    <code>
    if (!String.prototype.trim) {
        (function() {
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
            return this.replace(rtrim, '');
            };
        })();
    }
    </code>
    






<blockquote>Nota: El [método trim()](http://www.w3schools.com/jsref/jsref_trim_string.asp) no modifica la cadena original.</blockquote>





Bueno y así llegamos a la parte final del artículo, esperamos que les haya sido de utilidad encontrar algunos ejemplos de los métodos Javascript más usados. Y si estás interesado en Aprender React, aquí te dejamos con un [tutorial básico para aprender React JS](https://frontendlabs.io/3501--react-js-demo-basica-talleres-web).


![Javascript Ejemplos](https://frontendlabs.io/wp-content/uploads/2014/11/logofe.png)
