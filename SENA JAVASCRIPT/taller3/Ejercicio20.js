/**
 * Escribir funciones que calculen el máximo común
divisor y el mínimo común múltiplo de dos
números enteros.
 */

const prompt = require("prompt-sync")();

// Función que calcula el MCD con el algoritmo de Euclides
function mcd(a, b) {
    while (b !== 0) {
        let temporal = b;
        b = a % b;
        a = temporal;
    }
    return Math.abs(a); // para asegurarnos que sea positivo que sea absluto
}

// Función que calcula el MCM
function mcm(a, b) {
    return Math.abs(a * b) / mcd(a, b);
}

// Pedimo los  números al usuario
let num1 = parseInt(prompt("Por favor ingrese el primer número entero: "));
let num2 = parseInt(prompt("por favor ingrese el segundo número entero: "));

// 

console.log(`El MCD( EL Maximo comunu divisor ) de ${num1} y ${num2} es: ${mcd(num1, num2)}`);
console.log(`El MCM(eL MINIMO COMUN MULTIPLO ) de ${num1} y ${num2} es: ${mcm(num1, num2)}`);