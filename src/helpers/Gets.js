//URL
export const URL = `http://localhost:4000`;

//GETPLACEBYID
const getPlaceById = (id,array) => array.filter(place => place.placeId === id );

//GETUSER
const getUserById = async(id) => {
try {
    const user = await (await fetch(`${URL}/users/${id}`)).json();
    return user;
} catch (error) {
    console.log(error);
}
    
}
export{
    getPlaceById,
    getUserById,
}