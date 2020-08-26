/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo; 
	var nacionalidad;

	debugger

	 
	var edadIngresada = prompt("ingrese Edad, entre 18 y 90 años inclusive.");

	edadIngresada = parseInt(edadIngresada);

	while(edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = prompt("la edad no es correcta, reingrese");
		edadIngresada = parseInt(edadIngresada);
	}

	txtIdEdad.value = edadIngresada;

	var sexoIngresado = prompt("indique sexo m o f");

	while(sexoIngresado != "m" && sexoIngresado != "f")
	{
		sexoIngresado = prompt("sexo no es correcta, reingrese");

	}

	txtIdSexo.value = sexoIngresado;
	
	
	var estadoCivilIngresado = prompt("ingrese estado 1 soltero, 2 casado 3 divorciado 4 viudo")
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while(estadoCivilIngresado < 1 || edadIngresada > 4)
	{
		estadoCivilIngresado = prompt("el estado no es correcto, reingrese");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);


	}





	txtIdEstadoCivil.value = estadoCivilIngresado;




	var sueldoBruto = prompt("indique sueldo mayor a 8000");
	sueldoBruto	= parseInt(sueldoBruto);

	while(sueldoBruto < 8000 &  isNaN(sueldoBruto))
	{
		sueldoBruto = prompt("sueldo no es correcta, reingrese");
		sueldoBruto	= parseInt(sueldoBruto);
	}

	txtIdSueldo.value = sueldoBruto;



	var numeroLegajo = prompt("legajo de 4 cifras");
	numeroLegajo	= parseInt(numeroLegajo)

	while(numeroLegajo > 999 && numeroLegajo < 10000)
	{
		numeroLegajo = prompt("legajo no es correcta, reingrese");
		numeroLegajo	= parseInt(numeroLegajo);

	}

	txtIdLegajo.value = numeroLegajo;


	var nacionalidad = prompt("nacionalidad A E I");
	

	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "I" )
	{
		nacionalidad = prompt("NACIONALIDAD no es correcta, reingrese");
		

	}

	txtIdNacionalidad.value = nacionalidad;


}
