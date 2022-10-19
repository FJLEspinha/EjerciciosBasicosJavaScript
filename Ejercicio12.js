/*
Partiendo de un nombre completo de persona guardado en una cadena de texto
Ej: Jose María Gonzalez Ruiz
Ej: Angel Ruiz Mateos
Extrae en 3 variables (nombre, apellido1 y apellido2) los datos de esa persona.
NOTA: vamos a suponer que las 2 últimas palabras corresponden siempre con el apellido1 y apellido2
respectivamente.
*/

let fullName = 'Jose María Gonzalez Ruiz'
// pasamos a un  array y el separador es un espacio
fullName = fullName.split(' ')

let theName = fullName.slice(0,fullName.length-2).join(' ')
let surname1 = fullName[fullName.length-2]
let surname2 = fullName[fullName.length-1]

console.log(theName, surname1,surname2)