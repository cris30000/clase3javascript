/**
 * convertir un valor absoluto
 */

const prompt= require("prompt-sync")();

let numero=parseInt(prompt("Por favor ingrese un numero :"));

function valorAbsoluto(numero){
    if(numero<0){
        return -numero

    }
    else{
        return numero;
    }
}
console.log("El valor absoluto del numero es: "+valorAbsoluto(numero));
