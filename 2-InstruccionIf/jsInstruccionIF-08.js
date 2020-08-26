function mostrar()
{	
	var edad;
	var miEstadoCivil; 

	edad = txtIdEdad.value;
	miEstadoCivil = estadoCivil.value;

	edad = parseInt(edad);

	if(edad >= 18 && miEstadoCivil == "Soltero")
	{		
		alert("Eres soltero y no eres menor.");
	}
}
