/*** Escribir una función salario que calcule los salarios de un trabajador para un número dado de
horas trabajadas y un salario hora. Las horas que superen las 40 horas semanales se pagarán
como extras con un salario hora 1,5 veces el salario ordinario.
 */
const prompt = require("prompt-sync")();

let num_horas=parseFloat(prompt("Por favor ingrese el numero de horas trabajadas:"));
let costo=parseFloat(prompt("Ingrese el costo de hora  del salario normal:"));
let extra=1.5;
//funcio salario
function salario(num_horas,costo){
    let salarioTotal;
    if(num_horas<=40){
        console.log("!!!!!!Usted no trabajo horas extras");
        salarioTotal=num_horas*costo;
    }
    else{
        let horas_extra=num_horas-40;
        console.log("Usted  trabajo:"+horas_extra+ " horas extras  y tendra un nuevo salario ");
        salarioTotal=(40*costo)+(horas_extra*costo*extra);
    }
    return salarioTotal;
}
let total=salario( num_horas,costo);


// funcion calcular un bono del 3%del salario por dia
function bono(salario){
    return(salario*0.03);
}
let bonificacion=bono(total);

total=total+bonificacion;

let salarioTotal=total+bonificacion;

console.log("El salario total a pagar  es: "+ total);
console.log("El bono por dia es de: "+ bonificacion);
console.log("El salario total a pagar con bono incluido es: "+ salarioTotal);

