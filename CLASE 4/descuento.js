let lector= require("readline-sync");
let descuento= 0.15; 
let mes= lector.question("ingrese el mes en el que hace la compra ");
let mesDescuento= "octubre";    
let cantidades = lector.questionInt (" INGRESE CANTIDAD A COMPRAR ");
let precioDelProducto= lector.questionInt (" PRECIO DE LAS UNIDADES A LLEVAR ");
let precioFinal=(cantidades*precioDelProducto);
if (mes==mesDescuento){
  let precioConDescuento=precioFinal-(precioFinal*descuento);
    console.log(" CORRESPONDE DESCUENTO, IMPORTE A PAGAR "+precioConDescuento);
 } else {
     console.log("LO SENTIMOS, NO CORRESPONDE DESCUENTO. SU PRECIO A PAGAR "+precioFinal);
}