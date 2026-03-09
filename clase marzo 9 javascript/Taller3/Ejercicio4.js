/**
 * Diseñe un algoritmo con funciones que indique si un estudiante ganó o perdió un curso después de
presentar los cinco trabajos asociados al curso (Notas entre 0.0 y 5.0). Los trabajos tienen igual peso sobre la nota final y se gana el curso si la
nota definitiva es superior a 3.5
 */

const prompt= require("prompt-sync")()
// funcion para promediar las cinco notas
function notafinal(nota1,nota2,nota3,nota4,nota5){
    return((nota1+nota2+nota3+nota4+nota5)/5)
}
// entrada de datos

let nota1=parseFloat(prompt("Por favor ingrese la nota 1: "));
let nota2=parseFloat(prompt("Por favor ingrese la nota 2: "));
let nota3=parseFloat(prompt("Por favor ingrese la nota 3: "));
let nota4=parseFloat(prompt("Por favor ingrese la nota 4: "));
let nota5=parseFloat(prompt("Por favor ingrese la nota 5: "));


// proceso de datos
let notadefinitiva= notafinal(nota1,nota2,nota3,nota4,nota5);

// salida de datos

console.log("La nota definitiva es :"+ notadefinitiva);

if(notadefinitiva>3.5){
    console.log("El estudiante Gano el curso  !!!!:)")
}
else{
    console.log("El estudiante perdió el  curso :(")
}