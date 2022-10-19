/*
Te acaba de llegar este objeto en formato JSON desde una solicitud a un API
var json = ' {"name":"Pedro","salary":2300} '

Necesitas convertirlo a un objeto de javascript y mostrar por pantalla su nombre y salario


*/

var json = ' {"name":"Pedro","salary":2300} '
const objJavascript = JSON.parse(json)
// me saca el salario
console.log(objJavascript.salary)