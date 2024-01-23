// .map();
let notas = [10, 4, 5, 8, 9, 7, 2, 1, 5, 0];

let norasHastaEl100 = notas.map(function(numero){ // nuevo array dependiendo si queremos modificar los valores de ese array
    return numero * 10;
});
console.log(norasHastaEl100);


// .filter();
let notasAprobadas = notas.filter(function(numero){ // filtra y extrae los valores que sean mayores o que cumplan con la condicion dada y los coloca en un nuevo array.
    return numero >= 7;
});
console.log(notasAprobadas);


// .reduce();
let sumaNotas = notas.reduce(function(estado, numero){ // toma un conjunto de datos y devuelve un dato unico  
    // estado = es un "acumulador", como un recipiente en el cual se van guardando datos 
    return estado + numero;
});
console.log(sumaNotas);


// .forEach();
notas.forEach(function(valor, indice){ // operacion por cada uno de los elementos del array y tomar como parametros el valor y el indice de cada uno usaremos .forEach
    console.log(`En la posicion ${indice} tengo el valor ${valor}`)
})