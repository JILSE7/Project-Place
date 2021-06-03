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
  //Poner el input de busqueda en el header o no
  const [inputSearch, setInputSearch] = useState(true);
  //Filtrar las ciudad por el input
  const [placesFiltered, setPlacesFiltered] = useState();
  return (
    <PlaceContext.Provider value ={{places, userLogin, setUserLogin, inputSearch, setInputSearch }}>
      { children }
    </PlaceContext.Provider>
  )
}

//value={ { statesMexico, placesMexico, verifyUser, registerUser, userLogin, setUserLogin 