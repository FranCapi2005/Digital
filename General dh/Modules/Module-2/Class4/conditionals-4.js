let num1 = 200;
let num2 = 174;
let operadores = "+";

switch (operadores) {
    case "+":
        console.log( num1 + num2 );
        break;
    case "-":
        console.log( num1 - num2 );
        break;
    case "*":
        console.log( num1 * num2 );
        break;
    case "/":
        console.log( num1 / num2 );
        break;
    default: "";
        console.log("Las Operaciones aceptadas son: sumar-restar-multiplicar-dividir");
        break;
}

