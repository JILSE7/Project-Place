import React, { useContext, useEffect, useMemo, useState } from 'react'
//Components
import { SearchidImage } from './SearchId/SearchidImage'
import { SearchidInfo } from './SearchId/SearchidInfo'
import { SearchidPeople } from './SearchId/SearchidPeople'
import { SearchidUser } from './SearchId/SearchidUser'
import { SearchLocation } from './SearchId/SearchLocation'
import { SearchTitle } from './SearchId/SearchTitle'
import { SearchMap } from './SearchId/SearchMap'
import { useParams } from 'react-router'
import { getPlaceById } from '../../helpers/Gets'
import { placeContext } from '../../Context/placeContext'


export const SearchIdScreen = () => {
    const [size, setsize] = useState( window.outerWidth)
    window.addEventListener("resize", function(){setsize(this.outerWidth)});
    
    let search;    

    //Hook params
    const {placeId} = useParams();

    
    //Context
    const {data} = useContext(placeContext);


    //GetPLace si nuestros lugares son obtenidos
    if(data !== null && data.length >=1)search =  getPlaceById(placeId, data)
    
    console.log(search);

    
    return (
        <div className="mt-5">
            
                {
                
                search!== undefined ?
                
                (size >=916) ?
             
                    (<div className=" searchId_container">
                    <main className="searchId_main">
                    <div className="searchId_imagen" >
                        <SearchidUser/>
                        <SearchidImage image = {search[0].image} />
                        <SearchidInfo comments = {search[0].comments}/>
                    </div>
                    <div className="searchId_information">
                       <SearchTitle title={search[0].place} />
                        <SearchLocation location ={{city: search[0].city, country: search[0].country, address: search[0].address }}/>
                        <SearchMap/>
                        <SearchidPeople/>
                    </div>
                   </main>
                   
                   </div>) 
                               :   
                
                   ( <div className="searchId_container">
                             <SearchTitle title={search[0].place} />
                        <main className="searchId_main">
                        <SearchLocation location ={{city: search[0].city, country: search[0].country, address: search[0].address }}/>
                        <div className="searchId_imagen" >
                               
                                <SearchidUser/>
                                <SearchidImage image = {search[0].image} />
                                <SearchidInfo comments = {search[0].comments}/>
                        </div>
                   <div className="searchId_information">
                           <SearchidPeople/>
                           <SearchMap/>
                           <p>Ubicacion</p>
                   </div>
                        </main>

                         </div>)

                   :
                   null    
                
            }   
                     


    
             
        </div>
    )
}
