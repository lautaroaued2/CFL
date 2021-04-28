/*• Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo*/

let lector = require('readline-sync');
let numeroIngresado = lector.questionInt('Ingrese un numero, si desea salir ingrese 0:');
let numeroMayorIngresado = numeroIngresado;
let numeroMenorIngresado = numeroIngresado;
while (numeroIngresado != 0){
    numeroIngresado = lector.questionInt('Ingrese un numero, si desea salir ingrese 0:');
    if(numeroIngresado > numeroMayorIngresado && numeroIngresado != 0){
        numeroMayorIngresado = numeroIngresado;
    }
    if((numeroIngresado < numeroMayorIngresado) && (numeroIngresado != 0)){
        numeroMenorIngresado = numeroIngresado;
    } 
}
console.log('El numero mayor ingresado es:' + numeroMayorIngresado);
console.log('El numero menor ingresado es:' + numeroMenorIngresado);



