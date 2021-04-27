import React, { useEffect, useState } from 'react'
//context
import { placeContext } from './Context/placeContext'
//customHook
import { useFetch } from './hooks/useFetch';
//component
import { AppRouter } from './routers/AppRouter'

//url
import {url} from './helpers/Gets';





export const PlaceApp = () => {

    const places = useFetch(`${url}/places`);
    const estados = useFetch(`${url}/statesMexico`);
    const placeScreen  = useFetch(`${url}/places?_start=id:1&_end=4`);
 

   
    return ( 
        <>
        <placeContext.Provider value={{ places, estados, placeScreen}} >
            <AppRouter/>
        </placeContext.Provider>
        </>
    )
}