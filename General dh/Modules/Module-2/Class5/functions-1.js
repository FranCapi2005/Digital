/* Microdesafio n1

Instrucciones
1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js). 2. Creaunafunciónquepermitacalcularelmontoapagarporelalquilerdeun
vehículo, que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y “silla
para bebe”.
3. Defineyrealizaloscálculosparaobtenereltotalapagar,teniendoencuentalas
siguientes consideraciones:
● De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
○ Compacto: $14000 ○ Mediano: $17000
○ Camioneta: $28000
● Si adicionalmente el cliente requiere la silla para niños, se le cobra un adicional por día de $1200
4. Unavezcreadoelprograma,ejecutalo.¿Recuerdascómo?
5. Paraprobarlasdiferentesrespuestasinvocaalafunción,asignadiferentesvaloreso
argumentos. Usando el console.log(), muestra los resultados al usuario:
“Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días
utilizados, el monto total a pagar es de $42000 ” .
Recuerda que si el cliente pidió la silla para niños debe también indicarlo en el mensaje final.
// ejercicio con Switch */

function alquilerVehiculo(tipoDeVehiculo, diasDeAlquiler, sillaParaBebes) {

    let totalAPagar = 0;

    if (alquilerVehiculo) {
        switch (tipoDeVehiculo) {
            case "compacto":
                totalAPagar += diasDeAlquiler * 14000;
                break;
            case "mediano":
                totalAPagar += diasDeAlquiler * 17000; 
                break;
            case "camioneta":
                totalAPagar += diasDeAlquiler * 28000; 
                break;
            default: 
            return console.log("Ingrese un modelo valido de vehiculo en el sistema")
}

        if (sillaParaBebes == true) {
            totalAPagar += (diasDeAlquiler * 1200);

            console.log(console.log("Estimado cliente: en base al tipo de vehículo" +" "+ tipoDeVehiculo +" "+ "alquilado," + "\n" + "considerando los" +" "+ diasDeAlquiler +" "+ "utilizados, el monto total a pagar es de:" +" "+ totalAPagar +" "+ "Aclaración: Esta compra contiene silla para bebes"));
      
        } else {
            valorTotal = (totalAPagar*diasDeAlquiler)

            console.log(console.log("Estimado cliente: en base al tipo de vehículo" +" "+ tipoDeVehiculo +" "+ "alquilado," + "\n" + "considerando los" +" "+ diasDeAlquiler +" "+ "utilizados, el monto total a pagar es de:" +" "+ totalAPagar +" "+ "Aclaración: Esta compra no contiene silla para bebes"));
        }
    }
}
alquilerVehiculo("compacto", 2, false, true);







// ejercicio only (if)
/* function alquilerVehiculo(tipoDeVehiculo, diasDeAlquiler, sillaParaBebes) {
    
    let vehiculo = 0;
    let sillaBebes = 0;

    if (alquilerVehiculo) {
        if (alquilerVehiculo) {
            if (tipoDeVehiculo == "compacto") {
                vehiculo += 14000;
            } else if (tipoDeVehiculo == "mediano") {
                vehiculo += 17000;
            } else if (tipoDeVehiculo == "camioneta") {
                vehiculo += 28000;
            } else {
                return console.log("Ingrese un modelo de vehiculo valido en el sistema");
            }
}

        if (sillaParaBebes == true) {
            let valorTotal = (vehiculo*diasDeAlquiler) + (diasDeAlquiler * 1200);

            console.log(console.log("Estimado cliente: en base al tipo de vehículo" +" "+ tipoDeVehiculo +" "+ "alquilado," + "\n" + "considerando los" +" "+ diasDeAlquiler +" "+ "utilizados, el monto total a pagar es de:" +" "+ valorTotal +" "+ "Aclaración: Esta compra contiene silla para bebes"));
      
        } else {
            valorTotal = (vehiculo*diasDeAlquiler)
            sillaBebes =
            console.log(console.log("Estimado cliente: en base al tipo de vehículo" +" "+ tipoDeVehiculo +" "+ "alquilado," + "\n" + "considerando los" +" "+ diasDeAlquiler +" "+ "utilizados, el monto total a pagar es de:" +" "+ valorTotal +" "+ "Aclaración: Esta compra no contiene silla para bebes"));
        }
    }
}
alquilerVehiculo("compacto", 1, false) */