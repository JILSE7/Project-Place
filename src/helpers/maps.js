
//COMPLETADA
export const getCity = (array) => {
    if(array.length <= 3){
        return array[1].long_name
    }else{
        return array.find(city => {
            if (city.types.includes("locality")||city.types.includes("administrative_area_level_1")){
                return city.long_name;
            }
        })
    }
}

//COMPLETADA
export const getCountry = (array)=>{
    return array.find(country => country.types.includes("country"))
}


//Upload Cloudaniry
export const uploadPhoto = async(file)=>{
    const cloudinary = "https://api.cloudinary.com/v1_1/dxqnlqxa1/upload";
 
    //Es como el body que lleva la peticion
    const formData = new FormData();
    formData.append('upload_preset','React-journal');
    formData.append('file', file);

    try {
        const respuesta = await (await fetch(cloudinary, {
            method: "POST",
            body: formData
        })).json()

        return respuesta.secure_url


    } catch (error) {
        throw error;
    }

}