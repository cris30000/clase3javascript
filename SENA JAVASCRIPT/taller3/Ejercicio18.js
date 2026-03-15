/**
 * Escribir una función que convierta una
temperatura dada en grados Celsius a grados
Fahrenheit.
La fórmula de conversión es:

F= 9/5 C+32
 */

const prompt =require("prompt-sync")();

function celsius_Fahrenheit(temperaturaCel){
    return(temperaturaCel *9/5)+32

}
// pedimo la temperatura al usuario
let temperatura=parseFloat(prompt("Por favor ingrese la temperatura en Celsius:"));
console.log(`La temperatura ingresa en Celsius es:${temperatura}°C equvale a ${celsius_Fahrenheit(temperatura)} °F` );