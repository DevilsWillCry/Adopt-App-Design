export const renderImageHome = (container, obj) =>{
    container.innerHTML = ``;
    container.innerHTML =      
        `
        <img  class="w-8 h-7 bg-yellow-300 rounded-full cursor-pointer" src="${obj.profileImage}" alt="profile-${obj.username}">
        `   
};