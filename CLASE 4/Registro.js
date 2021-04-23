let lector = require("readline-sync");
let usuario= lector.question ("ingrese su usuario  ");
let clave= lector.question ("ingrese su clave ");
let usuariovalido= "juan"
let clavevalida= "claeJuan"
if (usuario== usuariovalido && clave== clavevalida) {
    console.log ("BIENVENIDO"); }
    else{ 
        console.log (" ALGUN DATO FALLO, VUELVE A INTENTARLO ")
    }
