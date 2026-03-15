/**
 * Escribir una función lógica de dos argumentos enteros, que devuelva true si uno divide al otro y
false en caso contrario.
 */

const prompt= require("prompt-sync")();

function unoDividealOtro(a,b){
    if(a % b ===0|| b% a===0){
        return true;
    }
    else{
        return false;
    }
}

let num1=parseInt(prompt("Por favor ingrese el primer numero: "));
let num2=parseInt(prompt("Por favor ingrese el segundo numero: "));

console.log("El numero: " +num1+" divide al numero  :"+num2+" ? ,esto es  : " +unoDividealOtro(num1,num2));
