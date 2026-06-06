/**
 * Escribir un programa que permita al usuario elegir el cálculo del área de cualquiera de las figuras
geométricas: círculo, cuadrado, rectángulo o triángulo, mediante funciones.
 */
// declaramos las funciones para cada figura geometrica
 function area_circulo(radio){
    return Math.PI* (radio^2);
 }

 function area_cuadrado(lado){
    return lado*lado;
 }
 function area_rectangulo(base,altura){
    return base*altura;
 }
 function area_triangulo(base,altura){
    return (base*altura)/2;
 }

 const prompt= require("prompt-sync")();
 console.log(" Por favor elije la figura geometrica para calcular su area: ");
 console.log("1.Circulo");
 console.log("2.Cuadrado");
 console.log("3.Rectangulo");
 console.log("4.Triangulo");

 let figura=parseInt(prompt("Por favor elige una opcion:"));


 switch(figura){
    case 1:
        let radio=parseFloat(prompt("Por favor ingrese el radio del circulo: "));
        console.log("El area del circulo es: " +area_circulo(radio));
        break;
        case 2:
        let lado=parseFloat(prompt("Por favor ingrese el lado del cuadrado: "));
        console.log("El area del cuadrado  es: " +area_cuadrado(lado));
        break;
        case 3:
        let base=parseFloat(prompt("Por favor ingrese la base del rectangulo: "));
        let altura=parseFloat(prompt("Por favor ingrese la altura del rectangulo: "));
        console.log("El area del circulo es: " +area_rectangulo(base,altura));
        break;

        case 4:
        let baseTriangulo=parseFloat(prompt("Por favor ingrese la base del Triangulo: "));
        let alturaTriangulo=parseFloat(prompt("Por favor ingrese la altura del Triangulo: "));
        console.log("El area del circulo es: " +area_triangulo(baseTriangulo,alturaTriangulo));
        break;

        default:
            console.log("Opcion no valida" );     

 }




