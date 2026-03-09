/**
 * Diseñe un algoritmos con funciones que indique el valor del descuento de un artículo el cual es del
5% solo si el artículo tiene un costo superior al $150.000.
 * 
 */

const prompt = require("prompt-sync")();

// funcion para calcular descuento

function calculardescuento(precio){
    return(precio*0.05)
}

let precio=parseFloat(prompt("Por favor ingrese el precio del articulo:  "));
let descuento =0;
let total=0;

if (precio>150000){
    descuento=calculardescuento(precio);

}
else{
    console.log("el articulo no tiene descuento!!!")

}

total=precio-descuento;

console.log("El precio del articulo es $:  "+ precio);
console.log("El descuentro del articulo es $: " + descuento);
console.log("El valor total a pagar del producto con descuento es $: " +total)




