/*
Se pide que generes de forma random un usuario. Se necesita mostrar por pantalla 
su nombre y apellidos, y su email.
Para ello lanza una petición al api https://randomuser.me/ 
que te devolverá los datos en formato json de usuario inventado.
*/

// importamos pero necesitamos descargar las dependencias npm inti --yes (no preguntas)
// tenemos que decargarla npm install node-fetch ( nos aparece node modules carpeta)
//  .gitignore y poner dentro mode_modules para qeu no la suba
import fetch from 'node-fetch'
// forma antigua en vez de importe
// const fetch = require('node-fecht');
// estamos en Node
// estamos haciendo backend
// para recoger lo que devuelve fetch es una promesa await
// asyc box es nuevo y no necesitamos la funcion

// async function llamadaApi(){
const request = await fetch('https://randomuser.me/api')
//}
// llamadaApi()
// el request obtenemos datos en formato http y tenmos que convertirlos a datos json
const jsonValue = await request.json()
const user = jsonValue.results[0]
//console.log(jsonValue)
// podrian ser todo constantes el lo cambio
// mejor crear esto para sacar los resultados
const {email,name:{first,last}, picture:{large}} = user

/* console.log(user.email)
console.log(user.name.first, user.name.last)
console.log(user.picture.large) */

// asi se usaria con la nueva const creada
console.log(email)
console.log(first,last)
console.log(large)
