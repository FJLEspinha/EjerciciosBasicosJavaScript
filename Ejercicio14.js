/*
14 Los números no poseen (por defecto) la posibilidad de saber si son pares o impares.
Añade esa funcionalidad usando prototypes, de tal forma que el siguiente código sea válido.

var value = 55
console.log(value.isPair() )  // —> false


var count = 6
console.log(value.isPair() )  // —> true
*/

Number.prototype.isEven = function(){
    //if(this%2 === 0) return true
    //else return false
    return this%2 ===0
}


let value = 55
console.log(value.isEven() ) 