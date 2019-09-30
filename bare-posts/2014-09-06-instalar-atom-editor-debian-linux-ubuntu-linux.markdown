---
author: VictorJSV
comments: true
date: 2014-09-06 23:21:21+00:00
layout: post
link: https://frontendlabs.io/1758--instalar-atom-editor-debian-linux-ubuntu-linux
slug: instalar-atom-editor-debian-linux-ubuntu-linux
title: Cómo instalar Atom Editor en Debian Linux
wordpress_id: 1758
categories:
- Linux
- tutorial
tags:
- Debian
- Editores de texto
- Linux
- raml
---

Atom Editor es el nuevo editor de texto/código, desarrollado por Github. Este editor está escrito con tecnologías como Node.js, CoffeeScript y LESS, es muy sencillo de usar, muy personalizable y ofrece varias herramientas para el desarrollo.

La instalación en la plataforma Linux se ha ido mejorando hasta llegar a un paquete .deb, listo para instalar. 

Descargamos el paquete [atom-amd64.deb](https://github.com/atom/atom/releases/latest) y luego abrimos nuestro terminal en la carpeta donde se descargó y escribimos lo siguiente:

    
    <code>
    sudo dpkg --install atom-amd64.deb
    </code>
    




Una vez terminada la instalación podemos ejecutar Atom desde la consola, escribiendo:


    
    <code>
    atom
    </code>
    



La versión de Linux no se actualiza automáticamente actualmente por lo que tendrá que repetir estos pasos para actualizar a versiones futuras.


![atom editor](https://frontendlabs.io/wp-content/uploads/2014/09/Screenshot-090614-173329-e1410190546282.png)

Para más información los invito a revisar su [repositorio en Github](https://github.com/atom/atom) y el [sitio web](https://atom.io/) donde está su documentación.


## Atom Editor Extras:


Podemos aplicar varios temas para nuestro editor y uno de ellos es el [Seti UI](https://atom.io/themes/seti-ui) que muestra con iconos de archivos personalizados y una gran combinación de colores de sintaxis.
