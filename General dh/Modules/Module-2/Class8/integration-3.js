/* Microdesafio n3

Instrucciones
Si llegaste hasta acá, significa que vienes trabajando muy bien con los diferentes contenidos vistos hasta el momento. ¡Felicitaciones!
Para que no te quedes con las ganas y puedas seguir practicando si así lo deseas, te proponemos que desarrolles las siguientes funciones:
En la carpeta ya creada, crea un nuevo archivo JavaScript (.js) por cada nueva función que desarrolles. */

/* 1. Crear una función encontrar el número, que reciba por parámetros un array de números y un número. La función deberá evaluar si el número proporcionado existe o no en el array. De existir debe devolver el mensaje “El número XX sí existe en el array”. En el caso contrario debe mostrar el mensaje: “El valor solicitado no existe”. */

/* function encontrarNumero (arrayNumeros, numeroElegido){
    for (let i = 0; i<arrayNumeros.length; i++){
        
        if(arrayNumeros.includes(numeroElegido)){
            return `El numero ${numeroElegido} si existe en el array`;
        } else {
            return`El valor solicitado no existe`
        }
}
}
console.log(encontrarNumero([20, 32, 54, 75, 25, 73, 79, 89, 90, 99, 2, 21, 23, 50], 54)) */

/* 2. Crear una función Juego de trompito, que reciba dos parámetros:
a. El primero, un array con las siguientes cadenas de texto: “Toma 1” ,”Toma 2”,
“Pon 1”, “Pon 2”, “Todos ponen”, “Toma todo”
b. El segundo parámetro será la cantidad de vueltas del trompito comprendidas entre2y6.
La función tendrá como responsabilidad generar un número aleatorio comprendido entre 0 y 5. En función del resultado obtenido, se le debe devolver al usuario alguno de los mensajes suministrados por el trompito. Por ejemplo: “Toma todo”.
Pista: investigar sobre las funcionesMath.random() y Math.floor(). */

let opciones = ["Toma 1", "Toma 2", "Pon 1", "Pon 2", "Todos Ponen", "Toma todo"];
let vueltas = [1, 2, 3, 4, 5, 6];

function juegoDeTrompito (opciones, vueltas){
    let aleatorio = [Math.floor(Math.random() * vueltas.length)]
    return opciones[aleatorio]
}
console.log(juegoDeTrompito(opciones, vueltas));

/* 3. Crear una función sumatoria de pares e impares, que recibirá por parámetros un array con diez valores numéricos. La función tendrá la responsabilidad de devolver al usuario la sumatoria total de los números pares y de los números impares.
Pista: investigar sobre el operador módulo. */



/* CORREGIR */
let numeros = [10, 13, 12, 14, 18, 11, 1, 15, 5, 7];

function sumatoriaDeParesEImpares (value1Num) {

    let sumatoriaPares = 0;
    let sumatoriaImpares = 0;

    for (let i=0; i<value1Num.length; i++){
        if (value1Num[i] % 2 !== 0){
            sumatoriaImpares += value1Num[i];
            
        };
        if (value1Num[i] % 2 == 1){
            sumatoriaPares += value1Num[i];
            
        }
    }
    
    return sumatoriaPares;
};

console.log(sumatoriaDeParesEImpares(numeros))

