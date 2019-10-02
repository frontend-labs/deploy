---
author: jansanchez
comments: true
date: 2014-07-26 06:14:36+00:00
layout: post
link: https://frontendlabs.io/1490--json-que-es-json-parse-json-stringify
slug: json-que-es-json-parse-json-stringify
title: "JSON: ¿Qué es JSON?, ¿Cómo se usa? y ¿Para qué sirve JSON?"
wordpress_id: 1490
categories:
  - Javascript
tags:
  - Código
  - ECMAScript
  - Estándar
  - Javascript
  - jQuery
  - json
  - Sintaxis
---

**JSON** es un formato de texto para la serialización de datos estructurados.

Deriva de los Objetos Literales de Javascript y está definido en la tercera edición del estándar de Lenguaje de programación [ECMAScript](http://www.ecma-international.org/ecma-262/5.1/) [ECMA].

JSON puede representar** cuatro tipos primitivos**(cadenas, números, booleanos, valores nulos) y **dos tipos estructurados**(objetos y arreglos).

**En JSON:**

- **Una Cadena** es una secuencia de ceros o más caracteres Unicode.

* **Un Objeto** es una colección desordenada de cero o más pares **nombre:valor**, donde un **nombre **es una cadena y un **valor** es una cadena, número, booleano, nulo, objeto o arreglo.

- **Un Arreglo** es una secuencia desordenada de ceros o más valores.

Los objetivos del diseño de JSON fueron que sea pequeño, portátil, textual y derivado de JavaScript.

### Diferencias entre JavaScript y JSON

<table >

<tr >
**Javascript**
**Diferencias en JSON**
</tr>

<tbody >
<tr >

<td >Objetos y Arreglos
</td>

<td >Los nombres de propiedades(keys) deben ser cadenas entre comillas dobles; las comas finales están prohibidas.
</td>
</tr>
<tr >

<td >Números
</td>

<td >Un punto decimal(.) debe ser seguido por al menos un dígito.
</td>
</tr>
<tr >

<td >Cadenas
</td>

<td >Sólo algunos caracteres pueden ser escapados; algunos caracteres de control están prohibidos. Los caracteres del _separador de línea_ (Unicode 2028) y el _separador de párrafo_ Unicode (Unicode 2029) están permitidos.
</td>
</tr>
</tbody>
</table>

### Demostrando lo anterior

Los nombres de propiedades(claves) deben ser cadenas entre **comillas dobles**:

![json-error-comilla-simple](https://frontendlabs.io/wp-content/uploads/2014/07/json-error-comilla-simple.png)
Las **comas finales** están prohibidas:

![json-error-coma-al-final](https://frontendlabs.io/wp-content/uploads/2014/07/json-error-coma-al-final.png)

Un **punto decimal**(.) debe ser seguido por al menos _un dígito_:

![json-decimal-de-un-solo-digito](https://frontendlabs.io/wp-content/uploads/2014/07/json-decimal-de-un-solo-digito.png)

En cambio en Javascript **esto si funciona**, veamos:

![javascript-decimal-de-un-solo-digito](https://frontendlabs.io/wp-content/uploads/2014/07/javascript-decimal-de-un-solo-digito.png)

Los caracteres del separador de línea (Unicode 2028) y el separador de párrafo Unicode (Unicode 2029) están permitidos en JSON.

![javascript-error-no-eval-algunos-unicodes](https://frontendlabs.io/wp-content/uploads/2014/07/javascript-error-no-eval-algunos-unicodes.png)

Como podemos ver, cuando deserializamos(usamos JSON.parse) el contenido de la variable textoJson obtenemos un objeto Javascript {a: "", b: ""}.

Pero cuando intentamos **evaluar**(eval) el contenido de la variable textoJson como Javascript, obtenemos un error de Sintaxis.

# El objeto JSON nativo

Es un objeto Javascript nativo que contiene métodos para la creación y manipulación de objetos JSON. Si bien es cierto este objeto es nativo, pero no tiene soporte en navegadores antiguos.

### Métodos

El objeto JSON nativo incluye dos métodos principales.

## JSON.parse(text[, reviver ])

El método JSON.parse() recibe una cadena JSON y en base a esta cadena construye un objeto JavaScript.

Adicionalmente tiene el parámetro opcional **reviver**(resucitador). Si se especifica un reviver, el valor puede ser transformado antes de ser devuelto. Osea, las claves y los valores se ejecutan de forma individual a través del resucitador como un bucle, allí nosotros podemos manipular su valor y retornarlo modificado.

Si la función retorna undefined, la propiedad se elimina del objeto.

Cuando el resucitador termina de iterar realiza una última confirmación, en esta envía una **clave vacía**("") y como **valor** pone el nuevo objeto creado en base a las modificaciones que hicimos, entonces allí es cuando podemos hacerle una última modificación a todo el objeto o simplemente retornarlo.

### Uso de JSON.parse()

Uso simple para convertir una cadena de texto JSON a un objeto Javascript:

    <code>
    var objetoJson = JSON.parse('{"clave":"valor"}');
    console.log(objetoJson.clave); // logs "valor"
    </code>

Uso completo(usando el parámetro **reviver**):

    <code>
    var textoJson = '{"usb" : 20, "mouse" : 30, "mousepad": 10}',
    precioConIgv = function(producto, precio){
      if (producto === "mousepad"){
        return undefined; // no lo considero en el nuevo objeto
      }
      if (producto === ""){ // última confirmación
        return precio; // retornamos el nuevo objeto
      }
      return precio + (precio * 0.18); // manipulamos a todos los demas
    },
    objetoJson = JSON.parse(textoJson, precioConIgv);
    console.log(objetoJson); // logs Object {usb: 23.6, mouse: 35.4}
    </code>

Hemos utilizado la función precioConIgv como **reviver**, allí le indicamos que a los precios actuales les agregue un 18% más y adicionalmente no deseamos que registre el producto **mousepad** en nuestro nuevo objeto.

Y vemos finalmente el uso del condicional if (producto === "") donde le indicamos que luego de haber terminado con todos los productos nos devuelva el **nuevo objeto**, que en ese momento se encuentra contenido en la variable precio.

## JSON.stringify(value [ , replacer [ , space ] ])

El método JSON.stringify() recibe un **objeto JavaScript** y devuelve su **JSON** equivalente y puede tomar hasta tres parámetros.

El primer parámetro o el **parámetro valor** es obligatorio y suele ser un Objeto o Arreglo, aunque también puede ser una cadena, booleano, número o un valor nulo.

El **parámetro opcional replacer** es una función que altera la forma en que los objetos y los arreglos se encadenan, este parámetro puede ser una función que tiene dos parámetros, esta función es como un bucle que itera las claves y valores, lo cual nos permite modificar los valores. Si deseamos que determinado clave y valor no sea parte del encadenamiento entonces simplemente retornarmos undefined.

El parámetro opcional replacer también puede ser usado como un Arreglo de cadenas y/o números y de esta forma actuará como una lista blanca o un filtro indicando solo las claves que deben ser incluidas en la cadena de texto JSON resultante.

El **parámetro opcional space** es una cadena o número usado para insertar caracteres o espacios en blanco en la cadena de texto JSON, para una mejor legibilidad. Si ingresamos un número este indicará la cantidad de espacios en blanco que se usarán. El valor máximo para este número será 10, si ingresas un número mayor a 10 solo usará 10 espacios en blanco como máximo.

Si no se proporciona este parámetro (o es nulo), no se utiliza ningún espacio en blanco.

### Uso de JSON.stringify()

Uso simple para convertir un objeto Javascript a una cadena de texto JSON:

    <code>
    var objetoJavascript = {"clave" : "valor"},
    textoJson = JSON.stringify(objetoJavascript);

    console.log(typeof textoJson); // logs "string"
    console.log(textoJson); // logs {"clave":"valor"}
    </code>

Uso de un Arreglo como parámetro **replacer** para convertir un objeto Javascript a una cadena de texto JSON:

    <code>
    var objetoJavascript = {"hora": 11, "dia": 1, "mes": 7, "año": 2014},
        textoJson = JSON.stringify(objetoJavascript , ["mes", "año"]);
        console.log(textoJson); // logs '{"año" : 2014, "mes": 7}'
    </code>

En el código anterior podemos ver que al colocar como segundo parámetro ["mes", "año"] realizó un filtro de datos.

Uso de una función como parámetro **replacer** para convertir un objeto Javascript a una cadena de texto JSON:

    <code>
    var filtro = function (clave, valor) {
      if (clave === "hora") {
        return undefined;
      }
      return valor;
    }

    var objetoJavascript = {"hora": 11, "dia": 1, "mes": 7, "año": 2014},
        textoJson = JSON.stringify(objetoJavascript , filtro, 4);
        console.log(textoJson);
        /*
        logs:
        {
             "dia": 1,
             "mes": 7,
             "año": 2014
        }
        */
    </code>

En el ejemplo anterior usamos la función filtro para retirar la clave **hora** de nuestra cadena de texto JSON resultante.

Adicionalmente el resultado esta tabulado ya que en el tercer parámetro le indicamos que deseamos que delante de cada registro coloque 4 espacios en blanco, esto gracias al parámetro space.

### Polyfill

El objeto JSON no viene incluido en los navegadores más antiguos. Pero esto se puede solucionar insertando el siguiente código al inicio de todos tus scripts, con el cual permitirás el uso del objeto JSON en las implementaciones que no lo soportan de forma nativa (como Internet Explorer 6).

    <code>
    if (!window.JSON) {
      window.JSON = {
        parse: function (sJSON) { return eval("(" + sJSON + ")"); },
        stringify: function (vContent) {
          if (vContent instanceof Object) {
            var sOutput = "";
            if (vContent.constructor === Array) {
              for (var nId = 0; nId < vContent.length; sOutput += this.stringify(vContent[nId]) + ",", nId++);
                return "[" + sOutput.substr(0, sOutput.length - 1) + "]";
            }
            if (vContent.toString !== Object.prototype.toString) {
              return "\"" + vContent.toString().replace(/"/g, "\\$&") + "\"";
            }
            for (var sProp in vContent) {
              sOutput += "\"" + sProp.replace(/"/g, "\\$&") + "\":" + this.stringify(vContent[sProp]) + ",";
            }
            return "{" + sOutput.substr(0, sOutput.length - 1) + "}";
         }
         return typeof vContent === "string" ? "\"" + vContent.replace(/"/g, "\\$&") + "\"" : String(vContent);
        }
      };
    }
    </code>

Existen Polyfills conocidos para el objeto JSON, por ejemplo [JSON2](https://github.com/douglascrockford/JSON-js) y [JSON3](http://bestiejs.github.com/json3).

### Compatibilidad con navegadores

<table >

<tr >
**Chrome**
**Firefox**
**IE**
**Opera**
**Safari**
</tr>

<tbody >
<tr >

<td >Si
</td>

<td >3.5 +
</td>

<td >8.0 +
</td>

<td >10.5 +
</td>

<td >4.0 +
</td>
</tr>
</tbody>
</table>

### JSON y jQuery

jQuery tiene implementada la función jQuery.parseJSON() Sin embargo, esta función realiza comprobaciones adicionales, innecesarias que también se llevan a cabo por JSON.parse() por lo cual por un tema de rendimiento es recomendable usar JSON.parse en lugar de jQuery.parseJSON(), sin embargo si quieres utilizar el soporte de jQuery en navegadores que no tengan esta característica de forma nativa puedes realizar el siguiente código:

    <code>
    var textoJson = '{"clave" : "valor"}',
        nuevoObjeto = JSON && JSON.parse(textoJson) || $.parseJSON(textoJson);
    </code>

De esta forma cuando tengas soporte nativo lo usarás por defecto, de lo contrario usarás la función \$.parseJSON() de jQuery.

### Herramientas Online

- [JSON Parser Online](http://json.parser.online.fr/) (visor).

* [JSON Editor Online](http://www.jsoneditoronline.org/) (visor).

- [JSON Formatter & Validator](http://jsonformatter.curiousconcept.com/) (validador).

* [JS Beautifier](http://jsbeautifier.org/) (JS, HTML y JSON legible).
