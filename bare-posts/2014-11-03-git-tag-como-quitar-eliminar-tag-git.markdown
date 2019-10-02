---
author: jansanchez
comments: true
date: 2014-11-03 21:58:47+00:00
layout: post
link: https://frontendlabs.io/2005--git-tag-como-quitar-eliminar-tag-git
slug: git-tag-como-quitar-eliminar-tag-git
title: "Git tag: ¿Cómo quitar o eliminar un tag desde un repositorio Git?"
wordpress_id: 2005
categories:
  - Git
tags:
  - Control de versiones
  - Linux
  - tips
  - Ubuntu
---

## ¿Qué es un tag en Git?

Git nos brinda una sencilla forma de poner una marca ó etiqueta permanente en un commit específico, lo usaremos generalmente para especificar un hito o suceso relevante en nuestro proyecto. Si tenemos nuestro proyecto tageado, podremos volver fácilmente a ese momento en el proyecto, o comparar ese tag con algún momento en el proyecto.

## Eliminar un tag

En esta ocasión queremos eliminar un tag local(llamado v2.0.3), el comando para hacerlo sería el siguiente:

    <code>
    git tag -d v2.0.3
    </code>

## Eliminar un tag remoto

Si por otro lado quisiéramos eliminar un tag remoto(lo cual no es muy usual) pero tal vez lo necesitemos hacer, estos serían los comandos:

    <code>
    git tag -d v2.0.3
    git push origin :refs/tags/v2.0.3
    </code>

## Eliminar un tag remoto, pero de otra manera

    <code>
    git tag -d v2.0.3
    git push origin :v2.0.3
    </code>

## Agregar un nuevo tag

    <code>
    git tag -a v1.0.0 -m "Version 1.0 Stable"
    </code>

## Subir el ultimo tag al repositorio

    <code>
    git push --tags
    </code>

## ¿Cómo se ve un git tag en gitk?

![git-tag](https://frontendlabs.io/wp-content/uploads/2014/11/git-tag.png)

---

## ¿Y por qué hice este post?

<blockquote>porque estoy usando una herramienta de automatización llamada [gulp-tag-version](https://www.npmjs.org/package/gulp-tag-version) en conjunto con [gulp-bump](https://www.npmjs.org/package/gulp-bump) y por incidentes con mi package.json surgió la necesidad de eliminar tags locales generados erróneamente, estoy seguro que a más de uno le servirá esta pequeña pero importante información.</blockquote>
