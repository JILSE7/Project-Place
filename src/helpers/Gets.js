import { useState } from "react";

//URL
export const URL = `http://localhost:4000`;

//GETPLACEBYID
const getPlaceById = (id,array) => array.filter(place => place.id == id);


//Verify


const verifyUser = async(login,form) => {
    try {
    const data = await (await fetch(`${URL}/users`)).json()
    console.log(data);
    const user = data.find(dataUser => dataUser.email === form.email && dataUser.password === form.password);
    console.log(user);
    if(user) {
        //console.log(user);
        //console.log("Usuario logeado");
        login(user);
        //console.log(setUserLogin);
    }else{
        console.log("Usuario no encontrado");
    }
    } catch (error) {
    console.error(error);
    }
}


const registerUser = async(form) => {
    console.log(form);
    try {
        await fetch(`${URL}/users`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        } catch (error) {
        console.error(error);
        }
    }

export{
    getPlaceById,
    verifyUser,
    registerUser
}