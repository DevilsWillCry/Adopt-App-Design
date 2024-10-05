import { petsURL, usersURL, productsURL } from '../src/modules/constants.js';

import { getDataUser } from '../src/modules/users/getDataUser.js';
import { postDataUser } from '../src/modules/users/postDataUser.js';
import { patchDataUser } from './modules/users/patchDataUser.js';

import { getDataPets }  from '../src/modules/pets/getDataPets.js';
import { postDataPets } from '../src/modules/pets/postDataPets.js';

import { getDataProducts } from './modules/products/getDataProducts.js';

import { renderProfile } from './modules/users/renderProfile.js';
import { renderPets } from './modules/pets/renderPets.js';
import { renderProducts } from './modules/products/renderProducts.js';
import { renderImageHome } from './modules/users/renderImageHome.js';
import { renderFavorites } from './modules/users/renderFavorites.js';
import { renderCart } from './modules/shoppingCart/renderCart.js';
import { renderCrudProduct } from './modules/crud/renderCrudProduct.js';
import { renderCrudPets} from './modules/crud/renderCrudPets.js';

// Variables globales
const titleAdd = document.getElementById('title-add');
const containerImageHome = document.getElementById('container-image-home');
const containerInfo = document.getElementById('container-info');
const profileImage = document.getElementById('profile-image-home');
const favoriteSection = document.getElementById('favorites-section');
const shoppingSection = document.getElementById('shopping-section');


document.addEventListener("DOMContentLoaded", async () => {
    //Verificar si hay cuenta activa en localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentData'));
    if (!currentUser) {
        window.location.href = "./pages/login-register.html";
    }
    try {
        const usersData = await getDataUser(usersURL);
        const petData = await getDataPets(petsURL);
        const productData = await getDataProducts(productsURL);

        renderPets(containerInfo,petData, usersData, currentUser)
        renderProducts(containerInfo, productData, usersData, currentUser)
        
        const updateCurrentUser = usersData.find(user => user.id === currentUser.id)

        renderImageHome(profileImage, updateCurrentUser)
        renderCart(shoppingSection, petData, productData, usersData, currentUser)
        renderFavorites(favoriteSection, petData, productData, usersData, currentUser)
        // TEMPORAL ///
        renderProfile( elements.sidebars.profile, usersData.find(user => user.id === currentUser.id));
        // TEMPORAL //
        // Verifica si los datos fueron cargados correctamente
        if (!usersData || !petData || !productData || !currentUser) {
            console.error("Error: Datos no cargados correctamente");
            return;
        }

    } catch (error) {
        console.error("Error al cargar datos:", error);
    }
});


window.addEventListener('load', () => {
    // Obtener la posición guardada del scroll
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    // Si existe una posición guardada, restaurarla
    if (savedScrollPosition !== null) {        
        window.scroll(0, 700);
        // Limpiar el localStorage para no afectar futuras recargas
        sessionStorage.removeItem('scrollPosition');
    }
});

const elements = {
    buttons: {
        shop: document.getElementById('shop'),
        home: document.getElementById('home'),
        add: document.getElementById('add'),
        favorite: document.getElementById('favorite'),
        profile: document.getElementById('profile'),
    },
    sidebars: {
        shopping: document.getElementById('shopping-sidebar'),
        favorite: document.getElementById('favorite-sidebar'),
        profile: document.getElementById('profile-sidebar'),
        addPet: document.getElementById('add-pet-sidebar'),
    }
};


// Inicializamos el botón de inicio con la clase 'text-yellowDesign'
elements.buttons.home.classList.add('text-yellowDesign');



// Función para ocultar todos los sidebars y desactivar todos los botones
function hideAllSidebars() {
    Object.values(elements.sidebars).forEach(sidebar => sidebar.classList.remove('translate-x-0'));
    Object.values(elements.buttons).forEach(button => button.classList.remove('text-yellowDesign'));
}

// Función para mostrar un sidebar específico y activar el botón correspondiente
function showSidebar(sidebar, button) {
    hideAllSidebars(); // Ocultamos todos los sidebars y desactivamos todos los botones
    sidebar.classList.add('translate-x-0'); // Mostramos el sidebar específico
    button.classList.add('text-yellowDesign'); // Activamos el botón correspondiente
}

// Añadimos los eventos a cada botón
elements.buttons.shop.addEventListener('click', () => {
    showSidebar(elements.sidebars.shopping, elements.buttons.shop);
});

elements.buttons.home.addEventListener('click', () => {
    hideAllSidebars(); // Ocultamos todos los sidebars
    elements.buttons.home.classList.add('text-yellowDesign'); // Activamos solo el botón de inicio
});

elements.buttons.favorite.addEventListener('click', () => {
    showSidebar(elements.sidebars.favorite, elements.buttons.favorite);
});

elements.buttons.profile.addEventListener('click', async () => {
    showSidebar(elements.sidebars.profile, elements.buttons.profile);
});


elements.buttons.add.addEventListener('click', async () => {
    showSidebar(elements.sidebars.addPet, elements.buttons.add);
});


profileImage.addEventListener('click', async() => {
    showSidebar(elements.sidebars.profile, elements.buttons.profile);
    const currentUser =JSON.parse(localStorage.getItem('currentData')) ;
    renderProfile( elements.sidebars.profile, usersData.find(user => user.id === currentUser.id));
});

// Selección de los elementos
const openModalProduct= document.getElementById('openModalProduct');
const openModalPet= document.getElementById('openModalPet');
const crudSection = document.getElementById('crud-section');

const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

// Abrir modal
openModalProduct.addEventListener('click', async (e) => {
    e.preventDefault();
    const currentUser  = JSON.parse(localStorage.getItem('currentData'))
    const usersData = await getDataUser(usersURL);

    if((openModalProduct.querySelector('#product-name').checked)){
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        openModalPet.querySelector('#pet-name').checked = false;
        renderCrudProduct(crudSection)
        const formProduct = document.getElementById('form-product');
        formProduct.addEventListener('submit', async () => {
            // Obtener los valores del formulario
            const productName = document.getElementById('product-name').value;
            const productDescription = document.getElementById('product-description').value;
            const productAgeRange = document.getElementById('product-ageRange').value;
            const productTypeFood = document.getElementById('typeFood').value;
            const productPrice = document.getElementById('product-price').value;

            // Validar los valores
            if (!productName ||!productAgeRange ||!productTypeFood ||!productPrice) {
                alert('Todos los campos son obligatorios');
                return;
            }

            const userMyPet = usersData.find(user => 
                user.id == currentUser.id
            );
            
            const myProductList = userMyPet.myProducts;
            const idProduct = crypto.randomUUID();

            myProductList.push({id:idProduct});
            const newPet = {
                id: idProduct,
                images:[],
                name: productName,
                description: productDescription,
                ageRange: productAgeRange,
                typeFood: productTypeFood,
                productPrice: productPrice,
            }
            try {
                await patchDataUser(usersURL, currentUser.id, {myProducts: myProductList})
                await postDataPets(productsURL, newPet)
            } catch (error) {
                alert(error.message);
            }
            //message to creation succesfull
            alert('Producto Creado con exito')
        });
    }
});
openModalPet.addEventListener('click', async (e) => {
    e.preventDefault();
    const currentUser  = JSON.parse(localStorage.getItem('currentData'))
    const usersData = await getDataUser(usersURL);

    if((openModalPet.querySelector('#pet-name').checked)){
        openModalProduct.querySelector('#product-name').checked = false;
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        renderCrudPets(crudSection);
        
        const formPet = document.getElementById('form-pet');
        formPet.addEventListener('submit', async () => {
            // Obtener los valores del formulario
            const petName = document.getElementById('name').value;
            const petGender = document.getElementById('gender').value;
            const petBreed = document.getElementById('breed').value;
            const petEyeColor  = document.getElementById('eyeColor').value;
            const petPersonality =  document.getElementById('personality').value;
            const petMedicalInfo = document.getElementById('medicalInfo').value;
            const petBiography = document.getElementById('biography').value;
            const petAbout = document.getElementById('aboutPet').value;
            const petAdoptionPrice = document.getElementById('adoptionPrice').value;

            // Validar los valores
            if (!petName ||!petGender ||!petBreed ||!petEyeColor ||!petPersonality ||!petMedicalInfo ||!petBiography ||!petAbout ||!petAdoptionPrice) {
                alert('Todos los campos son obligatorios');
                return;
            }

            const userMyPet = usersData.find(user => 
                user.id == currentUser.id
            );
            
            const myPetList = userMyPet.myPets;
            const idPet = crypto.randomUUID();

            myPetList.push({id:idPet});
            const newPet = {
                id: idPet,
                images:[],
                name: petName,
                gender: petGender,
                breed: petBreed,
                eyeColor: petEyeColor,
                personality: petPersonality,
                medicalInfo: petMedicalInfo,
                biography: petBiography,
                aboutPet: petAbout,
                adoptionPrice: petAdoptionPrice,
            }
            try {
                await patchDataUser(usersURL, currentUser.id, {myPets: myPetList})
                await postDataPets(petsURL, newPet)
            } catch (error) {
                alert(error.message);
            }
            //message to creation succesfull
            alert('Producto Creado con exito')
        });
    }
});


// Cerrar modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    
});



// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
});
