function mostrar(){

	var ingreseNumero;
	var j;
	j=0;
	ingreseNumero = prompt("Ingrese un numero: ");
	ingreseNumero = parseInt(ingreseNumero);

	for(var i=0; i< ingreseNumero; i++)
	{
		if(i%2==0)
		{
			j++
			document.write(i);
		}
	}
	document.write("<br> La cantidad de numero pares es de: " + j);{0}


}//FIN DE LA FUNCIÓN