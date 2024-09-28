export const postDataUser = (async (url, obj) => {
    try {
        await axios.post(url, obj);
    } catch (error) {
        alert(error.message);
    }
});