export const patchDataUser = async (url, id, obj) => {
    try {
        const response = await axios.patch(`${url}/${id}`, obj);
    } catch (error) {
        alert(error.message);
    }

    
    
}