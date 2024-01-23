// bloque n1
/* Para este ejercicio te damos la función tablaDeMultiplicar ya definida, la cual recibe un número como parámetro. Queremos que al ejecutarse la función muestre por consola la tabla de multiplicar del 1 al 10 del número que reciba.

Por ejemplo si el número que pasamos por parámetro es 5, la función deberá imprimir:
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
...
hasta llegar a multiplicarlo por 10.*/

function tablaDeMultiplicar(numero) {
    let i = 1;
    while (i <= 10) {
        let resultado = numero * i;
        console.log(numero + " * " + i + " = " + resultado);
		i++;
    }  
}
tablaDeMultiplicar(5)