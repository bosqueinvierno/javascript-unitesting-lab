#javascript-unitesting-lab

Este material es parte de la presentación sobre 

"Pruebas unitarias automatizadas en Javascript" del 22 de Octubre de 2014 para SGVirtual

http://sg.com.mx/node/5365#.VD79Ivl5PSg

##[Qunit](http://qunitjs.com/)

Es un framework para unit testing en Javascript, desarrollado por la gente de jQuery, de hecho todo jQuery se encuentra testeado con Qunit [link](https://github.com/jquery/jquery/tree/master/test/unit).

##Setup

Para utilizar los ejemplos son necesarias algunas herramientas, en particular yo utilizo Notepad++ como editor. Más allá de esto vamos a necesitar:

[Tortoise GIT](https://code.google.com/p/tortoisegit/)

[Nodejs](http://nodejs.org/)

[PhantomJs](http://nodejs.org/) y colocarlo en el PATH (en Windows)

*Instalar el paquete de Nodejs UglifyJS2 `npm install uglify-js -g`

##Ejemplos

1. [Ejemplo1](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo1.html). Cargar Qunit en el navegador.
2. [Ejemplo2](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo2.html). Test simple, sin código bajo prueba.
3. [Ejemplo3](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo3.html). Test simple, validando un resultado.
4. [Ejemplo4](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo4.html). Utilizando equal para comparar un resultado con un valor esperado. Y agregar un mensaje de error.
5. [Ejemplo5](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo5.html). Ejemplo de deepEqual.
6. [Ejemplo6](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo6.html). Ejemplo de notEqual.
7. [Ejemplo7](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo7.html). Ejemplo de manipular una excepción esperada.
8. [Ejemplo8](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo8.html). Uso de módulos.
9. [Ejemplo9](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo9.html). Utilizar Blanket para Code coverage.
10. [Ejemplo10](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo10.js). Primer ejemplo de PhantomJs, cargar una página y leer el contenido de un elemento.
11. [Ejemplo11](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo11.js). Ejecutar los test de Qunit y obtener el resultado en consola.
12. [Ejemplo12](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo12.js). Integrar el script con el proceso de build.
13. [Ejemplo13](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo13.js). Ejecutar los test y obtener la covertura de código.
14. [Ejemplo14](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/ejemplos/ejemplo14.js). Integrar en el script de build el testing y la covertura de código.

##Presentación

Los slides de la presentación se hicieron con [Slippy](https://github.com/Seldaek/slippy) y se pueden [descargar desde acá](https://github.com/leomicheloni/javascript-unitesting-lab/blob/master/presentacion/main.html)




