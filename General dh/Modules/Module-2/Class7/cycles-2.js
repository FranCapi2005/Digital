/* Microdesafio n2

Instrucciones
En la carpeta ya creada, crea un nuevo archivo JavaScript (.js). Tabla de multiplicar
Uno de los equipos de desarrollo te pide ayuda para desarrollar un código, donde se pueda visualizar la tabla de multiplicar del 1 al 10. El equipo indica que puedes usar algunos de los ciclos o bucles aprendidos: for - while o do while,
Para ayudar al equipo de desarrollo, tu responsabilidad será:
1. Crear una función que no reciba ningún parámetro. Tendrá la responsabilidad de
generar de manera automática la tabla de multiplicar del 1 al 10. 
2. Lo ideal es que función muestre al usuari o algo así:

Tabla de multiplicar 
-------------------- 
1 * 1 =1
1 * 2 =2
1 * 3 =3
1 * 4 =4
1 * 5 =5
1 * 6 =6
1 * 7 =7
1 * 8 =8
1 * 9 =9
1 * 10 = 10
--------------------
*/

function tablaDeMultiplicar() {
    for (let i = 1; i<=10; i++){
        console.log("--------------------")
        for(let j=1; j<=10; j++){
            console.log(i +" * " + j + " = " + j*i)
        }
    }
}
console.log(tablaDeMultiplicar())