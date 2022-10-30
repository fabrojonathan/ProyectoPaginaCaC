const valorEntrada = 200;
const descEstudiante = 80;
const descTrainee = 50;
const descJunior = 15;

let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let cantidad = document.getElementById('cantidad');
let categoria = document.getElementById('categoria');
let pError = document.getElementById('messageError');
let importeTotal = document.getElementById('importeNeto');

var btnResumen = document.getElementById('btnResumen');
btnResumen.addEventListener('click', function(){
    validarCampos(nombre);
    validarCampos(apellido);
    validarCampos(correo);
    validarCampos(cantidad);
    importeTotal.value = calcularImporteFinal();
});

var btnBorrar = document.getElementById('btnBorrar');
btnBorrar.addEventListener('click', function(){
    limpiarCampos();})

function validarCampos(idAtributo){
    if(idAtributo.value === ""){
        idAtributo.classList.add("is-invalid");
        idAtributo.style.borderColor= "red";
        pError.style.display = "flex";
        //idAtributo.focus();
    }
    else{
        pError.style.display = "none";
        idAtributo.style.borderColor= "unset";
    }
}

function calcularImporteFinal(categoria){
    switch(categoria.value){
        case 1:
            return ((cantidad * valorEntrada) * descEstudiante)/100;
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
    cantidad.value = "";
    cantidad.style.borderColor= "initial";
    categoria.value = 0;
    categoria.style.borderColor= "initial";
}