import React from 'react';
import { GoogleMap, Marker  } from '@react-google-maps/api';

const containerStyle = {
    display:"block",
    margin: "0 auto",
  width: '450px',
  height: '450px'
};

const center = {lat: 19.54071289966309, lng: -99.17936111990389};

export const SearchMap = ({mapPosition,marketPosition}) => {
  //Conversion de string a numeros
    mapPosition.lat = Number(mapPosition.lat)
    mapPosition.lng = Number(mapPosition.lng);
    marketPosition.lat = Number(marketPosition.lat)
    marketPosition.lng = Number(marketPosition.lng);
    return (
        <>
             {/* <iframe key="hola" title="mapaLocation" className="SearchId_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860565428!2d-99.16869369206862!3d19.427023126223553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1618779139095!5m2!1ses!2smx" style={{border:0}} loading="lazy"></iframe> */}
             <GoogleMap
              mapContainerStyle={containerStyle}
              center={(mapPosition) ? mapPosition : center}
              zoom={17}
              
            >
                 <Marker position={marketPosition}
                    draggable={false}
           />
    

            </GoogleMap>
        </>
    )
}
