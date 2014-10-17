#javascript-unitesting-lab

Este material es parte de la presentación sobre 

"Pruebas unitarias automatizadas en Javascript" del 22 de Octubre de 2014 para SGVirtual

http://sg.com.mx/node/5365#.VD79Ivl5PSg

##[Qunit](http://qunitjs.com/)

Es un framework para unit testing en Javascript, desarrollado por la gente de jQuery, de hecho todo jQuery se encuentra testeado con Qunit [link](https://github.com/jquery/jquery/tree/master/test/unit).

##Setup

Para utilizar los ejemplos son necesarias algunas herramientas, en particular yo utilizo Notepad++ como editor. Más allá de esto vamos a necesitar:

*Tortoise GIT (poner link)

*Nodejs (poner link)

*PhantomJs (poner link) y colocarlo en el PATH (en Windows)

*Instalar el paquete de Nodejs UglifyJS2 `npm install uglify-js -g`

##Ejemplos

1. [Ejemplo1](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo1.html). Cargar Qunit en el navegador.
2. [Ejemplo2](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo2.html). Test simple, sin código bajo prueba.
3. [Ejemplo3](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo3.html). Test simple, validando un resultado.
4. [Ejemplo4](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo4.html). Utilizando equal para comparar un resultado con un valor esperado.
5. [Ejemplo5](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo5.html). Agregar un mensaje para que se muestre en caso de error.
6. [Ejemplo6](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo6.html). Ejemplo de notEqual.
7. [Ejemplo7](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo7.html). Ejemplo de manipular una excepción esperada.
8. [Ejemplo8](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo8.html). Uso de módulos.
9. [Ejemplo9](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo9.html). Utilizar Blanket para Code coverage.
10.[Ejemplo10](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo10.js). Primer ejemplo de PhantomJs, cargar una página y leer el contenido de un elemento.
11.[Ejemplo11](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo11.js). Ejecutar los test de Qunit y obtener el resultado en consola.






