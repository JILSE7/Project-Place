import React, { memo, useContext } from "react";
import { placeContext } from "../../Context/placeContext";
import Gallery from "./SearchScreen/Gallery"

export const SearchScreen = memo(() => {
  //PlaceContext
 const {data} = useContext(placeContext);
  console.log(data);
  return (
    <div>
      {(data !== null)? <Gallery places={data} /> : null}
       
    </div>
  );
});

