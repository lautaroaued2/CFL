/* Diseñar un algoritmo que
lea números enteros hasta
teclear 0
• Determinar y mostrar el
máximo, el mínimo y la
media de todos los
números ingresados
• Pensar cuidadosamente
cómo debemos inicializar
las variables */


let lector = require('readline-sync');
let numeroIngresado= lector.questionInt(" ingrese un numero para comenzar el analisis  ");
let numeroMaximo = numeroIngresado;
let numeroMinimo = numeroIngresado;
let promedio = 0;
let cantidadDeNumerosIngresados= 0;
let sumaDeNumerosIngresados= 0;

while (numeroIngresado != 0){
       
   
    if (numeroIngresado>numeroMaximo &&  numeroIngresado!= 0) {
        numeroMaximo= numeroIngresado;
    }

    if (numeroIngresado<numeroMinimo &&  numeroIngresado!= 0) {
        numeroMinimo= numeroIngresado;
    }
    
     if (numeroIngresado != 0) {
     
        cantidadDeNumerosIngresados= cantidadDeNumerosIngresados + 1 ;
        sumaDeNumerosIngresados = sumaDeNumerosIngresados + numeroIngresado; 
     }

    numeroIngresado= lector.questionInt(" por favor, vuelva a ingresar un numero o pulse cero para salir ")
}

     promedio= sumaDeNumerosIngresados/cantidadDeNumerosIngresados;

     console.log(" el numero maximo ingresado es: " +numeroMaximo);
     console.log(" el numero minimo ingresado es: " +numeroMinimo);
     console.log("el promedio del total de numeros ingresados es: "+promedio);
