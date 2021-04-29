import React, { memo, useContext } from "react";
import { PlaceContext } from '../../context/PlaceContext';
import Gallery from "./SearchScreen/Gallery"

export const SearchScreen = memo(() => {
  //PlaceContext
 const {places} = useContext(PlaceContext);
 console.log(places);
  
  return (
    <div>
      <Gallery places={places} /> 
       
    </div>
  );
});

