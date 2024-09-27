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

elements.buttons.profile.addEventListener('click', () => {
    showSidebar(elements.sidebars.profile, elements.buttons.profile);
});

elements.buttons.add.addEventListener('click', () => {
    showSidebar(elements.sidebars.addPet, elements.buttons.add);
});
