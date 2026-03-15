/**
 * Escribir un programa que encuentre el valor mayor, el valor menor y la suma de los datos de
entrada. Obtener la media de los datos mediante una función.
 */

const prompt=require("prompt-sync")();
let n=parseInt(prompt("Por favor ingrese cuantos numeros va a ingresar:"));
let numeros=[];// arreglo vacio inicialmente

// recorremo el  for
for (let i = 0; i < n; i++){
    //let num=parseFloat(prompt("Por favor ingresa el numero  ${i+1}"));
    let num = parseFloat(prompt(`Ingrese el número ${i + 1}: `));
    numeros.push(num);
   


} 
//hora calculamos la media
function media(arreglo){
    if(arreglo.length===0)
        return 0;

    let suma=0;
    for(let num of arreglo){
        suma=suma+num;
    }
    return suma/arreglo.length;
}
// Ahora encontramos el mayor y el menor

let mayor= numeros[0];
let menor= numeros[0];
let sumaTotal=0;


for (let i = 0; i < numeros.length; i++){
    let valorActual=numeros[i];
    // ahora sumamos
    sumaTotal=sumaTotal+valorActual;

    // ahora encontramos el mayor
    if(valorActual>mayor){
        mayor=valorActual;
    }
    else if(valorActual<menor){
        menor=valorActual;
    }
}

console.log("Los numeros ingresados son: "+numeros);
console.log("------------------------------------------");
console.log("El numero mayor es: "+mayor);
console.log("El numero menor es: "+menor);
console.log("La suma total  es: "+sumaTotal);
console.log("La media de los datos es: "+media(numeros));
