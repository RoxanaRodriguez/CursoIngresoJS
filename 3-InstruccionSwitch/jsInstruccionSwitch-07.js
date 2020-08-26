function mostrar()
{
	var destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("Oeste");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Cordoba":
			alert("Sur");
			break;

	}
}
	/*
	let destino = document.getElementById("txtIdDestino")

	let destino = txtIdDestino.value*/