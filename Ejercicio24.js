/*
Crea una función que reciba como parámetro una frase y una lista(array) de palabras prohibidas.
La función devolverá la frase:
en minúsculas, 
eliminará todas las palabras que sean prohibidas (case insensitive)
devolverá las palabras unidas por un guión medio.

Ej
Frase = 'El Iphone nuevo es una caca'
Palabras prohibidas: ['caca', 'el']
Retorno de la función:  iphone-nuevo-es-una

Solucion
const select = (text, forbidden) => text.split(' ')
    .map(w => w.toLowerCase() )
    .filter(w => ! forbidden.includes(w))
    .join('-')
 
 
const result = select( 'El Iphone nuevo es una caca' ,    ['caca', 'el']) //  iphone-nuevo-es-una
 
console.log(result)


*/
function select(text,forbidden){
    return text.split(' ')
    .map(w =>w.toLowerCase())
    .filter(w =>! forbidden.includes(w) )
    .join('-')
}

const result = select('El Iphone nuevo es una caca',['caca', 'el']) // iphone-nuevo-es-una
console.log(result)