/**
 * 
 * Diseñar una función que encuentre el mayor de dos números enteros.
 */

const prompt = require("prompt-sync")();

function mayornum(num1, num2){
    if(num1 > num2){
        console.log("El número: " + num1 + " es el mayor");
    }
    else if(num2 > num1){
        console.log("El número: " + num2 + " es el mayor");
    }
    else {
        console.log("Los números: " + num1 + " y " + num2 + " son iguales");
    }
}

// pedimos los numeros al usuario
let num1 = parseInt(prompt("Por favor ingresa el primer número: "));
let num2 = parseInt(prompt("Por favor ingresa el segundo número: "));

// llamamos la funcion 
mayornum(num1, num2);