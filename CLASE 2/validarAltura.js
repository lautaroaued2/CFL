let lector = require("readline-sync");
let altura= lector.questionFloat(" altura en metros ");
console.log ("la altura que ud ingreso es: "+ altura);
let alturaMinima= 1.30
if (altura>=alturaMinima){
    console.log("aprobado para ingresar");
} 
else{
    console.log("afuera por enano forro");
}