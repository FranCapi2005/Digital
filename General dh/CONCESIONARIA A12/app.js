let importarAutos = require ('./autosB')
let concesionaria = {
   autos: importarAutos,
   buscarAuto: function(patente){
      let buscar = this.autos.find(function(vehiculo){
         return vehiculo.patente == patente
      });
      if(buscar){
         return buscar
      } else{
         return null
      };
   },
   venderAuto: function(patente){
      let ejecutarVenta = this.buscarAuto(patente)
   
   if(ejecutarVenta != null){
      ejecutarVenta.vendido = true
      return ejecutarVenta
   }else {
      return null
   }
   },
   autosParaLaVenta:function(){
      let vender = this.autos.filter(function(vehiculo){
         return vehiculo.vendido == false
      });
      if(vender == true){
         return null
      } else {
         return vender
      }
   },
   autosNuevos: function(){
      let auto0KM = this.autosParaLaVenta().filter(function(vehiculo){
         return vehiculo.km <100
      })
   if(auto0KM != null){
      return auto0KM
   }
   },
   listaDeVentas: function(){
      let listasAutos = this.autos.filter(function(vehiculo){
        return vehiculo.vendido !== false
      });
      let ventasAutos = listasAutos.map(function(auto){
        return auto.precio
      })
      if(listasAutos.vendido == true){
        return null
      } else {
         return ventasAutos
      }
   },
   totalDeVentas: function(){

        let gananciasTotales = this.listaDeVentas().reduce(function(acum, numero){
            return acum + numero;
        }, 0);
        return gananciasTotales
   },
   puedeComprar: function(auto, persona){
      let autoCompra = this.autosParaLaVenta().filter(function(vehiculo){
         return vehiculo.patente == auto;
      })
      if(auto.precio <= persona.capacidadDePagoTotal && persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas){
         return true
      }else {
         return false
      }
   },
   autosQuePuedeComprar: function(persona){
      let axxecivle = this.autosParaLaVenta().filter(function(vehiculo){
         return this.puedeComprar(vehiculo, persona)
      }, concesionaria);
      return axxecivle
   }
}


console.log(concesionaria.buscarAuto("APL123"));

console.log(concesionaria.venderAuto("APL123"));

console.log(concesionaria.autosParaLaVenta());

console.log(concesionaria.autosNuevos());

console.log(concesionaria.listaDeVentas());

console.log(concesionaria.totalDeVentas());

console.log(concesionaria.puedeComprar("JJK116",{
   nombre: "Juan",
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 100000
   }));

console.log(concesionaria.autosQuePuedeComprar({
   nombre: "Juan",
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 100000
   }));