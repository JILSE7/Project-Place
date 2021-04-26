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

    const {data} = useFetch(`${url}/places`);
    const {data: estados} = useFetch(`${url}/statesMexico`);
    const {data: placeScreen}  = useFetch(`${url}/places?_start=id:1&_end=4`);

    return ( 
        <>
        <placeContext.Provider value={{data, estados, placeScreen}} >
            <AppRouter/>
        </placeContext.Provider>
        </>
    )
}