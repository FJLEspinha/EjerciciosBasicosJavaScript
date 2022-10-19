/*
La siguiente función devuelve un objeto con los datos de una persona.
Guarda en una variable name: el nombre de la persona; en una variable age: la edad de la persona.

Muéstralo por pantalla.

* Usa para ello, una sola instrucción!


*/

const getPerson = () => {
    return {
      name: 'Homer',
      surname: 'Simpsom',
      age: 40,
      address: {
        street: 'Evergreen',
        number: 742,
        country: 'USA',
      }
    }
   }

   //FUNCIONA PERO NO ES LO MAS CORRECTO
   
  /*  let theName = getPerson().name
   let age = getPerson().age */

// forma correcta
let{name : otherName,age}=getPerson(); // esto se llama destructurin con los : creamos un ALIAS

   console.log(otherName,age)