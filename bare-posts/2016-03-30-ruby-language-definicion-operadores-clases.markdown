---
author: pakgva
comments: true
date: 2016-03-30 20:20:54+00:00
layout: post
link: https://frontendlabs.io/3443--ruby-language-definicion-operadores-clases
slug: ruby-language-definicion-operadores-clases
title: Ruby Language - Definición, Operadores y Clases
wordpress_id: 3443
categories:
  - Ruby
---

Según ruby-lang.org, "Ruby es un lenguaje de programación dinámico y de código abierto enfocado en la simplicidad y la productividad. Su elegante sintaxis se siente natural al leerla y fácil al escribirla". Este lenguaje fue creado por [Yukihiro "Matz" Matsumoto](https://es.wikipedia.org/wiki/Yukihiro_Matsumoto), quien combinó sus lenguajes favoritos (Perl, Smalltalk, Eiffel, Ada y Lisp) y creó uno nuevo que incluyera los paradigmas de programación funcional, como imperativa.

Desde su publicación en 1995, Ruby ha incrementado año tras año la cantidad de adeptos programadores. Considerándolo ya en el top 10 de lenguajes según el [índice TIOBE.com](http://www.tiobe.com/tiobe_index?page=index).

Muchos definen a Ruby un lenguaje simple en apariencia, pero complejo por dentro; al igual que el cuerpo humano.

La característica principal de Ruby es que **todo es un objeto**; es decir, que se puede asignar propiedades y acciones a toda la información y código. Por ejemplo:

    <code>3.times { print "FrontEnd Labs - Ruby" }</code>

Como ven el número 3 es interpretado un objeto al cual se le ha aplicado la acción "times" para que repita la instrucción "print" con el mensaje "FrontEnd Labs - Ruby". En algunos lenguajes estos tipos de datos son llamados primitivos y no son considerados como objetos.

La segunda característica de Ruby es su **flexibilidad**; es decir permite a los usuarios alterarlo libremente, de tal forma que pueden quitar, agregar, redefinir todas las funcionalidades sin excepción. Por ejemplo:

    <code>class Numeric
      def restar(x)
        self.-(x)
      end
    end

    y = 10.restar 4
    # ahora y vale 6

    </code>

La tercera característica son la inclusión de **bloques** provenientes de los lenguajes funcionales; esto permite a que los métodos tengan la capacidad de ejecutar funcionalidades a través de listas. Por ejemplo:

    <code>redes_sociales =
      %w[Facebook Twitter Instagram].map do |red_social|
        "http://www." + red_social.downcase + ".com"
      end</code>

El bloque está definido por todo lo que se encuentra entre las palabras reservadas do...end, de tal forma que el método a utilizar realiza particularidades, según sea el caso.

La cuarta característica de Ruby es la **herencia simple**, la cual permite mezcla un módulo e incorporar todos sus métodos gratuitamente. Por ejemplo:

    <code>class MiArray
      include Enumerable
    end</code>

Cualquier clase que implemente el método each puede incorporar el módulo Enumerable, que le agrega un conjunto de métodos que usan each para recorrer sus elementos.

Por último **la apariencia visual**, se prefiere utilizar las palabras claves en inglés. Ruby no necesita declaraciones de variables. Se utilizan las siguientes convenciones para nombrar y determinar el alcance de las mismas.

- var puede ser una variable local.

- @var es una variable de instancia.

- \$var es una variable global.

### ¿Quieres probar Ruby?

Existen varias formas para utilizar Ruby, aquí te mencionamos algunas:

1. A través de un navegador utilizando [Try Ruby](http://www.tryruby.org).

2) En Linux/Unix, puedes utilizar el sistema de gestión de paquetes de acuerdo a la distribución que tengas o herramientas de terceros como [rbenv ](http://rbenv.org)o [RVM](https://rvm.io).

3. En computadoras con sistema operativo OS X, puedes utilizar herramientas de terceros como [rbenv ](http://rbenv.org)o [RVM](https://rvm.io).

4) En computadoras con sistema operativo Windows, puedes utilizar [rubyinstaller](http://rubyinstaller.org).

5. Compilando Ruby desde el código fuente en su versión [2.3.0](https://cache.ruby-lang.org/pub/ruby/2.3/ruby-2.3.0.tar.gz).

### Operadores Aritméticos

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

<td >4 + 9
</td>

<td >13
</td>
</tr>
<tr >

<td >-
</td>

<td >Resta
</td>

<td >5 - 2
</td>

<td >3
</td>
</tr>
<tr >

<td >*
</td>

<td >Multiplicación
</td>

<td >3 * 8
</td>

<td >24
</td>
</tr>
<tr >

<td >**
</td>

<td >Potencia
</td>

<td >4 ** 2
</td>

<td >16
</td>
</tr>
<tr >

<td >/
</td>

<td >División
</td>

<td >8.4 / 2
</td>

<td >4.2
</td>
</tr>
<tr >

<td >/
</td>

<td >División Entera
</td>

<td >11 / 2
</td>

<td >5
</td>
</tr>
<tr >

<td >%
</td>

<td >Módulo
</td>

<td >8 % 3
</td>

<td >2
</td>
</tr>
</tbody>
</table>

Como verán se usa el mismo operador (/) para la división entera que para la división. Pero hay una diferencia clara, cuando el dividendo es un entero, el resultado va a ser un entero; caso contrario el dividendo es un float, el resultado va a ser un float. Hay que tener bastante cuidado con esto, ya que se presta a cierta imprecisiones, en caso se quiera obtener un resultado float teniendo un dividendo entero es mejor utilizar el parser to_f.

### Clases Básicas de Ruby

Como mencionamos antes todos los elementos de Ruby son objetos y a continuación mencionaremos las clases básicas de Ruby:

1. Entero (Integer), los enteros son elementos de un conjunto de números que reúne a los positivos (1, 2, 3 ...), a los negativos (..., -3, -2, -1) y al 0. A continuación se mencionan los métodos más importantes:


    * to_i: Convierte un objeto en un entero.


    * times {|i| block}: Itera el bloque determinado, pasando los valores de cero a int - 1.


    <code>4.times do |i|
      print i, " "
    end
    #=> 0 1 2 3</code>





    * downto(limit) {|i| block}: Itera el bloque determinado, pasando valores decrecientes del entero descendiendo hasta el límite.


    <code>6.downto(3){|n| print n, ".."}
    #=> 6.. 5.. 4.. 3..</code>





    * upto(limit) {|i| block}: Itera el bloque determinado, pasando valores crecientes del entero ascendiendo hasta el límite.


    <code>2.upto(6){|n| print n, " "}
    #=> 2 3 4 5 6</code>





    * gcd(int2): Retorna el máximo común divisor (siempre positivo).


    <code>4.gcd(2)
    #=> 2</code>





    * lcm(int2): Retorna el mínimo común múltiplo (siempre positivo).


    <code>6.lcm(4)
    #=> 12</code>

2. Real (Float), los reales incluyen tanto a los números enteros, racionales e irracionales. A continuación se mencionan los métodos más importantes:


    * to_f: Convierte un objeto en un float.


    * ceil: Retorna el menor entero mayor o igual al real.


    <code>2.3.ceil    #=> 3
    3.0.ceil    #=> 3
    (-2.8).ceil #=> -2</code>





    * floor: Retorna el mayor entero menor o igual al real.


    <code>2.3.floor    #=> 2
    3.0.floor    #=> 3
    (-2.8).floor #=> -3</code>





    * round([ndigits]): Retorna el entero a una determinada precisión en dígitos decimales.


    <code>2.3.round    #=> 2
    3.8.round    #=> 4
    (-2.3).round #=> -2

    1.234567.round(2) #=> 1.23
    1.234567.round(3) #=> 1.235
    1.234567.round(4) #=> 1.2346

    34567.89.round(-5) #=> 0
    34567.89.round(-4) #=> 30000
    34567.89.round(-3) #=> 35000</code>





    * rationalize: Retorna una aproximación más simple del valor.


    <code>0.3.rationalize   #=> (3/10)
    1.333.rationalize #=> (1333/1000)</code>

3. Complejo (Complex), los complejos son una extensión de los números reales. Y son representados como la suma de un número real y un número imaginario. Se define de la siguiente forma:


    <code>Complex(1)                     #=> (1 + 0i)
    Complex(2, 3)                  #=> (2 + 3i)
    Complex.polar(3, 0)           #=> (3.0 + 0.0i)
    Complex.polar(3, Math::PI/2) #=> (1.836909530733566e-16 + 3.0i)
    </code>

A continuación se mencionan los ḿétodos más importantes:

    * to_c: Convierte un objeto en un complejo.


    * cmp + numeric -> complex: Realiza la adición.


    <code>Complex(2, 3)  + Complex(2, 3) #=> (4 + 6i)
    Complex(900)   + Complex(1)    #=> (901 + 0i)
    Complex(20, 9) + 9.8            #=> (29.8 + 9i)</code>





    * cmp - numeric -> complex: Realiza la substracción.


    <code>Complex(2, 3)  - Complex(2, 3) #=> (0 + 0i)
    Complex(900)   - Complex(1)    #=> (899 + 0i)
    Complex(20, 9) - 9.8            #=> (10.2 + 9i)</code>





    * cmp * numeric -> complex: Realiza la multiplicación.


    <code>Complex(2, 3)  * Complex(2, 3) #=> (-5 + 12i)
    Complex(900)   * Complex(1)    #=> (900 + 0i)
    Complex(20, 9) * 9.8            #=> (196.0 + 88.2i)</code>





    * cmp / numeric -> complex: Realiza la división.


    <code>Complex(2, 3)  / Complex(2, 3) #=> (1 + 0i)
    Complex(900)   / Complex(1)    #=> (900 + 0i)
    Complex(20, 9) / 9.8            #=> (2.0408163265306123 + 0.9183673469387754i)</code>





    * cmp ** numeric -> complex: Realiza la exponenciación.


    <code>Complex('i') ** 2              #=> (-1 + 0i)
    Complex(-8) ** Rational(1, 3) #=> (1.0000000000000002+1.7320508075688772i)</code>

4. Cadenas (String), manipulan una secuencia de caracteres. Son representados utilizando comillas dobles (" ") o comillas simples (' '). A continuación se mencionan los métodos más importantes:


    * to_s: Convierte un objeto en una cadena.


    * size: Retorna el tamaño de la cadena.


    * str + otro_str -> nuevo_str: Retorna una nueva cadena concatenando las otras.


    <code>"Frontend " + "labs" #=> "Frontend labs"</code>





    * delete([otro_str]+) -> nuevo_str: Retorna una copia de la cadena eliminando los argumentos que lo intersectan.


    <code>"frontend labs".delete "l","la" #=> "frontend abs"
    "frontend labs".delete "lo"     #=> "frontend bs"
    "frontend labs".delete "ej-m"   #=> "frontnd abs"</code>





    * capitalize -> nuevo_str: Retorna una copia de la cadena con el primer carácter convertido en mayúscula y el resto en minúscula.


    <code>"frontend labs".capitalize    #=> "Frontend labs"
    "FRONTEND LABS".capitalize    #=> "Frontend labs"
    "123FRONTEND LABS".capitalize #=> "123frontend labs"</code>





    * downcase -> nuevo_str: Retorna una copia de la cadena con todos los caracteres en minúscula.


    <code>"FrontEnd Labs".downcase #=> "frontend labs"</code>





    * upcase -> nuevo_str: Retorna una copia de la cadena con todos los caracteres en mayúscula.


    <code>"FrontEnd Labs".upcase #=> "FRONTEND LABS"</code>

5. Booleano (TrueClass o FalseClass), este tipo de variable sólo puede ser de dos tipos true o false.

Vale la aclaración que Ruby es un lenguaje sensitivo, es decir que distingue mayúsculas y minúsculas. Así que hay que tener mucho cuidado con eso para las declaraciones.

Este es el primer tutorial de **Ruby **en español dentro de **FrontEnd Labs**, espero que les guste para poder seguir desarrollando otros aspectos de Ruby y así tener un conocimiento sólido para luego seguir con el plato fuerte que es **Ruby on Rails.**
