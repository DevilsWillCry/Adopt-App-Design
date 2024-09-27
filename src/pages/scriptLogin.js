import { getDataUser } from "../modules/getDataUser.js";
import { usersURL } from "../modules/constants.js";

const loginForm = document.getElementById('login-form');
const spanRegister = document.getElementById('register-span');


const RegisteForm = document.getElementById('register-form');
const spanLogin = document.getElementById('login-span');

const buttonRegister = document.getElementById('register-button');
const buttonLogin = document.getElementById('login-button');

loginForm.addEventListener('submit', async () => {
    console.log("Login button clicked");
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;
    // TODO: Validate inputs and make API call to login user
    // Example: fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    await getDataUser(usersURL);
    
});

spanRegister.addEventListener('click', () => {
    loginForm.classList.add('top-0');
    loginForm.classList.add('-translate-y-full');

    RegisteForm.classList.remove('bottom-0');
    RegisteForm.classList.remove('translate-y-full');
});

spanLogin.addEventListener('click', () => {
    loginForm.classList.remove('top-0');
    loginForm.classList.remove('-translate-y-full');  

    RegisteForm.classList.add('bottom-0');
    RegisteForm.classList.add('translate-y-full');
});