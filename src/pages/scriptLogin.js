import { getDataUser } from "../modules/users/getDataUser.js";
import { usersURL } from "../modules/constants.js";
import { postDataUser } from "../modules/users/postDataUser.js";

const loginForm = document.getElementById('login-form');
const spanRegister = document.getElementById('register-span');


const registerForm = document.getElementById('register-form');
const spanLogin = document.getElementById('login-span');

const buttonRegister = document.getElementById('register-button');
const buttonLogin = document.getElementById('login-button');
let usersData = [];

document.addEventListener('DOMContentLoaded', async () => {
    return usersData = await getDataUser(usersURL);
})

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;
    // TODO: Validate inputs and make API call to login user
    //usersData = getData(usersURL) -> Fetch
    const userLogin = usersData.find(user => user.email === email);
    
    // TODO: Check if user exists and password is correct
    if (!userLogin || userLogin.password !== password) {
        alert("Invalid email or password");
        document.getElementById('form-container-login').reset();
    } else {
        alert("Login successful");
        localStorage.setItem('currentData', JSON.stringify(userLogin));
        document.getElementById('form-container-login').reset();
        window.location.href = "../home.html";
    }
    document.getElementById('form-container-login').reset();

    return false;
});

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Register button clicked");
    const username = document.getElementById('username-register').value;
    const email = document.getElementById('email-register').value;
    const password = document.getElementById('password-register').value;
    const confirmPassword = document.getElementById('confirm-password-register').value;
    const phone = document.getElementById('phone-register').value;
    // TODO: Validate inputs and make API call to register user
    const newUser = {
        id : crypto.randomUUID(),
        username,
        email,
        password,
        confirmPassword,
        phone,
        favorites: [],
        cart: [],
        myPets: [],
        profileImage: ""
    };
    //usersData = getData(usersURL) -> Fetch
    // TODO: Check if email already exists
    const checkUser = usersData.find(user => user.email === newUser.email && user.password === newUser.password);
    if (checkUser) {
        alert("Email already exists");
        document.getElementById('form-container-register').reset();
    } else {
        // TODO: Check if password and confirm password match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
        }else {
            await postDataUser(usersURL, newUser)
            alert("User registered successfully");
            document.getElementById('form-container-register').reset();
            window.location.href = "./login-register.html";
        }
    }
    return false;
});

spanRegister.addEventListener('click', () => {
    loginForm.classList.add('top-0');
    loginForm.classList.add('-translate-y-full');

    registerForm.classList.remove('bottom-0');
    registerForm.classList.remove('translate-y-full');
});

spanLogin.addEventListener('click', () => {
    loginForm.classList.remove('top-0');
    loginForm.classList.remove('-translate-y-full');  

    registerForm.classList.add('bottom-0');
    registerForm.classList.add('translate-y-full');
});