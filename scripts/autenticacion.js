function mensajeError(code) {
    let mensaje = '';

    switch (code) {
        case 'auth/wrong-password':
            mensaje = 'Su contraseña no es correcta';
            break;

        case 'auth/user-not-found':
            mensaje = 'Usuario no encontrado';
            break;

        case 'auth/weak-password':
            mensaje = 'Contraseña debil';
            break;
        case 'auth/email-already-in-use':
            mensaje = 'ese correo ya esta en uso';
            break;
        default:
            mensaje = 'Ocurrio un error:\n' + code;
    }

    return mensaje;
}

const btnSalir = document.getElementById('btnSalir');

btnSalir.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
        loginCard.style.visibility = "visible";
        signinCard.style.visibility = "visible";
    });
});

const formRegistro = document.getElementById('formRegistro');
const btnRegistro = document.getElementById('btnRegistro');
const signinCard = document.getElementById('signin');

btnRegistro.addEventListener('click', (e) => {
    e.preventDefault();

    const correo = formRegistro['inpCorreo2'].value;
    const password = formRegistro['inpPass2'].value;

    auth.createUserWithEmailAndPassword(correo, password).then(cred => {
        console.log('usuario creado');
    }).then(() => {
        signinCard.style.visibility = "hidden";
        loginCard.style.visibility = "hidden";
        formRegistro.reset();
        formRegistro.querySelector('.error').innerHTML = "";
    }).catch(error => {
        formRegistro.querySelector('.error').innerHTML = mensajeError(error.code);
    });

});

const formIngreso = document.getElementById('formIngreso');
const btnIngreso = document.getElementById('btnIngreso');
const loginCard = document.getElementById('login');

btnIngreso.addEventListener('click', (e) => {
    e.preventDefault();

    const correo = formIngreso['inpCorreo1'].value;
    const password = formIngreso['inpPass1'].value;

    auth.signInWithEmailAndPassword(correo, password).then(cred => {
        console.log('usuario ingresado');
    }).then(()=> {
        signinCard.style.visibility = "hidden";
        loginCard.style.visibility = "hidden";
        formIngreso.reset();
        formIngreso.querySelector('.error').innerHTML = '';
    }).catch(()=>{
        formIngreso.querySelector('.error').innerHTML = mensajeError(error.code);
    });
});