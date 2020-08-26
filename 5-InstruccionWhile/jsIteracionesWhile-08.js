/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar() {

	var numero;
	var positivos = 0;
	var negativos = 1;
	var seguir;
	var flag = 0;


	do{
		numero = parseInt(prompt("Ingrese un número"));

		if(numero>=0){
			positivos = positivos + numero;
		}

		else{
			flag=1
			negativos = negativos * numero;
		}

		seguir = prompt("¿Desea ingresar otro número?: ");

	} while (seguir == "Si");

	if (flag == 0){
		negativos = 0;
	}
	
	document.getElementById("txtIdProducto").value  = negativos
	document.getElementById("txtIdSuma").value = positivos
	}
