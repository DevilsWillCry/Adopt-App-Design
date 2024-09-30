export const renderCrudPets = (container) =>{
    // Render CRUD here
    container.innerHTML = '';    
    const div = document.createElement('div');
    div.classList.add('crud-product', 'h-screen', 'overflow-auto');
    div.innerHTML = `
        <form class="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-full sm:max-w-md mb-14">
            <h2 class="text-2xl font-semibold text-center mb-6">Pet Adoption Information</h2>
    
            <!-- Images Array -->
            <label for="images" class="block text-sm font-medium text-gray-700 mb-1">Product Images</label>
            <input type="file" id="images" name="images" accept="image/*" multiple 
                class="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2 mb-4 focus:ring-yellow-600 focus:border-yellow-600">
    
            <!-- Pet Name -->
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Pet Name</label>
            <input type="text" id="name" name="name" placeholder="Enter pet's name" 
                    class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-indigo-500 focus:border-indigo-500">
    
            <!-- Gender -->
            <label for="gender" class="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select id="gender" name="gender" 
                    class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
    
            <!-- Breed -->
            <label for="breed" class="block text-sm font-medium text-gray-700 mb-1">Breed</label>
            <input type="text" id="breed" name="breed" placeholder="Enter breed" 
                    class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-indigo-500 focus:border-indigo-500">
    
            <!-- Eye Color -->
            <label for="eyeColor" class="block text-sm font-medium text-gray-700 mb-1">Eye Color</label>
            <input type="text" id="eyeColor" name="eyeColor" placeholder="Enter eye color" 
                    class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-indigo-500 focus:border-indigo-500">
    
            <!-- Personality -->
            <label for="personality" class="block text-sm font-medium text-gray-700 mb-1">Personality</label>
            <input type="text" id="personality" name="personality" placeholder="Describe personality" 
                    class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-indigo-500 focus:border-indigo-500">
    
            <!-- Medical Information -->
            <label for="medicalInfo" class="block text-sm font-medium text-gray-700 mb-1">Medical Information</label>
            <textarea id="medicalInfo" name="medicalInfo" placeholder="Enter medical information" 
                        class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
    
            <!-- Biography -->
            <label for="biography" class="block text-sm font-medium text-gray-700 mb-1">Biography</label>
            <textarea id="biography" name="biography" placeholder="Write a brief biography" 
                        class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
    
            <!-- About Pet -->
            <label for="aboutPet" class="block text-sm font-medium text-gray-700 mb-1">About the Pet</label>
            <textarea id="aboutPet" name="aboutPet" placeholder="Tell us more about the pet" 
                        class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
    
            <!-- Adoption Price -->
            <label for="adoptionPrice" class="block text-sm font-medium text-gray-700 mb-1">Adoption Price</label>
            <input type="number" id="adoptionPrice" name="adoptionPrice" placeholder="Enter adoption price" 
                    class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-indigo-500 focus:border-indigo-500">
    
            <!-- Submit Button -->
            <button type="submit" class="w-full bg-yellowDesign text-white p-2 rounded-lg hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-600">Añadir</button>
        </form>
    `;
    
    container.appendChild(div);

}