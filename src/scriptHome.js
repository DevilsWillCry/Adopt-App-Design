import { getDataUser } from '../src/modules/users/getDataUser.js';
import { petsURL, usersURL } from '../src/modules/constants.js';
import { renderProfile } from './modules/users/renderProfile.js';
import { getDataPets }  from '../src/modules/pets/getDataPets.js';
import { renderPets } from './modules/pets/renderPets.js';
import { renderImageHome } from './modules/users/renderImageHome.js';
import { renderFavorites } from './modules/users/renderFavorites.js';

// Variables globales
let usersData, petData;



const titleAdd = document.getElementById('title-add');
const containerImageHome = document.getElementById('container-image-home');
const containerInfo = document.getElementById('container-info');
const profileImage = document.getElementById('profile-image-home');
const favoriteSection = document.getElementById('favorites-section');

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const currentUser  = JSON.parse(localStorage.getItem('currentData'))
        usersData = await getDataUser(usersURL);
        petData = await getDataPets(petsURL);
        renderPets(containerInfo,petData, usersData, currentUser)
        renderImageHome(profileImage, currentUser)
        renderFavorites(favoriteSection, petData, usersData, currentUser)
        // TEMPORAL ///
        renderProfile( elements.sidebars.profile, usersData.find(user => user.id === currentUser.id));
        // TEMPORAL //
        // Verifica si los datos fueron cargados correctamente
        if (!usersData || !petData) {
            console.error("Error: Datos no cargados correctamente");
            return;
        }

    } catch (error) {
        console.error("Error al cargar datos:", error);
    }
});

// buttonHearth.addEventListener("click",  () => {
//     const favIcon = document.getElementById("1")
//     console.log(favIcon)
// });

// Seleccionamos los botones y sidebars en un objeto para facilitar el acceso
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
    titleAdd.classList.remove('top-[16%]');
    titleAdd.classList.add('top-[35%]');
});

elements.buttons.home.addEventListener('click', () => {
    hideAllSidebars(); // Ocultamos todos los sidebars
    elements.buttons.home.classList.add('text-yellowDesign'); // Activamos solo el botón de inicio
    titleAdd.classList.remove('top-[16%]');
    titleAdd.classList.add('top-[35%]');
});

elements.buttons.favorite.addEventListener('click', () => {
    showSidebar(elements.sidebars.favorite, elements.buttons.favorite);
    titleAdd.classList.remove('top-[16%]');
    titleAdd.classList.add('top-[35%]');
});

elements.buttons.profile.addEventListener('click', async () => {
    showSidebar(elements.sidebars.profile, elements.buttons.profile);
    const currentUser =JSON.parse(localStorage.getItem('currentData')) ;
    renderProfile( elements.sidebars.profile, usersData.find(user => user.id === currentUser.id));
    titleAdd.classList.remove('top-[16%]');
    titleAdd.classList.add('top-[35%]');
});

elements.buttons.add.addEventListener('click', () => {
    showSidebar(elements.sidebars.addPet, elements.buttons.add);
    titleAdd.classList.remove('top-[35%]');
    titleAdd.classList.add('top-[16%]');
});



profileImage.addEventListener('click', async() => {
    showSidebar(elements.sidebars.profile, elements.buttons.profile);
    const currentUser =JSON.parse(localStorage.getItem('currentData')) ;
    renderProfile( elements.sidebars.profile, usersData.find(user => user.id === currentUser.id));
    titleAdd.classList.remove('top-[16%]');
    titleAdd.classList.add('top-[35%]');
});