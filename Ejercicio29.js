/*
Tienes este objeto de javascript
const product = {
    name:'Camiseta',
    price: 180,
    size: 'M'
}

y deseas enviarlo por post a un API, para ello, tienes que convertirlo en un objeto JSON (como lo harías). 


*/
const product = {
    name:'Camiseta',
    price: 180,
    size: 'M'
}

const miJson = JSON.stringify(product)
console.log(miJson)