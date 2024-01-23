// definiendo parametros manualmente
function saludar(nombre, apellido) {
    return 'Hola' + nombre + ' ' + apellido;
}

saludar('Robertito', 'Rodriguez'); // retornara 'Hola Robertito Rodriguez'


// sin definir los parametros
function saludar(nombre, apellido) {
    return 'Hola' + nombre + ' ' + apellido;
}

saludar(); // retornara 'Hola undefined undefined'


// definiendo los prametros con valores por defecto
function saludar(nombre = 'visitante', apellido = 'anónimo') {
    return 'Hola' + nombre + ' ' + apellido;
}

saludar(); // retornara 'Hola visitante anónimo'


// guardado de resultados dentro de una variable global
function hacerHelados(cantidad) {
    return '🍦'. repeat(cantidad);
}

let misHelados = hacerHelados(3);
console.log(misHelados); // mostrara en consola '🍦🍦🍦'
