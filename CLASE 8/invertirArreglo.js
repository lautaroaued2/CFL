/* almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero */


let lector = require('readline-sync');
let n= lector.questionInt("ingrese tamanio de n ");
let arreglo1= new Array(n);

function cargarArreglo(array){
 let i= 0
 for(i; i<array.length; i++){
 array[i]= lector.questionInt (" ingrese un numero  ");
    }
} 
 cargarArreglo(arreglo1); 

 function inverso(array){
     let i = array.length-1;
     for(i; i>=0;i--){
        console.log(" los numeros cargados en la posicion "  +i+ " son  " +array[i]);

     }
 } 

 inverso(arreglo1);