/**
 * 
 * Diseñar una función que calcule xn para x variable real y n variable entera.
 */




const prompt =require("prompt-sync")();// para que lea instalo : npm install prompt-sync
let x = parseFloat(prompt("Por favor ingresa un número real:"));
let n = parseInt(prompt("Por favor ingresa un número entero que sera la potencia:"));

function potencia(x,n){
    let resultado=1;
    for (let i=0; i<n; i++){
        resultado=resultado * x;
    }

    return(resultado)
}

    console.log("El resultado  es:  " + n +  " elevado a la "+ x + " es: " +potencia(x,n));

