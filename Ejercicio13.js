/* 13 Dado este conjunto de objetos de javaScript.
Muestra por pantalla solamente el nombre de todos los productos
Calcula la suma del precio de todos los productos que están en stock (true)
Calcula la media del precio de todos los productos que están en stock (true)
*/

let info = [
    {
        nombre: 'Ratón',
        precio: 20,
        stock: true
    },
    {
        nombre: 'Teclado',
        precio: 60,
        stock: true
    },
    {
        nombre: 'Impresora',
        precio: 500,
        stock: false
    },
    {
        nombre: 'Altavoces',
        precio: 10,
        stock: true
    },
]


// una forma con funcion tipo flecha
info.forEach(product => console.log(product.nombre))
console.log('-----------------------------------------')
// otra forma
let nameList = info.map(product => product.nombre).join('\n')
console.log(nameList)

// Calcular la suma
// primero cogemos los precios en un array
// y esto duevuelve un integer en este caso
let total = info
    .filter(product =>product.stock === true)
    .map(product => product.precio)
    .reduce((acumulator,value) => acumulator+value) 


console.log(total)
console.log('------------------------------------')
// VAMOS A CALCULAR LA MEDIA
console.log('La media vale= ', total/info.filter(product => product.stock).length)
let priceAvg = total/info.filter(product => product.stock).length
// template strings OJO Comillas torcidas
console.log(`La media del precio vale ${priceAvg} euros`)
