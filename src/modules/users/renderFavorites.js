import { usersURL } from "../constants.js";
import { patchDataUser } from "./patchDataUser.js";

export const renderFavorites = (container, petsObj = [], productsObj = [], usersObj = [], currentUser = []) =>{
    // Render favorites here
    if (!Array.isArray(petsObj) || !Array.isArray(usersObj) || !Array.isArray(productsObj)) {
        console.error("Expected an array, but got:", petsObj, usersObj, productsObj);
        return;
    }
    container.innerHTML = '';
    petsObj.forEach(pet => {
        const div = document.createElement('div');
        
        const userFind = usersObj.find(
            users => users.id == currentUser.id
        );
        
        const userFav = userFind.favorites.find(favpets => favpets.id == pet.id)
        div.classList.add('flex', 'flex-col', 'bg-white','rounded-2xl','shadow-2xl','p-4', 'h-auto',  'justify-center', 'items-center','content-center','text-center', 'border-b-4', 'border-b-slate-600', 'border-r-4', 'border-r-slate-600', 'cursor-pointer',  'transition-all')
        if (userFav){
            div.innerHTML = `
            <div class="w-full">
                <button class="text-end w-full text-white rounded-lg ">
                    <i  id="pet-${pet.id}" class="fa-solid fa-x bg-red-600 p-2 rounded-full hover:bg-red-900"></i>
                </button>
            </div>
            <img class="bg-yellowDesign  w-24 h-24 lg:w-[12vw] lg:h-[12vw] row-span-1 p-3 align-middle items-center ml-3 mr-5 rounded-full shadow-lg border-r-4 border-r-yellow-600 object-cover" src="${pet.images[0]}" alt="">
            <h3 class= "max-lg:text-[3vw] font-bold bg-cyanDesign border-b-4 border-b-cyan-500 border-r-4 border-r-cyan-500 p-2 mt-2 rounded-xl">${pet.name}</h3>
            `;
            container.appendChild(div);
            const button = document.getElementById(`pet-${pet.id}`);
            if (button) {
                button.addEventListener('click', async (e) => {
                    console.log(`button ${(e.target.id).replace("pet-","")} pressed`);
                    const petId =  (e.target.id).replace("pet-","")
                    const userObjectFav = usersObj.find(user => 
                        user.id == currentUser.id
                    );
                    let favList = userObjectFav.favorites;
                    const deleteFavPet = favList.filter(fav => fav.id !== petId)
                    await patchDataUser(usersURL, currentUser.id, {favorites: deleteFavPet})
                    window.location.reload();
                });
            } else {
                console.error(`No se encontró el botón con id ${pet.id}`);
            }
    }
            
    });

    productsObj.forEach(product => {
        const div = document.createElement('div');

        const userFind = usersObj.find(
            users => users.id == currentUser.id
        );
        
        const userFav = userFind.favorites.find(favpets => favpets.id == product.id)
        div.classList.add('flex', 'flex-col', 'bg-white','rounded-2xl','shadow-2xl','p-4', 'h-30',  'justify-center', 'items-center','content-center','text-center', 'border-b-4', 'border-b-slate-600', 'border-r-4', 'border-r-slate-600', 'cursor-pointer', 'transition-all')
        if (userFav){
            div.innerHTML = `
                <div class="w-full">
                    <button  class="text-end w-full text-white rounded-lg ">
                        <i id="product-${product.id}" class="fa-solid fa-x bg-red-600 p-2 rounded-full hover:bg-red-900"></i>
                    </button>
                </div>
                <img class="bg-cyanDesign  w-24 h-24 lg:w-[12vw] lg:h-[12vw] row-span-1 p-2 align-middle items-center ml-3 mr-5 rounded-full shadow-lg border-r-4 border-r-cyan-500 object-cover" src="${product.images[0]}" alt="">
                <h3 class= "max-lg:text-[3vw] font-bold bg-cyanDesign border-b-4 border-b-cyan-500 border-r-4 border-r-cyan-500 p-2 mt-2 rounded-xl">${product.name}</h3>
            `;
            container.appendChild(div);
            const button = document.getElementById(`product-${product.id}`);
            if (button) {
                button.addEventListener('click', async (e) => {
                    const productId =  (e.target.id).replace("product-","")
                    const userObjectFav = usersObj.find(user => 
                        user.id == currentUser.id
                    );
                    let favList = userObjectFav.favorites;
                    const deleteFavPet = favList.filter(fav => fav.id !== productId)
                    await patchDataUser(usersURL, currentUser.id, {favorites: deleteFavPet})
                });
            } else {
                console.error(`No se encontró el botón con id ${pet.id}`);
            }
        }
    });

};
