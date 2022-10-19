// Dado una lista de números [5,7,2,10,6], muestra por pantalla solamente los que sean pares

let numbers = [5,7,2,10,6]
/*
function parNumbers(num){
    if( num%2==0  )
    return num
}
*/
//let parLambda= number => number%2===0
//let parNumbersResult = numbers.filter(parLambda)
let parNumbersResult = numbers.filter(number => number%2===0)
console.log(numbers)
console.log(parNumbersResult)