/*Almacene en un arreglo de dimensión N números (la
    cantidad es ingresada por el usuario)
    • Muestre cuántos números son positivos, cuántos son
    negativos y cuántos ceros hay */



    let lector = require('readline-sync');
    let n= lector.questionInt( " ingrese tamanio del arreglo ");
    let arreglo1= new Array(n);

    // el problema me pide que CARGUE UN ARREGLO y MUESTRE DEL ARREGLO CARGADO LOS POSITIVOS, NEGATIVOS Y CERO.

    // ARMO PRIMERO LA FUNCION CARGAR ARREGLO

    function cargarArreglo(array){
        let lector= require("readline-sync");  // USO READLINE-SYNC PARA BUSCAR QUE EL USUARIO CARGUE LOS DATOS
        let i= 0;
        for(i; i<array.length; i++){
            array[i]= lector.questionInt(" ingrese numeros ");  // ARRAY[I] ES LA FUNCION QUE ME GUARDA LOS NUMEROS QUE VOY INGRESANDO EN LA POSICION SOLICITADA
                     
        }

    }

    // AHORA QUE LA FUNCION ESTA ARMADA, PIDO QUE SE EJECUTE 

    cargarArreglo(arreglo1);


    // YA TENGO LA FUNCION QUE ME CARGA EL ARREGLO, AHORA TENGO QUE ARMAR UNA FUNCION QUE CUENTE ENTRE DE ESOS NUMEROS LO PEDIDO 
    function mostrarArreglo(array){
        let contadorNumeroPositivos = 0;
        let contadorNumeroNegativos =0;
        let contadorDeCero =0 ;
        let i= 0;

// USO EL FOR PARA QUE RECORRA TODOS LOS NUMEROS CARGADOS

        for (i; i < array.length; i++){

            if(array[i]>0){
                contadorNumeroPositivos++;

            } else if (array[i]<0){ 
                contadorNumeroNegativos++;

                
            } else 

            {  contadorDeCero++;

            }
        }

        // PIDO QUE MUESTRE QUE FUE LO QUE CONTO
        console.log(" de los numeros ingresados " +contadorNumeroPositivos+ " son posivitos" , +contadorNumeroNegativos+ " son negativos", +contadorDeCero+ " son CEROS");

    } 
   

    // YA TENGO LA FUNCION DE MOSTRAR EL ARREGLO LISTA, Y LA EJECUTO. 
    // TODO SE VA ALMACENANDO DENTRO DE ARREGLO1, POR ESO EJECUTO LA FUNCION MOSTRASARREGLO SOBRE ARREGLO1
    // LAS FUNCIONES SE EJECUTAN EN ORDEN, PRIMERO SE ARMA EL ARREGLO1 Y LUEGO SE MUESTRA EL ARREGLO1


mostrarArreglo(arreglo1);    
    
