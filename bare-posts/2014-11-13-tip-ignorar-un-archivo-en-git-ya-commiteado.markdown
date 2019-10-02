---
author: VictorJSV
comments: true
date: 2014-11-13 20:46:53+00:00
layout: post
link: https://frontendlabs.io/2052--tip-ignorar-un-archivo-en-git-ya-commiteado
slug: tip-ignorar-un-archivo-en-git-ya-commiteado
title: "Tip: Ignorar un archivo en git que ya ha sido commiteado antes"
wordpress_id: 2052
categories:
  - Git
tags:
  - Linux
  - tips
---

## Ignorar un archivo en git que ya ha sido commiteado antes

##

### El Problema:

Supongamos que en el repositorio [Git](http://git-scm.com/about) de un proyecto tengo 2 archivos con los que siempre he estado trabajando. Por ejemplo, imaginemos que se llamen:

- novia.js

- ex-novia.js

Pero de pronto, por alguna razón quiero ignorar el archivo ex-novia.js y entonces agrego este archivo en mi .gitignore para que Git no considere los cambios de ese archivo al hacer un commit.

Sin embargo, por alguna razón edito el archivo ex-novia.js y al hacer un git status sigue indicandome que aún tengo cambios por commitear.

Entonces nos preguntamos ¿Porqué Git no ignora el archivo ex-novia.js a pesar de que ese archivo yá está indicado en el .gitignore?

## ¿Cómo obligo a Git olvidar por completo ese archivo?

Git aún tiene registrados todos estos archivos en su cache, es por eso que la eliminaremos.

Para lograr esto, entonces ejecutamos:

    <code>
    git rm -r --cached .
    </code>

Luego agregamos nuevamente todos los archivos que deseamos que Git registre.

    <code>
    git add .
    </code>

Claro que esta vez ya no se estaría commiteando nuestro archivo ex-novia.js.

Y por último hacemos un git commit.

    <code>
    git commit -m "Ahora mi .gitignore ya ignora normalmente."
    </code>

Con esto ahora sí el archivo ex-novia.js será ignorado de ahora en adelante.
