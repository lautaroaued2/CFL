let lector= require("readline-sync");
let Numero1= lector.questionInt(" ingrese primer numero ");
let Numero2= lector.questionInt(" ingrese segundo numero ");
let suma= 0;

while (Numero1>Numero2){
    Numero2= lector.questionInt(" por favor ingrese un numero mayor a " +Numero1 );
}
let contador=Numero1;
for (contador; contador<=Numero2; contador++) {
    suma = contador + suma;
}

console.log("la suma de "+Numero1+" + "+Numero2+" es "+suma);

