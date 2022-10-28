const precio = 200;
var cantidadEntradas = document.getElementById('cantidad');
var btnResumen = document.getElementById('btnResumen');
var categoria = document.getElementById('categoria');

btnResumen.addEventListener('click',obtenerCategoria); //"Subscription"

function obtenerCategoria(){
    if(categoria.value == 1){
        var precioFinal = ((precio * cantidadEntradas.value)*0.20);
        document.getElementById('importeNeto').innerText = precioFinal;
        alert(precioFinal);
        return precioFinal;
    }

    if(categoria.value == 2){
        var precioFinal = ((precio * cantidadEntradas.value)*0.50);
        alert(precioFinal);
        return precioFinal;
    }

    if(categoria.value == 3){
        var precioFinal = ((precio * cantidadEntradas.value)*0.85);
        alert(precioFinal);
        return precioFinal;
    }

    /*function calcularPrecio(){
    let resultado = precio * cantidadEntradas.value;
    alert(resultado);
    return resultado;
    }*/
}




