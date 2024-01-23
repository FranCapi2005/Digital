// objetos literales
let curso = {
    cantidadDeAlumnos: 32,
    docentes: ["Francisco", "Bautista"],
    horario: "de 19 a 21hs",
    notificaciones : function(){
        return `El horario de la cursada es ${this.horario}`;
    }
};

// buscar e imprimir un valor exacto dentro de un objeto literal
console.log(`La cantidad de alumnos de este curso es de ${curso.cantidadDeAlumnos}`);


// funcion dentro de un objeto literal (como llamarla)
console.log(curso.notificaciones());


// funcion "molde", (constructor de objetos)
/*                 Propiedad 1      Prop 2    Prop 3*/
function Curso(cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

// crear un nuevo "curso" con palabra reservada "new".
let cursoDeProgramacion = new Curso(50, ["Javier", "Gerardo"], "de 19 a 21hs.");
let cursoDeMarketing = new Curso(40, ["Debbi", "Bautista"], "de 17 a 19hs.");

console.log(cursoDeProgramacion);
console.log(cursoDeMarketing);