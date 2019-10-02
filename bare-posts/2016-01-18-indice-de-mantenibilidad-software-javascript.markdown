---
author: jansanchez
comments: true
date: 2016-01-18 00:17:25+00:00
layout: post
link: https://frontendlabs.io/3121--indice-de-mantenibilidad-software-javascript
slug: indice-de-mantenibilidad-software-javascript
title: El Indice de mantenibilidad de software y Javascript
wordpress_id: 3121
categories:
  - Automatización
  - Javascript
---

En este artículo hablaremos acerca del indice de mantenibilidad de software, pero orientado a JavaScript. Es un tema interesante y personalmente considero que es una buena práctica utilizarlo en nuestros proyectos, estoy seguro que les ayudará directa e indirectamente a realizar un código mucho más mantenible. A continuación veamos de qué se trata y cómo aplicarlo en nuestro día a día.

## Indice de mantenibilidad

El índice de mantenibilidad (IM) es un **modelo de mantenibilidad de software** que fue propuesto por Omán y Hagemeister en la Universidad de Idaho(1991), este modelo consiste en un número de **métricas calculadas fácilmente**, y que es capaz de predecir fácil y rápidamente **la mantenibilidad de un producto de software**.

El Indice de mantenibilidad está dado como una ecuación polinómica compuesta por variables predictoras.
A través de una serie de estudios se ha demostrado que hay una fuerte correlación entre la mantenibilidad de software y las variables predictoras como **Complejidad Ciclomática de McCabe**, **Volumen Halstead**, **Número de Líneas de código**, y el **Número de comentarios de código**.

El Indice de mantenibilidad tiene dos variantes, que sólo difieren en el último componente (SEI, 2002):

### Indice de mantenibilidad - Fórmula 1

    <code>
    IM1 = 171 – 5.2 * ln(aveV) – 0.23 * aveV(g’) – 16.2 * ln(aveLOC)
    </code>

### Indice de mantenibilidad - Fórmula 2

    <code>
    IM2 = 171 – 5.2 * ln(aveV) – 0.23 * aveV(g') – 16.2 * ln(aveLOC) + 50 * sin (sqrt(2.4 * perCM))
    </code>

**Donde:**

**aveV** = Es el porcentaje de Esfuerzo Halstead por módulo
**aveV (g ')** = Es el promedio de la complejidad ciclomática extendida por módulo
**aveLOC** = Es el porcentaje del número de líneas de código por módulo
**perCM** = Es el porcentaje de líneas de comentarios por módulo

Los componentes se calculan a nivel de módulo, y luego son promediados. La palabra **'módulo'** utilizada aquí significa **la unidad más pequeña de la funcionalidad**. Dependiendo del lenguaje de programación, esta puede ser una función, procedimiento, método, subrutina o sección.

La **Fórmula 2**, que incluye el porcentaje de líneas de comentarios(perCM), sólo debe utilizarse si los comentarios son válidos, en lugar de, por ejemplo trozos de código del programa que han sido comentados. De lo contrario, se debe utilizar la **Fórmula 1** (SEI, 2002).

**Mientras más alto sea el número, mayor será la mantenibilidad del software**. Los límites identificados son los siguientes (Omán et al, 1994; Welker et al, 1997):

<table >

<tr >

<td >**Mantenibilidad**
</td>

<td >**Fórmula 1**
</td>

<td >**Fórmula 2**
</td>
</tr>

<tbody >
<tr >

<td >**Alto**
</td>

<td >IM >= 50
</td>

<td >IM >= 85
</td>
</tr>
<tr >

<td >**Moderado**
</td>

<td >-
</td>

<td >65 <= IM < 85
</td>
</tr>
<tr >

<td >**Bajo**
</td>

<td >IM < 50
</td>

<td >IM < 65
</td>
</tr>
</tbody>
</table>

Además de usar el Indice de mantenibilidad a nivel del sistema, otra forma de uso es calcular el Indice de mantenibilidad a nivel de módulo para todos los módulos de un sistema. Con este enfoque, se pueden identificar los módulos con el Indice de mantenibilidad más bajo, que se cree que son los módulos con la mayor necesidad de ser mejorados (Oppedijk, 2008, 36 pp).

En este último enfoque es en el que nos vamos a basar para probar el Indice de mantenibilidad **en el lado cliente de las aplicaciones web**.

## Complejidad ciclomática

Complejidad Ciclomática es una métrica de software que fue desarrollada por Thomas McCabe. Se utiliza para medir la complejidad de un programa (McCabe, 1976). Mide el número de caminos linealmente independientes a través del código fuente de un programa. La Complejidad Ciclomática se puede calcular de varias maneras. En la primera forma, un módulo o programa es considerado como un grafo (conjunto de objetos llamados vértices o nodos unidos por enlaces llamados aristas o arcos). Para este caso es dada la siguiente fórmula:

**V(g) = e - n + 2(p)**

Donde:

e = número de aristas en un grafo,
n = número de nodos en un grafo, y
p = número de componentes conectados, nodos de salida

La forma alternativa es contar el número de puntos de decisión (sentencias if, sentencias while, etcétera) en un módulo o programa, y aumentar esté en uno. Ambos métodos producen el mismo resultado. Es por eso que para facilitar el aprendizaje de este concepto usaremos la forma alternativa para contabilizar el valor de la complejidad ciclomática, cuya fórmula sería la siguiente:

**V(g) = Número de condiciones + 1**

Así, debemos saber que cuando dentro de una función haya por ejemplo **3** sentencias if, la complejidad ciclomática tendrá un valor de **4**, aplicando la fórmula mentalmente sería así:

**V(g) = Número de condiciones + 1**

**V(g) = 3 + 1**

**V(g) = 4**

Con esto aprendimos cómo calcular la complejidad ciclomática de software, en cualquier lenguaje de programación.

## El Indice de mantenibilidad y JavaScript

En el año 2012 [Phil Booth](https://github.com/philbooth) implementó el indice de mantenibilidad y [otras métricas](https://www.npmjs.com/package/escomplex#metrics) de código fuente para el lenguaje JavaScript en el paquete npm llamado [escomplex](https://www.npmjs.com/package/escomplex), luego utilizando este paquete se creó el paquete [gulp-complexity](https://www.npmjs.com/package/gulp-complexity), qué es el que utilizaremos para probar rápidamente el indice de mantenibilidad en nuestros proyectos, a continuación te mostramos cómo hacerlo!.

## gulp-complexity

### Instalando gulp-complexity

Para llevar esto a cabo crearemos una carpeta llamada mi, ingresamos mediante consola a la carpeta creada y ejecutamos el comando npm init, completamos toda la información que nos solicita npm, para así poder [crear](https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos#como_usar_gulp) el archivo [package.json](https://raw.githubusercontent.com/jansanchez/maintainability-index/master/package.json) que contendrá toda la información de nuestro nuevo proyecto.

Una vez que ya tenemos eso creado procedemos a instalar el paquete [gulp](https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos), como una **dependencia de desarrollo**, mediante el comando:

    <code>npm install --save-dev gulp</code>

Luego instalamos el paquete gulp-complexity, mediante el comando:

    <code>npm install --save-dev gulp-complexity</code>

Para este ejemplo usaremos una parte del código fuente de jQuery, específicamente los módulos: **manipulation** y **queue**, el cual descargaremos con el siguiente comando:

    <code>git clone https://github.com/jansanchez/jquery-for-test.git</code>

Para automatizar este proceso, utilizaremos gulp, si no conoces gulp, puedes leer [nuestro artículo acerca de gulp](https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos).

Ahora procederemos a crear el archivo gulpfile.js y escribiremos el siguiente contenido:

    <code>
    /*!!
     *
     * gulpfile.js
     * @author: Jan Sanchez
     *
     */

    var gulp = require('gulp'),
        mi = require('gulp-complexity');

    /*!!
     *
     * Tarea para evaluar la mantenibilidad
     * del código fuente
     *
     */

    gulp.task('mi', function(){
        return gulp.src(['jquery-for-test/**/**/*.js'])
        .pipe(mi({breakOnErrors: false}));
    });
    </code>

Con esto hemos creado la tarea mi, que ya podemos ejecutar escribiendo el siguiente comando:

    <code>gulp mi</code>

Y al ejecutarlo podremos ver el indice de mantenibilidad para cada archivo y las observaciones que gulp-complexity tiene acerca del código que ha sido revisado, como podemos ver a continuación.

![indice de mantenibilidad y javascript](https://frontendlabs.io/wp-content/uploads/2016/01/indice-mantenibilidad-javascript.png)

### Revisando las observaciones

Como podemos apreciar, todos estos archivos han pasado correctamente la validación, a su vez podemos observar que los archivos que tienen un valor de **más de 120** de indice de mantenibilidad se muestran con una barra de color verde, mientras que los que tienen **menos de 120** se muestran con un color amarillo, pero ninguno de estos tiene ningún mensaje, ni observación en el código, lo cual quiere decir que estos archivos son altamente mantenibles según esta métrica.

![indice de mantenibilidad con javascript ok](https://frontendlabs.io/wp-content/uploads/2016/01/indice-mantenibilidad-javascript-ok.png)

En cambio los archivos: manipulation/buildFragment.js, manipulation/getAll.js, manipulation/setGlobalEval.js y queue/demo.js no han pasado la prueba, a continuación veremos ¿Por qué?

![indice de mantenibilidad con javascript fail](https://frontendlabs.io/wp-content/uploads/2016/01/indice-mantenibilidad-javascript-fail.png)

Debido a que revisar cada archivo tomaría mucho tiempo en este artículo, solo revisaremos el archivo: queue/demo.js (este archivo lo agregué para poder explicar mejor la complejidad ciclomática). Con esto también estoy demostrando que incluso en librerías conocidas e importantes como jQuery, también hay código fuente poco mantenible.

El mensaje nos dice que en la línea número **1** de este script se encuentra la función complexFunction la cual probablemente sea **demasiada complicada** para ser entendida por un ser humano, por ende podemos mejorarla.

La misma tiene un valor de [Complejidad Ciclomática](https://es.wikipedia.org/wiki/Complejidad_ciclom%C3%A1tica) de **4** y un valor de [Halstead](https://en.wikipedia.org/wiki/Halstead_complexity_measures) de **7.91**, el mismo que proviene de un valor de Esfuerzo de **958.55**, de Volumen de **121** y un Vocabulario de **11** palabras en total. No olvidemos que todos estos valores vienen de fórmulas y los resultados son directamente proporcionales a la cantidad del código fuente que contiene cada archivo.

El valor más importante de esta métrica es la **Complejidad Ciclomática**, por eso nos centraremos en esta, debemos revisar el archivo y lo más probable es que encontremos una gran función con demasiados caminos lógicos individuales(_if_, _else_, _else if_), veamos el código de esta función:

    <code>
    function complexFunction(){
        flag = true;
        openssl = true;
        if (flag === true) {
            if (openssl === true) {
                add_libs = "--libs openssl";
            }else{
                add_libs = "--libs common";
            }
        }else{
            if (openssl === true) {
                add_libs = "--libs openssl";
            }else{
                add_libs = "--libs common";
            }
        }
        return add_libs;
    }
    </code>

Como podemos ver, este código es algo confuso y a primera vista se puede mejorar mucho ¿No es así?, entonces calculemos mentalmente su complejidad ciclomática, podemos ver 3 puntos de decisión (en este caso son 3 sentencias if), le sumamos 1 y obtenemos **4** como el valor de complejidad ciclomática de esta función. Y si nos fijamos en el reporte que nos mostró gulp-complexity podremos darnos cuenta que es el mismo valor, por lo general esta métrica considera que el valor máximo de complejidad de una función debe ser de 3.

Haciendo una revisión rápida del código anterior podemos refactorizar y a su vez lograr mejorar su indice de mantenibilidad, dejándolo por ejemplo así:

    <code>
    function complexFunction(){
        openssl = true;
        add_libs = "--libs common";
        if (openssl === true) {
            add_libs = "--libs openssl";
        }
        return add_libs;
    }
    </code>

Al implementar esta métrica, nos podremos dar cuenta cuando estemos haciendo código poco mantenible y complejo en nuestros proyectos y tendremos la gran oportunidad de mejorarlo.

## Conclusiones, Recomendaciones e Ideas

Usar este tipo de métricas cuando desarrollamos es muy importante, ya que nos permite realizar código altamente mantenible y lo mejor de eso es que no solo nos sirve a nosotros, sino que también beneficiamos al equipo con el que trabajamos ó a las personas que tendrán que modificar y/o mantener nuestro código en el futuro.

Mientras más lo uses también podrás darte cuenta que adoptarás y aprenderás buenas prácticas de desarrollo para poder superar el límite mínimo de mantenibilidad, pronto verás que casi sin que te des cuenta sólo realizarás código óptimo.

Yendo un poco más allá, para poder trabajar con este indice de mantenibilidad podrías usar un automatizador como gulpjs, y usar su watcher para que en cada momento que vayas desarrollando esta herramienta te vaya indicando cuán mantenible es el código que estás escribiendo y detectar tus errores en tiempo de desarrollo.

Otro uso interesante es que, si recibes un código desarrollado por otra persona ó otra empresa, puedes hacer rápidamente un diagnóstico de cuán mantenible es ese código y puedes detectar las zonas rojas o las partes más complejas que tiene este, imagína que tu cliente te pide cotizar el desarrollo de una funcionalidad que implica modificar código actual del sistema o portal que vayas a trabajar, esta herramienta te puede dar un vistazo rápido de cúal es el estado de mantenibilidad de ese código y podrás saber cuánto cobrar en base a qué tan complejo es el código con el que tendrás que lidiar.

Realmente hay muchas ideas de como utilizar esta gran herramienta, espero que le des una oportunidad y la pruebes, recuerda que gulp-complexity no es la única herramienta, también existe el plugin para [grunt](https://frontendlabs.io/146--grunt-js-espanol-tutorial-basico-primeros-pasos).

"Es importante tener en cuenta que ninguna de estas métricas pueden competir con la visión y/o percepción de un desarrollador competente. A lo sumo, son un sistema de alerta automática, que puede ayudar a identificar áreas de código que justifican una inspección más cercana por un ser humano". (Phil Booth, 2012)

## ¿Existen otras herramientas de análisis estático de código JavaScript?

Desde luego, a continuación mencionaremos algunas:

- [plato](https://www.npmjs.com/package/plato)

* [cardio](https://www.npmjs.com/package/cardio)

- [bob](https://www.npmjs.com/package/bob)

* [karma cp](https://www.npmjs.com/package/karma-complexity-preprocessor)

- [jscomplexity](https://github.com/slyg/jscomplexity)

## ¿Existen otras herramientas de análisis estático de código para otros lenguajes de programación?

Por supuesto, a continuación mencionaremos algunas:

- [Phpmetrics](http://www.phpmetrics.org/)

* [Radon para python](https://pypi.python.org/pypi/radon)

- [JHawk para Java](http://www.virtualmachinery.com/jhawkmetricslist.htm)

Si les gusto el artículo, por favor compartanlo, para que cada vez más gente conozca un poco más sobre el indice de mantenibilidad y las métricas de código fuente que existen para el lenguaje de programación JavaScript.

## Referencias bibliográficas:

BOOTH, Phil. Software complexity analysis of JavaScript-family abstract syntax trees. [En línea][fecha de publicación: 30 de septiembre del 2012]. [Fecha de consulta: 30 de Mayo del 2015]. Disponible en: [escomplex](https://www.npmjs.com/package/escomplex)

MCCABE, T.J. A Complexity Measure. IEEE Transactions on Software Engineering, 1976, vol. 2(4), 308-320 pp.

OMAN, P., COLEMAN, D., ASH, D., LOWTHER, B. Using Metrics to Evaluate Software System Maintainability. IEEE Computer, 1994, vol. 27(8), 44-49 pp.

OPPEDIJK, Frank. Comparison of the SIG Maintainability Model and the Maintainability Index. Tesis (Magíster en Ingeniería de Software). Ámsterdam: University of Amsterdam Faculty of Science, 2008. 36 pp. Disponible en: [Maintainability Index Thesis](http://homepages.cwi.nl/~paulk/thesesMasterSoftwareEngineering/2008/FrankOppedijk.pdf)

SEI, VanDoren, E. Maintainability Index Technique for Measuring Program Maintainability. Software Engineering Institute, Carnegie Mellon University, 2002. Disponible en: [Maintainability Index Technique for Measuring Program Maintainability](http://www.sei.cmu.edu/activities/str/descriptions/mitmpm_body.html)

WELKER, K.D., OMAN, P.W., y ATKINSON, G.G. Development and application of an automated source code maintainability Index. In Journal of Software Maintenance. 1997, vol. 9(3), 127-159 pp.
