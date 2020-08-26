/*En el ingreso a un viaje en avion nos solicitan nombre ,
edad, sexo("f" o "m") y estado civil("soltero", "casado" o
"viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años), tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaIngresada;

	var nombreMasTemperatura;
	var mayorTemperatura;
	var mayorDeEdad;
	var cantidadHombres;
	var terceraEdad;
	var hombresSolteros;
	var promedioEdad;
	var banderaMayorEdad;
	var banderaHombre;
	var banderaTercerEdad;
	var acumuladorEdadHombres;

	mayorTemperatura = 0;
	mayorDeEdad = 0;
	cantidadHombres = 0;
	terceraEdad = 0;
	hombresSolteros = 0;
	acumuladorEdadHombres = 0;

	banderaMayorEdad = true
	banderaHombre = true
	banderaTercerEdad = true

	respuesta = true;

	while (respuesta == true){
	/*Ingrese Nombre*/
	nombreIngresado = prompt("Ingrese su Nombre: ");

	while(isNaN(nombreIngresado)==false){
		nombreIngresado = prompt("Error, ingrese un nombre válido: ")
	}

	/*Ingrese Edad*/

	edadIngresada = prompt("Ingrese su edad: ");
		edadIngresada = parseInt(edadIngresada);
	
	while(edadIngresada < 1 || edadIngresada > 120 || isNaN(edadIngresada)){
		edadIngresada = prompt("Error, ingrese una edad válida: ");
			edadIngresada = parseInt(edadIngresada);
	}

	/*Ingrese Sexo*/

	sexoIngresado = prompt("Ingrese su sexo (M o F): ");

	while(sexoIngresado != "M" && sexoIngresado != "F"){
		sexoIngreado = prompt("Error, ingrese un sexo válido (M o F): ");
	}

	/* Ingrese Estado Civil */
	
	estadoCivilIngresado = prompt("Ingrese su estado Civil (Soltero; Casado ó Viudo): ");

	while(estadoCivilIngresado != "Soltero" && estadoCivilIngresado != "Casado" && estadoCivilIngresado != "Viudo"){
		estadoCivilIngresado = prompt("Error, ingrese su estado civil (Soltero, Casado ó Viudo): ");
	}

	/*Ingrese su Temperatura */

	temperaturaIngresada = prompt("Ingrese su Temperatura: ");
	temperaturaIngresada = parseInt(temperaturaIngresada);

	while(temperaturaIngresada < 35 || temperaturaIngresada > 42 || isNaN(temperaturaIngresada)){
		temperaturaIngresada = prompt("Error, ingrese una temperatura válida: ");
	}

	
	respuesta = confirm("¿Desea cargar otro pasajero");

	//A - El nombre de la persona con mas temperatura.
	if(temperaturaIngresada > mayorTemperatura);

		mayorTemperatura = temperaturaIngresada;
		nombreMasTemperatura = nombreIngresado;

	/*B) Cuantos mayores de edad estan viudo*/
	if (edadIngresada>21 && estadoCivilIngresado == "Viudo"){
		(banderaMayorEdad == true)
		mayorDeEdad++;
		banderaMayorEdad = false;
	}
	/*C) La cantidad de hombres que hay solteros o viudos.*/
	if (banderaHombre == true && (sexoIngresado == "M" && estadoCivilIngresado == "Soltero")){
		cantidadHombres++;
		hombresSolteros++;
		banderaHombre = false; 
	}
	
	/*D) cuantas personas de la tercera edad( mas de 60 años), tienen mas de 38 de temperatura*/
	if (edadIngresada > 60 && temperaturaIngresada > 38){
		banderaTercerEdad == true
		terceraEdad++;
		banderaTercerEdad = false
	}
	/*E) El promedio de edad entre los hombres solteros.*/
	if (sexoIngresado =="M" && estadoCivilIngresado == "Soltero"){
		acumuladorEdadHombres += edadIngresada
	}

}
	promedioEdad = acumuladorEdadHombres / cantidadHombres;

console.log("El nombre de la persona con mas temperatura es: " + nombreMasTemperatura);

if(banderaMayorEdad == true){
	console.log("No hay mayores de Edad Viudos");
	}
else{
	console.log("La cantidad de Mayores de Edad Viudos son: " + mayorDeEdad)
}

if(banderaHombre == true){
	console.log("No hay hombres Solteros");
}
else{
	console.log("La cantidad de hombres que hay solteros son: " + cantidadHombres);
	console.log("El promedio de edad entre los hombres solteros es: " + promedioEdad);
}

if(banderaTercerEdad ==true){
	console.log("No hay mayores de 60 con mas de 38 grados de Temperatura.")
}
else{
	console.log("La cantidad de personas mayores a 60 años que tienen >38 de temperatura son: " + terceraEdad);
}



}
