/*Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total*/


let lector = require('readline-sync');
let cantidadPositivos=0;
let cantidadNegativos=0;
let numeroIngresado;

while(numeroIngresado != 0) {
    numeroIngresado = lector.questionInt('Ingrese un numero, si desea salir ingrese 0:  ');

    if (numeroIngresado > 0) {
         cantidadPositivos= cantidadPositivos + 1;
    } else {
         cantidadNegativos= cantidadNegativos + 1;
    } 

} 
let porcentaje = (cantidadPositivos / ( cantidadPositivos + cantidadNegativos)) * 100;

console.log("la cantidad de positivos ingresados fue: " +cantidadPositivos);
console.log(" el porcentaje de numeros positivos ingresados respecto del total fue del  "+porcentaje);
