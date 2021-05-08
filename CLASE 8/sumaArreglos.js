/*Sumar los elementos de cada una de las posiciones de dos arreglos y
 guardar el resultado en otro arreglo•
 El arreglo tiene dimensión 6 y los números de lo
  dos vectores los carga el usuario*/

  let lector= require("readline-sync");

  let arreglo1= new Array(6);
  let arreglo2= new Array(6);
  let arregloTotal= new Array(6);

  function cargarArreglo(array){  // esta funcion es la que me va a tomar los valores en cada posicion del arreglo//
    let lector= require("readline-sync");
    let i= 0;
    for(i; i< array.length; i++){
        array[i] = lector.questionInt(" ingrese numero deseado para la posicion " + i + " : ");
    }
  }
  
// ahora que tengo la funcion MADRE armada para cargar cada valor que ingreso en los vectores, la uso para cargar vector 

console.log("cargar primero arreglo ");
cargarArreglo(arreglo1);  

console.log("cargar segundo arreglo ");
cargarArreglo(arreglo2);

// tengo los dos vectores con los numeros ingresados, ahora necesito una funcion que sume cada posicion y la guarde en otro

function sumarArreglo(arreglo1,arreglo2,arregloTotal){
let i= 0
for(i; i<6; i++){
    arregloTotal[i]= arreglo1[i]+arreglo2[i]; // va sumando cada posicion de cada arreglo y los va guardando (v1 + v2 y lo guarda en c1)
    console.log( " la suma de la posicion " + i + " arreglo 1 y 2 es " +arregloTotal[i]);
    } 
}
sumarArreglo(arreglo1,arreglo2,arregloTotal);
