// bloque n3
//En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .

/*PISTAS: 
1. Dentro del condicional del for, deberíamos utilizar el parámetro que es enviado a la función.
2. Recordemos que podemos utilizar el operador módulo (%) para sacar el resto de un número dividiéndolo por otro. Ejemplos: 2%2 da de resto 0 por lo tanto es número par. 7%2 da de resto 1 por lo tanto es número impar.
*/

function noParesDeContarImparesHasta(numero) {
    let contador = 0;
    for(let i=0 ; i<=numero ; i++){
        if (i % 2 != 0){
            contador++;
        }
   
    }
    return contador
}
