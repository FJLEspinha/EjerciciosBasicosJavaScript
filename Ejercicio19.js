/*
let teachers =[
   {
       name: 'Juan',
       cap: true,
   },
   {
       name: 'Pedro',
       cap: true,
   },
   {
       name: 'Jose',
       cap: false,
   }
]
 
Dado un array de profesores, que contiene su nombre y si posee el CAP (certificado de aptitud pedagógica). 
Indicar el número de profesores que sí poseen el CAP.
En caso de no haber profesores, mostrar el mensaje "No hay profesores"
El mensaje que tendrás que mostrar será:  "Hay XXX profesores"

* Para hacer el ejercicio no puedes usar la instrucción if

*/
let teachers =[
    {
        name: 'Juan',
        cap: true,
    },
    {
        name: 'Pedro',
        cap: true,
    },
    {
        name: 'Jose',
        cap: false,
    }
 ]

 const teacherCount=teachers.filter(t => t.cap ).length
 let msg = teacherCount >0 && `Hay ${teacherCount} profes` || `no hay ninguno`
 console.log(msg)