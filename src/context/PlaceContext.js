import React, { createContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export const PlaceContext = createContext();

const URL = 'http://localhost:4000';

export const DataProvider = ({ children }) => {

  const [userLogin, setUserLogin] = useState({});

//   useEffect(() => {
//     const getStatesMexico = async() => {
//       try {
//         const response = await fetch(`${URL}/statesMexico`);
//         const data = await response.json();
//         //console.log(data)
//         setStatesMexico(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     const getPlacesMexico = async() => {
//       try {
//         const response = await fetch(`${URL}/places?_start=id:1&_end=4`);
//         const data = await response.json();
//         //console.log(data)
//         setPlacesMexico(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     getStatesMexico();
//     getPlacesMexico();

//   }, []);


const places = useFetch(`${URL}/places`);
const statesMexico = useFetch(`${URL}/statesMexico`);
const placesMexico  = useFetch(`${URL}/places?_start=id:1&_end=4`);

//Verificacion de usuario
const userData =  useFetch(`${URL}/users`);



const verifyUser = async(form) => {
    try {
    const data = await (await fetch(`${URL}/users`)).json()
    console.log(data);
    const user = data.find(dataUser => dataUser.email === form.email && dataUser.password === form.password)
    if(user) {
        //console.log(user);
        //console.log("Usuario logeado");
        setUserLogin(user);
        //console.log(setUserLogin);
    }else{
        console.log("Usuario no encontrado");
    }
    } catch (error) {
    console.error(error);
    }
}

const registerUser = async(form) => {
    //console.log(form);
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

  return (
    <PlaceContext.Provider value ={{statesMexico,placesMexico, places, userData, verifyUser,  userLogin, setUserLogin, registerUser }}>
      { children }
    </PlaceContext.Provider>
  )
}

//value={ { statesMexico, placesMexico, verifyUser, registerUser, userLogin, setUserLogin 