let exportBiciJSON = require('./datosBici');
let dhBici = {
    //Nuestra primera propiedad se llama "bicicletas" y como valor contiene la variable donde nosotros guardamos nuestro array de objetos ya parseados, es decir, convertidos de json a js.
    bicicletas: exportBiciJSON,


    //Creamos una función y por parametro vamos a pasarle un ID, esto nos va a servir para comparar y encontrar la bicicleta que coincida.
    buscarBici: function(idBici){

        //Creamos una variable para almacenar el resultado de filtrar las bicicletas con filter. (Recordando que filter te devuelve un nuevo array con los elementos del array al que se lo pasaste que cumplieron con la condición que aclaraste). 
        
        let buscar = this.bicicletas.filter(function(Bicis){  //this <- hace referencia a "buscar dentro de este objeto". Seguido del punto se escribe la propiedad a la que queres acceder. Entonces en "this.bicicletas.filter(...)" decimos: De este objeto, buscame la propiedad bicicleta y aplicale el método filter. 

        //Esta es la condición que queremos, como el parametro "bicis" en nuestro filter representa cada objeto de nuestro array, pedimos acceder a bicis.id para obtener su propiedad llamada id y comparar si coincide con el id que pasamos por nuestro parámetro. El resultado de esto queda guardado en nuestra variable "buscar".
        return Bicis.id == idBici
    })
        //Fuera del filter (pero dentro de nuestra función principal que recibe el idBici como parámetro) vamos a crear una condicional donde evaluamos si "buscar" está vacío. Si está vacío es porque el filter no encontró ninguna coincidencia y NO existe ninguna bici con ese ID. Si esto se da, retornamos null.

        /* if(buscar == ""){
            return null}

            //Si nuestra variable "buscar" NO está vacía (caso contrario al if, entonces es else), retornamos nuestra variable "buscar" que posee el array con el objeto que nos devolvió nuestro filter. Va a ser un único objeto ya que el ID es un identificador único para cada elemento que almacenamos.

        else{
            return buscar;} */

            
        if (buscar.length > 0){
            return buscar
        } else {
            return null
        };

    },
    venderBici: function(id){
        let venderBicicletas = this.buscarBici(id) ; // variable que busca en la propiedad buscarBici, segun el id que nos de.
        if (venderBicicletas !== null){ // si venderBici es diferente a null, entonces busca en venderBici, en indice 0 del array. Y remplaza el valor de la propiedad vendida por "true"
            venderBicicletas[0].vendida = true;
        } else {
            return `bicicleta no encontrada`
        }
            return venderBicicletas
    },
    biciParaLaVenta: function(vendida){
        let biciParaVender = this.bicicletas.filter(function(bici){
            return bici.vendida == false;
        });
        if(vendida == true){
            return "No hay ninguna disponible para la venta"
        } else {
            return biciParaVender
        }
    },
    totalDeVentas: function(){
        let validarBici = this.bicicletas.filter(function(bici){
            return bici.vendida == true;
        });
        let gananciasTotales = validarBici.reduce(function(acum, numero){
            return acum + numero.precio;
        }, 0);
        return gananciasTotales
    },
    aumentoBici: function(porcentaje){
        let biciAumentos = this.bicicletas.map(function(numero){
            numero.precio *= porcentaje/100;
            return numero
        })
        (console.table(biciAumentos))
        return (`EL PRECIO DE TODAS LAS BICICLETAS HA SIDO AUMENTADO POR UN VALOR DE ${porcentaje}% `)
        
    },
    biciPorRodad: function(rodado){
        let buscarRodado = this.bicicletas.filter(function(bici){
            return bici.rodado == rodado;
        });
        if(buscarRodado == false){
            return `No se ha encontrado una bicicleta segun el rodado indicado`;
        } else {
            return buscarRodado
        }
    },
    listarTodasLasBici: function(){
        for(let listarBici of this.bicicletas){
            console.log(listarBici)
        }
    }
};
/* console.log(dhBici.buscarBici(1));
console.log(dhBici.venderBici(2));
console.log(dhBici.biciParaLaVenta());
console.log(dhBici.totalDeVentas()); */
console.table(dhBici.aumentoBici(50));
/* console.log(dhBici.biciPorRodad(15))
console.log(dhBici.listarTodasLasBici()) */