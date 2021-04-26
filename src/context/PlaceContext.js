import React, { useState, useEffect, createContext } from 'react';

export const PlaceContext = createContext();
const URL = 'http://localhost:4000';

export const DataProvider = ({ children }) => {
  const [statesMexico,setStatesMexico] = useState([]);
  const [placesMexico,setPlacesMexico] = useState([]);
  // const [userLogin, setUserLogin] = useState({});

  useEffect(() => {
    const getStatesMexico = async() => {
      try {
        const response = await fetch(`${URL}/statesMexico`);
        const data = await response.json();
        console.log(data)
        setStatesMexico(data);
      } catch (error) {
        console.error(error);
      }
    }

    const getPlacesMexico = async() => {
      try {
        const response = await fetch(`${URL}/places?_start=id:1&_end=4`);
        const data = await response.json();
        console.log(data)
        setPlacesMexico(data);
      } catch (error) {
        console.error(error);
      }
    }
    getStatesMexico();
    getPlacesMexico();

  }, []);


  return (
    <PlaceContext.Provider value={ { statesMexico, placesMexico } }>
      { children }
    </PlaceContext.Provider>
  )
}