import { petsURL, usersURL } from "../constants.js";
import { renderPets } from "../pets/renderPets.js";
import { patchDataUser } from "./patchDataUser.js";
import { getDataPets }  from '../pets/getDataPets.js';
import { getDataUser } from "./getDataUser.js";
import { renderPetsProfile } from "./renderPetsProfile.js";

export const renderProfile = async (container, obj ) => {
    if ((obj == {})) {
        console.error("Expected an object, but got:", obj);
        return;
    }
    const image = await obj.profileImage
    container.innerHTML = '';
    container.innerHTML += `
    <!-- sideBar para cerrar sesión-->
    <div id="logout-sidebar" class="fixed top-0 left-2/4 -translate-x-2/4 transform transition-all w-[89%]  h-auto p-3  rounded-2xl bg-black  cursor-pointer z-0 hover:invert">
        <h1 class="text-white">Log Out</h1>
    </div>
    <div class="card-body flex flex-col flex-nowrap flex-shrink-0 justify-items-center items-center">
        <div id="footer-profile" class="flex flex-row w-11/12 h-[20%] font-bold justify-between items-center p-4 mb-4 align-middle shadow-2xl rounded-2xl bg-whiteMainDesign z-30"> 
            <h1 class= "text-black text-xl p-2"> profile </h1>
            <i id="gear-icon" class="fa-solid fa-gear text-black text-xl p-2 transform-gpu transition-all hover:rotate-90 cursor-pointer"></i>
        </div>
        <div class="flex flex-col w-11/12 lg:w-[50%] h-2/4 bg-yellowDesign p-2 mb-4 rounded-3xl shadow-xl justify-center items-center content-center align-middle">
            <img id="profile-image" src="${image}" class="card-img-top w-3/6 h-1/4 rounded-full gap-3 p-2 hover:animate-wiggle" alt="Profile picture">
            <h1 class="font-bold text-xl">${obj.username}</h1>
        </div>
        <div class="flex flex-col flex-nowrap text-start mb-3 p-4 gap-4 shadow-xl rounded-3xl  bg-slate-300 w-11/12 h-auto">
            <p class="card-text ml-[25%]"><i class="fa-solid fa-envelope"></i>  ${obj.email}</p> 
            <p class="card-text ml-[25%]"><i class="fa-solid fa-phone"></i> ${obj.phone}</p>
        </div>
        <div class="mt-10 justify-center items-center text-center">
            <h1 class="text-2xl font-bold shadow-xl rounded-2xl mb-4 bg-yellowDesign">My Pets</h1>
            <div id='my-pets-container' class="mb-20">
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div id="icon-modal" class="fixed inset-0   z-50 bg-gray-800 bg-opacity-75  hidden items-center justify-center">
        <div class="bg-white rounded-lg shadow-lg p-6 w-96 lg:w-[40%] ">
            <h2 class="text-lg font-bold mb-4">Selecciona un ícono</h2>
            <div class="grid grid-cols-3 gap-4 ">
                <img src="https://img.freepik.com/psd-gratis/3d-ilustracion-persona-cabello-rosado_23-2149436186.jpg?t=st=1727759089~exp=1727762689~hmac=0a237906f66d5b7b60414cea05ada95dcdf4529286e762cb7f74ec9186bf8afa&w=826">
                <img src="https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas-sol_23-2149436180.jpg?w=826&t=st=1727758397~exp=1727758997~hmac=71d282662354fc97bccb68c60a6a870e09b00005424796c22337077fad2e4cd4">
                <img src="https://img.freepik.com/psd-gratis/render-3d-personaje-avatar_23-2150611716.jpg?w=826&t=st=1727758424~exp=1727759024~hmac=6811fd533fd2f878ab72155123cc9768982150b33fa2cc3c419c537ecc614be2">
                <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=826&t=st=1727759233~exp=1727759833~hmac=320f48075585cee710835bc6a45deb89d882f03d807a7755e5052d3a1cd64e70">
                <img src= "https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas-sol_23-2149436188.jpg?w=826&t=st=1727758987~exp=1727759587~hmac=67383d1196194e6e92c28bf9acfde674bb56a100b6a9bac904978f313586b9f4">
                <img src="https://img.freepik.com/psd-gratis/ilustracion-3d-persona-camiseta-mangas_23-2149436202.jpg?t=st=1727759132~exp=1727762732~hmac=190432a17fea9acc96bbca090e37820f962603dfc1d48ecb6a8f6db6b82fe2e2&w=826">
                <img src="https://img.freepik.com/psd-gratis/ilustracion-3d-persona-pelo-punk-chaqueta_23-2149436198.jpg?t=st=1727759148~exp=1727762748~hmac=aa9c86fbaa118dbfbe44d229bd3325526bf37b8d99e93dcfc2eb4914331a692a&w=826">
                <img src="https://img.freepik.com/psd-gratis/ilustracion-3d-hombre-negocios-gafas_23-2149436194.jpg?t=st=1727759173~exp=1727762773~hmac=5d954731b8def54b80056d92dd8d97f83ec3d59ccc05253147fe7dc5990272c9&w=826">
                <img src="https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?t=st=1727759233~exp=1727759833~hmac=f5279fdbdebf9b93d61f0bad84b7b3b42fb7afa4843f90caa4d36cdcb01ecdcc">
            </div>
            <div class="flex justify-end mt-4">
                <button id="close-modal" class="bg-red-500 text-white p-3 rounded hover:bg-red-700">Cerrar</button>
            </div>
        </div>
    </div>
`;
    const profileImage = document.getElementById('profile-image')
    const selectionIcon = document.getElementById('icon-modal')
    const myPetsContainer = document.getElementById('my-pets-container')
    const buttonProfile = document.querySelector('#footer-sidebar #profile')

    
    buttonProfile.addEventListener('click', async () =>{
        const currentUser  = JSON.parse(localStorage.getItem('currentData'))
        const petsData = await getDataPets(petsURL)
        const usersData = await getDataUser(usersURL)
        console.log("HOLA- RenderProfile");
        
        const userFind =  usersData.find(user =>
            user.id === currentUser.id
        )
        // Extrae los id de las mascotas que pertenecen al usuario actual
        const myPetsIds = userFind.myPets.map(pet => pet.id); 

        // Filtra los datos de las mascotas que coinciden con los id en myPets
        const filteredPets = petsData.filter(pet => myPetsIds.includes(pet.id));

        renderPetsProfile(myPetsContainer, filteredPets ,[userFind])

    })
    profileImage.addEventListener('click', () => {
        selectionIcon.classList.remove('hidden');
        selectionIcon.classList.add('flex');
    });

    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('icon-modal').classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('icon-modal')) {
            selectionIcon.classList.add('hidden');
            selectionIcon.classList.remove('flex');
        }
    });
    
    // Manejar la selección de íconos
    document.querySelectorAll('#icon-modal img').forEach(icon => {
        icon.addEventListener('click', async (e) => {
            const currentUser  = JSON.parse(localStorage.getItem('currentData'))
            const selectedIcon = e.target.src;
            // Actualiza la imagen del perfil con el ícono seleccionado
            //document.getElementById('profile-image').src = `${selectedIcon}`;
            patchDataUser(usersURL, currentUser.id, {profileImage: `${selectedIcon}`})
            document.getElementById('icon-modal').classList.add('hidden');
            window.location.reload()
        });
    });

    const footerProfile = document.getElementById('footer-profile');
    footerProfile.addEventListener('click', () => {
        const logoutSidebar = document.getElementById('logout-sidebar');
        logoutSidebar.classList.toggle('top-[4rem]');
        logoutSidebar.addEventListener('click', () => {
            localStorage.removeItem('currentData');
            window.location.href = './pages/login-register.html';
        });
    })
}