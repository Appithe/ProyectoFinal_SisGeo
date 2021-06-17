
var firebaseConfig = {
    apiKey: "AIzaSyA2gvmUyeNpNzgel7lDK4xnfuFg2PnDy1A",
    authDomain: "proyectofinalsisgeo.firebaseapp.com",
    projectId: "proyectofinalsisgeo",
    storageBucket: "proyectofinalsisgeo.appspot.com",
    messagingSenderId: "768693328097",
    appId: "1:768693328097:web:c0c6841c42e27d25ae7fa0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();
