// Function to get data from a user's API endpoint
export const getDataUser = async (userURL) => {
    await axios.get(userURL)
    .then((response) => {
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
};