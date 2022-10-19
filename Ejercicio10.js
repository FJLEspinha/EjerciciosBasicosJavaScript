/*10 Partiendo de una lista de nombres ['Juan', 'Julian', 'Jaime']
Queremos mostrar por pantalla:
<ul>
	<li> Juan </li>
	<li> Julian</li>
	<li> Jaime</li>
</ul>*/
let names = ['Juan','Julian','Jaime']

let result 

console.log ('<ul>'+'\n')
names.forEach(name1 => console.log('\t'+'<li> '+name1+' <li>'))
console.log('<ul>')

/*
result = '<ul>'+'\n',names.forEach(name1 => '\t'+'<ul> '+name1+' <ul>')
console.log(result)
*/

// por Ángel

let users = ['Juan','Julian','Jaime']

function transforma(name){
    return '<li>'+name+'<li>'
}

//let htmalUnorderedList ='<ul>'+ users.map(transforma)+'</ul>'
//console.log(htmalUnorderedList)
/*
let unorderedList = '<ul>\n'+users.map(transforma).join('\n')+'\n</ul>'
console.log(unorderedList)
*/
// ver en los resueltos.

// Solucion más optima 
let unorderedList = '<ul>\n' + users
    .map( name => '<li>' + name + '</li>' )
    .join('\n') + '\n</ul>'
 
console.log(unorderedList)
