let lector = require('readline-sync');
let base = lector.questionInt('Ingrese la base: ');
let exponente = lector.questionInt('Ingrese un exponente distinto de cero ');
let resultado;

function calcularPotencia(base,exponente){
    let potencia= base**exponente;
    return potencia;

}


if (exponente>0){
    resultado= calcularPotencia(base,exponente);
    console.log(" el resultado de la potencia es "+resultado);
}