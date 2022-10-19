/*
Dada una variable isLoggedIn que determina si un usuario está o no logueado en el sistema.
Se pide muestres el mensaje: 
The user is currently logged in
o
The user is not logged in.  
En función si está o no logueado

* Para hacer el ejercicio no puedes usar la instrucción if. Tendrás que usar también un template string (template literals).

*/
let isLoggedIn = true

const msg = `The user is  ${isLoggedIn?'currenly':'not'}  logged in`

console.log(msg)