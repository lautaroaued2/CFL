/* Desarrolle un algoritmo que
permita cargar alumnos y sus
notas en los tres trimestres
• Se debe permitir obtener el
promedio anual (es decir, de sus
tres notas) de un alumno
(ingresado por el usuario)
• Luego de resolverlo, pensar en
aprovechar métodos y discutir
como representar la información */


// LO PRIMERO QUE HAGO COMO TENGO QUE GENERAR INTERFAZ CON EL USUARIO ES CARGO UN READLINE SYNC
// COMO NECESITO GUARAR NOMBRE DE ALUMNOS Y NOTAS, HAGO QUE ESTAS VARIABLES SE VUELVAN UN ARREGLO PARA QUE PUEDA INGRESAR VARIOS NOMBRES

let lector = require('readline-sync');
let n= lector.questionInt( "ingrese tamanio del arreglo ");
let nombreAlumno= new Array(n);            
let notaPrimerTrimestre= new Array(n);      
let notaSegundoTrimestre=new Array(n);
let notaTercerTrimestre= new Array(n);
let promedios= new Array(n);

// FUNCIONES
cargarNombre(nombreAlumno);
cargarNota(notaPrimerTrimestre);
cargarNota(notaSegundoTrimestre);
cargarNota(notaTercerTrimestre);
promedios= calcularPromedio(notaPrimerTrimestre ,notaSegundoTrimestre,notaTercerTrimestre,promedios); // MI VARIABLE PROMEDIO LA IGUALO A LA FUNCION CALCULAR PROMEDIO PARA GUARDAR EL PROMEDIO.
mostrarNotayNombre(nombreAlumno,promedios);


// ARMO LA FUNCION PARA INGRESAR LOS NOMBRES

function cargarNombre(array){
       let i= 0
       for (i; i < array.length; i++){  // CUANDO ARMO MI CAJONERA PARA QUE VAYA RECORRIENDO TENGO QUE INDICARLE QUE DONDE GUARDAR CADA NOMBRE QUE INGRESO, POR ESO GENERO ARRAY[I]
               array[i]= lector.question(" ingrese nombre del alumno "); // ACA SE GUARDAN LOS NOMBRES QUE VOY INGRESANDO DENTRO DEL BUCLE
    }
} 


// ARMO UNA FUNCION LA CUAL ME PERMITA USARLA PARA BUSCAR LAS NOTAS DE LOS 3 TRIMETRES

function cargarNota(array){
    let i = 0
    for (i; i<array.length; i++){
        array[i]= lector.questionInt(" ingrese nota "); // ACA GUARDO LAS NOTAS QUE VOY INGRESANDO
    }
}

// EN ESTA FUNCION NECESITO 4 PARAMETROS DADO QE LE VOY A PEDIR QUE CARGUE LA NOTA DEL PRIMER TRIMESTRE, NOTA DEL 2DO TRIMESTRE, NOTA DEL 3ER TRIMESTRE Y QUE A SU VEZ CUANDO HAGA EL PROMEDIO, LO GUARDE EN UN PARAMETRO 

function calcularPromedio(array1,array2,array3,array4){
       let i = 0;
    
      for(i; i<array1.length; i++){
         array4[i] = ((array1[i] + array2[i] + array3[i])/3);     // SACO EL PROMEDIO DE LAS 3 NOTAS CARGADAS Y LO GUARDO EN ARRAY4[I]
     } 

     return array4;  // USOS RETURN QUE CONSERVE LOS DATOS GUARDADOS Y LOS PUEDA USAR EN OTRA FUNCION
   
   }

   function mostrarNotayNombre(array1,array2){  // ESTA FUNCION LE PIDO 2 PARAMETROS DADO QUE ME TIENEN QUE CARGAR EL NOMBRE Y EL PROMEDIO. POR ESO TENGO 2 ARRAY
            let i=0;
            for(i; i<array1.length ; i++){
            console.log(" la nota del alumno "+array1[i]+ " es " +array2[i]);    
            }

   }