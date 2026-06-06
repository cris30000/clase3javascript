/**
 * Escribir una función que tenga un argumento de
tipo entero y que devuelva la letra P si el número
es positivo, y la letra N si es cero o negativo.
 */

const promp= require("prompt-sync")();
// FUncion para saber si el numero ingresado es positivo o negativo
function positivo_Negativo(numero){
    if(numero>0){
        return 'P(positivo)'
    }
    else
    {
        return 'N (negativo)'
    }
}

let num=parseInt(promp("Por favor ingrese el numero:"));

console.log("El numero ingresado es: "+positivo_Negativo(num));