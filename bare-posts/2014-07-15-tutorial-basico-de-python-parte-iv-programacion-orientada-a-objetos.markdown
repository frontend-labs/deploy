---
author: Carlos Huamani
comments: true
date: 2014-07-15 21:54:49+00:00
layout: post
link: https://frontendlabs.io/1305--tutorial-basico-de-python-parte-iv-programacion-orientada-a-objetos
slug: tutorial-basico-de-python-parte-iv-programacion-orientada-a-objetos
title: "Tutorial Básico de Python – Parte IV : Programación orientada a objetos"
wordpress_id: 1305
categories:
  - Python
tags:
  - Código
  - Debian
  - Lenguaje de programación
  - Linux
  - Python
  - Tutorial
---

En el capitulo anterior entendimos como trabajan las[ funciones en python](https://frontendlabs.io/1257--tutorial-basico-de-python-parte-iii-funciones). Ahora estamos en la capacidad de entender como funciona la programación orientada a objetos.

La programación orientada a objetos es un paradigma  el cual propone modelar todo en base a clases y a objetos. Este paradigma consiste en el uso de los conceptos de  herencia, cohesión, abstracción, polimorfismo, acomplamiento y encapsulamiento.

### Clases y objetos

Si no tienen conocimiento alguno sobre la programación orientada a objetos, tratare de explicar este concepto por medio de un ejemplo. Para comenzar debemos comprender que todo lo que nos rodea son objetos incluso nosotros mismos podemos ser considerados como objetos. Ahora si todos somos objetos...¿Qué es una clase? La clase es, por asi decirlo, la plantilla de donde se crea este objeto.

Por ejemplo si nos ponemos a pensar en gatos. ¿Cómo podemos reconocer que un gato es en si un gato y no un perro? Bueno, todo gato tiene ojos, nariz, boca, 4 patas, mucho pelo, una cola, orejas, dice miau, ronronea y tienen sus garras. Esto seria la plantilla del gato y con lo mencionado anteriormente también podemos imaginarnos uno. ¿Pero fuimos específicos en sus características? Cada uno de nosotros podemos pensar en un gato pero no sera el mismo. Cada uno hemos pensado en una **instancia** de un gato acorde a las características que hemos mencionado. Yo pude haber pensado en un gato gordo de pelaje rojo. Mientras que otro habrá pensado en un gato virtual de ojos grande de color naranja.

Ejemplo de instancias:

![gato-obeso](https://frontendlabs.io/wp-content/uploads/2014/07/gato-obeso-e1405370396350.jpg) ![gruñon](https://frontendlabs.io/wp-content/uploads/2014/07/gruñon-291x300.jpg) ![gato flaco](https://frontendlabs.io/wp-content/uploads/2014/07/gato-flaco-300x225.jpg) ![3D](https://frontendlabs.io/wp-content/uploads/2014/07/3D-300x221.jpg)

Podemos ver que todos son gatos sin embargo cada uno es una **instancia** distinta con distintos atributos.

Ahora ¿como plasmamos eso a Python?

Pues ahora que sabemos estos conceptos. Crearemos una clase llamada Gato. Pero antes explicare la función ****init**** que posee python.

Esta función siempre se ejecuta cuando se crea un objeto. Ahora mostraremos como es la estructura de una clase y como funciona lo que hemos explicado.

[sourcecode language="python"]
class A:
def **init**(self):
print 'me ejecuto primero'

    def funcion(self):
        print 'soy una funcion.!!'

[/sourcecode]

Ya tenemos la clase **A** donde hemos declarado dos funciones las cuales son opcionales. Ahora veremos que sucede cuando creamos una instancia de esta clase. Cabe resaltar que que una instancia es un objeto.

[sourcecode language="python"]
instancia = A()

# me ejecuto primero

[/sourcecode]

Al crear la instancia de la clase **A** visualizamos que se ejecuta automáticamente el **init** y por ende se visualiza en la consola el texto "me ejecuto primero". Si imprimimos la instancia por si sola. Se mostrará la clase a la cual pertenece dicha instancia y donde se encuentra almacenado en memoria.

[sourcecode language="python"]
print instancia

# <**main**.A instance at 0x7f5942210320>

[/sourcecode]

Ahora que tenemos la instancia somos capaces de llamar a las funciones que pertenecen a esta clase.

[sourcecode language="python"]
instancia.funcion()
soy una funcion.!!
[/sourcecode]

Ahora procedamos a crear la clase Gato. Esta función gato tendrá el atributo energía y hambre para hacerlo más interesante.

[sourcecode language="python"]
class Gato:
def **init**(self, energia, hambre):
self.energia = energia
self.hambre = hambre
print 'Se creo un gato'

    def tomar_leche(self, leche_en_litros):
        self.hambre += leche_en_litros
        print 'el gato toma su leche'

    def acariciar(self):
        print 'prrrrr...'

    def jugar(self):
        if self.energia <= 0 or self.hambre <=1:
            print 'el gato no quiero jugar'
        else:
            self.energia -=1
            self.hambre -= 2
            print 'al gato le encanta jugar'

    def dormir(self, horas):
        self.energia += horas
        print 'el gato tomo una siesta'

[/sourcecode]

Gracias al atributo "self" es posible utilizar las variables declaradas en ****init**** dentro de toda la clase.

A continuación crearemos una instancia de la clase Gato asignandole la energia y el hambre inicial.

[sourcecode language="python"]
gato = Gato(5, 5)

# Se creo un gato

[/sourcecode]

Recuerde que python es un lenguaje case sensitive, es decir es sensible a las mayúsculas.

Podemos observar que al momento de crear una instancia del gato nos muestra un mensaje que proviene de la función ****init**** el cual dice "Se creo un gato". Esto sucede ya que en python la función ****init**** siempre se ejecuta al momento de crear una instancia, se puede decir que es como un constructor.

Ahora que ya tenemos nuestro objeto gato utilizaremos sus funciones.

[sourcecode language="python"]
gato.acariciar()

# prrrrr...

gato.jugar()

# al gato le encanta jugar

gato.jugar()

# al gato le encanta jugar

gato.jugar()

# el gato no quiero jugar

[/sourcecode]

Nos damos cuenta que al tercer intento de jugar con el gato este ya no quiere jugar. Pero ¿Por que? Podemos entenderlo fácilmente al ver la función jugar() y el valor que tiene los atributos del gato.

Recordemos que la función jugar evalúa el nivel del hambre y de energía del gato para imprimir "al gato le encanta jugar". En caso que no se cumpla la condición imprime "el gato no quiere jugar". Ahora si vemos los valores que tiene asignado las variables podemos ver que cada vez que el gato juega pierde energía y hambre. Hasta quedarse con el mínimo requerido para jugar.

[sourcecode language="python"]
print gato.energia

# 3

print gato.hambre

# 1

[/sourcecode]

Por lo que podemos ver el gato no quiere jugar por que tiene hambre. Así que le daremos leche.

[sourcecode language="python"]
gato.tomar_leche(4)

# el gato toma su leche

gato.hambre

# 5

[/sourcecode]

Ahora el gato ya puede jugar. Obviamente si se sigue ejecutando la función jugar se le acabara la energía o el hambre.

[sourcecode language="python"]
gato.jugar()

# al gato le encanta jugar print

gato.hambre

# 3

print gato.energia

# 2

[/sourcecode]

### Herencia

La herencia es uno de los tres conceptos básicos que tiene todo lenguaje orientado a objetos. La herencia consiste en que una clase pueda heredar de otra clase, en otras palabras la clase puede ser extendida. Siguiendo con nuestro ejemplo de gatos, la clase Gato podría heredar de una clase Felino.

[sourcecode language="python"]
class Felino:
def **init**(self):
print 'se creo el felino'

    def rugido(self):
        print 'El felino dio un rugido'

class Gato(Felino):
def **init**(self, energia, hambre):
self.energia = energia
self.hambre = hambre
print 'Se creo un gato'

    def tomar_leche(self, leche_en_litros):
        self.hambre += leche_en_litros
        print 'el gato toma su leche'

    def acariciar(self):
        print 'prrrrr...'

    def jugar(self):
        if self.energia <= 0 or self.hambre <=1:
            print 'el gato no quiero jugar'
        else:
            self.energia -=1
            self.hambre -= 2
            print 'al gato le encanta jugar'

    def dormir(self, horas):
        self.energia += horas
        print 'el gato tomo una siesta'

[/sourcecode]

Al hacer esto la clase Gato ya hereda de la clase Felino y con ello hereda las variables y funciones del Felino. Es decir si ejecutamo gato.rugido() ahora el gato dará un rugido.

[sourcecode language="python"]
gato = Gato(3,3)

# Se creo un gato

gato.rugido()

# El felino dio un rugido

[/sourcecode]

Además en python tenemos algo llamado **herencia múltiple**. Es decir nuestra clase puede heredar de varias clases. Por ejemplo nuestro Gato puede heredar de Felino y Mascota.

[sourcecode language="python"]
class Mascota:
def **init**(self):
print 'se creo la mascota'

    def sientate(self):
        print 'La mascota se sentó'

class Felino:
def **init**(self):
print 'se creo el felino'

    def rugido(self):
        print 'El felino dio un rugido'

class Gato(Felino, Mascota):
def **init**(self, energia, hambre):
self.energia = energia
self.hambre = hambre
print 'Se creo un gato'

    def tomar_leche(self, leche_en_litros):
        self.hambre += leche_en_litros
        print 'el gato toma su leche'

    def acariciar(self):
        print 'prrrrr...'

    def jugar(self):
        if self.energia <= 0 or self.hambre <=1:
            print 'el gato no quiero jugar'
        else:
            self.energia -=1
            self.hambre -= 2
            print 'al gato le encanta jugar'

    def dormir(self, horas):
        self.energia += horas
        print 'el gato tomo una siesta'

[/sourcecode]

Ahora cuando creemos una instancia del gato podremos usar tanto lo que herede de Felino como lo que herede de Mascota.

[sourcecode language="python"]
gato = Gato(3,3)

# Se creo un gato

gato.rugido()

# El felino dio un rugido

gato.sientate()

# La mascota se sentó

[/sourcecode]

### Polimorfismo

En si la palabra polimorfismo viene del griego y significa varias formas. La teoría indica que se trata de la habilidad de responder a una misma función de manera distinta. Haremos un ejemplo con una clase Gato y una clase Perro.

[sourcecode language="python"]
class Gato:
def ruge(self):
print 'El gato maulla'

class Perro:
def ruge(self):
print 'El perro ladra'

def rugir(animal):
animal.ruge()
[/sourcecode]

Hemos creado la función rugir la cual ejecutará la función ruge del objeto. Ya que Python es de tipado dinámico python reconocerá automaticamente la la función que debe ejecutar.

[sourcecode language="python"]
gato = Gato()
perro = Perro()

rugir(gato)

# 'El gato maulla'

rugir(perro)

# 'El perro ladra'

[/sourcecode]

### Encapsulación

Lo que hace el encapsulamiento es impedir la visualización o acceso de las variables de manera directa. En otros lenguajes esto se logra al momento de declarar la variable como public y private sin embargo en python es algo distinto. Para declarar una variable o función como privada, el nombre de la función o variable a ser declarado debe comenzar con doble guion abajo. Esto bastará para que lo declarado sea reconocido como privado.

Este es un pequeño ejemplo de como declarar una funcion privada en python. Ahora si queremos llamar a la funcion privada nos lanzara un error.

[sourcecode language="python"]
ejemplo = ClaseEjemplo()
ejemplo.publico()

# soy publico

ejemplo.**pirvate()
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
AttributeError: ClaseEjemplo instance has no attribute '**privado'
[/sourcecode]

Ahora lo mismo es al momento de declarar variable.

[sourcecode language="python"]
class ClaseOtroEjemplo:
def **init**(self):
self.publico = 'variable publica'
self.\_\_privado = 'variable privada'

def obtener_privado(self):
print self.\_\_privado
[/sourcecode]

Ahora hemos creado la clase ClaseOtroEjemplo el cual tiene un constructor donde se declara dos variables una publica y otra privada. Tenemos que entender que tanto las funciones como las variables privadas solo pueden ser utilizadas dentro de la clase y si queremos usarlas fuera de esta clase podemos hacerlo por medio de una función que devuelva el valor privado. En este ejemplo he usado la función "obtener_privado" para obtener el valor de la variable privada. Entonces para resumir, con esta función se entiende que la variable "\_\_privado" sera solo de lectura ya que puede ser consultada (por la función obtener_privado) mas no puede ser modificada y la variable publica si pude ser modificada y consultada ya que esa es la naturaleza de una variable publica.

[sourcecode language="python"]
otro_ejemplo = ClaseOtroEjemplo()

print otro_ejemplo.publico

# 'variable publica'

otro_ejemplo.obtener_privado()

# variable privada

[/sourcecode]

Bueno eso seria todo en este cuarto tutorial de python. Si quieres profundizar más en el tema como siempre puedes visitar la [documentación oficial](https://docs.python.org/2/tutorial/classes.html) de python. Para el próximo tutorial profundizaremos los objetos básicos que tiene python.
