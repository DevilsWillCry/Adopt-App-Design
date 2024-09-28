export const patchDataPets = (async (url, obj) => {
    try {
        await axios.patch(url, obj);
    } catch (error) {
        alert(error.message);
    }
});