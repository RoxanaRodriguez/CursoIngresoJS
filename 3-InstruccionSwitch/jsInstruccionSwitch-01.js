function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	switch (txtIdMes.value) {
		case 0:
		  mesDelAño = "Que comiences bien el año";
		  break;
		case 1:
		mesDelAño = "Monday";
		  break;
		case 2:
		mesDelAño = "Tuesday";
		  break;
		case 3:
		mesDelAño = "Wednesday";
		  break;
		case 4:
		mesDelAño = "Thursday";
		  break;
		case 5:
		mesDelAño = "Friday";
		  break;
		case 6:
		mesDelAño = "Saturday";
	  }

}//FIN DE LA FUNCIÓN