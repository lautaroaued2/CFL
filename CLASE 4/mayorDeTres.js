let lector= require("readline-sync");
let numeroMayor= lector.questionInt("INGRESE PRIMER NUMERO ");
let segundoNumero= lector.questionInt("INGRESE SEGUNDO NUMERO ");
let tercerNumero= lector.questionInt("INGRESE TERCER NUMERO ");
if (numeroMayor<segundoNumero){
    numeroMayor=segundoNumero;
}
if (numeroMayor<tercerNumero){
    numeroMayor=tercerNumero;
}
console.log ("EL NUMERO MAYOR ES: " +numeroMayor);

