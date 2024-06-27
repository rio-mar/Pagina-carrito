import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./app/firebase.js";

import "./app/firebase.js";
import "./signupForm.js";
import "./signinForm.js";
import "./app/googleLogin.js";



//okey, la pagina debe tener opciones solo para personas registradas, por ejemplo añadir cosas a la lista. Que sino estas registrado al darle a la opcion te lleve a el login. Y despues de registrarte poder realizar la accion.
// para cuando no estes registrado 
// const loggedOut = document.querySelectorAll('.logged-out')
// para cuando estes registrado
// const loggedIn = document.querySelectorAll('.logged-in')


// onAuthStateChanged(auth, async (user) => {
//     const loginCheck = user => {
//         if (user) {
            
//         } else{
    
//         }
//     }
// }) 



// const loginCheck = user => {
//     if (user) {
        
//     } else{

//     }
// }



