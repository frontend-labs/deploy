---
author: Carlos Huamani
comments: true
date: 2014-12-24 00:37:47+00:00
layout: post
link: https://frontendlabs.io/2222--hacer-que-div-te-siga-desde-pie-de-pantalla-stickyfloat
slug: hacer-que-div-te-siga-desde-pie-de-pantalla-stickyfloat
title: Hacer que un div te siga desde el pie de pantalla - StickyFloat
wordpress_id: 2222
categories:
- Css
- Javascript
tags:
- tips
---

Una vez me topé con la necesidad de hacer que un elemento tenga el efecto de seguirte estando posicionado en el pie de la pantalla. En un primer momento parece algo fácil de realizar, sin embargo cuando lo analizas bien se torna un poco complicado. En mi caso se complicó ya que necesitaba que este elemento pierda este efecto de seguirte cuando choque con el pie de pagina.

Trate de buscar esta funcionalidad con el nombre de ancla de elementos, efecto burbuja en javascript, scroll fixed effect, fixed smart, banner que te persigue, entre otras búsquedas pero no encontraba algo como lo que quería.

Al final logré realizar esta funcionalidad. Así que pensé hacer un pequeño post de como realizar dicha funcionalidad.

Para los que no tienen una idea muy clara de lo que trata esta funcionalidad pueden ver la demostración final mas abajo.


See the Pen [HpDnw](http://codepen.io/carloshs92/pen/HpDnw/) by Carlos ([@carloshs92](http://codepen.io/carloshs92)) on [CodePen](http://codepen.io).




El elemento "**stickyfloat**", asi lo llame puesto que no tengo una idea clara de como llamarlo, permanece en el pie de la pantalla y pierde este efecto cuando se encuentra cerca al "Footer". Asi que ahora procedo a explicar tanto el HTML, CSS y JS que he utilizado.

**HTML**

El elemento que sera nuestro **stickyfloat** debe estar en el mismo nivel del footer

    
    <code><div class="container">
    <header>MENU</header>
    <section>
    <div class="block">PRIMER ARTICULO</div>
    <div class="block">SEGUNDO ARTICULO</div>
    <div class="block">TERCER ARTICULO</div>
    <div class="block">CUARTO ARTICULO</div>
    </section>
    <div class="stickyfloat_element">STICKYFLOAT</div>
    <footer>PIE DE PAGINA</footer>
    </div>
    </code>


**CSS**
Con respecto a estilos no hay nada crucial que digamos. Es más podemos obviar los estilos y seguirá funcionando.

    
    <code>.stickyfloat_element {
      right: 0;
      text-align: center;
      position: absolute;
      width: 200px;
      height: 50px;
      line-height: 50px;
      background: #888;
      -webkit-transition: top 0.8s ease-in-out;
      transition: top 0.8s ease-in-out;
    }
    </code>


**Javascript**
Cabe resaltar que use JQuery para realizar dicha funcionalidad. El javascript que presento esta conformado por la siguiente estructura.

    
    <code>$(function(){
      margin = 10;
      posicionInicial = 0;
      dom = {}
      st = {
        stickyElement: '.stickyfloat_element',
        footer : 'footer',
      };
      catchDom = function(){
        dom.stickyElement = $(st.stickyElement);
        dom.footer = $(st.footer);
      }
      afterCatchDom = function(){
        functions.ubicarPosicionInicial()
      }
      suscribeEvents = function(){
        $(window).on('scroll', events.moveStick);
      }
      events = {
        moveStick : function(){
        
        }
      }
      functions = {
        ubicarPosicionInicial : function(){
      
        }
      }
      var init = function(){
        catchDom();
        afterCatchDom();
        suscribeEvents();
      };
      init();
    });
    </code>


Esta estructura es opcional, a mi me ayuda para poder hacer un código un poco más ordenado. Lo más importante son las funciones ubicarPosicionInicial() y moveStick(). Pero antes declaramos algunas variables que serán de importancia para que todo funcione como deseemos.

    
    <code>margin = 10;
    posicionInicial = 0;
    </code>


El "margin" se encarga de darle un espaciado entre el pie de la pantalla y el **stickyfloat**. La "posicionInicial" se encarga de posicionar el **stickyfloat** en el lugar exacto en la primera carga.

La función "ubicarPosicionInicial()" se encarga de obtener el posición inicial del elemento **stickyfloat** el cual será calculado entre la resta del alto de la pantalla y la suma del margin que deseamos que tenga el elemento y la altura del **stickyfloat**.

    
    <code>var newPosition = $(window).height() - (dom.stickyElement.height() + margin);
    </code>


Cuando obtenemos este valor lo agregamos como el top por jquery.

    
    <code>$(st.stickyElement).css('top', newPosition + "px");
    </code>


Nuestro código hasta este punto debería ser algo así.

    
    <code>$(function(){
      margin = 10;
      posicionInicial = 0;
      dom = {}
      st = {
        stickyElement: '.stickyfloat_element',
        footer : 'footer',
      };
      catchDom = function(){
        dom.stickyElement = $(st.stickyElement);
        dom.footer = $(st.footer);
      }
      afterCatchDom = function(){
        functions.ubicarPosicionInicial()
      }
      suscribeEvents = function(){
        $(window).on('scroll', functions.moveStick);
      }
      events = {
        moveStick : function(){
        }
      }
      functions = {
        ubicarPosicionInicial : function(){
        var newPosition = $(window).height() - dom.stickyElement.height() - margin;
        $(st.stickyElement).css('top', newPosition + "px");
          posicionInicial = newPosition;
        }
      }
      var init = function(){
        catchDom();
        afterCatchDom();
        suscribeEvents();
      };
      init();
    });
    </code>


La función" moveStick()" escucha el evento scroll de la ventana. Entre las variables que usamos la mas importante es "windowpos" ya que esta variable se encarga de obtener la posición vertical actual de la barra de desplazamiento. Ahora debo verificar si el elemento **stickyfloat** ha chocado o no con el footer. Para eso pregunto si el alto de la pantalla es menor a la resta de la posicion del footer en la pantalla con la suma de posición actual de la pantalla con el margen. En caso que esto de verdadero el **stickyfloat** permanecerá al pie de la pantalla y cuando este retorne falso se moverá alineado con el footer.

    
    <code>if($(window).height() < footer.top - (windowpos + margin)){
      //me muevo en el pie de pantalla
    }else{
      //me muevo alineado al footer
    }
    </code>


Para moverte al pie de la pantalla teniendo en cuenta que el alto de la pantalla es variable, necesitas obtener la nueva posición del **stickyfloat** el cual estará compuesto por la suma de la posición actual de la pagina con respecto a la barra de desplazamiento y el alto de la pantalla y luego se le resta la suma de la altura del **stickyfloat** mas el margen que se le quiso dar.

    
    <code>pos = windowpos + $(window).height() - (box.height() + margin);
    dom.stickyElement.css({
      top: pos + "px",
      bottom: ''
    });
    </code>


Para moverlo alineado al footer debes obtener la posición del footer y restarle la suma del margen con la altura del **stickyfloat**. Este elemento tendrá una posición constante salvo que el tamaño de la pantalla varia lo cual puede suceder en un móvil.

    
    <code>pos = footer.top - (box.height() + margin);
    </code>


Finalmente el código terminaría así.

    
    <code>$(function(){
      margin = 10;
      posicionInicial = 0;
      dom = {}
      st = {
        stickyElement: '.stickyfloat_element',
        footer : 'footer',
      };
      catchDom = function(){
        dom.stickyElement = $(st.stickyElement);
        dom.footer = $(st.footer);
      }
      afterCatchDom = function(){
        functions.ubicarPosicionInicial()
      }
      suscribeEvents = function(){
        $(window).on('scroll', events.moveStick);
      }
      events = {
        moveStick : function(){
          windowpos = $(window).scrollTop();
          box = dom.stickyElement;
          footer = dom.footer.offset();
          if ($(window).height() < footer.top - (windowpos + margin)) {
            pos = windowpos + $(window).height() - (box.height() + margin);
            dom.stickyElement.css({
              top: pos + "px",
              bottom: ''
            });
          } else{
            pos = footer.top - (box.height() + margin);
            dom.stickyElement.css({
              top: pos + "px",
              bottom: ''
          });
        }
      }
    }
    functions = {
      ubicarPosicionInicial : function(){
        var newPosition = $(window).height() - (dom.stickyElement.height() + margin);
        $(st.stickyElement).css('top', newPosition + "px");
        posicionInicial = newPosition;
      }
    }
    var init = function(){
      catchDom();
      afterCatchDom();
      suscribeEvents();
    };
    init();
    });
    </code>
