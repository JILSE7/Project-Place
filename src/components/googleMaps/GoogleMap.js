import React, { useEffect} from 'react'
import { GoogleMap,Marker} from '@react-google-maps/api';
import Geocode from "react-geocode";

//maps
import {getCity, getCountry} from '../../helpers/maps'
import { GoogleAutoComplete } from './GoogleAutoComplete';

//Geocode
Geocode.setApiKey(process.env.G_KEY)


const containerStyle = {
    display:"block",
    margin: "0 auto",
  width: '250px',
  height: '250px',
};


export const Mapa = ({newPlace, setnewPlace, pin}) => {
  console.log(newPlace);

  const onMarketDragEnd = async(e) =>{

    try {
      let newLat = Number(e.latLng.lat());
      let newLng = Number(e.latLng.lng())
      //DESTRUCTURING
      const {results} = await Geocode.fromLatLng(newLat, newLng)
      const {address_components} = results[0]
        let ciudad = getCity(address_components);
        let pais = getCountry(address_components);   
      
      if(results && address_components){
        setnewPlace({
          ...newPlace,
          address: results[0].formatted_address,
          city: (typeof ciudad === "string")? ciudad : ciudad.long_name,
          country: pais.long_name,
          mapPosition:{
            lat: Number(newLat),
            lng: Number(newLng)
          },
          marketPosition:{
            lat: Number(newLat),
            lng: Number(newLng)
          }
        })
        console.log('me movi');
      }

    } catch (error) {
      console.log(newPlace.lat);
      console.log(error);
    }
  }

  useEffect(() => {
       localStorage.setItem('newPlace', JSON.stringify(newPlace))
  }, [newPlace, setnewPlace]);

    return (
        <div className="google_mapa">  
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{lat: Number(newPlace.mapPosition.lat), lng: Number(newPlace.mapPosition.lng)}|| newPlace.marketPosition}
              zoom={17}
              
              
            >
              { /* Child components, such as markers, info windows, etc. */ }
           <Marker position={{lat: Number(newPlace.mapPosition.lat), lng: Number(newPlace.mapPosition.lng)} || newPlace.marketPosition}
                    draggable={pin}
                    onDragEnd = {onMarketDragEnd}
           />
            </GoogleMap>
            
          <div className="google__autocomplete-container">
          <GoogleAutoComplete newPlace={newPlace} setnewPlace={setnewPlace} />
          </div>
          </div>
    )
}
