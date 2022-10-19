/*
Crea una clase (usando el método antiguo (funciones) ), 
que tenga los atributos: precio, nombre, y una lista de colores.
Tendrá también un método que devolverá el nº de colores totales que posee.
Poseerá también un constructor.
*/
function Articulo(defaultName){
    // atributos
    this.precio
    this.nombre = defaultName
    this.colores=['rojo','verde','azul']
    // metodos
    this.numColors = function(){
        return this.colores.length
    }
}