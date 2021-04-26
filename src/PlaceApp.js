import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { DataProvider } from './context/PlaceContext';

export const PlaceApp = () => {
    return ( 
        <DataProvider>
        <AppRouter/>
        </DataProvider>
    )
}