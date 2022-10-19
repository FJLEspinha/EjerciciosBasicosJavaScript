//11. Dada una lista de periféricos, elimina el primero y el último. Muestra por pantalla la nueva lista.

let periferics =['raton','teclado','pantalla','escaner']

let sublistPeriferics = periferics.slice(1,periferics.length-1)
console.log(sublistPeriferics)