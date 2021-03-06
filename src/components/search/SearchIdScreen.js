import React, { memo, useContext, useEffect, useState } from 'react'
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

//Icons
import { RiRoadMapFill } from "react-icons/ri";


export const SearchIdScreen = memo(({history}) => {
    const [size, setsize] = useState( window.outerWidth);
    const [comentarios, setcomentarios] = useState([]);

    window.addEventListener("resize", function(){
        setsize(this.outerWidth)});
    
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
    const {places, userLogin} = useContext(PlaceContext);


    if(places.length >=1)search =  getPlaceById(placeId, places);


    useEffect(() => {
        console.log('me pinto');
        if(search){
           setcomentarios(search[0].comments);
        }
    }, [placeId, search]);

    return (
        <div className="mt-5">
                {
                
                search!== undefined  ?
                
                (size >=1210) ?
             
                    (<div className=" searchId_container">
                    <main className="searchId_main">
                    <div className="searchId_imagen" >
                        <SearchidUser user= {search[0].user}/> 
                        <SearchidImage image = {search[0].image} likes = {search[0].likes} comments = {search[0].comments} likeMe = {search[0].likeMe} visitors ={search[0].visitors} placeId={placeId}  userLogin={userLogin}/>
                        <SearchidInfo comments = {comentarios} placeId={placeId}/>
                    </div>
                    <div className="searchId_information">
                       <SearchTitle title={search[0].place} />
                        <SearchLocation location ={{city: search[0].city, country: search[0].country, address: search[0].address }} description={search[0].description} user = {{profilePhoto: search[0].user.profilePhoto, userName: search[0].user.userName}}/>
                        <SearchMap mapPosition={search[0].mapPosition}  marketPosition={search[0].marketPosition}/>
                        <SearchidPeople visitors={search[0].visitors}/>
                    </div>
                   </main>
                   <h2 className="mt-5">Mas publicaciones de usuarios</h2>
                    <SearchScreen/>
                   </div>) 
                               :   
                
                   ( <div className="searchId_container">
                             <SearchTitle title={search[0].place} />
                            <SearchLocation location ={{city: search[0].city, country: search[0].country, address: search[0].address }} description={search[0].description} user = {{profilePhoto: search[0].user.profilePhoto, userName: search[0].user.userName}}/>
                        <main className="searchId_main">
                        <div className="searchId_imagen" >
                               
                                <SearchidUser user= {search[0].user}/>
                                <SearchidImage image = {search[0].image}  likes = {search[0].likes} comments = {search[0].comments} likeMe = {search[0].likeMe} visitors = {search[0].visitors} placeId={placeId}  userLogin={userLogin}/>
                                <SearchidInfo comments = {search[0].comments} placeId={placeId}/>
                        </div>
                   <div className="searchId_information">
                           <SearchidPeople visitors = {search[0].visitors}/>
                           <SearchMap mapPosition={search[0].mapPosition}  marketPosition={search[0].marketPosition}/>
                            <RiRoadMapFill style={{fontSize: "20px", color: "orangered", marginBottom: "10px"}}/>
                           <h4 className="mt-5">Ubicacion en Mapa</h4>
                   </div>
                        </main>
                        <h2 className="mt-3">Mas publicaciones de usuarios</h2>
                        <SearchScreen history={history}/>
                         </div>)

                   :
                   null    
                
            }   

        </div>
    )
})


