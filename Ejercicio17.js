/*
Dado un objeto con los atributos nombre y apellidos…

let user = {
   name: 'Antonio',
   surname: 'Roman'
}


crea una función que reciba ese objeto y devuelva:
el nombre (si el nombre de este no es falsy)
en caso de no tener nombre, devolverá al apellido (si el apellido no es falsy)
y por último, si no tiene nombre ni apellido, se devolverá la palabra anónimo

* Para hacer el ejercicio no puedes usar la instrucción if

*/
let user = {
   name: 'Antonio',
   surname: 'Roman'
}
function getInfo( user){
return user.name || user.surname || 'anonimo'
}
console.log(getInfo(user))