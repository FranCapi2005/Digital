/* 1 */
let importar = require ('./collectibles');

/* 2 */
let hotToys = importar("Hot Toys");
let bandai = importar("Bandai");
let starWars = importar("Star Wars");

/* 3 */
let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

/* 4 */
let collectibles = {
    figuras: unifiedCollectibles,

    /* 5 */
    /* a */
    listFigures: function(){
        this.figuras.forEach(figura => {
            console.log(`--------------------------`)
            console.log(`Marca ${figura.marca}`);
            console.log(`Nombre ${figura.nombre}`);
            console.log(`Precio ${figura.precio}`);
            console.log(`Stock ${figura.stock}`);
        })
    },
    /* b */
    figuresByBrand: function(marca){
        let brandFigures = this.figuras.filter(function(figura){
            return figura.marca == marca;
        });
        return brandFigures
    }
}
console.log(collectibles.listFigures());
console.log(collectibles.figuresByBrand("Hot Toys"));