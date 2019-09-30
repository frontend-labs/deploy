---
author: VictorJSV
comments: true
date: 2015-10-13 16:47:58+00:00
layout: post
link: https://frontendlabs.io/3084--aplicar-un-commit-otra-rama-con-git-cherry-pick
slug: aplicar-un-commit-otra-rama-con-git-cherry-pick
title: Aplicar un commit a otra rama con git cherry-pick
wordpress_id: 3084
categories:
- Git
tags:
- Git
---

Actualmente muchos de nosotros nos encontramos trabajando con Git, que es el gestionador de versiones el cual nos ofrece muchas opciones para confirmar cambios, crear o actualizar ramas entre otras cosas.

En algunas situaciones al estar trabajando en diferentes ramas de nuestro proyecto, nos hemos encontrado con situaciones en donde solo queremos capturar un commit en específico de una rama y pasarla a la otra, ya que no queremos hacer un merge entre ambas ramas porque estarían pasando otros cambios que no deseamos.
Para estos casos nos puede ayudar el comando "cherry-pick".


## Explicamos el caso:







    
    
    Tenemos dos ramas:
    o---(C1A)---(C2A)---(C3A)-----> A (master)
    o---(C1B)---(C2B)---(C3B)-----> B (hija)
    
    <b>Donde:</b>
    C{#}{Rama}
    - C : significa commit
    - # : numero del commit
    - Rama: nombre de la rama
    
    Entonces queremos pasar el segundo commit de la rama B (C2B) a la rama A, de tal forma que quede así:
    
    o---(C1A)---(C2A)---(C3A)---<b>(C2B)</b>-----> A (master)
    o---(C1B)---<b>(C2B)</b>---(C3B)-------------> B (hija)
    





  



## Para ello debemos realizar los siguientes pasos:



1. Para saber los commits de la rama master (A) realizo un git log

    
    <code>
    $ git log --pretty=oneline
    
    3cdd67fed7ce2265cb366787455da6fc34c022f5 C3A
    c876d29ace62f329da3e5e2874f546fef79de9a8 C2A
    1356af1f05d7630f1252618bfe5b5116c9c76654 C1A
    </code>
    


2. Cambio a la rama hija (B) para visualizar los commits

    
    <code>
    $ git ck hija 
    </code>
    



    
    <code>
    $ git log --pretty=oneline
    
    e7e7b0a1a900b541cbb507d1a638cbe0c92c2697 C3B
    0244a2f19abf4a38ac77b6c376512c0e0a86d9d4 C2B
    c5d160eae85ebfd5631a716f39842a1f99ea947d C1B
    </code>
    


Con esto identifico el #ID del commit C2B para poder pasarlo a la rama master (A)
- 0244a2f19abf4a38ac77b6c376512c0e0a86d9d4 C2B

3. Una vez teniendo el #ID del commit, cambio de rama a la master para realizar un cherry-pick

    
    <code>
    $ git ck master
    </code>
    


Al realizar un cherry-pick estoy indicando que solo el commit con el #ID va ser aplicado en la rama donde estoy actualmente, en este caso en la rama master (A).
Para este ejemplo el commit C2B contiene un archivo llamado file2B.md.
El formato del cherry-pick sería el siguiente: git cherry-pick #ID

    
    <code>
    $ git cherry-pick 0244a2f19abf4a38ac77b6c376512c0e0a86d9d4
    [master adee66a] C2B
    1 file changed, 0 insertions(+), 0 deletions(-)
    create mode 100644 file2B.md
    </code>
    


4. Para terminar revisamos los commits y vemos que se aplicó correctamente

    
    <code>
    $ git log --pretty=oneline
    
    adee66a2f27e2bc1b05176efd115e0eba81a8b80 C2B
    3cdd67fed7ce2265cb366787455da6fc34c022f5 C3A
    c876d29ace62f329da3e5e2874f546fef79de9a8 C2A
    1356af1f05d7630f1252618bfe5b5116c9c76654 C1A
    </code>
    




## Y si hay conflictos, ¿Qué debo hacer?







    
    
    Es posible que al realizar un cherry-pick nos encontremos con conflictos, esto sucede cuando se ha editado el mismo archivo por otros usuarios.
    
    Para este caso:
       - Primero debemos resolver los conflictos:
         <b>$ git mergetool</b>
       - Segundo debemos agregar estos cambios:
         <b>$ git add --all</b>
       - Tercero debemos aplicar el comando:
         <b>$ git cherry-pick --continue</b>
    <b>
    *Por algún motivo queremos abortar el cherry-pick, debemos aplicar este comando:
    $ git cherry-pick --abort
    </b>
    





  



### Expongamos un caso:


Actualmente ya he identificado el #ID del commit que quiero aplicar en la rama master, entonces hago un cherry-pick.
- 688743c6515ed2d32cfbc361c3a796d3b0b1c4c6 C4B

    
    <code>
    $ git cherry-pick 688743c6515ed2d32cfbc361c3a796d3b0b1c4c6
    error: no se puede aplicar 688743c... C4B
    consejo: después de la resolución de conflictos, marcar las rutas corregidas
    consejo: con «git add » o «git rm »
    consejo: y hacer commit del resultado con «git commit»
    </code>
    


Con esto vemos que hay conflictos y el estado nos dará lo siguiente:

    
    <code>
    $ git status
    En la rama master
    You are currently cherry-picking commit 688743c.
        (fix conflicts and run "git cherry-pick --continue")
        (use "git cherry-pick --abort" to cancel the cherry-pick operation)
    
    Rutas no combinadas:
        (use «git add ...» para marcar resolución)
            modificado por ambos: readme.md
    
    no hay cambios agregados al commit (use «git add» o «git commit -a»)
    </code>
    


Aplicamos los siguientes pasos para resolver los conflictos y continuar con el cherry-pick:

    
    <code>
    $ git mergetool
    $ git add --all
    $ git cherry-pick --continue
    </code>
    


Con esto resolveremos los conflictos y aplicaremos correctamente los cambios.

Para mayor información no dudes en visitar [la documentación de cherry-pick en git](https://git-scm.com/docs/git-cherry-pick) ya que podemos encontrar otras opciones.
