function mostrar()
	{
		var edad;
		var miEstadoCivil; 
	
		edad = txtIdEdad.value;
		miEstadoCivil = estadoCivil.value;
	
		edad = parseInt(edad);
	
		if(edad < 18 && miEstadoCivil != "Soltero" ) 
		{		
			alert("Es muy pequeño para NO ser soltero.");
		}
	}

