let lector= require("readline-sync");
let Numero= lector.questionInt(" ingrese un numero ");

while(Numero==0) {
    Numero= lector.questionInt ("ingrese un numero distinto de CERO = ");
        }
if (Numero%2==0) {
    console.log (" el numero ingresado " +Numero + " es par ");
} else {
    console.log (" el numero ingresado " +Numero + " es impar");
}