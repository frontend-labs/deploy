---
author: erikfloresq
comments: true
date: 2014-07-14 22:17:32+00:00
layout: post
link: https://frontendlabs.io/1132--que-son-web-components-y-polymer-js
slug: que-son-web-components-y-polymer-js
title: Web Components con Polymer
wordpress_id: 1132
categories:
- Css
- Html
- Javascript
tags:
- Automatización
- CSS3
- HTML5
- Stylus
- Tutorial
- Web Components
---

**Actualización**

El siguiente post se desarrollo cuando Polymer se encontraba en su version 0.5, en la reciente Google IO del 2015 se acaba de lanzar la version 1.0 de Polymer, la cual trae muchas novedades, como por ejemplo:



	
  * Sporte para Offline

	
  * Soporte para recibir notificaciones mediante Chrome

	
  * Nuevos packs de componentes, entre los mas interesantes Google Web Componentes, con lo que ahora podremos usar los servicios de google usando componentes.

	
  * El lanzamiento de su Polymer Starter Kit, que es un tipo de boilerplate para el desarrollo de componentes  con polymer pero usando herramientas como gulp, browserSync.


En los próximos dias se estará desarrollando un post sobre esta version de polymer que se ve mas interesante aún.

**Inicio del Post**

Cuando hablamos de Polymer tenemos que pensar en Web Components, ya que Polymer de por sí es una librería para la creación fácil de Web Components.


## Web Components


No es un tema para nada nuevo, yo ya había escuchado desde hace un tiempo sobre una nueva forma de hacer la web y al parecer se refería a esto. Cuando se plantea la teoría de Web Components, lo primero que se comenta es que para desarrollar la web en la actualidad se manejan un sin fin de plugins, archivos css de gran peso y un desarrollo en html que en la mayoría de los casos puede resultar un caos cuando de proyectos grandes se trata ya que termina siendo para nada entendible y gigante.

Lo que propone Web Components es simple, crear nuestros propios componentes web, por ejemplo nosotros tenemos esto :

[sourcecode language="html"]
<select>
 <option>Item 1</option>
 <option>Item 2</option>
 <option>Item 3</option>
</select>

<video></video>
[/sourcecode]

y a los cuales se le pueden agregar configuraciones a manera de atributos para poder dar mayores funcionalidades, por ejemplo:

[sourcecode language="html"]
<select size="3" multiple>
 <option>Item 1</option>
 <option>Item 2</option>
 <option>Item 3</option>
</select>

<video src="video.mp4" controls autoplay preload></video>
[/sourcecode]

**Lo que propone Web Componentes es un escenario donde nosotros mismo creemos nuestros propios elementos para que estos puedan ser reutilizables , mantenibles y de fácil lectura.**
En internet existe muchas opciones para hacer menus desplegables, ligthbox, mapas, sliders, en donde en algunos casos son difíciles o tediosos de implementar.

[caption id="attachment_1198" align="aligncenter" width="504"][![Aquí se muestra las multiples formas de hacer un menú con tabs, todas diferentes, pero que al final hacen lo mismo.](https://frontendlabs.io/wp-content/uploads/2014/07/opcionesDeSelect.png)](https://frontendlabs.io/wp-content/uploads/2014/07/opcionesDeSelect.png) Aquí se muestra las multiples formas de hacer un menú con tabs, todas diferentes, pero que al final hacen lo mismo.[/caption]

Además de lo mencionado lineas arriba, tenemos el siguiente problema, que es la legibilidad de nuestro html,que en proyectos muy grandes es muy difícil de mantener y por ende entender, como por ejemplo:

[caption id="attachment_1205" align="aligncenter" width="532"][![Aveces necesitamos que el html con el que trabajamos sea más explicito para hacerlo mantenible.](https://frontendlabs.io/wp-content/uploads/2014/07/html_intendible.png)](https://frontendlabs.io/wp-content/uploads/2014/07/html_intendible.png) Aveces necesitamos que el html con el que trabajamos sea más explicito para hacerlo mantenible.[/caption]

Para olvidarnos de eso, Web Componentes nos propone tener algo así:

[sourcecode language="html"]
<web-tabs>
 <web-tab>Item 1</web-tab>
 <web-tab>Item 2</web-tab>
 <web-tab>Item 3</web-tab>
</web-tabs>
[/sourcecode]

Crear un componente personalizado donde tengamos una forma más explicita de entender que lo que estamos trabajando son un menu de tabs.
Entonces para lograr la construcción de un Web Component se tiene que tener en cuenta los siguiente :
- **Templates** : es donde se define la estructura del componente.
- **Decorators** : es el css que se aplica al componente.
- **Custom Elements** : permite crear nuevos componentes a la cual se le puede agregar funcionalidades.
- **Shadow Dom** : encapsula un sub árbol DOM para la composición más fiable de elementos de la interfaz de usuario.
- **Imports** : se define las plantillas, decoradores y elementos con los que se trabajara.

**"En pocas palabras Web Components usa un comportamiento de Encapsulamiento"**

Un ejemplo más directo es el siguiente:

[caption id="attachment_1209" align="aligncenter" width="489"][![Vemos todo lo que tenemos que poner para implementar google maps](https://frontendlabs.io/wp-content/uploads/2014/07/google_maps_script.png)](https://frontendlabs.io/wp-content/uploads/2014/07/google_maps_script.png) Vemos todo lo que tenemos que poner para implementar google maps[/caption]

Y si pensamos en Web Components la implementación de google maps podría ser de la siguiente manera:

[sourcecode language="html"]
<!-- Mapa simple -->
<google-map></google-map>
<!-- Mapa con mas configuraciones -->
<google-map lat="37.435345345" long="-12.345345" zoom="14"></google-map>
[/sourcecode]

Si lo se, es genial! Pero como les mencione Web Components no es nuevo ya tiene su tiempo y google ya viene trabajando en esto y tiene un [repositorio donde tiene varios componentes](https://github.com/GoogleWebComponents) muy cheveres.

Para ir entendiendo mejor,veamos un ejemplo más aplicativo, en el caso que nosotros queramos implementar un slider, tendríamos que hacer los siguiente:

[sourcecode language="html"]
  <script src="jquery.sliderBajadoDeInternet.js"></script>
  <link href="slider.css" rel="stylesheet" />
  <div id="slider">
    <div><img src="imagen1.jpg" alt="imagen 1" /></div>
    <div><img src="imagen2.jpg" alt="imagen 2" /></div>
  </div>
  <script>
    $(function(){
      $("#slider").sliderBajadoDeInternet();
    });
  </script>
[/sourcecode]

Hasta ahí lo típico, pero la idea con Web Components es simplemente colocar esto :

[sourcecode language="html"]
  <!-- Importar elemento -->
  <link rel="import" href="slider.html"></link>
  <!-- Usar Elemento -->
  <slider></slider>
[/sourcecode]

Y listo, todo lo que hicimos en las primeras lineas, sería reemplazado por esas dos lineas, una de las cosas más rescatables es que ganamos un html mas entendible.
Pero de por si crear Web Components puede ser una tare ardua y es por ese motivo que se crea polymer.


## Polymer


Es una librería muy completa que nos ayuda a la creación de Web Components de una manera mas fácil y pensando siempre en crear en un ecosistema de componentes.

Para crear un Web Component (también conocido como elemento) con Polymer primero tienes que saber manejar un poco de [bower](https://frontendlabs.io/453--trabajar-con-bower) ya que así será más fácil manejar las dependencias.

Primero tenemos que obtener Polymer

[sourcecode language="bash"]
 bower install --save Polymer/polymer
[/sourcecode]

Lo cual generaría los siguiente
[![Bower genera lo siguiente](https://frontendlabs.io/wp-content/uploads/2014/07/polymer_carpeta.png)](https://frontendlabs.io/wp-content/uploads/2014/07/polymer_carpeta.png)

Con lo que hemos descargado podemos generar nuestros propios elementos, pero Polymer ya tiene una buena cantidad de elementos propios de su core y ademas tiene elementos trabajados en base al estilo de 'Material Design' el nuevo paradigma de diseño que propuso google en su evento de desarrollo hace poco.
Si queremos obtener los mismo tenemos que hacer lo siguiente:

[sourcecode language="bash"]
 //este es para obtener los elementos como por ejemplo para hacer peticiones ajax
 bower install --save Polymer/core-elements

 // este es para obtener los elementos de material design
 bower install --save Polymer/paper-elements
[/sourcecode]

Para usar polymer se tiene que hacer dos cosas:
1. Importar el core de polymer que es el archivo polymer.html
2. Para declarar el elemento se usa la etiqueta

[sourcecode language="html"]
  <link rel="import" href="../bower_components/polymer/polymer.html">
  <!-- El atributo name es donde se colocara el nombre del elemento, que este caso se llamaría "nuevo-elemento" -->
  <!-- y se utilizaría usando el tag <nuevo-elemento> -->
  <polymer-element name="nuevo-elemento" noscript>
   <template>
    <span>Esto es <b>nuevo elemento</b>. Esto es un Shadow DOM.</span>
   </template>
  </polymer-element>
[/sourcecode]

Con esto ya tendríamos la plantilla básica para crear un elemento personalizado.

Pero una de las cosas buenas de polymer es la reutilización, por ejemplo podemos usar un elemento ya creado, para la creación de otro

[sourcecode language="html"]
 <link rel="import" href="../bower_components/polymer/polymer.html">
 <link rel="import" href="../bower_components/core-ajax/core-ajax.html">

 <polymer-element name="my-element" noscript>
   <template>
     <span>I'm <b>my-element</b>. This is my Shadow DOM.</span>
     <core-ajax url="http://example.com/json" auto response="{{resp}}"></core-ajax>
     <textarea value="{{resp}}"></textarea>
   </template>
 </polymer-element>
[/sourcecode]

Para este caso vemos que se usa el elemento para la obtención de datos que se usa al momento de crear el elemento

Ahora, crearemos un elemento para la creación de una tarjeta la cuál llamaremos card-person.html, para ver como se le agregan atributos a un elemento nuevo:

[sourcecode language="html"]
 <!- card-person.html -->
 <link rel="import" href="/components/polymer/polymer.html">
 <polymer-element name="card-person">
  <template>
   <div class="itemCard" style="background:{{color}}">
    <h1>{{name}}</h1>
   </div>
  </template>
  <script>
    Polymer('card-person', {
      name: "Erik",
      color: "#ccc"
    });
  </script>
 </polymer-element>
[/sourcecode]


[sourcecode language="html"]
<!-- Implementación -->
<!DOCTYPE html>
<html>
  <head>
    <script src="webcomponents.js"></script> <!-- esto desde la versión 0.5.1 -->
    <link rel="import" href="card-person.html">
  </head>
  <body>
    <card-person></card-person>
  </body>
</html>
[/sourcecode]

Para hacernos la vida un poco mas fácil, tenemos un [polymer-boilerplate](https://github.com/webcomponents/polymer-boilerplate) aunque también se da la opción de usar el [generador-element](https://www.npmjs.org/package/generator-element) que es un npm el cual se usaría con Yeoman, es decir:

[sourcecode language="bash"]
 // se instala el npm
 npm install generator-element

 // se genera el elemento gracias a yeoman
 yo element
[/sourcecode]

Para ayudarnos mas tenemos [customelements.io](http://customelements.io) donde tenemos una buena colección de elementos creados, ansiosos por ser usados.

P.D Aquí les dejo la [especificación de la w3c](http://www.w3.org/TR/components-intro/), en el caso que quieran ver los precedentes de polymer.

[@erikfloresq](http://twitter.com/erikfloresq)
