---
author: Xio Caro
comments: true
date: 2014-07-04 17:46:12+00:00
layout: post
link: https://frontendlabs.io/1070--seo-conceptos-basicos-para-ayudar-al-posicionamiento-web
slug: seo-conceptos-basicos-para-ayudar-al-posicionamiento-web
title: "SEO: Conceptos Básicos para ayudar al posicionamiento web"
wordpress_id: 1070
categories:
  - SEO
tags:
  - Código
  - HTML5
---

Para obtener un análisis inicial positivo sobre nuestro sitio web tendremos en cuenta lo siguiente:

## 1. Definición de URL (Uniform Resource Locator)

Al crearla debemos usar **“palabras claves” **estratégicas que correspondan perfectamente al contenido del sitio web. Que no sea extensa, es cierto que no hay ningún límite para la longitud de una URL pero es recomendable que esta sea corta tanto por usabilidad como optimización SEO.

Evita utilizar en tus URL **“palabras vacías” **como **“la”**, **“de”**. Para separar palabras en una URL te sugiero usar guiones, por ejm: **www.nombredominio.com/usa-guiones-para-separar-palabras/**

## 2. Título a las Etiquetas (o Tags)

La etiqueta más importante es la **<h1>**, ya que es la que transmite el contenido de una página particular dentro de tu sitio web. Solo debes usarla una vez por página, también evita que estos títulos compuesto por palabras claves no tenga demasiados caracteres.

### a) Uso de etiquetas <h1> a <h6>

La etiqueta **<h> **viene acompañada de un número, desde el 1 hasta el 6, predefiniendo éstos el tamaño e importancia del encabezado. Así, **<h1> **sería el encabezado más grande mientras que **<h6> **sería el más pequeño.

[code lang="html"]

<h1>Reglas Básicas de SEO (Search Engine Optimization)</h1>
[/code]

## 3. Title y Descripción de etiquetas Meta

Es cierto que su importancia es minúscula en el posicionamiento SEO (no ayuda en los ranking de posicionamiento) pero es parte de las reglas básicas. Las etiquetas que se mostrarán en los resultados son Title y Description.

[![snippet](https://frontendlabs.io/wp-content/uploads/2014/07/Captura-de-pantalla-2014-07-04-a-las-15.14.02.png)](https://frontendlabs.io/)

Estas etiquetas básicas debes colocar en el código HTML de la página dentro de la sección **<Head>**

[code lang="html"]

<meta name="title" content="Título para el site el cual si es visible para el usuario"/>
[/code]

[code lang="html"]

<meta name="nombre de la etiqueta" content="contenido de la etiqueta"/>
[/code]

### a) Meta description

La utilizamos para describir la página en la que nos encontramos para buscadores y navegadores web, este contenido no es visible al usuario que visita tu sitio. Como resultado nos ayuda a decirle al usuario de qué trata la página con un texto persuasivo, si no lo llenas, Google se encargará de extraer fragmento textual de tu sitio web el cual no siempre por no decir nunca es lo que necesitamos que se muestre en el snippet generado.

[code lang="html"]

<meta name="description" content="Descripción para el site"/>
[/code]

### b) Meta keywords

Usamos palabras claves para resumir el contenido de un site, aunque los buscadores ya no lo toman en cuenta debido al mal uso de ellos. Entonces dirán - **mejor no lo pongo** - pero por conceptos básicos mejor siguiendo el sistema lo ponemos, 10 items permitidos.

[code lang="html"]

<meta name="keywords" content="frontend, seo, reglas, posicionamiento, html, css"/>
[/code]

### c) Meta robots

Esta etiqueta da instrucciones a los buscadores por ende es muy importante, creamos un archivo robots.txt donde declaramos las páginas, directorios completos y todo tipo de archivos alojados en tu servidor (html, carpetas, etc) que no queremos que aparezcan en los índices del buscador (las excluimos de ser rastreados), a la vez indicas dónde está alojado el sitemap de tu sitio.

[code lang="html"]

<meta name="robots" content="noindex,nofollow"/>
[/code]

### d) Metaetiquetas Adicionales

Existen mucho más tags, pero solo mencionaremos los más comunes:

**Author** – Colocamos el nombre de la persona o entidad que ha creado el contenido de la página; de este modo es fácil de encontrar la persona responsable de una página web.

[code lang="html"]

<meta name="author", content="FrontEnd Labs"/>
[/code]

**Subject **– Algo parecido a la meta descripción, pero más breve.

[code lang="html"]

<meta name="subject" content="el tema de tu site"/>
[/code]

**Generator **– Colocamos el editor HTML o el gestor de contenidos con el que se ha creado el site.

[code lang="html"]

<meta name="generator" content="Sublime Text2"/>
[/code]

**Language **– Colocamos el idioma en el que está escrito el site.

[code lang="html"]

<meta name="language" content="es"/>
[/code]

## 4. Imágenes y links

En todas las imágenes y links que usemos en los sites, debemos poner un nombre en el atributo **"alt"** para imágenes  este texto será la información (recomendable no excederse a 150 caracteres) que salga en tu site cuando no se haya cargado la imagen asignada; y** "title"** para los links.

[code lang="html"]
<img src="images/seo.jpg" alt="Reglas Básicas de SEO">

<a href="https://frontendlabs.io/" title="FronEnd Labs">FronEnd Labs</a>
[/code]

## 5. Usar tus archivos CSS y JAVASCRIPT de modo externo

Los motores de búsqueda suelen ignorar archivos CSS y JavaScript, pero incluso si no lo hacen (cambios de algoritmo de Google), colocando el CSS / JavaScript en archivos externos ayudarán al rastreador encontrar tu contenido más rápido.

[code lang="html"]

<link rel="stylesheet" href="style.css" type="text/css" media="screen" />
<script src="scripts.js" type="text/JavaScript" charset="utf-8"></script>
[/code]

## 6. Crea un archivo sitemap.xml para Google

Para asegurarse de que sus páginas están indexadas y almacenan en caché de forma rápida en Google, puede crear un archivo sitemap.xml. Es un archivo XML que contiene una lista con todas las páginas de su sitio. Puedes generarlo desde [aquí](http://www.xml-sitemaps.com).

[code lang="html"]

<?xml version="1.0" encoding="UTF-8"?>

<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->

<url>
  <loc>https://frontendlabs.io/</loc>
  <changefreq>always</changefreq>
</url>
</urlset>
[/code]

## 7. Hacer un Mapa de Sitio

Debes hacer una página HTML sitemap detallada que enlaza con todas las páginas en su sitio. Recuerda que mientras menos clics que se necesita para llegar a una página es mejor. Puedes generarlo desde [aquí](http://astuteo.com/slickmap/).

## 8. Utilice Breadcrumb Navigation

Considere el uso de Breadcrumb como una ayuda a la navegación secundaria. Esto hace que sea más fácil para los usuarios moverse alrededor de su sitio web. Asegúrese de que el texto en sus enlaces breadcrumb describe con precisión el contenido de la página correspondiente.

[![breadcrumb](https://frontendlabs.io/wp-content/uploads/2014/07/Captura-de-pantalla-2014-07-04-a-las-16.35.55.png)](https://frontendlabs.io/category/codigo)

## 9. Plantear un diseño de Footer efectivo

Use los enlaces de pie de página para ayudar a los motores de búsqueda navegar a través de su sitio, replicando su navegación principal y la vinculación a las páginas más importantes de su sitio.

## 10. Cree una Página de error Informativo

Si un usuario escribe un error url equivocada o incorrecta, se mostrará una página de servidor por defecto con un mensaje de error interno. Ese mensaje no es muy útil, por lo que en lugar debes crear una página de error 404 fácil de usar que une de nuevo a la página de inicio, muestra las alternativas para la navegación o enlaces a contenido posiblemente relacionados.

P.D. Para hacer una evaluación básica de nuestros sites te recomiendo:
[http://seoquake.com](http://www.seoquake.com/)
