import React, { useEffect, useState } from 'react'
//ROUTER
import { AppRouter } from './routers/AppRouter'
//Context
import { DataProvider } from './context/placeContext';

export const PlaceApp = () => {
    return ( 
        <DataProvider>
            <AppRouter/>
        </DataProvider>
    )
}