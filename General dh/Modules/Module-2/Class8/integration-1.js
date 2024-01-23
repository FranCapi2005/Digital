/* Microdesafio n1

Instrucciones
1. Crear una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js). Facturación - Cursos DH
2. El Tech Leader de nuestro equipo nos informa que debemos realizar un código que permita calcular el monto a pagar por un alumno basándose en los cursos que desea tomar en Digital House. Deberás seguir los siguientes pasos para lograr el objetivo:
a. Crear un array multidimensional que contenga los nombres de los cursos y su precio en pesos: “html5, 4000”, “css3, 5000”, “javascript, 10000”, “react, 7000”, “nodejs, 15000”.
b. Crear un array que contenga los cursos que el alumno quiere tomar con DH. Deben estar escritos en MAYÚSCULAS y el alumno puede seleccionar entre HTML5, CSS3, JAVASCRIPT, REACT y NODEJS.
c. Crear una función (Callback) que reciba como parámetros el array multidimensional de los cursos y el otro array que indica los cursos que quiere hacer el alumno. La función tendrá la responsabilidad de calcular y devolver el monto total a pagar por el alumno en función de los cursos que quiere realizar. No olvides que en el array multidimensional los nombres de los cursos están escritos en letras minúsculas y tienes que pasarlas a MAYÚSCULAS.
d. Crear otra función que reciba como parámetros el nombre y el apellido del alumno, el array multidimensional de los cursos con sus respectivos precios y el array que contiene qué cursos quiere hacer el alumno. Esta función tendrá la responsabilidad de retornar el nombre y el apellido del alumno y el monto total a pagar en función de los cursos que quiere realizar.
e. Una vez creado el programa, ejecutalo. Para verificar los resultados solicitados, invoca a la segunda función, asigna diferentes valores o argumentos y no olvides utilizar el console.log() para mostrar los resultados al usuario. Te compartimos un ejemplo:

Estimado Luis Fuentes, en función de los cursos seleccionados:
1.- HTML5
2.- CSS3
3.- JAVASCRIPT
4.- NODEJS
El monto total a pagar es de: $34000.
Bienvenido a la gran aventura Digital House.
*/


let cursosDisponibles = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["nodejs", 15000]];
let cursosElegidos = ["HTML5", "CSS3", "REACT", "NODEJS"];

function calcularPrecioAPagarPorCursos (cursosDisponibles, cursosElegidos) {
    let precioAPagar = 0;
    for (let i = 0; i<cursosDisponibles.length; i++){
        for (let j = 0; j<cursosElegidos.length; j++){
            let cursoActual = cursosDisponibles[i];
            if(cursoActual[0].toUpperCase() == cursosElegidos[j]){
                precioAPagar += cursosDisponibles[i][1];
            }
        }
    }
    return precioAPagar
}
function informarAlUsuario (nombre, apellido, cursosDisponibles, cursosElegidos, callback){
    let precioAPagar = callback(cursosDisponibles, cursosElegidos)
return `Estimado ${nombre} ${apellido},
El monto total a pagar es de: ${precioAPagar} 
Bienvenido a la gran aventura Digital House.`
}

console.log(
    `Estos son los cursos elegidos ${cursosElegidos}`,
    informarAlUsuario("Francisco","Capitani",cursosDisponibles,cursosElegidos,calcularPrecioAPagarPorCursos)
)