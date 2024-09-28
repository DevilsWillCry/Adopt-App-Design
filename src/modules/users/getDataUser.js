// Function to get data from a user's API endpoint
export const getDataUser = async (userURL) => {
    try {
        const response = await axios.get(userURL)
        return response.data;
    } catch (error) {
        alert(error.message);
    }
};