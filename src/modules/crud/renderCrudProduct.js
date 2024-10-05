export const renderCrudProduct = (container) =>{
    // Render CRUD here
    container.innerHTML = '';    
    const div = document.createElement('div');
    div.classList.add('crud-product', 'flex', 'flex-col', 'flex-nowrap', 'flex-shrink-0', 'h-screen', 'overflow-auto');
    div.innerHTML = `
        <form id="form-product" class="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-full sm:max-w-md mb-14">
        <h2 class="text-2xl font-semibold text-center mb-6">Product Information</h2>

        <!-- Images Array -->
        <label for="product-images" class="block text-sm font-medium text-gray-700 mb-1">Product Images</label>
        <input type="file" id="product-images" name="images" accept="image/*" multiple 
            class="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2 mb-4 focus:ring-yellow-600 focus:border-yellow-600" required>

        <!-- Name -->
        <label for="product-name" class="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
        <input type="text" id="product-name" name="name" placeholder="Enter product name" 
            class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-yellow-600 focus:border-yellow-600" required>

        <!-- Description -->
        <label for="product-description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea id="product-description" name="product-description" placeholder="Enter product description" 
                class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-yellow-600 focus:border-yellow-600"></textarea>

        <!-- Age Range -->
        <label for="product-ageRange" class="block text-sm font-medium text-gray-700 mb-1">Age Range</label>
        <input type="text" id="product-ageRange" name="ageRange" placeholder="Enter age range" 
            class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-yellow-600 focus:border-yellow-600" required>

        <!-- Type of Food -->
        <label for="typeFood" class="block text-sm font-medium text-gray-700 mb-1">Type of Food</label>
        <select id="typeFood" name="typeFood" class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-bg-yellow-600 focus:border-bg-yellow-600" required>
            <option value="">Select type of food</option>
            <option value="dry">Dry</option>
            <option value="wet">Wet</option>
        </select>

        <!-- Product Price -->
        <label for="product-price" class="block text-sm font-medium text-gray-700 mb-1">Product Price</label>
        <input type="number" step="any"  id="product-price" name="productPrice" placeholder="Enter product price" 
            class="block w-full border border-gray-300 rounded-lg p-2 mb-4 focus:ring-indigo-500 focus:border-indigo-500">
        <!-- Submit Button -->
        <button type="submit" class="w-full bg-yellowDesign text-black p-2 rounded-lg hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-600">Añadir</button>
    </form>
    `;
    container.appendChild(div);

}