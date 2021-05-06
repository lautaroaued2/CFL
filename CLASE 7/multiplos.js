let lector = require('readline-sync');
let dividendo= lector.questionInt(" ingrese dividendo ");
let divisor= lector.questionInt(" ingrese divisor ");
let resto= esMultiplo(dividendo,divisor);

function esMultiplo(dividendo,divisor){
      if(dividendo%divisor== 0) {
          return true;
      } else { return false;
      }
}

console.log(" el primer numero es multiplo del segundo "+resto);


