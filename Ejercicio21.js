/*

function square(n){
   const defaultValue = Infinity
   // Aquí tu código
 
}
console.log(square(null));
console.log(square(undefined));
console.log(square('2'));
console.log(square(false));
console.log(square(2));
 

Si a la función se la pasa un valor incorrecto (null, undefined, '', o cualquier cosa que no se un número. devolveremos el valor Infinity

* Para hacer el ejercicio no puedes usar la instrucción if
*/

function square(n){
    const defaultValue = Infinity
    return n && n**2 || defaultValue  
  
 }
 console.log(square(null));
 console.log(square(undefined));
 console.log(square('2'));
 console.log(square(false));
 console.log(square(2));