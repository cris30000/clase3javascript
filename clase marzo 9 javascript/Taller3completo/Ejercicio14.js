/**Escribir un programa mediante funciones que devuelva el valor del día de la semana en
respuesta a la entrada de la letra inicial (mayúscula o minúscula) de dicho día.
 */
const prompt =require("prompt-sync")();
function dia_semana(letra){
    letra= letra.toLowerCase();// para  convertir a minuscula todo 

    switch(letra){
        case 'l':return "Lunes";
        case 'm':return "Martes";
        case 'mi':return "Miercoles";
        case 'j':return "Jueves";
        case 'v':return "Viernes";
        case 's':return "Sábado";
        case 'd':return "Domingo";
        default:
          return "Letra no valida"
        
    }
}
 let letraInicial=prompt("Por favor ingrese la letra inicial del dia de la semana: ");
 console.log("El dia de la semana es : "+dia_semana(letraInicial));