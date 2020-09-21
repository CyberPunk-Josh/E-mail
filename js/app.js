//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const formulario = document.getElementById('enviar-mail');
const loaders = document.getElementById('loaders');
const resetBtn = document.getElementById('resetBtn');





//Event listeners
eventListener();
function eventListener(){
    //Inhabilitar el boton de "enviar" al cargar la pagina
    document.addEventListener('DOMContentLoaded', btnEnviar);

    //Validar los campos del formulario:
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Boton de enviar en el submit:
    formulario.addEventListener('submit', enviarFormulario);

    //Boton de reset:
    resetBtn.addEventListener('click', reset);
}




//Funciones

//Deshabilitar el boton de enviar:

function btnEnviar(e){
    e.preventDefault();
    let enviar = document.getElementById('enviar');
    enviar.disabled = true;
}

//Validacion del formulario:
function validarCampo(){
    //validar la logitud del campo:
    validarLongitud(this);
    //Validacion del email:
    if(this.type === 'email'){
        validarEmail(this);
    }
    //Habilitar el boton de "enviar"
    if (email.value !== "" && asunto.value !== "" && mensaje.value !== ""){
        let enviar = document.getElementById('enviar');
        enviar.disabled = false;
    }
    
}

//Validacion de la longitud:
function validarLongitud(campo){
    if (campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo){
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

//Enviar formulario y cargar los gif's:
function enviarFormulario(e){
    e.preventDefault();
    //Habilitar el gif de spinner:
    let spinner = document.getElementById('spinner');
    spinner.style.display = 'block'
    //Habilitar el gif de "enviado":
    setTimeout(function(){
        spinner.style.display = 'none'
        let enviar = document.createElement('img')
        enviar.src ='img/mail.gif';
        enviar.style.display = 'block';
        //Añadiendo el gif desde el DOM:
        loaders.appendChild(enviar);
        //Deshabilitando el gif "enviar":
        setTimeout(function(){
            enviar.style.display = 'none';
            formulario.reset();
        }, 5000)
    }, 4000)
}

//Boton de reset:
function reset(e){
    e.preventDefault();
    formulario.reset();
}