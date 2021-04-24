import React, { useContext } from "react";
import { placeContext } from "../../Context/placeContext";
import Gallery from "./SearchScreen/Gallery"

export const SearchScreen = () => {
 const places = useContext(placeContext);
  return (
    <div>
      
      <Gallery places={places} />
    </div>
  );
};

