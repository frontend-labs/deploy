---
author: jjhoncv
comments: true
date: 2014-08-04 19:38:44+00:00
layout: post
link: https://frontendlabs.io/989--conceptos-basicos-de-javascript-para-la-animacion-html5
slug: conceptos-basicos-de-javascript-para-la-animacion-html5
title: "Conceptos básicos de Animación - Parte 1: Loops"
wordpress_id: 989
categories:
  - desarrollo de juegos
  - Javascript
tags:
  - Canvas
  - Juegos
  - Tutorial
---

La animación es movimiento. El movimiento es un cambio en la posición de un objeto en el tiempo de tal forma que un minuto esta aquí, y al minuto siguiente, esta por allá. Mediante la aplicación de fórmulas matemáticas para la ubicación de un objeto, se puede determinar su posición siguiente y afectar el comportamiento del objeto. Pero la animación no es sólo el movimiento, también es el cambio de cualquier atributo visual: forma, tamaño, orientación, color, etc. Así mismo es importante decir que el tiempo es un componente fundamental para la animación. Es el mecanismo utilizado para expresar el cambio en un objeto de una posición a la siguiente.

## Soporte Canvas HTML5

Canvas es una etiqueta de HTML5 para en ella crear animaciones, es nuestro lienzo de trabajo, la etiqueta canvas tiene soporte por la mayoría de los navegadores modernos.

<table width="100%" align="center" border="0" id="browsers" >
<tbody >
<tr >

<td >IE
</td>

<td >Firefox
</td>

<td >Safari
</td>

<td >Chrome
</td>

<td >Opera
</td>

<td >iOS Safari
</td>

<td >Android Browser
</td>
</tr>
<tr >

<td >9+
</td>

<td >3.5+
</td>

<td >3.2+
</td>

<td >9+
</td>

<td >10.6+
</td>

<td >3.2+
</td>

<td >2.1+
</td>
</tr>
</tbody>
</table>
En caso de que la etiqueta canvas no se admite en el navegador, se puede incluir dentro de las mismas un mensaje de advertencia:

[code lang="html"]
<canvas width="400" height="400">

<p>Este navegador no soporta el elemento canvas.</p>
</canvas>
[/code]

El mensaje de advertencia aparece sólo si el navegador no reconoce la etiqueta canvas. Si el navegador soporta canvas entonces lo renderiza y pasa por alto el elemento <p> anidado.

[code lang="javascript"]
if (document.createElement('canvas').getContext) {
console.log("El elemento canvas es soportado.");
}
[/code]

## Documento básico HTML5

Una de las mejores partes de hacer una animación en la web, es lo fácil de crearla, a continuación vemos un ejemplo de una estructura básica.

[code lang="html"]

<!doctype html>

<canvas id="canvas" width="400" height="400"></canvas><script>// <![CDATA[
window.onload = function () {
//Aquí va tu codigo...
};

// ]]></script>[/code]

Nuestro codigo se colocaría dentro de la función onload, debido a que este se ejecuta, cuando ya termino de cargar todo los elementos del documento. Si el documento tiene muchos datos incrustados lo mejor no seria usar esta técnica, mas adelante les enseñare otra técnica.

## Bucles o loops de animación

Todas las animaciones son expresadas como una especie de bucle, entonces la animación seria expresada como fotograma en fotograma, en donde cada fotograma tendría posición, el tamaño, color y otros atributos de todos los objetos dibujados en el canvas.

[caption id="attachment_1416" align="aligncenter" width="376"]![animación html5](https://frontendlabs.io/wp-content/uploads/2014/07/imagenesFrame.png)](https://frontendlabs.io/wp-content/uploads/2014/07/imagenesFrame.png) Animación frame por frame[/caption]

Por lo tanto, si tenemos una pelota que se mueve, entonces en cada frame tendríamos que almacenar la posición de la pelota. Entonces en el frame 1 indicaría la posición de la pelota de 10 píxeles desde la parte izquierda, en el frame 2 indicaría que es 15 píxeles, y así sucesivamente. El código lee estos datos, dibuja el objeto de acuerdo a la descripción dada, y muestra el fotograma.

[caption id="attachment_1417" align="aligncenter" width="474"]![imagenesFrameRender](https://frontendlabs.io/wp-content/uploads/2014/07/imagenesFrameRender.png) Procesando y luego para mostrar frames[/caption]

Pero si nos damos cuenta la forma en que describimos una animación con código dinámico se parece más este diagrama de flujo.

[caption id="attachment_1418" align="aligncenter" width="464"]![imagenesFrameRenderBucle](https://frontendlabs.io/wp-content/uploads/2014/07/imagenesFrameRenderBucle.png) Animación del Script[/caption]

Entonces podemos entender a que nos referimos con un bucle. En primer lugar se configura el estado inicial, después se aplican las reglas como por ejemplo mover una pelota 5 pixeles hacia la derecha, referente a las reglas tendríamos un conjunto de reglas que puedan manejar todas las situaciones posibles que puedan surgir en la escena.

Siempre se comienza con un comportamiento sencillo mediante la creación de una regla o dos, y cuando eso funciona, se agrega otra regla. Las reglas a que nos referimos en realidad son declaraciones, en el caso de mover las bolas 5 pixeles a la derecha, se expresa en javascript así:

[code lang="javascript"]
ball.x = ball.x + 5;
[/code]

Esta es la secuencia de las acciones que debe tomar en cada frame de la animación:

1. Ejecutar todo el código que es necesario para este frame.

2) Dibuja todos los objetos con el elemento canvas.

3. Reiniciar el proceso para renderizar el siguiente frame.

Ahora con estos puntos vamos a crear una función que podamos llamar varias veces para actualizar la posición del objeto y traerlo hacia el elemento canvas, luego creamos un temporizador javascript para configurar el bucle.

[code lang="javascript"]
function drawFrame () {
ball.x += 1;
ball.draw(context);
}
window.setInterval(drawFrame, 1000/60);
[/code]

La función drawFrame actualiza la posición y dibuja la pelota en el canvas. Pasamos como primer parámetro la función drawFrame y como segundo parámetro el tiempo a la función window.setInterval, que ejecuta varias veces esta función en un intervalo especificado en mili segundos. En este ejemplo, eso es 1000/60, que es de 60 frames por segundo, o alrededor de 17 ms.

El problema de esto, es que la función setInterval nunca fue creada para hacer animaciones no son exactos a resoluciones en milisegundos varían a través de los browsers, no se puede tratar con ellos para animaciones de alta calidad, también si se desea animaciones suaves se deben de pintar frames mas rápido que la pantalla pueda mostrar, comúnmente las pantallas tienen una frecuencia de 60 cuadros por segundo o FPS, esto da como resultado el calculo innecesario, otro problema con el uso de setInterval o setTimeout es que las animaciones continuarán funcionando incluso si la página no es visible para el usuario.

Debido a que la animación no era una característica del html los navegadores no habían puesto mucha prioridad a este tipo de optimizaciones. Sin embargo con el elemento canvas de HTML5 optimizaron este punto débil,  mejorando el  rendimiento y velocidad en la animación.

## Un loop de animación utilizando requestAnimationFrame

Debido al creciente interés en la animación basada en HTML5, los navegadores web han implementado una API, que permite hacer animaciones a los desarrolladores que están utilizando JavaScript, lo cual optimiza la animación en el navegador. La función window.requestAnimationFrame acepta una función callback como argumento que ejecuta antes de volver a dibujar en la pantalla. Para crear un bucle de animación, encadenar varias llamadas a requestAnimationFrame.

[code lang="javascript"]
(function drawFrame () {
window.requestAnimationFrame(drawFrame, canvas);

//animation code...
}());
[/code]

Hemos definido una función, drawFrame, que contiene el código de animación para ejecutar en cada frame. En la primera línea en esta función, hacemos un llamado a window.requestAnimationFrame y pasamos una referencia a la misma función "drawFrame" que estamos definiendo, el segundo argumento opcional es el elemento canvas que vamos a dibujar.

Cuando ejecutamos la función drawFrame, window.requestAnimationFrame pone en cola la función de drawFrame para ejecutarse nuevamente en el siguiente intervalo de animación. Cuando hacemos que la función corra de nuevo estamos haciendo un bucle. Por lo tanto, cualquier código que colocamos dentro de esta función se llama una y otra vez.

[code lang="javascript"]
if (!window.requestAnimationFrame) {
window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function (callback) {
return window.setTimeout(callback, 1000/60);
});
}
[/code]

Esta función verifica si window.requestAnimationFrame esta definida, si no lo esta, verifica con algunas de las funciones para distintas versiones del browsers, si no se puede encontrar una versión especifica se ejecuta la función setTimeout en un intervalo de 60 fps, un estandar entre los monitores para soportar animaciones.

Y mediante este proceso se realizarían los bucles o loops para realizar nuestras animaciones, en el siguiente post hablaremos del elemento canvas, que justamente lo vemos en este ejemplo.

See the Pen [LvCJx](http://codepen.io/jjhoncv/pen/LvCJx/) by Jhonnatan ([@jjhoncv](http://codepen.io/jjhoncv)) on [CodePen](http://codepen.io).
