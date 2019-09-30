---
author: VictorJSV
comments: true
date: 2014-06-08 06:35:18+00:00
layout: post
link: https://frontendlabs.io/755--iconos-como-fuente-de-letra-con-grunt-js-y-grunt-webfont
slug: iconos-como-fuente-de-letra-con-grunt-js-y-grunt-webfont
title: Iconos como fuente de letra con Grunt JS y Grunt Webfont
wordpress_id: 755
categories:
- Automatización
- Javascript
tags:
- Automatización
- CSS3
- Grunt
- HTML5
- Iconos
- Stylus
---

## Situación


Como vemos hoy en día para brindar mejor experiencia, usabilidad y estilo a una pagina web se usan iconos que facilitan al usuario entender la información mas fácilmente. Nosotros, como desarrolladores, usualmente guardamos estos iconos en una imagen PNG ([sprite](http://www.w3schools.com/css/css_image_sprites.asp)) donde luego serán llamados por medio de estilos CSS, pero **¿Qué sucede cuando vemos que se usa el mismo estilo de icono con diferente color o tamaño?**

Usualmente lo ponemos en el mismo archivo PNG (icon-set.png) generando más peso y tamaño del mismo. Esto es un problema ya que le estaríamos quitando velocidad de carga a la pagina.


## Solución


La mejor técnica es guardar estos iconos como archivo de fuente de texto (fuente de iconos) que nos van a permitir tener mayor **flexibilidad ** al manipularlos.


### Flexibilidad


Quiere decir que con estos iconos podemos:



	
  * Cambiar de color

	
  * Cambiar de tamaño - **sin perder calidad**

	
  * Agregar sombras

	
  * Animarlos - Rotar, escalar, etc




## Cómo utilizarlos


Existen en la web, paquetes de iconos ya predefinidos que podemos usar como [Font Awesome](http://fortawesome.github.io/Font-Awesome/), esto es una solución muy rápida para sacarnos de apuros, pero qué sucede cuando nosotros queremos hacer nuestros propios iconos o solo elegir lo que necesitamos.

Aquí entra [Grunt JS](http://gruntjs.com/) junto con el plugin [Grunt Webfont](https://github.com/sapegin/grunt-webfont) para simplificarnos la vida =). Lo que hace este plugin es capturar los iconos en archivos SVG independientes y crear una fuente TTF para usarlo en la web.


### Manos a la obra:


Suponiendo que ya tenemos instalado Grunt JS en nuestra computadora, o de lo contrario te invito a leer este [post ](https://frontendlabs.io/146--gruntjs-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos)para que lo puedas instalar.

1. Primero tendremos que irnos de compras o recolectar iconos que vamos a usar en nuestra página web, incluso hasta lo podemos crear con cualquier programa (editor de vectores) como Ilustrador. **Es muy importante que estos archivos estén con formato SVG.**
Algunas de estos sitios web gratuitos donde puedes recolectar son:



	
  * [IconMonstr](http://iconmonstr.com/)

	
  * [Flaticon](http://www.flaticon.com/)

	
  * [Icon Finder](https://www.iconfinder.com)


Escogemos los iconos que queremos y los guardamos en una carpeta llamada Icons

[![imageIcons1](https://frontendlabs.io/wp-content/uploads/2014/06/imageIcons1.jpg)](https://frontendlabs.io/wp-content/uploads/2014/06/imageIcons1.jpg)
Hay que tener en cuenta que solo vamos a necesitar los archivos *.svg

2. Segundo tenemos que preparar el proyecto para instalar paquetes de Grunt, digamos que tenemos esta estructura de carpetas.

[![imageIcons2](https://frontendlabs.io/wp-content/uploads/2014/06/imageIcons2.jpg)](https://frontendlabs.io/wp-content/uploads/2014/06/imageIcons2.jpg)

3. En tercer lugar vamos a instalar el plugin **Grunt Webfont** que va a capturar estos iconos *.svg y los renderizará en las fuentes TTF, EOT, SVG y WOFF para poder utilizarlos luego.

Nos derigimos a la carpeta grunt y escribimos en consola:


#### Para usuarios de linux


[code lang="bash"]
sudo apt-get install fontforge ttfautohint
npm install grunt-webfont --save-dev
[/code]



#### Para usuarios de Windows


[code lang="bash"]
npm install grunt-webfont --save-dev
[/code]

4. Ahora vamos a configurar la tarea grunt. Nos dirigimos al archivo Gruntfile.js y agregamos.
[code lang="js"]
webfont: {
	icons: {
		src: '../icons/*.svg',			//Ruta de los svg que van hacer convertidos
		dest: '../fonts',			//Ruta de destino de la compilación
		destCss: '../fonts/build',	        //Ruta de destino donde se creará la hoja de estilos css y un html ejemplo
		options: {
			stylesheet: 'css',		//Extensión de la hoja de estilos, css
			relativeFontPath: '../fonts'	//La ruta del src - font-family que se imprime dentro de la hoja de estilos
		}
	}
}
[/code]
[code lang="js"]
grunt.loadNpmTasks('grunt-webfont');
[/code]

Quedando nuestro archivo **Gruntfile.js** de la siguiente manera.
[code lang="js"]
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		webfont: {
			icons: {
				src: '../icons/*.svg',
				dest: '../fonts',
				destCss: '../fonts/build',
				options: {
					stylesheet: 'css',
					relativeFontPath: '../fonts'
				}
			}
		}
	});

	// Load the plugin that provides the “uglify” task.
	// grunt.loadNpmTasks(‘pluginname’);
	grunt.loadNpmTasks('grunt-webfont');
	// Default task(s).
	grunt.registerTask('default', ['webfont']);
};
[/code]

También nos queda el archivo **package.json** de la siguiente manera.
[code lang="js"]
{
  "name": "font-icons",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "^0.4.5",
    "grunt-contrib-cssmin": "^0.9.0",
    "grunt-contrib-jshint": "~0.1.1",
    "grunt-contrib-nodeunit": "~0.1.2",
    "grunt-webfont": "^0.4.2"
  }
}
[/code]

5. Por último procederemos a correr la tarea grunt, primero nos dirigimos a la **carpeta grunt** de nuestro proyecto y escribimos en consola.
[code lang="bash"]
grunt webfont
[/code]

Donde correrá la tarea y se creará una nueva carpeta llamada **fonts**, quedando la estructura de carpetas de la siguiente manera
[![imageIcons3](https://frontendlabs.io/wp-content/uploads/2014/06/imageIcons3.jpg)](https://frontendlabs.io/wp-content/uploads/2014/06/imageIcons3.jpg)

Se creó los archivos de fuente de texto (**TTF, EOT, SVG y WOFF**), dentro de la carpeta **"build"** la hoja de estilos y un **HTML de ejemplo** donde se muestra cómo se visualiza los iconos (**icons.html**).

Solo se ha usado las opciones básicas que nos trae grunt-webfont, pero hay mucho más opciones dentro del github del proyecto ([Ver proyecto](https://github.com/sapegin/grunt-webfont)).
