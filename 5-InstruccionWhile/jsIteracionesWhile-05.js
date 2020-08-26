/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var caracterIngresado;

	caracterIngresado = prompt("ingrese un sexo:");

	while(caracterIngresado!= "f" || caracterIngresado!= "m")
	{
		caracterIngresado = prompt("Error reingrese sexo: ");
	}
	
	txtIdSexo.value = caracterIngresado;
}//FIN DE LA FUNCIÓN
