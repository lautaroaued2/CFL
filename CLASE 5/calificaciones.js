/*Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía

Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno) */



let lector = require('readline-sync');
let nombreAlumno= lector.question(" nombre del alumno ");
let notaPractica= 0;
let notaProblemas= 0;
let notaTeoria= 0;
let resultado= 0;
        

while (nombreAlumno!="") {

        
        notaPractica= lector.questionFloat(" ingrese nota practica ");
        notaProblemas= lector.questionFloat(" ingrese nota problemas ");
        notaTeoria= lector.questionFloat(" ingrese nota teoria  ");
        

        if( notaPractica<=10 && notaPractica>=0){
            notaPractica= notaPractica*0.1
        } else {
            console.log("ingrese una nota de PRATICA entre CERO y DIEZ ");
        }

        if (notaProblemas<=10 && notaProblemas>=0){
            notaProblemas= notaProblemas* 0.5
        }  else {
            console.log("ingrese una nota de PROBLEMA entre CERO y DIEZ ");
        }

        if (notaTeoria<=10 && notaTeoria>=0){
            notaTeoria= notaTeoria* 0.4
        }  else {
            console.log("ingrese una nota de TEORIA entre CERO y DIEZ ");
        }
        
        resultado= notaPractica+notaProblemas+notaTeoria;

        console.log(" el alumno "+nombreAlumno+ " obtuvo como final "+resultado);
        nombreAlumno= lector.question(" nombre del alumno ");    
    
    }

