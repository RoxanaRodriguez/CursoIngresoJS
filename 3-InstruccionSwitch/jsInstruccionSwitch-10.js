function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	var validacion;

	switch(estacionIngresada)
	{
			case("Bariloche"):
				validacion="Se viaja";
			break;
			default;
				validacion="No se viaja";	
		}
		break;
		case("Verano"):
		switch(destinoIngresado)
		{		
			case("Mar del Plata"):
			case("Cataratas"):
				validacion="Se viaja";
				break;
			default:
				validacion="No se viaja";	
		}		
		case("Primavera"):
		switch(destinoIngresado)
		{
			case("Bariloche"):
				validacion="No se Viaja";
				break;
			default:
				validacion="Se viaja";
		}
		default:
			validacion="Se viaja";
}
alert(validacion);







}//FIN DE LA FUNCIÓN