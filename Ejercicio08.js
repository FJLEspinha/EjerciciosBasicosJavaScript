//Partiendo del siguiente objeto, …
// crea una función que acepte como parámetro este objeto y modifique su estado available a true.
let iphone14 = {
    price: 1.009,
    manufacturer: 'Apple',
    available: false
}

function changeState(obj){
    obj.available = true
}

changeState(iphone14)


