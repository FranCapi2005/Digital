let pagoMes = 10000;
let consumoKWH = 600;
let aumento = 20;
let nuevoPago = (pagoMes * aumento/100);
let pagoFinal = (pagoMes + nuevoPago)

let consumoHogar = consumoKWH > 300 ? +pagoFinal : "del mismo monto ya que el pago no aumentara";

console.log("Debido a que su hogar tuvo un consumo de 300kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20), cumplimos con informarle que se ha ajustado el total a pagar, que será de:" + consumoHogar);
