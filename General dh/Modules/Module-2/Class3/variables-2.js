let nombre = "Juan";
let apellido = "Bautista";
let sueldoActual = 20000;
let porcentajeAumento = 25;
let calculoAumento = ((sueldoActual * porcentajeAumento)/ 100);
let nuevoSueldo = sueldoActual + calculoAumento;

console.log("Hola, estimad@" +'\n'+ nombre +' '+ apellido + "\n" +"En base a su sueldo actual:"+ "\n" +sueldoActual + "\n" +"Ha recibido un aumento del 25%:" + "\n" + calculoAumento + "\n" + "Y su nuevo sueldo es de: $" + nuevoSueldo);