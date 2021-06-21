import React, { createContext,useEffect,useState } from 'react';
import { fetchConToken } from '../helpers/fetch';



export const PlaceContext = createContext();


export const DataProvider = ({ children }) => {
  //Estado para el usuario logeado, este estara dentro del constex
  const [userLogin, setUserLogin] = useState({
    checking: false //proceso de autenticacion   
  });
  const [places, setPlaces] = useState([]);
  const [lastSearch, setlastSearch] = useState('');
  
  

  useEffect(() => {
    if(userLogin.uid){
        fetchConToken('places/')
                      .then(resp => {
                        const body = resp.json();
                        body.then(respuesta => setPlaces(respuesta.places));
                      })
        console.log('me actualize');
    
    }
  }, [setPlaces, userLogin])


  //Obtener array de las ciudades registradas y array de ciudades sin repetirse
  const countries = places.map(places => places.country);
  const uniqueCountries = [...new Set(countries.sort())];
  //Poner el input de busqueda en el header o no
  const [inputSearch, setInputSearch] = useState(true);
  //Filtrar las ciudad por el input
  const [placesFiltered, setPlacesFiltered] = useState();
  return (
    <PlaceContext.Provider value ={{places, setPlaces,userLogin, setUserLogin, inputSearch, setInputSearch, placesFiltered, setPlacesFiltered, uniqueCountries, lastSearch, setlastSearch }}>
      { children }
    </PlaceContext.Provider>
  )
}

//value={ { statesMexico, placesMexico, verifyUser, registerUser, userLogin, setUserLogin 