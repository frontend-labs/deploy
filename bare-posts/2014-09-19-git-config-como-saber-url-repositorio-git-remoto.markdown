---
author: jansanchez
comments: true
date: 2014-09-19 21:48:27+00:00
layout: post
link: https://frontendlabs.io/2027--git-config-como-saber-url-repositorio-git-remoto
slug: git-config-como-saber-url-repositorio-git-remoto
title: 'Git config: ¿Cómo saber la URL de un repositorio git remoto?'
wordpress_id: 2027
categories:
- Git
---

## Git config: ¿Cómo saber la URL de un repositorio git remoto?



Muchas veces cuando trabajamos con varios proyectos a la vez por lo general nos pasa que necesitamos saber cual es la URL del repositorio en el que estamos trabajando para saber a donde enviaremos nuestros commits.

Para resolver esas y otras dudas con respecto a la configuración de nuestro repositorio.

Git nos proporciona el comando git config, el cual tiene múltiples opciones.



## Obteniendo la URL de nuestro repositorio




    
    <code>git config --get remote.origin.url</code>



La terminal nos mostrará la URL que andabamos buscando:


    
    <code>https://github.com/jansanchez/flux.git</code>





## Obteniendo la configuración local de nuestro repositorio



Si queremos conocer todos los datos de la configuración local de Git en nuestro proyecto, simplemente escribimos lo siguiente:


    
    <code>
    git config --local -l
    </code>
    



La terminal nos mostrará algo similar a:


    
    <code>
    core.repositoryformatversion=0
    core.filemode=true
    core.bare=false
    core.logallrefupdates=true
    remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
    remote.origin.url=https://github.com/jansanchez/flux.git
    branch.master.remote=origin
    branch.master.merge=refs/heads/master
    </code>
    





## Obteniendo la configuración global de nuestro repositorio



Si queremos conocer todos los datos de la configuración global de Git en nuestro ordenador, simplemente escribimos lo siguiente:


    
    <code>
    git config --global -l
    </code>
    




La terminal nos mostrará algo similar a:


    
    <code>
    user.name=Jan Sanchez
    user.email=joejansanchez@gmail.com
    credential.helper=cache --timeout=9800
    merge.tool=meld
    core.editor=vim
    core.attributesfile=~/.gitattributes
    </code>
    






## Git config



A través de este comando podemos leer y escribir las configuraciones de Git para el sistema, por usuario y/o por repositorio.

Si deseas saber un poco más sobre este comando de Git, puedes revisar nuestro post: [Git: Comandos básicos que no debes dejar de usar](https://frontendlabs.io/885--git-comandos-basicos-tutorial-espanol#git-config).
