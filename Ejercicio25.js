/*
Crea una función que reciba como parámetro un número.
Devolverá true si ese número es positivo y par. False en caso contrario.

* Usa para ello, una sola instrucción!


*/

/*
function isEvenPositive(num){
    return num>=0 && num % 2 ===0
}*/
const isEvenPositive =num => num>=0 && num %2 ==0

console.log(isEvenPositive(5))
console.log(isEvenPositive(6))
console.log(isEvenPositive(-3))