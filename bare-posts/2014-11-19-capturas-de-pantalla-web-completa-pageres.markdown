---
author: jansanchez
comments: true
date: 2014-11-19 07:05:24+00:00
layout: post
link: https://frontendlabs.io/2085--capturas-de-pantalla-web-completa-pageres
slug: capturas-de-pantalla-web-completa-pageres
title: Capturas de pantalla web automatizadas y en todos los tamaños con Pageres
wordpress_id: 2085
categories:
- Automatización
tags:
- Automatización
- Front-End
- Grunt
- Gulp
- Javascript
- Linux
- Nodejs
- Responsive
---

## Pageres ¿Qué es?



Pageres es un programa en Node.js que realiza capturas de pantalla(screenshots, pantallazos, etc) de uno o más sitios web en los tamaños que tú le indiques y tan sólo con una simple línea de comando o configurando algún automatizador como [Grunt.js](https://frontendlabs.io/146--grunt-js-espanol-tutorial-basico-primeros-pasos), [Gulp.js](https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos), etc.

**Olvídate de estar ingresando** a todas las secciones de tu sitio web Responsive para ver si no hay ningún descuadre y para revisarlo en todos los tamaños que te pide el cliente, como por ejemplo: 360x640, 320x568, 480x800 y 768x1024 pixeles.



## ¿A que velocidad trabaja Pageres?



Es muy rápido y genera 100 capturas de pantalla de 10 sitios web diferentes en poco más de un minuto, así que no hay excusas para no usarlo.



## ¿Cómo instalo Pageres?



Previamente necesitas tener instalado [Node.js](https://frontendlabs.io/232--como-instalar-nodejs-debian-linux) y NPM.
Luego para instalar Pageres de forma global en tu sistema escribes lo siguiente en tu terminal:


    
    
    <code>
    sudo npm install --global pageres-cli
    </code>
    





## ¿Cómo uso Pageres?



Es simple, puedes especificar las direcciones URL y las resoluciones de pantalla como argumentos. El orden no importa.
Las imágenes generadas se guardan en el directorio actual(desde donde se ejecutó el comando).

Ejecutando Pageres desde el terminal aún no se puede especificar una ruta donde serán generadas las imágenes. Pero usando su API Javascript, sí es posible, eso lo veremos más adelante en la sección **¿Cómo uso Pageres con Gulp.js?**.

A continuación veamos las distintas maneras de usar Pageres:




### 1 dominio y 2 tamaños distintos



Con el siguiente comando tomaremos 1 screenshot del sitio frontendlabs.io en 2 tamaños distintos(360x640 y 320x568 pixeles), escribiendo lo siguiente:


    
    
    <code>
    pageres frontendlabs.io 360x640 320x568
    </code>
    



Cuando el proceso haya terminado Pageres nos mostrará un mensaje parecido al siguiente:


    
    
    <code>
    ✔ Generated 2 screenshots from 1 url and 2 resolutions
    </code>
    



Con el cual nos indica que ha generado 2 capturas de pantalla desde una url y en base a 2 resoluciones.

Tengan en cuenta que solo pondré como ejemplo imágenes con un alto fijo ya que el screenshot de toda la página es muy grande y no lo puedo poner en este artículo porque se haría muy extenso innecesariamente.



#### 320x568 pixeles



![capturas de pantalla web](https://frontendlabs.io/wp-content/uploads/2014/11/frontendlabs.io-320x568-cropped.png)



#### 360x640 pixeles



![frontendlabs.io-360x640-cropped](https://frontendlabs.io/wp-content/uploads/2014/11/frontendlabs.io-360x640-cropped.png)




### 2 dominios distintos y 1 tamaño único



Con el siguiente comando tomaremos un screenshot del sitio frontendlabs.io y al sitio de leodislager.com en 1 solo tamaño(480x800 pixeles).


    
    
    <code>
    pageres frontendlabs.io leodislager.com 480x800
    </code>
    



Cuando el proceso haya terminado Pageres nos mostrará un mensaje parecido al siguiente:


    
    
    <code>
    ✔ Generated 2 screenshots from 2 urls and 1 resolution
    </code>
    



Con el cual nos indica que ha generado 2 capturas de pantalla desde dos urls y en base a 1 resolución.



### 2 dominios distintos y 2 tamaño distintos



Con el siguiente comando tomaremos 2 screenshot del sitio frontendlabs.io, 1 con el tamaño de 480x800 y el otro con 768x1024.

Adicionalmente le tomaremos 2 screenshot del sitio oyvindsatre.no, 1 con el tamaño de 480x800 y el otro con 768x1024.


    
    
    <code>
    pageres frontendlabs.io oyvindsatre.no 480x800 768x1024
    </code>
    



Cuando el proceso haya terminado Pageres nos mostrará un mensaje parecido al siguiente:


    
    
    <code>
    ✔ Generated 4 screenshots from 2 urls and 2 resolutions
    </code>
    



Con el cual nos indica que ha generado 4 capturas de pantalla desde dos urls distintas y en base a 2 resoluciones distintas.



## ¿Cómo hago si deseo utilizar muchas urls o muchos tamaños distintos?



Pageres tiene la opción de proporcionarle un archivo de texto plano para que lea las urls o tamaños que deseemos desde dicho archivo, veamos 2 ejemplos prácticos:



### 4 urls distintas y 2 tamaños distintos



Con el siguiente comando tomaremos 8 screenshots del sitio frontendlabs.io, pero esta vez las urls las indicaremos en un archivo externo llamado urls.txt.


    
    
    <code>
    frontendlabs.io/tag/git
    frontendlabs.io/category/mobile
    frontendlabs.io/category/vim
    frontendlabs.io/category/linux
    </code>
    



Una vez que tenemos nuestro archivo con las urls, ejecutamos lo siguiente:


    
    
    <code>
    pageres 320x568 480x800 < urls.txt
    </code>
    



Cuando el proceso haya terminado Pageres nos mostrará un mensaje parecido al siguiente:


    
    
    <code>
    ✔ Generated 8 screenshots from 4 urls and 2 resolutions
    </code>
    



Con el cual nos indica que ha generado 8 capturas de pantalla desde 4 urls y en base a 2 resoluciones distintas.





### 1 dominio y 4 tamaños distintos



Con el siguiente comando tomaremos 4 screenshots del sitio frontendlabs.io, pero esta vez los tamaños los indicaremos en un archivo externo llamado sizes.txt.


    
    
    <code>
    768x1024
    480x800
    360x640
    320x568
    </code>
    



Una vez que tenemos nuestro archivo con las resoluciones de pantalla, ejecutamos lo siguiente:


    
    
    <code>
    pageres otherfocus.com < sizes.txt
    </code>
    



Cuando el proceso haya terminado Pageres nos mostrará un mensaje parecido al siguiente:


    
    
    <code>
    ✔ Generated 4 screenshots from 1 url and 4 resolutions
    </code>
    



Con el cual nos indica que ha generado 4 capturas de pantalla desde 1 url y en base a 4 resoluciones distintas.








## Más opciones interesantes de Pageres





### -c, --crop



Recorta la imagen generada a la altura indicada.



##### Ejemplo de uso



Agregando el parámetro --crop nos devolverá la captura de pantalla pero cortada exactamente al tamaño indicado, por ejemplo escribimos lo siguiente:


    
    
    <code>
    pageres frontendlabs.io 400x360 --crop
    </code>
    



Entonces obtendremos la siguiente imagen:



#### 400x360 pixeles



![frontendlabs.io-400x360-cropped](https://frontendlabs.io/wp-content/uploads/2014/11/frontendlabs.io-400x360-cropped.png)




### -d, --delay



Retrasa la captura de pantalla un número determinado de segundos.



##### Ejemplo de uso



Agregando el parámetro --delay Pageres retrasará la captura de pantalla en segundos el tiempo que le indiquemos, por ejemplo escribimos lo siguiente:


    
    
    <code>
    pageres frontendlabs.io 400x360 --delay 3
    </code>
    






### --filename 'template'



Personaliza el nombre de la imagen generada.



##### Ejemplo de uso



Agregando el parámetro --filename Pageres guardará la imagen de la captura segun la plantilla que le indiquemos por ejemplo escribimos lo siguiente:


    
    
    <code>
    pageres frontendlabs.io 400x360 --filename '<%= date %> - <%= url %>-<%= size %><%= crop %>'
    </code>
    



Como no use el argumento --crop, el archivo generado se llamó así:


    
    
    <code>
    2014-11-19 - frontendlabs.io-400x360.png
    </code>
    



Recuerden que nosotros podemos indicar como deseamos que se llame el archivo, los valores posibles son: date, url, size y crop. El orden no interesa.





### --selector 'element'



Captura un elemento DOM.



##### Ejemplo de uso



Agregando el parámetro --selector Pageres retornará la captura de pantalla del elemento DOM que le indiquemos, por ejemplo escribimos lo siguiente:


    
    
    <code>
    pageres frontendlabs.io 360x640 --selector '.site-branding'
    </code>
    





#### 360x640 pixeles '.site-branding'



![frontendlabs.io-360x640](https://frontendlabs.io/wp-content/uploads/2014/11/frontendlabs.io-360x640.png)




### -v, --verbose



Muestra una salida detallada de las operaciones que realiza Pageres.




## ¿En que casos puedo usar Pageres aparte de validar mis paginas web Responsive?



Hay tantas formas en las que lo puedes usar, que no te diré ninguna para que heches tu imaginación a volar y no solo lo uses para un unico fin.




## ¿Cómo automatizo mis capturas de pantalla con Pageres?



Si estás usando Grunt.js entonces puedes usar [grunt-pageres](https://www.npmjs.org/package/grunt-pageres).

Si estás usando Gulp.js o [Broccoli.js](https://www.npmjs.org/package/broccoli), simplemente tienes que utilizar el API de Pageres directamente. No hay necesidad de un plugin que envuelva esta funcionalidad.



### ¿Cómo uso Pageres con Gulp.js?



Usar Pageres con Gulp.js es muy sencillo, solo debes usar su [API](https://github.com/sindresorhus/pageres#api).


Un ejemplo de su uso con Gulp.js sería el siguiente:


    
    
    <code>
    var gulp = require('gulp'),
    Pageres = require('pageres');
    
    gulp.task('shot', function () {
        var pageres = new Pageres({delay: 2})
            .src('frontendlabs.io', ['480x320', 'iphone 5s'], {crop: true})
            .src('otherfocus.com', ['360x640'])
            .dest(__dirname);
    
        pageres.run(function (err) {
            if (err) {
                throw err;
            }
            console.log('Tarea culminada con exito!');
        });
    });
    </code>
    



Si deseas probar su funcionamiento, puedes revisar este [pequeño repositorio](https://github.com/jansanchez/pageres-demo) que contiene la demo original con Gulp.js.




<blockquote>
El autor de este programa dice que si creas un plugin para Gulp.js o Broccoli.js para realizar esta tarea, su gato estará muy triste.
</blockquote>





