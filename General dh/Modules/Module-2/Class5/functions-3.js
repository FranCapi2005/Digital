/*  Microdesafio n3 (opcional)

Instrucciones
Si llegaste hasta acá, significa que vienes trabajando muy bien. ¡Felicitaciones!
Para que no te quedes con las ganas y puedas seguir practicando, te proponemos que desarrolles las siguientes funciones. Verás que presentan una dificultad extra, por lo que tendrás que buscar algunos conceptos para poder resolverlos. Es recomendable que crees este hábito ya que es algo muy común que los programadores realizamos todos los días.
En la carpeta ya creada, crea un nuevo archivo JavaScript (.js) por cada nueva función.
1. Crear una función que recibe un string en minúscula, lo convierte a mayúsculas y lo retorna. Investiga qué hace el método de strings .toUpperCase()
2. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. Investiga qué hace la palabra reservada typeof().
3. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
4. Crear una función que calcule el valor de una hora de trabajo, teniendo en cuenta que dicha función recibe tres parámetros: El salario mensual, la cantidad de días trabajados y la cantidad de horas que regularmente trabajada por día. */

function mayuscula(string) {
    return string.toUpperCase();
}
function tipoDato (dato){
    return typeof(dato);
}
function edadPerros(edad) {
    return edad * 7;
}
function calcularValor(salarioMensual, diasTrabajados, horasXDia) {
    return salarioMensual / ((diasTrabajados * horasXDia)/52);      // se divide en 52 ya que son la cantidad de semanas que posee un año, y se esta tratando de calcular cuanto es el valor anual segun los 3 parametros dados anteriormente.
}

console.log(mayuscula("hola chicos/as, mi nombre es francisco, tengo 18 años, trabajo en software informatico y estudie ciberseguridad"));
console.log(tipoDato(56));
console.log(edadPerros(20));
console.log(calcularValor(1000, 20, 8));