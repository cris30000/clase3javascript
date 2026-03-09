/**
 * Diseñe un algoritmo con funciones que indique si un número entero x se encuentra por dentro o por
fuera del intervalo cerrado-cerrado [minimoValor, maximoValor)]
Por ejemplo: Si los valores mínimos y máximo son 3 y 7 respectivamente, el valor 5 está dentro, mientras que el valor de 8 está por fuera del
intervalo.
 */
const prompt = require("prompt-sync")()// para ingresar datos desde el teclado

function intervalo(num,min,max){
    if (num>=min && num<=max){
        return true;
    }
    else{
        return false
    }
}
// ahora creamos una funcion general

function principal(){
    // pedimos al usuario los numeros
    let min=3;
    let max=7;
    let num=parseInt(prompt("Por favor ingrese el numero a validar: "));

    // ahora validamos con la funcion intervalo
    if(intervalo(num,min,max)){
        console.log("El numero : " + num+ " ESTA DENTRO DEL INTERVALO [" + min+ ","+max+"]")
    }
    else{
        console.log("El numero :  "  + num + "  está por fuera del intervalo")
    }
}// llamamos la funcion
principal();
