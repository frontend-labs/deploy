---
author: jansanchez
comments: true
date: 2016-04-19 07:06:20+00:00
layout: post
link: https://frontendlabs.io/3464--como-instalar-mongodb-en-linux-ubuntu
slug: como-instalar-mongodb-en-linux-ubuntu
title: "MongoDB: Cómo instalarlo en Linux Ubuntu"
wordpress_id: 3464
categories:
  - Linux
tags:
  - Linux
  - Ubuntu
---

## ¿Cómo instalar MongoDB Community Edition en Linux Ubuntu?

A partir de la versión 3.0, MongoDB se puede instalar de una forma más fácil en Linux
Ubuntu ó Elementary OS.
En este artículo veremos cómo instalar MongoDB para Ubuntu 12.04 LTS (Precise Pangolin) y 14.04 LTS (Trusty Tahr).

Es muy probable que este tipo de instalación también funcione correctamente para las nuevas versiones de Ubuntu.

## Importando la clave pública usada por el sistema gestionador de paquetes de Ubuntu

Las herramientas de gestión de paquetes de Ubuntu (es decir, dpkg y apt) garantizan la coherencia y
la autenticidad del paquete, al exigir que los distribuidores firmen los paquetes con claves GPG.
Ejecuta el siguiente comando para importar la clave pública GPG de MongoDB:

    <code>sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927</code>

## Creando un archivo tipo lista para MongoDB

En este archivo se encontrará la lista de repositorios desde el cual se instalará mongoDB.

## Si estoy usando Elementary OS, ¿Cómo se qué versión de Ubuntu estoy usando?

Simplemente ejecutando el siguiente comando:

    <code>lsb_release -a -u | grep "Description"</code>

Este comando nos dará un resultado parecido al siguiente:

    <code>Description:	Ubuntu 14.04 LTS</code>

Creamos el archivo tipo lista **/etc/apt/sources.list.d/mongodb-org-3.2.list**, usando el comando
apropiado para la versión de ubuntu que estés usando:

### Ubuntu 12.04

    <code>echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list</code>

### Ubuntu 14.04

    <code>echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list"</code>

## Actualizamos la base de datos local de paquetes de nuestro SO

    <code>sudo apt-get update</code>

## Instalando los paquetes de MongoDB

Podemos instalar la última versión estable de MongoDB o una versión específica de MongoDB.

### Instalando la última versión estable de MongoDB

    <code>sudo apt-get install -y mongodb-org</code>

### Instalando una versión específica de MongoDB

Para instalar una versión específica, debe especificar cada componente de forma individual junto con
su número de versión, como en el siguiente ejemplo:

    <code>sudo apt-get install -y mongodb-org=3.2.5 mongodb-org-server=3.2.5 mongodb-org-shell=3.2.5
    mongodb-org-mongos=3.2.5 mongodb-org-tools=3.2.5</code>

Si sólo se instala mongodb-org = 3.2.5, y no se incluyen los demás componentes, se instalará la
última versión de cada componente de MongoDB, independientemente de la versión que ha especificado.

### Comprobando la instalación de MongoDB

Para comprobar si la instalación de MongoDB a sido exitosa simplemente escribimos en la terminal el
siguiente comando:

    <code>mongo --version
    </code>

Si nos indica un número de versión, por ejemplo ** MongoDB shell version: 3.2.5**, quiere decir que tenemos instalada correctamente la versión 3.2.5 de MongoDB.

## Ejecutando/Corriendo MongoDB

La instancia de MongoDB almacena sus archivos de datos en **/var/lib/mongodb **y su registro de logs en **/var/log/mongodb **por defecto, y se ejecuta utilizando la cuenta de usuario mongodb. Puede especificar directorios de
registro de logs y archivo de datos alternos en **/etc/mongod.conf**.

### Iniciando MongoDB

Ejecutamos el siguiente comando para iniciar MongoDB:

    <code>sudo service mongod start</code>

### Comprobando que MongoDB ha iniciado correctamente

Compruebe que el proceso **mongod **ha iniciado correctamente comprobando el contenido del archivo de registro en **/var/log/mongodb/mongod.log **con el siguiente comando:

    <code>cat /var/log/mongodb/mongod.log
    </code>

Al ejecutar este comando podremos ver el log actual de MongoDB.

### Deteniendo el servicio de MongoDB

Para detener el servicio de MongoDB simplemente tenemos que escribir el siguiente comando:

    <code>sudo service mongod stop</code>

### Reiniciando el servicio de MongoDB

Para reiniciar el servicio de MongoDB simplemente tenemos que escribir el siguiente comando:

    <code>sudo service mongod restart</code>

Bueno amigos espero que este artículo les sea de utilidad, si encuentran algún fallo por favor no
duden en comentarlo para poder corregir los pasos de la instalación y ya saben por favor no se
olviden de compartir el artículo.

![como instalar mongodb en linux ubuntu](https://frontendlabs.io/wp-content/uploads/2016/04/mongodb-logo-gray.png)

## Fuentes

MongoDB, Inc. _Install MongoDB Community Edition on Ubuntu._ [En línea][fecha de consulta: 19 de abril del 2016].  
Disponible en: [https://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/).
