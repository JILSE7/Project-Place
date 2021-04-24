import React, { useEffect, useState } from 'react'
import { placeContext } from './Context/placeContext'
import { AppRouter } from './routers/AppRouter'



export const URL = `http://localhost:4000`;

export const PlaceApp = () => {
    
    const [places, setPlaces] = useState([])
    useEffect(() => {
        const getPlaces = async ()=>{
            try {
                const places = await (await fetch(`${URL}/places`)).json();
                setPlaces(places)
            } catch (error) { console.log(error);}
        }
        getPlaces();
    }, [])


    return ( 
        <>
        <placeContext.Provider value={places}>
            <AppRouter/>
        </placeContext.Provider>
        </>
    )
}