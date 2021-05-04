import React from 'react'
//ROUTER
import { AppRouter } from './routers/AppRouter'
//Context
import { DataProvider } from './context/PlaceContext';

export const PlaceApp = () => {
    return ( 
        <DataProvider>
            <AppRouter/>
        </DataProvider>
    )
}