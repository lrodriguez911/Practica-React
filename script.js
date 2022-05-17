let  frase = 'hola Todo el mundo, Hola a todos, ahora! estamos a punto de empezar. estan LISTOS?'
//crear funcion para igualar todos los caracteres y separarlos
const igualarYSeparar = (frase) =>{
  return frase.toLowerCase().replace(/[,|.|!|?]/g, "").split(" ")
}
// crear el arreglo con el resultado de la funcion igualarYSeparar
let palabrasSeparadas = igualarYSeparar(frase);
// crear funcion que muestren pantalla 
const repitePalabras = (frase) =>{
let listado = {};
for (let palabra of palabrasSeparadas) {
  palabra in listado ? ++listado[palabra] : listado[palabra] = 1;
}
console.log(listado);
}
repitePalabras(frase)
