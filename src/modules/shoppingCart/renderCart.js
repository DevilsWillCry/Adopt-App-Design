export const renderCart = (container, petsObj = [], productsObj = [], usersObj = [], currentUser = [])  =>{
    // Render cart here
    if (!Array.isArray(petsObj) || !Array.isArray(productsObj) || !Array.isArray(usersObj)) {
        console.error("Expected an array, but got:", petsObj, productsObj, usersObj);
        return;
    }
    // Implement your cart rendering logic here
    container.innerHTML = '';
    petsObj.forEach((pet) => {
        const div = document.createElement('div');
    
        const FindCurrentUser = usersObj.find(user => 
            user.id === currentUser.id)

        const FindShopExist = FindCurrentUser.cart.find(inCart =>
            inCart.id === pet.id)
    
    
        if (FindShopExist){
            // Add your cart rendering logic here
            div.classList.add('flex', 'flex-row', 'justify-items-start', 'items-center',  'w-5/6', 'h-auto', 'bg-whiteDesign','rounded-2xl','shadow-2xl','p-4', 'text-center', 'border-b-4', 'border-b-slate-600', 'border-r-4', 'border-r-slate-600', 'cursor-pointer', 'transition-all', 'hover:scale-110')
            div.innerHTML = `
                <img class="bg-yellowDesign w-16 h-16 object-cover row-span-1 p-2 align-middle items-center ml-3 mr-5 rounded-full shadow-2xl border-r-4 border-r-yellow-600" src="${pet.images[0]}" alt="">
                <div id="${pet.id}" class="justify-start text-start" >
                    <h1  class= "font-bold p-2 mt-2 rounded-xl" >${pet.name}</h1>
                    <p class="text-grayDesign p-2">pet</p>
                </div>
            `
        }
        container.appendChild(div);
    });

    productsObj.forEach((product) => {
        const div = document.createElement('div');
        const FindCurrentUser = usersObj.find(user => 
            user.id === currentUser.id)
            
        const FindShopExist = FindCurrentUser.cart.find(inCart =>
            inCart.id === product.id)
        if (FindShopExist){
            // Add your cart rendering logic here
            div.classList.add('flex', 'flex-row', 'justify-items-start', 'items-center',  'w-5/6', 'h-auto', 'bg-whiteDesign','rounded-2xl','shadow-2xl','p-4', 'text-center', 'border-b-4', 'border-b-slate-600', 'border-r-4', 'border-r-slate-600', 'cursor-pointer', 'transition-all', 'hover:scale-110')
            div.innerHTML = `
                <img class="bg-cyanDesign w-16 h-16 object-cover row-span-1 p-2 align-middle items-center ml-3 mr-5 rounded-full shadow-2xl border-r-4 border-r-cyan-500" src="${product.images[0]}" alt="">
                <div id="${product.id}" class="justify-start text-start" >
                    <h1  class= "font-bold p-2 mt-2 rounded-xl" >${product.name}</h1>
                    <p class="text-grayDesign p-2">product</p>
                </div>
            `
        }
        container.appendChild(div);
    });
    //     //
    
};