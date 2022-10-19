/*
Dado el siguiente tag de html
<img alt='foto' src="http://www.fotosgratis.com/gatito.png" width=45/>

Obtener la url de la imagen http://www.fotosgratis.com/gatito.png
Ten en cuenta que:
El atributo src puede estar situado en cualquier parte del tag img
Puede estar encerrado entre comillas simples o dobles
*/

const texto =`<img alt='foto' src="http://www.fotosgratis.com/gatito.png" width=45/>`
// Las expresiones regulares en js va entre barras
const regex =/<img.*src=["'](.*)["'].*>/

const url = texto.match(regex)
console.log(url[1])