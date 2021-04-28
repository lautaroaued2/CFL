/*Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/

let lector= require("readline-sync");
let numeroAmultiplicar= lector.questionInt( " numero que quiere multplicar ");
let HastaDondeMultiplicarlo= lector.questionInt( " hasta que numero desea multiplicar ");
let contador= 0;

for (contador; contador<=HastaDondeMultiplicarlo; contador++) {
    let resultado= contador * numeroAmultiplicar;
    console.log (" el resultado de multiplicar "+resultado );
}
