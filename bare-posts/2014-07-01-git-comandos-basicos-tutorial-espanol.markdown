---
author: jansanchez
comments: true
date: 2014-07-01 03:00:35+00:00
layout: post
link: https://frontendlabs.io/885--git-comandos-basicos-tutorial-espanol
slug: git-comandos-basicos-tutorial-espanol
title: "Git: Comandos básicos que no debes dejar de usar"
wordpress_id: 885
categories:
  - Git
  - Linux
tags:
  - Código
  - Control de versiones
  - Debian
  - Linux
---

Git es un sistema de control de versiones distribuido muy usado en el mundo y en este post mencionaremos a grosso modo algunos **comandos Git muy útiles** al momento de utilizar este controlador de versiones.

A continuación vamos a ver algunos de los comandos Git que no debes dejar de usar:

## **1. git commit --amend**

Sirve para modificar el log de un commit, por ejemplo imagínate que escribiste mal un commit, con este comando tienes la oportunidad de corregirlo.

Modificando el log del último commit que hayamos realizado:

    <code>
    git commit --amend
    </code>

Luego podremos editar el último commit y si deseamos corregir algún error que hayamos cometido.

## **2. git merge --abort**

Sirve para **abortar un merge en curso**, se usa para deshacer un merge fallido, lo que quiere decir es que solo puedes abortar un merge y regresar todo a la normalidad cuando el merge ha fallado y tiene conflictos.

    <code>
    git merge --abort
    </code>

Ten en cuenta que si el merge a sido exitoso este comando no realizará ninguna acción.

## **3. git branch**

Sirve para crear, listar, eliminar ramas y algunas opciones más.

Creando una rama local:

    <code>
    git branch nombre_rama
    </code>

Listando ramas locales:

    <code>
    git branch
    </code>

Listando ramas remotas:

    <code>
    git branch -r
    </code>

Eliminando una rama local:

    <code>
    git branch -d nombre_rama
    </code>

Forzar la eliminación de una rama local:

    <code>
    git branch -D nombre_rama
    </code>

Cambiar de nombre a una rama local, estando en la misma rama:

    <code>
    git branch -m nombre_nuevo
    </code>

Cambiar de nombre a una rama local, estando en otra rama:

    <code>
    git branch -m nombre_anterior nombre_nuevo
    </code>

## **4. git stash**

Sirve para guardar el estado actual de tus cambios sin tener que realizar un commit en tu proyecto, al usarlo regresas el puntero hacia el ultimo commit realizado como si nada hubiera pasado.
Asi los cambios que realizaste se han guardado en una rama temporal de Git y los puedes recuperar cuando desees con los comandos: **"git stash apply"** o **"git stash pop"**.

Guardando o escondiendo mis cambios:

    <code>
    git stash
    </code>

Recuperando mis cambios guardados o escondidos anteriormente:

    <code>
    git stash apply
    </code>

Para mayor información sobre como usar git stash, puedes pasar por nuestro artículo: [La importancia del comando “Git stash” en un proyecto](https://frontendlabs.io/940--la-importancia-del-comando-git-stash-en-un-proyecto).

## **5. git tags**

Git tiene la habilidad de etiquetar (tag) puntos específicos o importantes en la historia. Generalmente la gente usa esta funcionalidad para marcar puntos donde se ha lanzado alguna versión (v1.0, y así sucesivamente).

Listando tus etiquetas(lo hace alfabéticamente por defecto):

    <code>
    git tag
    </code>

Buscando una etiqueta de acuerdo a un patrón en particular:

    <code>
    git tag -l 'v3.4.*'
    </code>

Creando una nueva etiqueta:

    <code>
    git tag -a v1.0.0 -m "Flux: Agregando el módulo para Stylus"
    </code>

Enviando una etiqueta al servidor:

    <code>
    git push origin tag v1.0.0
    </code>

## **6. git show**

Muestra información de varios tipos de objetos Git.

Mostrando la información del tag v1.0.0 en forma corta(-s de short):

    <code>
    git show v1.0.0 -s
    </code>

## **7. git config**

A través de este comando podemos leer y escribir las configuraciones de Git para el sistema, por usuario y/o por repositorio.

Definiendo el nombre con que será identificado la persona que realiza los commits(a.k.a commiter):

    <code>
    git config --global user.name "Juan Perez"
    </code>

Definiendo el email del commiter:

    <code>
    git config --global user.email "email@dominio.com"
    </code>

Definiendo el editor de texto con el que trabajará Git(en este caso elijo vim):

    <code>
    git config --global core.editor vim
    </code>

Definiendo [**meld**](http://meldmerge.org/) como herramienta para la solución de conflictos en un merge:

    <code>
    git config --global merge.tool meld
    </code>

Definiendo el alias "st" para Git:

    <code>
    git config --global alias.st status
    </code>

Con esto he definido el alias "st", para que en vez de escribir:

    <code>
    git status
    </code>

Tan solo escriba:

    <code>
    git st
    </code>

Estoy seguro que estos pocos, pero valiosos comandos Git te servirán más de una vez, y si estás interesado en ver algo más sobre Git puedes pasar por el siguiente post: [Consejos básicos usando Git](https://frontendlabs.io/779--consejos-basicos-git-tutorial-espanol-ejemplos).
