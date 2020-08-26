/*
Roxana D. Rodríguez Betbeze

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba
tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba
tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas
tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/


function mostrar()
{
		var estacionIngresada =txtIdEstacion.value;
		var destinoIngresado = txtIdDestino.value;
		var precioFinal;
	
		var precioFinal = 15000;
		
		switch(estacionIngresada){
			case "Invierno":
	
				switch(destinoIngresado){
					case "Bariloche":
						precioFinal *= 1.20;
					break;
					case "Cordoba":
					case "Cataratas":
						precioFinal *= 0.9;
					break;
					case "Mar del plata":
						precioFinal *= 0.8;
					break;
				}
				break;
			
			case "Verano":
	
				switch(destinoIngresado){
					case "Bariloche":
						precioFinal *= 0.8;
					break;
					case "Cordoba":
					case "Cataratas":
						precioFinal *= 1.1;
					break;
					case "Mar del plata":
						precioFinal *= 1.2;
					break;
				}
				break;
	
			default:
	
				switch(destinoIngresado){
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
						precioFinal *= 1.1;
					break;
				}
				break;
		}
	
		alert("El precio final es de: " + precioFinal);
	

}//FIN DE LA FUNCIÓN