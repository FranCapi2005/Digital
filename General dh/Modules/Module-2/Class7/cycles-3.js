/* Microdesafio n3

Instrucciones
Si llegaste hasta acá, significa que vienes trabajando muy bien. ¡Felicitaciones!
Para que no te quedes con las ganas y puedas seguir practicando, te proponemos que
desarrolles las siguientes funciones:
En la carpeta ya creada, crea un nuevo archivo JavaScript (.js) por cada nueva función que desarrolles. */


/* 1. Crear una función que pida un valor por parámetro y muestre los 10 números siguientes. */
function siguientesNumeros (numero){
    for(let i = numero; i<=numero+10; i++){
        console.log(i)
    }
}
console.log(siguientesNumeros(1))

/* 2. Imprimir los números entre el 1 y el 57,saltando de tres en tres. */
    for(let i = 0; i<=57; i+=3){
        console.log(i);
}

/* 3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el
100. */
let sumatoria = 0;
for( let i = 0 ; i <= 100 ; i++ ){
    sumatoria += i;
}

console.log(sumatoria)

/* 4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. 
Tendrá la responsabilidad de mostrar al usuario cada una de las letras de la cadena de texto pero en MAYÚSCULA.
Pista: Investigar el método .toUpperCase. */
function mayusculas (texto){
    for (let i = 0; i < texto.length; i++){
        console.log(texto[i].toUpperCase());
    }
}
console.log(mayusculas("practicando el uso de los ciclos o bucles"))

/* 5. Crear una función que reciba como parámetro un array de números positivos.Tendrá la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
Pista: Investiga sobre el uso del operador módulo. Recordemos también que un número par es aquel que se puede dividir entre 2.
 */
let numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function contarNumerosPares (numerosPares){
    let contadorDeNumeros = []

    for (let i = 0; i<numerosPares.length; i++){
        if (numerosPares[i] % 2 === 0){
            contadorDeNumeros.push(numerosPares[i])
        }
    }
    return contadorDeNumeros
}
console.log(contarNumerosPares(numerosPares));