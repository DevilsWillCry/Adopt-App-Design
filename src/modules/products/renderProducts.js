import { usersURL } from '../constants.js';
import { patchDataUser } from '../users/patchDataUser.js'

export const renderProducts = async (container, productsObj = [], usersObj = [], currentUser = []) => {
    let favIcon = 'regular'
    if (!Array.isArray(productsObj) || !Array.isArray(usersObj)) {
        console.error("Expected an array, but got:", productsObj, usersObj);
        return;
    }
    productsObj.forEach((product) => {
        const div = document.createElement('div');
    
        // Encontrar usuarios que tengan products y recomendar
        const FindUserProducts = usersObj.find(user => 
            user.myProducts.find(myProduct => myProduct.id === product.id)
        );
        // Verificar si FindUserProducts existe
        if (!FindUserProducts) {
            console.warn(`No se encontró un usuario con el producto ${product.id}`);
            return;  // O puedes continuar con un valor predeterminado
        }
    
        // Encontrar usuarios que tengan favoritos
        const setFavoriteUser = usersObj.find(user => 
            user.id == currentUser.id
        );
    
        const FindProductFavorites = setFavoriteUser.favorites.find(favoriteProduct => favoriteProduct.id === product.id);
        if (FindProductFavorites) {
            favIcon = 'solid';
        } else {
            favIcon = 'regular';
        }
    
        div.classList.add('card-product');
        div.innerHTML = `
            <div class="w-72 h-48 bg-white shadow-2xl grid grid-cols-2 row-auto gap-3 items-center justify-items-center rounded-2xl mb-8">
                <div class="w-full h-auto col-span-2 grid grid-rows-2 grid-flow-col items-center justify-start"> 
                    <img class="bg-yellow-300 w-8 h-7 row-span-2 align-middle items-center ml-3 mr-5 rounded-full object-cover" src="${FindUserProducts.profileImage}" alt="">
                    <h1 class="font-bold">${FindUserProducts.username}</h1>
                    <span class="text-xs text-grayDesign">Pet Star Shop</span>
                    <button id="button-${product.id}" class="w-fulLjustify-center align-middle items-center row-span-2 ml-20 cursor-pointer">
                        <i id="${product.id}" class="text-red-600 z-10 fa-${favIcon} fa-heart"></i>
                    </button>
                </div>  
                <div class="w-35.5 h-22.5 rounded-[20px] skew-x-12 bg-cyanDesign ml-8">
                    <img class= "w-36 h-28 absolute top-0 -mt-5 mx-auto left-1/2 transform -translate-x-1/2 -skew-x-12" src=${product.images[0]} alt="product-logo-${product.name}">
                </div>
                <div class="w-max h-auto text-center m-1 ">
                    <p class="text-center rounded-full bg-rose-600 w-20 h-auto px-3 text-sm text-white mb-2">${product.typeFood}</p>
                    <p class="text-center rounded-full bg-sky-400 w-20 h-auto px-3 text-sm text-white mb-2">${product.ageRange} </p>
                    <p class="text-center rounded-full bg-yellow-300 w-20 h-auto px-3 text-sm text-white mb-2">$ ${product.productPrice}</p>
                </div>            
            </div>
        `;
        container.appendChild(div);
    
        document.getElementById(`${product.id}`).addEventListener('click', async (e) => {
            console.log(`button-${e.target.id} pressed`);
    
            const userObjectFav = usersObj.find(user => 
                user.id == currentUser.id
            );
    
            let favList = userObjectFav.favorites;
            const favoritePet = userObjectFav.favorites.find(fav => fav.id === e.target.id);
    
            if (!favoritePet) {
                favList.push({ id: e.target.id });
                await patchDataUser(usersURL, currentUser.id, { favorites: favList });
                window.location.reload()
            } else {
                favList = favList.filter(fav => fav.id !== e.target.id);
                await patchDataUser(usersURL, currentUser.id, { favorites: favList });
                window.location.reload()
            }
        });
    });
    
}; 