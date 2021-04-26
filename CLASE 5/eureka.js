let lector= require("readline-sync");
let ingreseClave= lector.question(" ingrese su clave ");
let clave= "Eureka";
let contador= 1;
while ((ingreseClave != clave) && (contador<3)){
    ingreseClave= lector.question(" ingrese su clave ");
    contador++;
    } 
    if (contador==3){
        console.log ("ingreso mal su clave");
    } else { 
        console.log ("clave correcta");
    }