/**
 * Diseñe un algoritmos con funciones que dado un
número entero entre 0 y 20 diga si es o no un
número primo.
Recuerde que los números primos menores o
iguales a 20 son:
2, 3, 5, 7, 11, 13, 17, 19.
 */

const prompt=require("prompt-sync")();

function numPrimos(num){
    if (num < 2)
        return false;
    for(let i=2; i < num; i++){
        if(num % i===0){
            return false;
        }
    }

    return true;
}
//otra funcion


// pido al usuario que ingrese un numero y valida
let numero=parseInt(prompt("Por favor ingrese un nuemro entre 0 y 20: "))
// ahora con un condicional  si 

if (numPrimos(numero)) {
    console.log("El número:   " + numero +"  es primo");
} else {
    console.log("El número:   " + numero +"  no es primo");
}

//OTRO IF
















/*
// funcion de numeroa pares

function numPares(num){
    if(num % 2 === 0){
        return true;    
    }else{
        return false;
    }
}
*/

/*
if (numPares(numero)) {
    console.log("El número:   " + numero +"  es par");
} else {
    console.log("El número:   " + numero +"  no es par");
}*/