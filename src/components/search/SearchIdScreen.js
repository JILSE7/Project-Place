import React, { useContext, useEffect, useState } from 'react'
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
import { PlaceContext } from '../../context/PlaceContext';
import { SearchScreen } from './SearchScreen'


export const SearchIdScreen = ({history}) => {
    const [size, setsize] = useState( window.outerWidth);
    const [comentarios, setcomentarios] = useState([]);
    window.addEventListener("resize", function(){setsize(this.outerWidth)});
    
    window.scroll({
        top: 0,
        left:0,
        behavior: "smooth"
    })
    
    let search;    

    //Hook params
    const {placeId} = useParams();

    // let notFound = Number(placeId)
    // if(isNaN(notFound)){
    //     history.push('/NotFound')
    // }
    
    // Context
    const {places} = useContext(PlaceContext);

    if(places.length >=1)search =  getPlaceById(placeId, places);
    

    useEffect(() => {
        if(search) setcomentarios(search[0].comments)
    }, [placeId, search])

    return (
        <div className="mt-5">
            
                {
                
                search!== undefined ?
                
                (size >=916) ?
             
                    (<div className=" searchId_container">
                    <main className="searchId_main">
                    <div className="searchId_imagen" >
                        <SearchidUser user= {search[0].user}/> 
                        <SearchidImage image = {search[0].image} likes = {search[0].likes} comments = {search[0].comments} likeMe = {search[0].likeMe} visitors = {search[0].visitors} placeId={placeId} />
                        <SearchidInfo comments = {comentarios} placeId={placeId}/>
                    </div>
                    <div className="searchId_information">
                       <SearchTitle title={search[0].place} />
                        <SearchLocation location ={{city: search[0].city, country: search[0].country, address: search[0].address }}/>
                        <SearchMap mapPosition={search[0].mapPosition}  marketPosition={search[0].marketPosition}/>
                        <SearchidPeople visitors = {search[0].visitors}/>
                    </div>
                   </main>
                    <SearchScreen/>
                   </div>) 
                               :   
                
                   ( <div className="searchId_container">
                             <SearchTitle title={search[0].place} />
                        <main className="searchId_main">
                        <SearchLocation location ={{city: search[0].city, country: search[0].country, address: search[0].address }}/>
                        <div className="searchId_imagen" >
                               
                                <SearchidUser user= {search[0].user}/>
                                <SearchidImage image = {search[0].image} likes = {search[0].likes} comments = {search[0].comments} likeMe = {search[0].likeMe} visitors = {search[0].visitors}  placeId={placeId} />
                                <SearchidInfo comments = {search[0].comments} placeId={placeId}/>
                        </div>
                   <div className="searchId_information">
                           <SearchidPeople visitors = {search[0].visitors}/>
                           <SearchMap mapPosition={search[0].mapPosition}  marketPosition={search[0].marketPosition}/>
                           <p>Ubicacion</p>
                   </div>
                        </main>
                        <SearchScreen/>
                         </div>)

                   :
                   null    
                
            }   

        </div>
    )
}


