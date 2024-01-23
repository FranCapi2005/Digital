// Una pregunta que si se cumple, se ejecuta el codigo interno
// Posibilidad de darle distintos valores a una variable

// if
let edad = 17;

if (edad >= 18) {
    console.log("Sos mayor de edad")
}


let clima = "soleado";
let dia = "Domingo";

if (clima == "Soleado" && dia == "Doming") {
    console.log("Lindo dia para pasear")
} else if (clima == "Soleado" && dia == "Lunes") {
    console.log ("Buen día para salir a comer");
} else {
    console.log("Mejor me quedo en casa jugando a la playstation")
}


// if ternario
/* Despues del ( ? ) va la condicion verdadera y despues de los ( : ) va la condicion falsa */
let haceCalor = true ? "Ponerse Ropa Ligera" : "no hay nada que hacer"; 

console.log(haceCalor);



// switch
switch (haceFrio) {
    case "true": 
        console.log("Agarrar Abrigo");
        break;
    case "false":
        console.log("Dejar Abrigo");
        break;
    default:
        console.log("No hacemos nada");
        break;
}