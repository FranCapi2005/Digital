// bloque n3
/*Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:
1. Un texto.
2. La palabra que vamos a buscar para reemplazar.
3. La palabra que vamos a usar para reemplazar.
La función deberá devolver el texto con la palabra reemplazada.

Ejemplo:
let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones) //'Este texto es buena onda'*/

function reemplazoFastFast (texto, palabra1, palabra2){
    return texto.replace(palabra1, palabra2)
};

reemplazoFastFast("Hola, como va todo hoy Fran?", "Fran", "Pedro")