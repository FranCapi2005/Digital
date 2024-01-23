// arrow function 
let laMitad = numero => numero / 2;

console.log(laMitad(8));


let dividir = (numeroA, numeroB) => numeroA / numeroB;

console.log(dividir(20, 4));


let tengoQueTrabajar = dia => {
    if (dia == 'Sabado' || dia == 'Domingo') {
        return 'No tenes que trabajar';
    } else {
        return 'Si, tenes que ir a trabajar';
    }
}

console.log(tengoQueTrabajar('Sabado'));