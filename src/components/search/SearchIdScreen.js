import React, { useContext, useState } from 'react'
import { SearchidImage } from './SearchId/SearchidImage'
import { SearchidInfo } from './SearchId/SearchidInfo'
import { SearchidPeople } from './SearchId/SearchidPeople'
import { SearchidUser } from './SearchId/SearchidUser'
import { SearchLocation } from './SearchId/SearchLocation'
import { SearchTitle } from './SearchId/SearchTitle'

import { SearchMap } from './SearchId/SearchMap'
import { placeContext } from '../../Context/placeContext'
import { SearchScreen } from './SearchScreen'

export const SearchIdScreen = () => {
    const [size, setsize] = useState( window.outerWidth)
    window.addEventListener("resize", function(){setsize(this.outerWidth)});

    

    return (
        <div className="mt-5">

                {(size >=916)? 
                    
                    (<div className=" searchId_container">
                    <main className="searchId_main">
                    <div className="searchId_imagen" >
                        <SearchidUser/>
                        <SearchidImage/>
                        <SearchidInfo/>
                    </div>
                    <div className="searchId_information">
                       <SearchTitle/>
                        <SearchLocation/>
                        <SearchMap/>
                        <SearchidPeople/>
                    </div>
                   </main>
                   
                   </div>)      :

                   ( <div className="searchId_container">
                            <SearchTitle/>
                        <main className="searchId_main">
                        <SearchLocation/>
                        <div className="searchId_imagen" >
                               
                                <SearchidUser/>
                                <SearchidImage/>
                                <SearchidInfo/>
                        </div>
                   <div className="searchId_information">
                           <SearchidPeople/>
                           <SearchMap/>
                           <p>Ubicacion</p>
                   </div>
                        </main>

                         </div>)
                
                }
                    


           

             
        </div>
    )
}
