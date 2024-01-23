/* Microdesafio n1

Instrucciones
0. Crear una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js). Saldo Bancario
El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir ejecutando cada una de las siguientes consignas para lograr el objetivo:
1. Crear un array que contenga las operaciones bancarias realizadas por el cliente, tomando en cuenta que los depósitos serán representados por valores positivos y los retiros por valores negativos.
2. Crear una función (Callback) que reciba como parámetro el array creado. La función tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo actual de retiros y el saldo actual del cliente.
3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así como el array que contiene las operaciones bancarias. Esta función tendrá la responsabilidad de retornar el nombre y apellido del cliente y el saldo total de depósitos, el saldo actual de retiros y el saldo actual.
Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la segunda función, asigna diferentes valores o argumentos. No olvides utilizar el console.log() para mostrar los resultados al usuario, */


let operaciones = [-2000, 4000, 7000, 9000, -12000, -1500];

function operacionesBancarias (operaciones) {
    let depositos = 0;
    let retiros = 0;
    let saldoActual = 0;

    for (let i = 0; i<operaciones.length; i++){
        if (operaciones[i] > 0){
            depositos += operaciones[i];
        } else {
            retiros += operaciones[i]
        }; 
            saldoActual += operaciones[i]
    }

    return [depositos, retiros, saldoActual]
}

function informarCliente (nombre, apellido, operacionesBancarias) {
    let informarClienteDatosCuenta = operacionesBancarias(operaciones)
    console.log("Hola," +" "+ nombre +" "+ apellido +":");
    console.log("El monto total de los depósitos es de: " + informarClienteDatosCuenta[0]);
    console.log("El monto total de los retiros es de: " + informarClienteDatosCuenta[1]);
    console.log("Por lo tanto, su saldo actual en la cuenta es de: " + informarClienteDatosCuenta[2]);
}

console.log(informarCliente("Francisco", "Capitani", operacionesBancarias))