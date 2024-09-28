import { getDataUser } from '../src/modules/users/getDataUser.js';
import { usersURL } from '../src/modules/constants.js';

document.addEventListener("DOMContentLoaded", async () => {
    // Carga de datos y renderizado de la lista de mascotas
    //const pets = await getPets();
    const dataUsers = await getDataUser(usersURL);
    console.log(dataUsers);
});


function toggleHeart(button) {
    const heartIcon = button.querySelector('i');
    console.log(heartIcon);
    heartIcon.classList.toggle('fa-regular');
    heartIcon.classList.toggle('fa-solid')
}


// Seleccionamos los botones y sidebars en un objeto para facilitar el acceso
const elements = {
    buttons: {
        shop: document.getElementById('shop'),
        home: document.getElementById('home'),
        add: document.getElementById('add'),
        favorite: document.getElementById('favorite'),
        profile: document.getElementById('profile')
    },
    sidebars: {
        shopping: document.getElementById('shopping-sidebar'),
        favorite: document.getElementById('favorite-sidebar'),
        profile: document.getElementById('profile-sidebar'),
        addPet: document.getElementById('add-pet-sidebar'),
    }
};

const titleAdd = document.getElementById('title-add');

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

elements.buttons.profile.addEventListener('click', () => {
    showSidebar(elements.sidebars.profile, elements.buttons.profile);
    titleAdd.classList.remove('top-[16%]');
    titleAdd.classList.add('top-[35%]');
});

elements.buttons.add.addEventListener('click', () => {
    showSidebar(elements.sidebars.addPet, elements.buttons.add);
    titleAdd.classList.remove('top-[35%]');
    titleAdd.classList.add('top-[16%]');
});

