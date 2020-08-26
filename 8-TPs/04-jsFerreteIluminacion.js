/*4.    Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioDescuento;
    var marca;
    var precio;
    var ingresosBrutos;

    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);
    precioDescuento = txtIdprecioDescuento.value;
    marca = Marca.value;
    precio = 35;

    ingresosBrutos = (precioDescuento)*.10;
    ingresosBrutos = parseInt(ingresosBrutos);

    //D
    {
    if (cantidadLamparas==3 && marca!= "AgentinaLuz")
    {    
    precioDescuento = (precio*cantidadLamparas)-(precio*cantidadLamparas)*.15;
    }
    if (cantidadLamparas==3 && marca!= "FelipeLamparas")
    {    
    precioDescuento = (precio*cantidadLamparas)-(precio*cantidadLamparas)*.10;
    }
    if (cantidadLamparas==3 && marca!= "AgentinaLuz" && marca!= "FelipeLamparas")
    {    
    precioDescuento = (precio*cantidadLamparas)-(precio*cantidadLamparas)*.05;
    }
    //C) 
    if(cantidadLamparas ==4 && marca== "ArgentinaLuz" || marca=="FelipeLamparas")
    {
    precioDescuento = (precio*cantidadLamparas)-(precio*cantidadLamparas)*0.25;
    }
    if (cantidadLamparas==4 && marca!= "AgentinaLuz" && marca!= "FelipeLamparas")
    {    
    precioDescuento = (precio*cantidadLamparas)-(precio*cantidadLamparas)*.20;
    }    
    //B)
    else
        {
        if(cantidadLamparas ==5 && marca=="ArgentinaLuz")
        {
        precioDescuento = (precio*cantidadLamparas)-(precio*cantidadLamparas)*0.4;
        }
        if(cantidadLamparas ==5 && marca!= "ArgentinaLuz")
        {
        precioDescuento = (precio*cantidadLamparas)-(precio*cantidadLamparas)*0.3;
        }
    //A)
        if(cantidadLamparas>5)
        {
        precioDescuento = (precio*cantidadLamparas)/2;
        }
    }

//E)
        
        if (precioDescuento>120) {
            alert("Usted pago $" + ingresosBrutos + " de Ingresos Brutos");
            txtIdprecioDescuento.value = "$" + (precioDescuento + ingresosBrutos);
        }
        else {   
        txtIdprecioDescuento.value = "$" + precioDescuento;
    
    }   
    }
}

