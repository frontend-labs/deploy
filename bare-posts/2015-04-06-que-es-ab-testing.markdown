---
author: anareyna
comments: true
date: 2015-04-06 15:56:28+00:00
layout: post
link: https://frontendlabs.io/2435--que-es-ab-testing
slug: que-es-ab-testing
title: Aprendiendo sobre A/B Testing
wordpress_id: 2435
categories:
  - Experimientos
  - Marketing
tags:
  - analytics
  - google
  - tools
  - Tutorial
  - wordpress
---

Si eres diseñador, desarrollador front-end, gestor de proyectos o tienes un sitio web seguramente has escuchado sobre el A/B Testing (o Pruebas A/B), vamos a ver algunos conceptos y ejemplos para entender más en que consiste.

## ¿Qué es A/B Testing?

En palabras simples, A/B Testing consiste en comparar dos versiones de una página web y determinar cuál de ellas produce mejores resultados al dirigir a los visitantes a una de tus metas.

## ¿Por qué se llama A/B Testing?￼

Porque estamos comparando 2 opciones:

![ab-simple](https://frontendlabs.io/wp-content/uploads/2015/03/ab-simple.png)

**Opción A:** Control   vs.   **Opción B:** TestComo vemos en la imagen tenemos dos escenarios parecidos en donde la variable es el color del botón que cambia de azul a rojo.

El propósito de ejecutar un test A/B es de refutar una hipótesis nula. El A/B Testing necesita demostrar con una significación estadística que el test es una mejora sobre el control (para esto existen servicios y herramientas especializadas que listo más abajo).

## ¿Por qué hacer A/B Testing?

Sabemos ya de algunas convenciones en la web que resultan mejor para el usuario final (como el poner un campo de búsqueda en la parte superior del sitio), pero... ¿qué pasa cuando queremos probar nuevas características o surgen nuevas ideas de las cuales no tenemos información del impacto que puede causar en los usuarios?

Al poder probar una idea contra otra esto hará que se minimice el riesgo de fracaso debido a problemas simples.

El A/B Testing también permite resolver debates, ya que evita llegar a conclusiones equivocadas basadas en suposiciones a cambio de una resolución al problema con usuarios reales y data que lo respalda.

## Multivariate Testing o Prueba multivariable

￼![ab-multiple](https://frontendlabs.io/wp-content/uploads/2015/03/ab-multiple.png)

Este tipo de test es más complejo porque compara más de una variable al mismo tiempo y se requiere de más combinaciones para hacer la prueba.

Para la prueba multivariable se necesita que el sitio tenga un tráfico mucho mayor para obtener una significación estadística relevante.

Para sitios pequeños es probablemente mejor práctica realizar múltiples A/B Testing, de esta forma se podrán obtener los mismos resultados pero sometiendo a prueba una variable a la vez (como color, texto, posición, tamaño, etc.).

## Ejemplo real de un caso exitoso

### Electronic Arts

**Objetivo:** Incrementar ingresos

SimCity 5, uno de  los [video juegos de EA más populares](http://blog.optimizely.com/2013/06/14/ea_simcity_optimizely_casestudy/), vendió 1.1 millones de copias en las primeras dos semanas de su lanzamiento. 50% de las ventas fueron descargas digitales, gracias a una buena estrategia de A/B testing.

￼
[![simcity_original2](https://frontendlabs.io/wp-content/uploads/2015/03/simcity_original2-1024x557.jpg)](https://frontendlabs.io/wp-content/uploads/2015/03/simcity_original2.jpg)

En la imagen del lado izquierdo podemos ver la **propuesta original**, EA lanzó una oferta promocional para alcanzar más pre-ventas del juego. La oferta se mostraba en un banner ubicado en la parte superior de la página. Sin embargo, de acuerdo al equipo la promoción no estaba incrementando las pre-ventas como se esperaba, así que decidieron poner a prueba otras opciones para ver qué diseño o layout generaría más ganancias.

En la imagen del lado derecho tenemos **la variación**, aquí se optó por eliminar el banner de promoción de la página. El test trajo algunos resultados sorprendentes: **la variación sin banner de oferta generó 43.4% más ventas**. Resulta que la gente solo quería comprar el juego, sin incentivos extras necesarios.

La mayoría cree que las promociones directas generan más ventas, pero para EA ésto resultó ser totalmente falso. El A/B testing les brindó la información necesaria para maximizar sus ganancias de una manera efectiva.

## Preparándonos para las pruebas

Es bueno empezar viendo qué es lo que queremos alcanzar. No se puede comparar sin antes entender, analizar y observar las analíticas, esto nos servirá para identificar las áreas con problemas (los usuarios no se están registrando, abandonan el proceso de compras, etc.).

Ten en cuenta que las variaciones A y B no se escogen al azar,  necesitamos tomarnos tiempo para considerar el problema con entrevistas a usuarios, testings, etc. Debes conocer a tu audiencia para saber a quién apuntas y qué es lo que buscan o quieren.

## ¿QUÉ TESTEAR?

Debemos realizar los tests más importantes primero, esto dependerá de tus objetivos. Si quieres aumentar por ejemplo el número de registros, entonces podrías testear la longitud del formulario de registro, los tipos de campos en el formulario, la forma en que se muestran las políticas de privacidad, etc. La meta del A/B testing aquí es encontrar qué es lo que evita que tus visitantes se registren en tu web, ésto se resuelve sometiendo a test los elementos apropiados de tu website.

Aunque cada A/B test es único hay ciertos elementos que son puestos a prueba usualmente:

- Layout y estilo del website

- Títulos o descripción de producto

- Longitud de formularios y tipo de campos

- Precios de productos y ofertas promocionales

- Cantidad de texto en la página (largo vs. corto)

- Los botones de llamado a la acción (call to action), palabras, tamaño, color y posición, etc.

- Imágenes en páginas de landing o productos.

## EMPIEZA A CREAR TUS tests

Servicios de testing populares:

- [Optimizely](https://www.optimizely.com/) (popular, barato y con opción a una plan básico gratis)

- [Visual Website Optimizer](https://vwo.com/) (A/B Testing software for marketers, planes desde \$49/mes)

- [Google Content Experiments](https://support.google.com/analytics/answer/1745149) (gratis)

- [A/Bingo](https://www.bingocardcreator.com/abingo), [Vanity](http://vanity.labnotes.org/) (Ruby on Rails)

- [Unbounce](http://unbounce.com/) (se especializa en landing pages)

- [convert.com](http://www.convert.com/)

- [KISSmetrics](https://www.kissmetrics.com/)

- [Maxymiser](https://www.maxymiser.com/)

- [Adobe Target](http://www.adobe.com/la/solutions/testing-targeting.html)

## Otros enlaces útiles

Obtén ideas para tu próximo test:

- [WhichTestWon](https://whichtestwon.com/)

- [101 a/b testing tips](http://www.conversion-rate-experts.com/cro-tips/)

- [Verify App](http://verifyapp.com/)

- [Crazy Egg ](http://www.crazyegg.com/)

- [Hubspot](http://hubspot.com)

- [Usertesting.com ](http://www.usertesting.com/)

Si tienes más recursos o algún comentario respecto a este tema no olvides compartirlo con nosotros, aquí siempre estamos dispuestos a seguir mejorando, gracias!
