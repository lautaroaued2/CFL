let lector= require("readline-sync");
let sueldoActual= lector.questionFloat("INGRESE SU SUELDO POR FAVOR ");

let rango1= 0.20;
let rango2= 0.10;
let rango3= 0.05;
let sueldoNuevo;

if (sueldoActual<=15000){
     sueldoNuevo= sueldoActual+(sueldoActual*rango1);
    console.log ("SU NUEVO SUELDO ES "+sueldoNuevo);

} else if (sueldoActual>15001 && sueldoActual<=20000){
    sueldoNuevo= sueldoActual+(sueldoActual*rango2);
    console.log ("SU NUEVO SUELDO ES "+sueldoNuevo); 

} else if (sueldoActual>20001 && sueldoActual<25000){
    sueldoNuevo= sueldoActual+(sueldoActual*rango3);
    console.log ("SU NUEVO SUELDO ES "+sueldoNuevo);
} else if (sueldoActual>= 25001){
    console.log ("LO SENTIMOS, NO CORRESPONDE AUMENTO :( ");
}
