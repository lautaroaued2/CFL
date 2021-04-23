let lector = require("readline-sync");
let precioProducto= lector.questionInt ("ingrese precio del producto ");
let porcentajeDescuento= lector.questionInt ("ingrese porcentaje descuento ");
let precioApagar= precioProducto - (precioProducto*porcentajeDescuento/100);
console.log ("precio neto: "+precioApagar);

