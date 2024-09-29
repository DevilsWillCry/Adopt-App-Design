export const renderProfile = async (container, obj ) => {
    if ((obj == {})) {
        console.error("Expected an object, but got:", obj);
        return;
    }
    const image = await obj.profileImage
    container.innerHTML = '';
    container.innerHTML += `
        <div class="card">
            <div class="card-body flex flex-col flex-nowrap flex-shrink-0 justify-items-center items-center">
                <h1 class= "w-11/12 h-auto font-bold text-black justify-start p-4 ml-4 mb-4 align-middle shadow-xl rounded-2xl bg-whiteMainDesign ">
                    profile
                </h1>
                <div class="flex flex-col w-11/12 h-2/4 bg-yellowDesign p-2 mb-4 rounded-3xl shadow-xl justify-center items-center content-center align-middle">
                    <img src="${image}" class="card-img-top w-3/6 h-1/4 rounded-full gap-3 p-2 hover:animate-wiggle" alt="Profile picture">
                    <h1 class="font-bold text-xl">${obj.username}</h1>
                </div>
                <div class="flex flex-col flex-nowrap text-start mb-3 p-4 gap-4 shadow-xl rounded-3xl  bg-slate-300 w-11/12 h-auto">
                    <p class="card-text ml-[25%]"><i class="fa-solid fa-envelope"></i>  ${obj.email}</p> 
                    <p class="card-text ml-[25%]"><i class="fa-solid fa-phone"></i> ${obj.phone}</p>
                </div>
                <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>`
}