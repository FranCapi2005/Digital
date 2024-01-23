// bloque unico
/*Sumatorias - Parte 1

Ana, contadora de una conocida empresa, guarda las ganancias de cada mes en un array. Por ejemplo, para el último semestre del año pasado registró las siguientes:

Y nos pregunta recientemente: "¿puedo saber la ganancia de todo un semestre?"
"Obvio", dijimos, y escribimos el siguiente código:

"Gracias", nos dijo Ana, y se fue calcular las ganancias usando la función que le pasamos. Pero un rato mas tarde, volvió contandonos que también había registrado las ganancias del primer trimestre de este año:

Y nos preguntó: "¿Podría usar esta función que me dieron para calcular las ganancias del primer trimestre?"
Y nos quedamos pensando .

¿Tiene algún problema la función sumatoriaGananciasSemestre que escribimos anteriormente? ¿Funcionará con trimestres? ¿Y con cuatrimestres?
¡Probala en la consola realizando distintas impresiones por pantalla!
*/

function sumatoriaGananciasSemestre(unSemestre) {
    return unSemestre[0] + unSemestre[1] +
        unSemestre[2] + unSemestre[3] +
        unSemestre[4] + unSemestre[5];
}

console.log(sumatoriaGananciasSemestre(3))
console.log(sumatoriaGananciasSemestre(5))
console.log(sumatoriaGananciasSemestre(2))


/* 
Sumatorias - Parte 2

¿Lo pensaste?
La función sumatoriaGananciasSemestre anterior tiene dos problemas:

Es muy repetitiva y tediosa de escribir. ¡Tenemos que hacer muchas sumas a mano!
No es genérica, sólo sirve para arrays de 6 elementos:
Si tiene más de seis elementos, sólo suma los primeros
Si tiene menos, devuelve cosas bizarras (¿te acordás cuando te dijimos que si te ibas de índice cosas malas podían ocurrir ?)
Lo que nos gustaría es poder sumar de forma genérica a todos los elementos del array, sin importar cuántos haya realmente: queremos una función gananciaTotal, que pueda sumar periodos de cualquier tamaño: semetres, cuatrimestres,trimestres, etc. ¡Qué difícil!

¿Qué? ¿No nos creés que eso se pueda hacer? ¡Qué poca confianza, che!
Nosotros ya hicimos nuestra versión; probala con las siguientes ejecuciones y mostrá sus resultados por consola con console.log para avanzar:

gananciaTotal( [2, 3] );
gananciaTotal( [2, 3, 1, 8, 8, -1] );
gananciaTotal( [] );

Podés llamar a la función gananciaTotal directamente, la misma se encuentra escrita en un archivo que no podes acceder, hay que mantener el misterio...
*/

console.log(gananciaTotal( [2, 3] ));
console.log(gananciaTotal( [2, 3, 1, 8, 8, -1] ));
console.log(gananciaTotal( [] ));


/* 
Sumatorias - Parte 3

Ahora que ya sabemos qué es lo que queremos (gananciaTotal), razonemos cómo hacerlo....
Vamos de a poquito: si el array no tuviera elementos, ¿cuanto debería ser la sumatoria? ¡0!

function gananciaTotal0(unPeriodo) {
    let sumatoria = 0;
    return sumatoria;
}
¿Y si tuviera exactamente 1 elemento? Estem... 0.... ¿más ese elemento? ¡Exacto!

function gananciaTotal1(unPeriodo) {
    let sumatoria = 0;
    sumatoria = sumatoria + unPeriodo[0];
    return sumatoria;
}
¿Y si tuviera 2 elementos?

function gananciaTotal2(unPeriodo) {
    let sumatoria = 0;
    sumatoria = sumatoria + unPeriodo[0];
    sumatoria = sumatoria + unPeriodo[1];
    return sumatoria;
}
¿Y si tuviera 3 elementos?

function gananciaTotal3(unPeriodo) {
    let sumatoria = 0;
    sumatoria = sumatoria + unPeriodo[0];
    sumatoria = sumatoria + unPeriodo[1];
    sumatoria = sumatoria + unPeriodo[2];
    return sumatoria;
}
¿Empezas a ver un patrón? Tratá de escribir la función gananciaTotal4 que funcione para 4 elementos. */

function gananciaTotal4 (unPeriodo){
    let sumatoria = 0;
    sumatoria += unPeriodo[0];
    sumatoria += unPeriodo[1];
    sumatoria += unPeriodo[2];
    sumatoria += unPeriodo[3];

return sumatoria
}


/* 
Sumatorias - Parte 4

Entonces tenemos que repetir la operación de acumular varias veces, una por cada elemento del array. Esto no solo nos esta quedando desprolijo, sino que también es muy repetitivo!!!.

¿No habia una estructura que vimos previamente que nos permitiía repetir una acción una cantidad de veces?.
¡Si el for!

¿Y puedo hacer que repita esa acción por todos los elementos
¡Si pidiendole el length al array!

Ejemplo:

function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    }
    return sumatoria;
}
unPeriodo está a un array que tiene una cantidad de datos que no conocemos.
Como no conocemos ese número vamos a utilizar el ciclo for ya que le podemos dar un límite.
Ese límite como dijimos anteriormente es unPeriodo.length ya que va a cortar el ciclo cuando alcancemos el  total de elementos que tiene una array, no importa si es 10, 2, 25 ...
Dentro del bloque del ciclo for vemos que la variable mes adquiere el valor de unPeriodo[i] , ésto lo hacemos ya que en la primera iteración del ciclo la variable i vale 0 (primera posición del array), en la segunda iteración del ciclo la variable i vale 1 (segunda posición del array) y así sigue creciendo...
¿Aún no te convenciste? Nuevamente, probá las siguientes expresiones en la consola para avanzar:

gananciaTotal([])
gananciaTotal([100])
gananciaTotal([100, 2])
gananciaTotal([2, 10, -20])
gananciaTotal([2, 10, -20, 0, 0, 10, 10]) */

function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    }
    return sumatoria;
}
console.log(gananciaTotal([]));
console.log(gananciaTotal([100]));
console.log(gananciaTotal([100, 2]));
console.log(gananciaTotal([2, 10, -20]))
console.log(gananciaTotal([2, 10, -20, 0, 0, 10, 10]))


/* 
Conteos

"Ah, pero esto no termina acá" - dijo Ana - "Quiero saber en cuántos meses hubo ganancia, es decir, que el saldo fue mayor a cero".

Completá la función cantidadDeMesesConGanancia. En esta oportunidad deberás de utilizar el for y si prestás atención notarás que tiene una estructura similar al problema anterior 
 */

function cantidadDeMesesConGanancia(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length ;i++) {
      if (unPeriodo[i] > 0){
      sumatoria = sumatoria + 1;
    
    }
    }
    return sumatoria;
  }
  console.log(cantidadDeMesesConGanancia([0, 3, -1, 5]))
  console.log(cantidadDeMesesConGanancia([]))
  console.log(cantidadDeMesesConGanancia([10, -10, 2, 100]))

  
/* 
Filtrados

Ya sobre la hora , Ana nos dejó con un problema más interesante: quiere saber los saldos de los meses que hubo ganancia .

saldosDeMesesConGanancia([100, 20, 0, -10, 10])
[100, 20, 10]
Completá la función saldosDeMesesConGanancia. Nuevamente tiene una estructura similar a los problemas anteriores, pero, ¡no tan rápido!: esta función tiene que devolver un array.
*/

function saldosDeMesesConGanancia(saldos) {
    for(let i = 0; i<saldos.length; i++){
      if(saldo => saldo > 0){
        return saldos.filter(saldo => saldo > 0);
  
      }
    }
  }
  console.log(saldosDeMesesConGanancia([100, 20, 0, -10, 10]));


/*
Más conteos

Ana, viendo que somos tan productivos, nos pidió algo más: ahora quiere saber en cuántos meses de un período hubo pérdida.
Decimos que hay pérdida en un período cuando el saldo es menor a cero.
Escribí la función cantidadDeMesesConPerdida. La estructura de la función es parecida a las que venimos haciendo, ¡animate!
*/

function cantidadDeMesesConPerdida (unValor){
    let perdida = 0;
    for(let i = 0; i<unValor.length; i++){
        if (unValor[i] < 0){
            perdida = perdida +1;
        };
        };
    return perdida
}

console.log(cantidadDeMesesConPerdida(([10, -10, 2, 100])))