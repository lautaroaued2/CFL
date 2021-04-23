let lector = require("readline-sync");
let tiempo1eraVuelta= lector.questionInt(" tiempo primera vuelta ");
let tiempo2daVuelta= lector.questionInt(" tiempo segunda vuelta ");
let tiempo3eraVuelta= lector.questionInt(" tiempo tercera vuelta ");
let tiempo4taVuelta= lector.questionInt(" tiempo cuarta vuelta ");
let sumar4vueltas= tiempo1eraVuelta + tiempo2daVuelta + tiempo3eraVuelta + tiempo4taVuelta;
let promedio4vueltas= sumar4vueltas/4;
console.log ("tiempo total: " +sumar4vueltas);
console.log ("tiempo promedio: "+promedio4vueltas);
