const valorEntrada = 200;
const descEstudiante = 80;
const descTrainee = 50;
const descJunior = 15;

let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let cantidadEntradas = document.getElementById('cantidad');
let categoria = document.getElementById('categoria');
let errorCampoVacio = document.getElementById('messageError');
let errorEmailInvalido = document.getElementById('messageErrorEmail');
let errorCantidad = document.getElementById('messageErrorCantidad');
let errorCategoria = document.getElementById('messageErrorCategoria');
let importeText = document.getElementById('importeNeto');

var btnResumen = document.getElementById('btnResumen');
btnResumen.addEventListener('click', function(){
    calcularValorCompra();
})

var btnBorrar = document.getElementById('btnBorrar');
btnBorrar.addEventListener('click', function(){
    limpiarCampos();
})

function calcularValorCompra(){

    if(nombre.value === ""){
        alert("Por favor escriba su nombre!");
        nombre.focus();
        nombre.classList.add("is-invalid");
        mostrarMessageError(errorCampoVacio);
        return;
    }

    if(apellido.value === ""){
        alert("Por favor escriba su apellido!");
        apellido.focus();
        apellido.classList.add("is-invalid");
        mostrarMessageError(errorCampoVacio);
        return;
    }

    if(correo.value === ""){
        alert("Por favor escriba su correo!");
        correo.focus();
        correo.classList.add("is-invalid");
        mostrarMessageError(errorCampoVacio);
        return;
    }

    let correoRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(!correoRegex.test(correo.value)){
        alert('Email invalido! Reintente');
        correo.classList.add("is-invalid");
        correo.focus();
        mostrarMessageError(errorEmailInvalido);
        return;
    }

    ocultarMessageError(errorEmailInvalido);

    if(cantidad.value === "" || cantidad.value === '0'){
        alert('Debe ingresar una cantidad valida!');
        correo.classList.add("is-invalid");
        correo.focus();
        mostrarMessageError(errorCantidad);
        return;
    }

    ocultarMessageError(errorCampoVacio);
    ocultarMessageError(errorCantidad);

    if(categoria.value === ""){
        alert('Debe seleccionar una categoria!');
        correo.classList.add("is-invalid");
        correo.focus();
        mostrarMessageError(errorCategoria);
        return;
    }

    ocultarMessageError(errorCategoria);
    calcularImporteFinal(categoria);
    
}

function mostrarMessageError(message){
    message.style.display = "flex";
}

function ocultarMessageError(message){
    message.style.display = "none";
}

function calcularImporteFinal(categoria){
    let importeTotal = (cantidadEntradas.value) * valorEntrada;

    switch(categoria.value){
        case '0':
            importeText.innerHTML = importeTotal;
        break;

        case '1':
            importeTotal -= (descEstudiante / 100 * importeTotal);
            importeText.innerHTML = importeTotal;
        break;

        case '2':
            importeTotal -= (descTrainee / 100 * importeTotal);
            importeText.innerHTML = importeTotal;
        break;

        case '3':
            importeTotal -= (descJunior / 100 * importeTotal);
            importeText.innerHTML = importeTotal;
        break;

        default:
            importeText.innerHTML = '0,00'
        break;
    }
}

function limpiarCampos(){
    nombre.value = "";
    nombre.style.borderColor = "initial";
    apellido.value = "";
    apellido.style.borderColor= "initial";
    correo.value = "";
    correo.style.borderColor= "initial";
    cantidadEntradas.value = "";
    cantidadEntradas.style.borderColor= "initial";
    categoria.value = 0;
    categoria.style.borderColor= "initial";
    errorCampoVacio.style.display = "none";

    ocultarMessageError(errorCategoria);
    ocultarMessageError(errorCampoVacio);
    ocultarMessageError(errorCantidad);
    ocultarMessageError(errorEmailInvalido);
}