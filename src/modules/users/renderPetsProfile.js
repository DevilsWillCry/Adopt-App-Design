import { renderCrudPets } from "../crud/renderCrudPets.js";

export const renderPetsProfile = (container, petsObj = [], userObj = []) => {
    // Render the pet profile page
    if (!Array.isArray(petsObj) ||!Array.isArray(userObj)) {
        console.error("Expected an array, but got:", petsObj, userObj);
        return;
    }
    container.innerHTML = '';
    petsObj.forEach((pet) => {
        const div = document.createElement('div');
        // Add pet details, image, and buttons for edit adoption, and deleting
        // Example:
        div.innerHTML = `
            <div class="w-72 h-auto bg-white shadow-2xl grid grid-cols-2 row-auto gap-3 p-3 items-center justify-items-center rounded-2xl mb-5">  
                <h1 class="col-span-2 font-bold text-xl">${pet.name}</h1>
                <div class="w-35.5 h-22.5 rounded-[20px] skew-x-12 bg-yellowDesign ml-8">
                    <img class= "w-36 h-28 absolute top-0 -mt-5 mx-auto left-1/2 transform -translate-x-1/2 -skew-x-12" src=${pet.images[0]} alt="Cat-Logo">
                </div>
                <div class="w-max h-auto text-center m-1">
                    <p class="text-center rounded-full bg-rose-600 w-20 h-auto px-3 text-sm text-white mb-2">${pet.gender}</p>
                    <p class="text-center rounded-full bg-sky-400 w-20 h-auto px-3 text-sm text-white mb-2">${pet.breed} </p>
                    <p class="text-center rounded-full bg-yellow-300 w-20 h-auto px-3 text-sm text-white mb-2">${pet.eyeColor}</p>
                </div>            
                <div class="flex justify-between col-span-2 w-full m-2 transform-gpu transition-all">
                    <button id="edit-${pet.id}" class="text-white rounded-lg px-4 py-2 bg-yellowDesign hover:bg-yellow-600 hover:shadow-2xl">Edit Pet</button>
                    <button id="delete-${pet.id}" class="text-white rounded-lg px-4 py-2 bg-red-500 hover:bg-red-800 hover:shadow-2xl">Delete Pet</button>
                </div>
            </div>
            <!-- Modal -->
            <div id="modal-crud-${pet.id}" class="fixed inset-0 bg-black bg-opacity-50 h-autoitems-center justify-center hidden z-50">
                <div class="flex flex-col">
                    <button class="text-end w-auto text-white rounded-lg mt-10">
                        <i id="close-modal-${pet.id}"  class="fa-solid fa-x bg-red-600 p-3 rounded-xl"></i>
                    </button>
                    <!-- Aquí ira el CRUD-->
                    <div id="crud-section-${pet.id}" class="flex justify-center items-center h-auto overflow-y-auto">

                    </div>
                </div>
            </div>
        `;
        container.appendChild(div);
        document.getElementById(`edit-${pet.id}`).addEventListener('click', async (e) => {
            console.log(`button-${e.target.id} pressed`);
            //const updatePet = await patchDataPet();
            document.getElementById(`modal-crud-${pet.id}`).classList.add('flex')
            document.getElementById(`modal-crud-${pet.id}`).classList.remove('hidden')

        });

        document.getElementById(`close-modal-${pet.id}`).addEventListener('click', async (e) => {
            document.getElementById(`modal-crud-${pet.id}`).classList.add('hidden')
            document.getElementById(`modal-crud-${pet.id}`).classList.remove('flex')
        });

        document.getElementById(`delete-${pet.id}`).addEventListener('click', async (e) => {
            console.log(`button-${e.target.id} pressed`);
            //const updatePet = await patchDataPet();
        });
        
    });
} 