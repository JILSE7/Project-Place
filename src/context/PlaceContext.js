import React, { createContext,useState } from 'react';
import { useFetch } from '../hooks/useFetch';


export const PlaceContext = createContext();

const URL = 'http://localhost:4000';

export const DataProvider = ({ children }) => {

  const [userLogin, setUserLogin] = useState({});
  const [inputSearch, setInputSearch] = useState(true);
  const places = useFetch(`${URL}/places?_expand=users`);
  const statesMexico = useFetch(`${URL}/statesMexico`);
  const placesMexico  = useFetch(`${URL}/places?_start=id:1&_end=4`);
  const [placesFiltered, setPlacesFiltered] = useState();


  return (
    <PlaceContext.Provider value ={{statesMexico,placesMexico, places, userLogin, setUserLogin, inputSearch, setInputSearch, placesFiltered, setPlacesFiltered }}>
      { children }
    </PlaceContext.Provider>
  )
}

//value={ { statesMexico, placesMexico, verifyUser, registerUser, userLogin, setUserLogin 