
/**
 * Diseñe un algoritmos con funciones que permita determinar el área de un hexágono.
 */

const prompt = require("prompt-sync")();

// Función para calcular el perímetro
function calcularPerimetro(lado) {
    return 6 * lado;
}

// Función para calcular el área
function calcularArea(perimetro, apotema) {
    return (perimetro * apotema) / 2;
}

// ahora pedimos al usuario ingresar la longitud del lado y el valor de la apotema
let lado = parseFloat(prompt("Ingrese la longitud del lado del hexágono: "));
let apotema = parseFloat(prompt("Ingrese la apotema del hexágono: "));

// ahora llamamos la funcion para calcular el perimetro y posteriormente area
let perimetro = calcularPerimetro(lado);
let area = calcularArea(perimetro, apotema);

// desplegamos en consola
console.log("El perímetro del hexágono es: " + perimetro);
console.log("El área del hexágono es: " + area);