/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validar ("arena";"cal";"cemento")
Cantidad de bolsas;
Precio por bolsa (más de cero);

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) El importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/


function mostrar()
{
  var tipo;
  var cantidadBolsas;
  var precioPorBolsa;
  var mayorCantidadBolsas;
  var tipoMayorBolsas;
  var cantidadBolsasTotal;
  var tipoMasCaro;

  //Acumuladores//
  var cantidadBolsasArena = 0;
  var cantidadBolsasCal = 0;
  var cantidadBolsasCemento = 0;

  var precioBolsasArena = 0;
  var precioBolsasCal = 0;
  var precioBolsasCemento = 0;

  //D & F
  var importeTotalBruto;
  var importeTotalDescuento;  
  
  var respuesta = true;

  while(respuesta==true){

    tipo = prompt("Ingrese producto que desea comprar (Arena, Cal ó Cemento): ");

    while(tipo !="Arena" && tipo !="Cal" && tipo!="Cemento"){
      tipo = prompt("Error, ingrese un producto válido: ");
    }
   
   cantidadBolsas = prompt("Ingrese la cantidad de bolsas que desea comprar: ");
   cantidadBolsas = parseInt(cantidadBolsas);
   
   while(cantidadBolsas < 0 || isNaN(cantidadBolsas)){
     cantidadBolsas = prompt("Error, ingrese cantidad de bolsas que desea comprar: ");
   }

   precioPorBolsa = prompt("Ingrese el valor de cada bolsa: ");
   precioPorBolsa = parseInt(precioPorBolsa);

   while(precioPorBolsa < 10 || isNaN(precioPorBolsa)){
     precioPorBolsa = prompt("Error, por favor ingrese un precio válido: ");
   }

   switch(tipo){
     case "Arena":
      cantidadBolsasArena += cantidadBolsas;
      precioBolsasArena += precioPorBolsa * cantidadBolsas;
      break;

    case "Cal":
      cantidadBolsasCal += cantidadBolsas;
      precioBolsasCal += precioPorBolsa * cantidadBolsas;
      break;
      
    case "Cemento":
      cantidadBolsasCemento += cantidadBolsas;
      precioBolsasCemento += precioPorBolsa * cantidadBolsas;
      break;
   }
   //D -  Informar el tipo con mas cantidad de bolsas//
   if(cantidadBolsasArena > mayorCantidadBolsas){
      mayorCantidadBolsas = cantidadBolsasArena;
      tipoMayorBolsas = "Arena";
   }
   else{
     if(cantidadBolsasCal > mayorCantidadBolsas){
       mayorCantidadBolsas = cantidadBolsasCal;
       tipoMayorBolsas = "Cal";
     }
    else {
        cantidadBolsasCemento > mayorCantidadBolsas;
        mayorCantidadBolsas = mayorCantidadBolsas;
        tipoMayorBolsas = "Cemento";
    }  
    }

 

    //F - Informar el tipo mas caro//
   if(precioBolsasArena > precioBolsasCal && precioBolsasArena > precioBolsasCemento){
    tipoMasCaro = "Arena";
   }
   else{
     if(precioBolsasCal > precioBolsasArena && precioBolsasCal > precioBolsasCemento){
      tipoMasCaro = "Cal";
     }
     else{
      tipoMasCaro = "Cemento";
     }
   }
    

  respuesta = confirm("¿Desea ingresar mas productos?"); 
  }

  importeTotalBruto = precioBolsasArena + precioBolsasCal + precioBolsasCemento;
  importeTotalBruto = parseInt(importeTotalBruto);

  cantidadBolsasTotal = cantidadBolsasArena + cantidadBolsasCal + cantidadBolsasCemento;

  if(cantidadBolsasTotal > 9 && cantidadBolsasTotal < 29){
    importeTotalDescuento = (importeTotalBruto * 0.15) - importeTotalBruto;
  }
  else{
    if(cantidadBolsasTotal > 30){
      importeTotalDescuento = importeTotalBruto - (importeTotalBruto * 0.25);
    }
  }
    
/*a) El importe total a pagar , bruto sin descuento y...
b) El importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

document.write("El importa total a pagar bruto es: $" + importeTotalBruto + "<br>");
document.write("El importe total a pagar con descuento es de: $" + importeTotalDescuento + "<br>");
document.write("El producto con mas cantidad de bolsas es: " + tipoMayorBolsas + "<br>");
document.write("El producto mas caro es: " + tipoMasCaro + "<br>");

}
