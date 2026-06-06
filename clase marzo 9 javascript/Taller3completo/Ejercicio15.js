/**
 * Escribir un programa mediante funciones que determine el número de días de un mes y año dados.
 */
const prompt =require("prompt-sync")();
// funcioi para  saber si es año bisiesto
function anioBisiesto(anio){
    return(anio % 4 ===0 && anio % 100 !==0)||(anio % 400===0);
}
// funcion que devuelve el numero de dias de un mes
function diaDelMes(mes,anio){
    switch(mes){
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;

        case 4: case 6: case 9: case 11: 
            return 30;

            case 2: 
            return anioBisiesto(anio)? 28: 29;//aqui llamo la funcion pára verificar el año bisiesto 
            default:

    return -1 // esto quiere decir que el mes es invalido
    }
}
// ahora pido los datos al usuario
let mes=parseInt(prompt("Por favor ingrese le mes del año (1-12):   "));
let anio=parseInt(prompt("Ingrese el año: "));
// RTEALIZAMOS LOS CALCULOS
let dias= diaDelMes(mes,anio);
if(dias=== -1){
    console.log("El mes es inavlido");
}
else {
    console.log(`El mes ${mes} del año ${anio} tiene ${dias} días`);
}
