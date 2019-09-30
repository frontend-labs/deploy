---
author: erikfloresq
comments: true
date: 2014-04-27 13:35:33+00:00
layout: post
link: https://frontendlabs.io/605--como-hacer-un-check-all-inteligentemente
slug: como-hacer-un-check-all-inteligentemente
title: Como hacer un Check All inteligentemente
wordpress_id: 605
categories:
- Javascript
tags:
- Código
- Javascript
---

Para hacer un Check All no es necesario hacer un if para validar si el elemento esta con check o no, veamos




Cuando se le bandee al  chk-parent (bindear dice del acto de dar una accion a algo) el click para que arranque la selección todo los checks que poseen la clase chk-children, aunque también podríamos señalar que capture todos los inputs con $('input:checked')




Luego, seleccionamos todos los label con $('label') y dentro de cada uno buscamos los chk-children con .find('.chk-children'). y a eso le colocamos el atributo checked con .attr('checked',this.checked) , el truco es colocar this.checked para que este coloque true o false, para que haga la acción solo con una linea de código si no pusiéramos eso, tendríamos que hacer un if para identificar cuando esta seleccionado o no seleccionado, lo que sucede es que con el this hacemos referencia al objeto  y con el atributo checked me devuelve true o false cosa que cuando hagamos el evento de checked este ya se coloca inmediatamente!
