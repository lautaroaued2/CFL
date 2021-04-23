let lector= require("readline-sync");
let numeroIngresado= lector.questionInt(" INGRESE NUMERO A CONSULTAR ");
if (numeroIngresado%2==0){
    console.log(" NUMERO PAR");
} else {
    if (numeroIngresado%2!=0);
    console.log(" NUMERO IMPAR ");
}
