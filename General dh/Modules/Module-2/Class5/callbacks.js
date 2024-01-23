let sumar = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let multiplicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(25, 10, sumar));


function sumar (num1 , num2){
    return num1 + num2;
}
function restar (num1 , num2){
    return num1 - num2;
}
function multiplicar (num1 , num2){
    return num1 * num2;
}
function dividir (num1 , num2){
    return num1 / num2;
}

let calculadora2 = (num1, num2, operacion) => operacion(num1, num2)

console.log(calculadora2(10,25,multiplicar))


let doble = (numero) => numero *2;
let triple = (numero) => numero *3;
let aplicarCallback = (numero, triple) => triple(numero);

console.log(aplicarCallback(10, triple))

