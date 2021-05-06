let lector= require("readline-sync");
let cantidadDados= lector.questionInt(" ingrese cantidad de dados a tirar ");
let probabilidad= 1/6;
let probabilidadTotal= 1;
let contador=1;

for(contador=1; contador<=cantidadDados;contador++){


    probabilidadTotal= probabilidadTotal*probabilidad;


} console.log  (" la probabiliddad que salga un 6 es:  "+probabilidadTotal);

