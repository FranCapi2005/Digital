let nombreDelTrabajador = "Pedro";
let apellidoDelTrabajador = "Juan";
let sueldoActual = 32000;
let porcentajOtorgado1 = ((sueldoActual * 20)/100);
let porcentajOtorgado2 = ((sueldoActual * 15)/100);

if (sueldoActual >= 33000) {
    console.log(sueldoActual + porcentajOtorgado1);
} else if (sueldoActual <= 33000){
    console.log(sueldoActual + porcentajOtorgado2);
}