---
author: Carlos Huamani
comments: true
date: 2014-07-09 21:02:28+00:00
layout: post
link: https://frontendlabs.io/1122--tutorial-basico-de-python-i
slug: tutorial-basico-de-python-i
title: "Tutorial Básico de Python - Parte I : Definición, Operadores y Tipos"
wordpress_id: 1122
categories:
  - Python
tags:
  - Código
  - Lenguaje de programación
  - Linux
  - Tutorial
---

Python es un lenguaje de programación el cual fue creado por el holandes Guido van Rossum en los años 90. Su nombre esta inspirado en el grupo humorista británico Monty Python.

Este lenguaje es caracterizado por su simplicidad y rápido aprendizaje. Si queremos hacer el clásico hola mundo en este lenguaje, nos basta con escribir print "hola mundo".

Las características principales de este lenguaje son cuatro:

1. **Tipado dinámico**, no es necesario indicar el tipo de variable al momento de declararlo ya que lo identifica automaticamente.

2) **Fuertemente tipado,** no se permite tratar de manera implicita a una variable como si fuera de otro tipo.

3. **Multiplataforma,**  se refiere a que no depende de un sistema operativo en especifico para funcionar bien.

4) **Multiparadigma,** python es un lenguaje orientado a diversos paradigmas entre ellos tiene la programacion orientada a objetos, programación estructurada, programación funcional y programación orientada a aspectos.

### ¿Cómo comienzo a usar Python?

Primero hay que instalar este lenguaje y los pasos dependerán de tu sistema operativo.

- Si usas linux no sera necesario instalarlo ya que viene por defecto instalado.

- En caso que uses Windows o Mac debes instalar python desde su página [oficial](https://www.python.org/download/releases/2.7.8).

En caso que desees probarlo antes de instalarlo puedes usar [repl.it](http://repl.it/languages/Python).

### Operadores aritméticos en Python

<table >

<tr >
Operador
Descripción
Ejemplo
Resultado
</tr>

<tbody >
<tr >

<td >+
</td>

<td >Suma
</td>

<td >result = 5 + 6
</td>

<td >11
</td>
</tr>
<tr >

<td >-
</td>

<td >Resta
</td>

<td >result = 5 - 1
</td>

<td >4
</td>
</tr>
<tr >

<td >*
</td>

<td >Multiplicación
</td>

<td >result = 2 * 6
</td>

<td >12
</td>
</tr>
<tr >

<td >**
</td>

<td >Exponente
</td>

<td >result = 2**3
</td>

<td >8
</td>
</tr>
<tr >

<td >/
</td>

<td >División
</td>

<td >result = 12 / 6
</td>

<td >2
</td>
</tr>
<tr >

<td >//
</td>

<td >División Entera
</td>

<td >result = 4.5//2
</td>

<td >2.0
</td>
</tr>
<tr >

<td >%
</td>

<td >Módulo
</td>

<td >result = 7 % 2
</td>

<td >1
</td>
</tr>
</tbody>
</table>
El tipo módulo de python es el residuo que se obtiene en una división. Por ejemplo al dividir 7 entre 4. El número 7 es el dividendo, 4 es el divisor, el cociente seria 1 y el resto seria 3. En este ejemplo de 7 % 4 el resultado seria 3.

En otras palabras, el módulo da como respuesta el resto de la división entre los dos números, donde el primero es el dividendo y el segundo es el divisor.

### Tipos Básicos de Python

Existen 5 tipos de datos principales:

1. **Enteros**, son los números tanto negativos como positivos que no tienen decimales. Este es representado por el tipo **int** o **long.** La diferencia entre estos dos es que **int** tiene un limite de almacenamiento mientras que el tipo **long** puede usar toda la memoria que se tenga disponible para almacenar estos números.
   **
   ¿Como funciona el int y el long?
   **Para poder entender su funcionamiento mostraremos unos ejemplos.El tipo int se declara de la siguiente manera

[sourcecode language="python"]

> > > numero_a = 2
> > > numero_b = 5
> > > [/sourcecode]

Si queremos visualizar su tipo basta con digitar lo siguiente

[sourcecode language="python"]

> > > print type(numero_a)
> > > <type 'int'>
> > > [/sourcecode]

Si sumamos dos enteros nos da un entero

[sourcecode language="python"]

> > > print numero_a + numero_b
> > > 7
> > > [/sourcecode]

Ya sea división seguirá dando un entero

[sourcecode language="python"]

> > > print numero_a / numero_b
> > > 0

> > > print numero_b / numero_a
> > > 2
> > > [/sourcecode]

Para crear un tipo long se hace un pequeño cambio

[sourcecode language="python"]

> > > gran_numero_a = 2L
> > > gran_numero_b = 5L
> > > [/sourcecode]

Para confirmar que es un long podemos agregarle el type

[sourcecode language="python"]

> > > type(gran_numero_a)
> > > <type 'long'>
> > > [/sourcecode]

Quiero volver a indicar que la única diferencia entre int y long es que este último no tiene una restricción para almacenar números salvo la capacidad que tenga la memoria del computador. Por ende al igualar 2L con 2 da verdadero.

[sourcecode language="python"]

> > > print gran_numero_a == numero_a
> > > True

> > > print 5L == 5
> > > True

> > > print 3L + 3
> > > 6L

> > > print 2\*\*5
> > > 32

> > > print 2\*\*70
> > > 1180591620717411303424L

> > > print 2L - 1
> > > 1L
> > > [/sourcecode]

2. **Reales**, estos numeros son los que tienen decimales. En python son expresados con el tipo **float. **El tipo float se obtiene cuando le asignas a una variable un valor como el siguiente

[sourcecode language="python"]

> > > real_a = 0.236
> > > real_b = 5.414
> > > [/sourcecode]

Podemos verificar que su tipo si es float con la funcion type

[sourcecode language="python"]

> > > print type(real_a)
> > > <type 'float'>
> > > [/sourcecode]

Si hacemos alguna operación entre un entero y un real predomina el numero real

[sourcecode language="python"]

> > > print 3 + 5.0
> > > 8.0

> > > print 5/2.0
> > > 2.5
> > > [/sourcecode]

3. **Complejos**, python es uno de los pocos lenguajes que soporta números imaginarios. Este tipo de variable están orientados mas que nada para un uso científico pues no es necesario profundizar mucho en el tema. En python son representados con nombre de **complex**.Si tenemos la curiosidad de como se declara los números complejos, se declara de la siguiente manera.

[sourcecode language="python"]

> > > numero_imaginario = 1j

> > > type(numero_imaginario)
> > > <type 'complex'>

> > > 2j + 5j
> > > 7j

> > > 2j \* 5j
> > > (-10+0j)
> > > [/sourcecode]

4. **Cadenas**, este tipo de variable, son conocidos con el tipo **str**, representan a las cadenas de texto ya sean con commillas simples ('texto') o con doble comillas ("texto")El tipo de variable sera visualizado de la siguiente manera

[sourcecode language="python"]

> > > cadena = "frontend-labs"
> > > type(cadena)
> > > <type 'str'>
> > > [/sourcecode]

También podemos usar tres comillas ("""texto"""). A diferencia de los otros dos esta forma de asginar una cadena de texto permite escribir en varias lineas y respeta los espacios y saltos de líneas

[sourcecode language="python"]

> > > cadena_grande = """
> > > esta es una cadena muy grande

el cual respeta los saltos de lineas
"""
[/sourcecode]

5. Booleanos, este tipo de variable solo puede tener dos tipos de variables: True o False. Estas variables en python son con conocidos con el nombre de **bool**. Es importante resaltar que python es un lenguaje sensitivo a las mayusculas. Por lo tanto, es importante tener cuidado con las mayusculas al tipiar en python. Es decir, al momento de tipiar los booleanos se debe escribir **True** y no true, ni TRUE, ni TrUe.

Hasta aqui llego el primer tutorial de python en español. Si quieren profundizar mas de este tema pueden visitar la [documentación oficial ](https://docs.python.org/2.7/tutorial/introduction.html)de python. La segunda parte de este tutorial hablará sobre [colecciones y controles de flujo](https://frontendlabs.io/1162--tutorial-basico-de-python-parte-ii-colecciones-y-controles-de-flujo).
