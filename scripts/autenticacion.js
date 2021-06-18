auth.onAuthStateChanged(user => {

    if (user) {
        console.log('Usuario entró');
        db.collection('hardcodeusers').onSnapshot(snapshot => {
            obtienerDonadores(snapshot.docs);
        }, err => {
            console.log(err.message);
        });
    }
    else {
        console.log('Usuario saliendo');
        obtienerDonadores([]);
    }
});

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

// cerrar sesion
const btnSalir = document.getElementById('btnSalir');
const content = document.getElementById('content');

btnSalir.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
        loginCard.style.visibility = "visible";
        signinCard.style.visibility = "hidden";
        content.style.visibility = "hidden";
    });
});

// registrarse
const formRegistro = document.getElementById('formRegistro');
const btnRegistro = document.getElementById('btnRegistro');
const signinCard = document.getElementById('signin');
var user;

btnRegistro.addEventListener('click', (e) => {
    e.preventDefault();

    const correo = formRegistro['inpCorreo2'].value;
    const password = formRegistro['inpPass2'].value;

    auth.createUserWithEmailAndPassword(correo, password).then(cred => {
        getUser(cred.user.uid);
    }).then(() => {
        signinCard.style.visibility = "hidden";
        loginCard.style.visibility = "hidden";
        content.style.visibility = "visible";
        formRegistro.reset();
        formRegistro.querySelector('.error').innerHTML = "";
    }).catch(error => {
        formRegistro.querySelector('.error').innerHTML = mensajeError(error.code);
    });

});

// ingresar
const formIngreso = document.getElementById('formIngreso');
const btnIngreso = document.getElementById('btnIngreso');
const loginCard = document.getElementById('login');

btnIngreso.addEventListener('click', (e) => {
    e.preventDefault();

    const correo = formIngreso['inpCorreo1'].value;
    const password = formIngreso['inpPass1'].value;

    auth.signInWithEmailAndPassword(correo, password).then(cred => {
    }).then(() => {
        signinCard.style.visibility = "hidden";
        loginCard.style.visibility = "hidden";
        content.style.visibility = "visible";
        formIngreso.reset();
        formIngreso.querySelector('.error').innerHTML = '';
    }).catch((error) => {
        formIngreso.querySelector('.error').innerHTML = mensajeError(error.code);
    });
});

// configuracion 
const configurar = (user) => {
    if (user) {
        db.collection('usuario').doc(user.uid).get.then(doc => {

        });
    }
}

const formInfo = document.getElementById("formInfo");

formInfo.addEventListener('submit', async (e) => {
    e.preventDefault();

    await db.collection('usuarios').doc(getUser()).set({
        nombreUsuario: formInfo['floatingInputName'].value,
        correo: formInfo['floatingInputEmail'].value,
        edad: formInfo['floatingInputEdad'].value,
        tipoSangre: formInfo['floatingInputSangre'].value,
        ubicacion: formInfo['floatingInputUbicacion'].value
    });
});

const lista = document.getElementById("lista");

const obtienerDonadores = (data) => {
    if(data.legth) {
        let html = '';
        data.forEach(doc => {
            const donador = doc.data();
            const columna = `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 m-2">
                <div class="card" style="width: 18rem;">
                    <img src="./img/${donador.imagen}.jpeg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${donador.Nombre}</h5>
                        <p>Tipo de sangre: ${donador.TipoSangre}</p>
                        <p>Ubicación: ${donador.Ubicacion}</p>
                        <button class="btn btn-primary">
                            Solicitar donador
                        </button>
                    </div>
                </div>
            </div>
            `;

        html += columna;
        });
        lista.innerHTML = html;
    }
}