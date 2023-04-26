// const inputNacimiento = document.querySelector("#birth");

// inputNacimiento.addEventListener("blur", (evento) =>{
//     validarNacimiento(evento.target);
// });
export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error"),innerHtml = ''
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error"),innerHtml = mostrarMensajeError(tipoDeInput,input)
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]; 

const mensajesDeError = {
    nombre:{
        valueMissing: "Este campo no puede estar vacio"
    },
    email:{
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    nacimiento:{
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad"
    }

}

const validadores ={
    nacimiento: input => validarNacimiento(input),
};

function mostrarMensajeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeErrores.forEach( error =>{
        if(input.validity[error]){
            console.log
        }
    })

    return mensaje
}

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje ='';

    if(!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad";
    }                                  

    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFecha = new Date(fecha.getUTCFullYear()+18, 
                                    fecha.getUTCMonth(), 
                                    fecha.getUTCDate());
    return diferenciaFecha <= fechaActual;
}
