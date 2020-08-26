/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar ()
{
var numero;
var maximo;
var minimo;
var seguir;
var flag = 0;

do{
    numero = parseInt(prompt("Ingrese un número: "));

    if (flag == 0){
        minimo = numero;
        maximo = numero;

        flag = 1;
    }
   
    if (numero > maximo){
        maximo = numero;
    }
    else if(numero < minimo){
        minimo = numero; 
    }

    seguir = prompt("¿Desea ingresar otro número?: ");
}while ( seguir == "Si");
    
document.getElementById("txtIdMaximo").value = maximo;
document.getElementById("txtIdMinimo").value = minimo;


}