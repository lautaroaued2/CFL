let lector= require("readline-sync");
let sueldoActual= lector.questionFloat("INGRESE SU SUELDO POR FAVOR ");
let aumento;
let sueldoFinal;

switch(true){
    case sueldoActual<=15000:
        aumento=0.20;
        sueldoFinal= sueldoActual+(sueldoActual*aumento);
        console.log("su sueldo aumentado es "+sueldoFinal);
        break;
    case ((sueldoActual>15001)&&(sueldoActual<=20000)):
            aumento=0.10;
            sueldoFinal= sueldoActual+(sueldoActual*aumento);
            console.log("su sueldo aumentado es "+sueldoFinal);
            break;
    case ((sueldoActual>20001)&&(sueldoActual<=25000)):
            aumento=0.05;
            sueldoFinal= sueldoActual+(sueldoActual*aumento);
            console.log("su sueldo aumentado es "+sueldoFinal);
            break;

    default :
    console.log("no corresponde descuento");
}
