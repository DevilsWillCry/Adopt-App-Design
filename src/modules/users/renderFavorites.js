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
        div.classList.add('flex', 'flex-col', 'bg-whiteDesign','rounded-2xl','shadow-2xl','p-4', 'h-1/4',  'justify-center', 'items-center','content-center','text-center', 'border-b-4', 'border-b-slate-600', 'border-r-4', 'border-r-slate-600', 'cursor-pointer', 'hover:animate-wiggle', 'hover:scale-110')
        if (userFav){
            div.innerHTML = `
                <img class="bg-yellowDesign w-24 h-24 row-span-1 p-2 align-middle items-center ml-3 mr-5 rounded-full shadow-2xl border-r-4 border-r-yellow-600 object-cover" src="${pet.images[0]}" alt="">
                <h3 class= "font-bold bg-cyanDesign border-b-4 border-b-cyan-500 border-r-4 border-r-cyan-500 p-2 mt-2 rounded-xl">${pet.name}</h3>
            `;
            container.appendChild(div);
        }
    });

    productsObj.forEach(product => {
        const div = document.createElement('div');

        const userFind = usersObj.find(
            users => users.id == currentUser.id
        );
        
        const userFav = userFind.favorites.find(favpets => favpets.id == product.id)
        div.classList.add('flex', 'flex-col', 'bg-whiteDesign','rounded-2xl','shadow-2xl','p-4', 'h-1/4',  'justify-center', 'items-center','content-center','text-center', 'border-b-4', 'border-b-slate-600', 'border-r-4', 'border-r-slate-600', 'cursor-pointer', 'hover:animate-wiggle', 'hover:scale-110')
        if (userFav){
            div.innerHTML = `
                <img class="bg-cyanDesign  w-24 h-24 row-span-1 p-2 align-middle items-center ml-3 mr-5 rounded-full shadow-2xl border-r-4 border-r-cyan-500 object-cover" src="${product.images[0]}" alt="">
                <h3 class= "font-bold bg-cyanDesign border-b-4 border-b-cyan-500 border-r-4 border-r-cyan-500 p-2 mt-2 rounded-xl">${product.name}</h3>
            `;
            container.appendChild(div);
        }
    });

};
