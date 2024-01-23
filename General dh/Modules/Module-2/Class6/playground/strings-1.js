// bloque n1
//Debemos crear una función llamada dominio que recibirá un string como "digitalhouse.com.ar" y su función será retornar: "http://www.digitalhouse.com.ar".

function dominio (string){
    return "http://www." + string
}

console.log(dominio("digitalhouse.com.ar"))