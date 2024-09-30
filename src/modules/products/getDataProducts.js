// Function to get data from a user's API endpoint
export const getDataProducts = async (productURL) => {
    try {
        const response = await axios.get(productURL)
        return response.data;
    } catch (error) {
        alert(error.message);
    }
};