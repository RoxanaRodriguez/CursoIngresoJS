/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo
    var ancho
    

    largo = txtIdLargo.value
    ancho = txtIdAncho.value
    

    largo = parseInt(largo);
    ancho = parseInt(ancho);
    
    rectangulo = (largo * ancho)*3
    alert("La cantidad de alambre a comprar es: "+ rectangulo);
}
function Circulo () 
{   var radio;
    var area;
    var cantidadAlambre;
    var cantidadHilos = 3;
    
    radio = document.getElementById("txtIdRadio").value;
    area = Math.PI * 2 * radio;
    
    cantidadAlambre = area * cantidadHilos;
    cantidadAlambre = parseInt(cantidadAlambre);
    alert("Usted debe comprar " + cantidadAlambre + "m2 de alambre");




}
function Materiales () 
{
	
}