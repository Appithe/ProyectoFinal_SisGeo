const logincard = document.getElementById("login");
const signincard = document.getElementById("signin");

const crearCuenta = document.getElementById("crearCuenta");
const iniciaSesion = document.getElementById("iniciaSesion");

const ojo1 = document.getElementById("ojo1");
const ojo2 = document.getElementById("ojo2");
const ojo3 = document.getElementById("ojo3");

const btnojo1 = document.getElementById("btnojo1");
const btnojo2 = document.getElementById("btnojo2");
const btnojo3 = document.getElementById("btnojo3");

const inpPass1 = document.getElementById("inpPass1");
const inpPass2 = document.getElementById("inpPass2");
const inpPass3 = document.getElementById("inpPass3");


crearCuenta.addEventListener('click', () => {
    logincard.style.visibility = 'hidden';
    signincard.style.visibility = 'visible';
});

iniciaSesion.addEventListener('click', () => {
    logincard.style.visibility = 'visible';
    signincard.style.visibility = 'hidden';
});

var visible1 = false;
btnojo1.addEventListener('click', () => {
    ojo1.className = "";
    if (visible1) {
        ojo1.className = "bi bi-eye-fill";
        inpPass1.type = "password";

        console.log('ocultar');
        visible1 = false;
    } else {
        ojo1.className = "bi bi-eye-slash-fill";
        inpPass1.type = "text";

        console.log('mostrar');
        visible1 = true;
    }
});

var visible2 = false;
btnojo2.addEventListener('click', () => {
    ojo2.className = "";
    if (visible2) {
        ojo2.className = "bi bi-eye-fill";
        inpPass2.type = "password";

        console.log('ocultar');
        visible2 = false;
    } else {
        ojo2.className = "bi bi-eye-slash-fill";
        inpPass2.type = "text";

        console.log('mostrar');
        visible2 = true;
    }
});

var visible3 = false;
btnojo3.addEventListener('click', () => {
    ojo3.className = "";
    if (visible3) {
        ojo3.className = "bi bi-eye-fill";
        inpPass3.type = "password";

        visible3 = false;
    } else {
        ojo3.className = "bi bi-eye-slash-fill";
        inpPass3.type = "text";

        visible3 = true;
    }
});
