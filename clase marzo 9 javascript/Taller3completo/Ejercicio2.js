/**
 * Diseñe un algoritmos con funciones que indique el valor del descuento de un artículo el cual es del
5% solo si el artículo tiene un costo superior al $150.000.

pague 2 lleve tres

function pague2lleve3(precio){
    return(precio*2)
}

/ ahora para que mejore la promocion de pague 2 lleve 3

let cantidad = parseInt(prompt("Ingrese la cantidad de artículos que desea comprar: "));

let totalPromo = total;

if (cantidad >= 3) {
    totalPromo = pague2lleve3(total);
}
 * 
 */

const prompt = require("prompt-sync")();

//  DEclaracion de funciones :funcion para calcular descuento

function calculardescuento(precio){
    return(precio*0.05)
}

// funcion pague 2 lleve tres

function pague2lleve3(precio){
    return(precio*2)
}




let precio=parseFloat(prompt("Por favor ingrese el precio del articulo:  "));
let descuento =0;
let total=precio;



if (precio>150000){
    descuento=calculardescuento(precio);

}
else{
    console.log("el articulo no tiene descuento!!!")

}

total=precio-descuento;

// ahora 

console.log("El precio del articulo es $:  "+ precio);
console.log("El descuentro del articulo es $: " + descuento);
console.log("El valor total a pagar del producto con descuento es $: " +total)
//console.log("El valor total a pagar del producto con promocion de pague 2 lleve 3 es $: " +totalPromo)


console.log("Gracias por su compra!!!")     


