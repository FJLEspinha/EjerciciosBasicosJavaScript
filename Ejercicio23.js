/*
La siguiente función devuelve un array de colores

function read(){
 return ['naranja','azul','rojo','verde','negro','rosa']
}


Guarda los 2 primeros valores del array en 2 variables llamadas col1, col2. El resto de valores del array ('rojo','verde','negro','rosa') guardalo en una variable de tipo array llamada colorRest.

Muéstralo por pantalla.

* Usa para ello, una sola instrucción!


*/
function read() {
    return ['naranja', 'azul', 'rojo', 'verde', 'negro', 'rosa']
}
let [col1,col2, ...colorRest] = read()

console.log(col1,col2,colorRest)