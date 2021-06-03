import React, { createContext,useEffect,useState } from 'react';
import { fetchConToken } from '../helpers/fetch';
import { useFetch } from '../hooks/useFetch';


export const PlaceContext = createContext();


export const DataProvider = ({ children }) => {
  //Estado para el usuario logeado, este estara dentro del constex
  const [userLogin, setUserLogin] = useState({
    checking: false //proceso de autenticacion   
  });
  const [places, setPlaces] = useState([]);
  console.log(userLogin);
  

  useEffect(() => {
    if(userLogin.uid){
      
      fetchConToken('places/')
                    .then(resp => {
                      const body = resp.json();
                      body.then(respuesta => setPlaces(respuesta.places));
                    })
  
      
    }
  }, [setPlaces, userLogin])


  return (
    <PlaceContext.Provider value ={{places, userLogin, setUserLogin }}>
      { children }
    </PlaceContext.Provider>
  )
}

//value={ { statesMexico, placesMexico, verifyUser, registerUser, userLogin, setUserLogin 