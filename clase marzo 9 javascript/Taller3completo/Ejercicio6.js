/**
 * Diseñar una función que calcule la media de tres números leídos del teclado.
 */

const prompt =require("prompt-sync")()

function media(num1,num2,num3){
    return((num1+num2+num3)/3)
}

// el usuario ingresa los datos

let num1=parseFloat(prompt("Por favor ingrese el primer numero: "));
let num2=parseFloat(prompt("Por favor ingrese el segundo numero: "));
let num3=parseFloat(prompt("Por favor ingrese el tercer numero: "));


let resultado=media(num1,num2,num3);
console.log("La media de los tres numeros es: " +resultado);


