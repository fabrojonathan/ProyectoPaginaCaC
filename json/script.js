const valorEntrada = 200;
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let cantidad = document.getElementById('cantidad');
let categoria = document.getElementById('categoria');
let pError = document.getElementById('messageError');
let importeTotal = 0;

var btnResumen = document.getElementById('btnResumen');
btnResumen.addEventListener('click', function(){
    validarCampos(nombre);
    validarCampos(apellido);
    validarCampos(correo);
    validarCampos(cantidad);
});

function validarCampos( idAtributo){
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