import React, { memo, useContext } from "react";
import { PlaceContext } from '../../context/PlaceContext';
import Gallery from "./SearchScreen/Gallery"

export const SearchScreen = memo(() => {
  //PlaceContext
 const {places} = useContext(PlaceContext);

  
  return (
    <div className="mt-5">
      <Gallery places={places} /> 
       
    </div>
  );
});

