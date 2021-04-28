import React, { useState, useEffect, createContext } from 'react';

export const PlaceContext = createContext();

const URL = 'http://localhost:4000';

export const DataProvider = ({ children }) => {
  const [statesMexico,setStatesMexico] = useState([]);
  const [placesMexico,setPlacesMexico] = useState([]);
  const [userLogin, setUserLogin] = useState({});

  useEffect(() => {
    const getStatesMexico = async() => {
      try {
        const response = await fetch(`${URL}/statesMexico`);
        const data = await response.json();
        //console.log(data)
        setStatesMexico(data);
      } catch (error) {
        console.error(error);
      }
    }

    const getPlacesMexico = async() => {
      try {
        const response = await fetch(`${URL}/places?_start=id:1&_end=4`);
        const data = await response.json();
        //console.log(data)
        setPlacesMexico(data);
      } catch (error) {
        console.error(error);
      }
    }
    getStatesMexico();
    getPlacesMexico();

  }, []);

  const verifyUser = async(form) => {
    try {
      const response = await fetch(`${URL}/users`);
      const data = await response.json();
      // console.log(data);
      // console.log(form);
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
    <PlaceContext.Provider value={ { statesMexico, placesMexico, verifyUser, registerUser, userLogin, setUserLogin } }>
      { children }
    </PlaceContext.Provider>
  )
}