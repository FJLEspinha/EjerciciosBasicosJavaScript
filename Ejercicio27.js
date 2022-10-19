/*
Igual que antes. La siguiente función devuelve un objeto con los datos de una persona.
Guarda en una variable name: el nombre de la persona; en una variable street: la calle de la persona y en una variable country: el país de la persona.
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
    };
   }
   let{name : otherName,address:{street,country}}=getPerson(); // esto se llama destructurin con los : creamos un ALIAS

   console.log(otherName,street,country)   