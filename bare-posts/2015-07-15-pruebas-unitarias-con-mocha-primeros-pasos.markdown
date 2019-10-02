---
author: Carlos Huamani
comments: true
date: 2015-07-15 18:21:43+00:00
layout: post
link: https://frontendlabs.io/2894--pruebas-unitarias-con-mocha-primeros-pasos
slug: pruebas-unitarias-con-mocha-primeros-pasos
title: "Pruebas Unitarias con Mocha: Primeros Pasos"
wordpress_id: 2894
categories:
  - Automatización
  - Código
  - Javascript
  - Mocha
  - pruebas
  - TDD
  - tutorial
---

## Pruebas Unitarias con Mocha

Este post tiene como objetivo dar a conocer las configuraciones básicas para correr tus pruebas unitarias con [mocha](http://mochajs.org/).

Muchas veces hemos escuchado sobre pruebas unitarias, de lo mucho que ayudan a tener un código estructurado y ordenado. Además, cómo es que también sirve como documentación del código. Muchos posts nos explican cómo aplicarlo y cómo funciona. Sin embargo siento que para empezar a usarlo primero se debe entender la esencia de las pruebas unitarias. Luego uno debe saber cómo poder implementarlo en el proyecto. Finalmente, se debe poder automatizar.

Es necesario tener las pruebas unitarias implementadas de manera profesional porque estas deben ser las bases del proyecto y no un bicho raro que se implementó al final y que solo funciona en una máquina en un determinado contexto del sistema.

### El paradigma

En primer lugar, debemos preguntarnos: ¿Por qué las pruebas unitarias me ayuda a tener un código ordenado? La respuesta es porque si tu código está desordenado no puedes aplicarle pruebas unitarias. Si ya tienes un proyecto avanzado o estás dando soporte a una web y luego te da la gana, la iniciativa, el deseo, la necesidad de agregarle pruebas unitarias, lo primero que tendrás que hacer es una refactorización de código. Entonces, está bien, ya se que debo hacer una refactorización de mi código pero... ¿Cómo lo hago? Ya sabemos que refactorizar significa hacer un código más ordenado, más legible, que consuma menos recursos y todo eso. Entonces ordenaremos nuestro código de manera que cada función solo tenga una tarea en especifico y solo una. Además cada función deberá recibir parámetros y retornar algo.

Ahora, si recién vamos a iniciar un proyecto y tienes las ganas, la iniciativa, el deseo, la necesidad de agregarle pruebas unitarias. Lo primero que debes hacer son las pruebas unitarias, estas describirán los pasos que son requeridos para el proceso a realizar.

### El Contexto

Si nos ponemos a ver el panorama, cada vez se vuelve más complejo. El código javascript suele depender del HTML, de los eventos, del navegador en sí. El código javascript puede funcionar bien en Firefox pero puede echarse a perder en Internet Explorer. Entonces, ¿Cómo rayos incluyo estos escenarios a mis pruebas? No, nos compliquemos y dejemos las cosas en claro, las pruebas unitarias, como dice su nombre, prueba el código como unidad, no como un todo. Si queremos probar el código en distintos navegadores estos serían [pruebas funcionales](https://frontendlabs.io/887--pruebas-funcionales-con-python-y-selenium) puesto que ya no estamos probando el código por unidad, si no que lo estamos probando en un navegador, a una determinada velocidad de conexión a internet, en una determinada resolución entre otros factores. Para dichas pruebas tenemos al famoso [Selenium](http://www.seleniumhq.org/).

### Los Detalles Técnicos

Este post usará el framework mocha para los ejemplos, sin embargo si sabes las bases técnicas y el paradigma puedes aplicarlo con cualquier framework.

El objetivo técnico es poder ejecutar una línea de comandos por consola el cual haga correr nuestras pruebas unitarias con mocha y que aparezca un gato volando que deje tras de sí una estela de arco íris. Para ello necesitamos:

- **Node:** Nos ayudará a poder instalar mocha y hacer correr nuestras pruebas por el lado de servidor (osea hacerlas correr por consola)

- **Linux (opcional):** bueno es opcional porque también es posible hacer correr pruebas en windows como en mac, pero no les aseguro que vaya a funcionar con los pasos que yo voy a realizar. Es más debería indicar también que estas pruebas serán usadas en base a la distribución Elementary OS.

- **Mocha:** Mocha nos ayuda a tener un marco de trabajo para realizar nuestras pruebas de manera ordenada.

Entonces instalamos node desde la consola

    <code>sudo apt-get install npm</code>

Ahora mocha

    <code>sudo npm install -g mocha</code>

### El Caso de Ejemplo

Haremos una calculadora que sume, reste, multiplique y divida. Tenga en cuenta que las pruebas unitarias suelen necesitar más herramientas como jsdom, chai, etc. Esto depende de las herramientas que use para su flujo de trabajo. En caso de usar jquery por ejemplo necesitaría realizar un `sudo npm install jquery` y luego llamarlo en sus pruebas con un `require('jquery')`. Proximamente, en este [repositorio de github](https://github.com/carloshs92/mocha-tutorial-primeros-pasos) podrán ver las distintas maneras de implementación de mocha dependiendo de como necesites usarlo. Espero de todas maneras hacer más posts sobre cada uno de estos casos casos para que quede más claro.

![Pruebas unitarias con mocha](https://frontendlabs.io/wp-content/uploads/2015/07/Captura-de-pantalla-de-2015-07-15-131618.png)

### Las Pruebas

Algo propio de toda pruebas son los assert. ¿Qué son los assert? Su funcionalidad es básica, se encarga de afirmar que dos valores sean iguales.

El **assert** realiza una comparación de elementos y registra los elementos que no cumplan con dicha comparación.

El **describe** puede contener otros describe o puede contener las pruebas en sí que encuentran dentro del** it.**

    <code>
    var assert = require("assert")
    describe('Calculadora', function() {
    it('should add two numbers', function () {
    assert.equal(5, calculator.addNumber(2, 3));
    assert.equal(9, calculator.addNumber(3, 6));
    });

    it('should substract two numbers', function () {
    assert.equal(5, calculator.substractNumber(8, 3));
    assert.equal(3, calculator.substractNumber(9, 6));
    });

    it('should multiply two numbers', function () {
    assert.equal(9, calculator.multiplyNumber(3, 3));
    assert.equal(10, calculator.multiplyNumber(2, 5));
    });

    it('should divide two numbers', function () {
    assert.equal(2, calculator.divideNumber(6, 3));
    assert.equal(1, calculator.divideNumber(9, 9));
    });
    });
    </code>

Al ejecutar nuestras pruebas unitarias con mocha obviamente nos dará errores ya que no están implementadas.

![Pruebas unitarias con mocha](https://frontendlabs.io/wp-content/uploads/2015/07/Captura-de-pantalla-de-2015-07-14-161014.png)

### El Código

Para que funcione nuestras pruebas unitarias con mocha debemos implementar el código javascript que es necesitado.

**calculator.js**

    <code>
    objCalculator = {
      addNumber: function(a, b){
        return a + b;
      },

      substractNumber: function(a, b){
        return a - b;
      },

      multiplyNumber: function(a, b){
        return a * b;
      },

      divideNumber: function(a, b){
        return a / b;
      }
    }

    // Estamos validando si nos encontramos en un ambiente de node
    // El "module" solo existe en node asi que para constatar que estamos en un ambiente node verificamos que la variable no sea indefinida.
    // Si estamos en un ambiente Node importamos el código para poder usarlo en nuestras pruebas
    if ( typeof module != 'undefined' && module.exports ) {
    	module.exports = objCalculator;
    }
    </code>

Ahora solo nos queda agregar la siguiente línea en nuestro archivo test.js para poder llamar a las funciones que queremos probar.

    <code>
    var calculator = require('../js/calculator')
    </code>

Nuestro archivo quedaría así:

    <code>
    var assert = require("assert")
    var calculator = require('../js/calculator')
    describe('Calculadora', function() {
    it('should add two numbers', function () {
    assert.equal(5, calculator.addNumber(2, 3));
    assert.equal(9, calculator.addNumber(3, 6));
    });

    it('should substract two numbers', function () {
    assert.equal(5, calculator.substractNumber(8, 3));
    assert.equal(3, calculator.substractNumber(9, 6));
    });

    it('should multiply two numbers', function () {
    assert.equal(9, calculator.multiplyNumber(3, 3));
    assert.equal(10, calculator.multiplyNumber(2, 5));
    });

    it('should divide two numbers', function () {
    assert.equal(2, calculator.divideNumber(6, 3));
    assert.equal(1, calculator.divideNumber(9, 9));
    });
    });
    </code>

Al ejecutar nuestras pruebas unitarias con mocha de nuevo vemos lo siguiente:

![Pruebas unitarias con mocha](https://frontendlabs.io/wp-content/uploads/2015/07/Captura-de-pantalla-de-2015-07-14-163656.png)

¡Que genial! Ya tenemos nuestras pruebas unitarias con mocha y el código listo. Sin embargo aún no podemos verlo reflejado en un navegador ya que falta lo demás (el html y el javascript que consuma dichas funciones). La manera que lo implementes ya dependerá de ti. En este [repositorio](https://github.com/carloshs92/mocha-tutorial-primeros-pasos/tree/master/ejemplo_1.unite_test.mocha) esta la manera de cómo yo lo he implementado.

### El Gato

Ahora falta hacer que aparezca el gato. Para hacer esto tenemos que añadir un --reporter=nyan a nuestra linea de comandos a ejecutar. Podemos usar distintos tipos de [reportes en mocha](http://mochajs.org/#reporters), puedes elegir cualquiera que te agrade.

    <code>mocha test.js --reporter=nyan</code>

![Pruebas unitarias con mocha](https://frontendlabs.io/wp-content/uploads/2015/07/Captura-de-pantalla-de-2015-07-14-182011.png)

¡Listo!

Si quieren tener el proyecto y otros ejemplos pueden entrar a mi [repositorio de github](https://github.com/carloshs92/mocha-tutorial-primeros-pasos/). En ese repositorio encontrarán el ejemplo completo y próximamente habrán más ejemplos.
