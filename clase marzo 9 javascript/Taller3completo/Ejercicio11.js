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

function raizCuadrada(numero){
    if(numero<0){
        return "No se puede calcular la raiz cuadrada de un numero negativo"
    }
    else{
        return Math.sqrt(numero);
    }   
}

console.log("La raiz cuadrada del numero es: "+raizCuadrada(numero));
console.log("El valor absoluto del numero es: "+valorAbsoluto(numero));
