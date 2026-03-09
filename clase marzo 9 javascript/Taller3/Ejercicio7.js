/**
 * Diseñar un algoritmo para calcular el máximo común divisor de cuatro números basado en un
subalgoritmo función mcd (máximo común divisorde dos números).
 */

const prompt=require("prompt-sync")();

function mcd(a,b){
    // primero aplicamos el algoritmo de Euclides

    while(b!==0){
        let aux=b;// creamos una variable auxiliar w¿que va almacenando cada resultados
        b= a % b;
        a= aux;
        }
       return a;

    }
// ahora realizamos la funcion principal
function principal(){
    // pedimos al usuario ingresar los cuatro numeros
    let n1=parseInt(prompt("Por favor ingresa el primer numero: "));
    let n2=parseInt(prompt("Por favor ingresa el 2° numero: "));
    let n3=parseInt(prompt("Por favor ingresa el 3° numero: "));
    let n4=parseInt(prompt("Por favor ingresa el 4° numero: "));
    // ahora calculamos el MCD de los  cuatro numeros 
    let mcd12=mcd(n1,n2);
    let mcd123=mcd(mcd12,n3);
    let mcd1234=mcd(mcd123,n4);
    //console.log("El maximo comun divisor de los numeros: " +n1+","+n2+","+n3+","+n4+"es: "+ mcd1234);
    console.log("El máximo común divisor de los números " + n1 + ", " + n2 + ", " + n3 + ", " + n4 + " es: " + mcd1234);
}
principal();

