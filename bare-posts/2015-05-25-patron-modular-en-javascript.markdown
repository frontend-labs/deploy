---
author: wilsonflores
comments: true
date: 2015-05-25 16:00:35+00:00
layout: post
link: https://frontendlabs.io/2643--patron-modular-en-javascript
slug: patron-modular-en-javascript
title: Patron modular en JavaScript
wordpress_id: 2643
categories:
  - Javascript
tags:
  - Front-End
  - Javascript
  - jQuery
  - Lenguaje de programación
  - patron modular
---

En el mundo de javascript existe mucha facilidad para desarrollar con este lenguaje, el único detalle es que no debemos abusar de esa facilidad que nos ofrece. Al final uno obtiene variables y funciones repartidas a lo largo de todo el código y sin un orden, lo que termina siendo inmantenible. Una de las mejores practicas a la hora de escribir código es usar patrones de diseño y en este post explicaremos el patron modular para Javascript.

En javascript el patron modular emula el concepto de clases, de manera que somos capaces de incluir métodos públicos/privados y propiedades dentro de un único objeto, protegiendo las datos particulares del ámbito global, lo que ayuda a evitar la colisión de nombres de funciones y variables ya definidas a lo largo de nuestro proyecto, o API’s de terceros, a continuación unos conceptos previos para poder entender mejor el patrón modular.

## Objeto literal

EL patron modular se basa en parte en los objetos literales por ende es importante entenderlo.
Un objeto literal es descrito como cero o más pares nombre/valor, separados por comas entre llaves.
Los nombres dentro del objeto pueden ser cadenas o identificadores que son seguidas por 2 puntos, dichos objetos también pueden contener otros objetos y funciones.

    <code>
    var objetoLiteral = {
        /* los objetos literales pueden contener propiedades y métodos */
        saludo : "soy un objeto literal",
        miFuncion : function(){
          // código
        }
    };
    /* accediendo a una propiedad de nuestro objeto literal persona */
    objetoLiteral.saludo
    </code>

Un ejemplo de un modulo usando un objeto literal.

    <code>
    var persona = {
        /* definiendo propiedades */
        nombre : "adan",
        edad   : 33,
        /* método simple */
        comer  : function(){
            console.log(this.nombre + " esta comiendo.");
        }
    };
    /* accediendo al método comer de nuestro objeto literal persona */
    persona.comer();
    </code>

## Módulo

Un módulo es una unidad independiente funcional que forma parte de la estructura de una aplicación.
Podemos usar funciones y closures(cierres) para crear módulos.

    <code>
    var modulo = (function(){
        //- - -
    });
    </code>

Un ejemplo más completo:

    <code>
    var automovil = (function(colorDeAuto){
        var color = colorDeAuto;
        return{
            avanzar : function(){
                console.log("el auto "+ color +" esta avanzando");
            },

            retroceder : function(){
                console.log("el auto "+ color +" esta retrocediendo");
            }
        }
    })("azul");
    /* accediendo los metodos retroceder y avanzar de nuestro módulo */
    automovil.retroceder();
    automovil.avanzar();
    </code>

## Función anónima

Las funciónes anónimas son funciónes sin nombre, comúnmente asociados a una variable.

    <code>
    var miFuncionAnonima = function(){
        alert("Hola mundo!");
    };
    miFuncionAnonima();
    </code>

## Funciónes auto-ejecutables (IIFE)

Estas funciónes una vez declaradas se llaman a sí mismas para inicializarse, los primeros paréntesis encierran el contenido, los segundos paréntesis asumen que el interior de los primeros paréntesis es una función y la ejecuta inmediatamente.

    <code>
    /* 01 */
    (function(){
        alert("Hola mundo!");
    })();

    /* 02 */
    var miFuncionAnonima = function(){
        alert("Hola mundo!");
    };

    /* 03 */
    var miFuncionAnonima = (function(mensaje){
        alert(mensaje);
    })("Hola mundo");
    // todo lo que le precede a los 2 últimos paréntesis se ejecuta inmediatamente
    </code>

## closure

Los clousures son funciones definidas dentro de otras funciones, así mismo dicha función interna tiene acceso al ámbito de la función contenedora.

    <code>
    function ejemploClousure(arg1, arg2){
        var localVar = 8;
        function multiplicador(interArg){
            return arg1 * arg2 * interArg * localVar;
        }
        /* retornar una referencia de la función interna definida como:
           multiplicador
        */
        return multiplicador;
    }

    /* la función devuelve una función, por lo tanto necesita asignación */
    var globalVar = ejemploClousure(2,4);
    /* y luego llamar a */
    globalVar(8);
    </code>

## Métodos privados

Los métodos privados son funciones que no pueden ser llamados desde fuera del ámbito donde han sido declarados, dichos métodos podrán ser invocados en nuestros métodos públicos.

    <code>
    var modulo = (function () {
        var privateMethod = function (message1) {
            console.log(message1);
        };
        var publicMethod = function (mensaje2) {
            privateMethod(mensaje2);
        };
        return {
            publicMethod: publicMethod
        };
    })();

    /* pasando datos a un método privado */
    modulo.publicMethod("mi mensaje");
    </code>

## Entendiendo el retorno

Comúnmente los módulos retornan un objeto, la cual los métodos ligados a dicho objeto serán accesibles desde fuera del módulo.

    <code>
    var module = (function(){
        /* simple método privado */
        var privateMethod = function(){
            console.log("soy un método privado");
        };

        /* retornando un objeto literal */
        return{
            publicMethod : function(){
                privateMethod();
                console.log("soy un método publico");
            }
        }
    })();
    /* accediendo nuestro método publico */
    module.publicMethod();
    </code>

## Ventajas del patron modular

- Código limpio , separado y organizado.

- Soportan datos privados.

- Código Escalable.

Bien, ahora que ya tenemos los algunos conceptos definidos vamos a realizar un ejercicio la cual sera realizar tabs, con una estructura mas avanzada, vamos a realizarlo con jquery.

## 1. Definimos nuestra estructura html

    <code>
            <ul class="tabs">
                <li class="tabs_item">
                    <a class="tabs_item_target is_selected" data-tab="tab_one">JavaScript</a>
                </li>
                <li class="tabs_item">
                    <a class="tabs_item_target" data-tab="tab_two">Html5</a>
                </li>
                <li class="tabs_item">
                    <a class="tabs_item_target" data-tab="tab_three">Css</a>
                </li>
            </ul>
            <div class="tabs_content">
                <div id="tab_one" class="tabs_content_pane is_active">
                    contenido JavaScript
                </div>
                <div id="tab_two" class="tabs_content_pane">
                    contenido Html5
                </div>
                <div id="tab_three" class="tabs_content_pane">
                    contenido Css
                </div>
            </div>
    </code>

## 2. Definimos nuestra estructura javaScript

A continuación se muestra una estructura modular mas avanzada y explicaremos paso a paso las partes que la componen.

    <code>
    // Definimos la variable tabs la cual contendrá todo nuestro modulo.
    var tabs = (function(){
        // Objeto la cual establecemos valores que vamos a usar mas adelante en este ámbito.
        var st = {
            //- - -
        };

        // Objeto vacío que guardará elementos que se manejan por HTML.
        var dom = {}

        // Función que llenará al objeto dom con los objetos HTML a través de jQuery ($).
        var catchDom = function(){
            //- - -
        };

        // Función donde establecemos los eventos que tendrán cada elemento.
        var suscribeEvents = function(){
            //- - -
        };

        /* Objeto que guarda métodos que se van a usar en cada evento definido
          en la función suscribeEvents. */
        var events = {
            //- - -
        };

        // Función que inicializará los funciones decritas anteriormente.
        var initialize = function(){
            //- - -
        };

        /* Retorna un objeto literal con el método init haciendo referencia a la
           función initialize. */
        return{
            init:initialize
        }
    })();

    // Ejecutando el método "init" del módulo tabs.
    tabs.init();
    </code>

## 3. Creación de nuestro modulo

Finalmente luego de haber entendido nuestra estructura anterior, procedemos a la creación de nuestro modulo tabs.

    <code>
    var tabs = (function() {
      var st = {
        tabs: '.tabs',
        tabs_item: '.tabs_item',
        tabs_item_target: '.tabs_item_target'
      };

      var dom = {}

      var catchDom = function() {
        dom.tabs_item_target = $(st.tabs_item_target, st.tabs);
      };

      var suscribeEvents = function() {
        dom.tabs_item_target.on('click', events.eSelectedTab);
      };

      var events = {
        eSelectedTab: function(e) {
          self = $(this);
          self.addClass('is_selected');
          var brother = self.parent(st.tabs_item).siblings();
          $(st.tabs_item_target, brother).removeClass('is_selected');
          var pane = self.attr('data-tab');
          $("#" + pane).addClass('is_active');
          $("#" + pane).siblings().removeClass('is_active');
        }
      };

      var initialize = function() {
        catchDom();
        suscribeEvents();
      };

      return {
        init: initialize
      }
    })();

    tabs.init();
    </code>

Resultado de nuestro pequeño ejercicio.

See the Pen [Demo tabs](http://codepen.io/wilsson/pen/dopBqP/) by wilson ([@wilsson](http://codepen.io/wilsson)) on [CodePen](http://codepen.io).

Gracias por haber leido este post, [aquí](https://github.com/wilsson/module-pattern-javascript) dejo el enlace al repositorio para que puedas jugar con el. Escríbenos sobre cualquier duda o consulta que tengas, que nosotros estaremos gustosos a ayudarte.
