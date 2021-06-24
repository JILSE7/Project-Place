import React, { memo, useContext } from "react";
import { PlaceContext } from '../../context/PlaceContext';
import InputSearch from "../layout/layoutComponents/InputSearch";
import Gallery from "./SearchScreen/Gallery"

export const SearchScreen = memo(({history}) => {
  //PlaceContext
 const {places, placesFiltered} = useContext(PlaceContext);
  
  console.log(placesFiltered);

  return (
    <div className="mt-5 w-100">
      {window.location.pathname == "/search" &&
        
      <div className="Search__inputS">
        <h2 className="text-center">¿Quieres buscar un pais?</h2>
        {placesFiltered &&<p>pais buscado: {placesFiltered[0].country}</p>}
        <InputSearch history={history}/>
      </div>
      }
      
      <Gallery places={placesFiltered ? placesFiltered : places} />
       
    </div>
  );
});

