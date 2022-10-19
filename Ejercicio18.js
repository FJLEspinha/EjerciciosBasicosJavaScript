/*
¿Qué pasa si (en el ejercicio anterior) si el user es null, undefined o ' ' ?

let user = null
 
let user = undefined
 
let user = ''

Modifica tu ejercicio para que también muestre 'anónimo'


* Para hacer el ejercicio no puedes usar la instrucción if

*/
// con lo del ejercicio anterior
let user = undefined
 function getInfo( theUser){
 return theUser?.name ||theUser?.surname || 'anonimo'
 }
 console.log(getInfo(user))