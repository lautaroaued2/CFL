let lector = require('readline-sync');
let numero= lector.questionInt(" ingrese numero ");
let cantidadDivisores=0;

for (let i=1; i<=numero; i++){

   if( esMultiplo(numero,i)){
       cantidadDivisores++;
       console.log("el numero "+i+ " es divisor");

   }
}

console.log(" los divisores son "+cantidadDivisores);


 function esMultiplo(numero,i){
     if (numero%i==0){
         return true
     } else { return false}
 }


