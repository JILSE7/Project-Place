import React from 'react'
import { SearchidImage } from './SearchId/SearchidImage'
import { SearchidInfo } from './SearchId/SearchidInfo'
import { SearchidPeople } from './SearchId/SearchidPeople'
import { SearchidUser } from './SearchId/SearchidUser'
import { SearchLocation } from './SearchId/SearchLocation'
import { SearchTitle } from './SearchId/SearchTitle'

export const SearchIdScreen = () => {
    return (
        <div className="mt-5">
                <div className="container searchId_container">
                    
                    <main className="searchId_main">
                        <div className="searchId_imagen" >
                            <SearchidUser/>
                            <SearchidImage/>

                            <SearchidInfo/>
                        </div>
                        <div className="searchId_information">
                            <SearchTitle/>
                            <SearchLocation/>
                            <SearchidPeople/>
                        </div>
                    </main>
                   
                </div>

                <div className="text-center">
                    En esta parte podemos ocupar el componente de toño
                </div>
        </div>
    )
}
