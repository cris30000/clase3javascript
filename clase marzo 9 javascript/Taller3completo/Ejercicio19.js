/**
 * Escribir una función que decida si un número entero positivo es primo.
 */

const prompt=require("prompt-sync")();
let num = parseInt(prompt("Ingresa un número entero positivo: "));
function esPrimo(n){
    // como 0 y 1 no son primos los descartamos y empezamos desde 2
    if(n < 2 )
        return false;

    for(let i=2; i<=Math.sqrt(n); i++){
            if(n%i===0){
                return false;

            }
        }

        return true; // porque no se encontro divisor entonces es primo
        
}
if (esPrimo(num)) {
    console.log(`${num} es un número primo.`);
} else {
    console.log(`${num} no es un número primo.`);
}

