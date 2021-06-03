import React, { useState, useContext } from 'react';
import { PlaceContext } from '../../../context/PlaceContext';

const InputSearch = ( { history }) => {

  const { places, setPlacesFiltered, uniqueCountries } = useContext(PlaceContext);
  const [filterPlaces, setFilterPlaces] = useState();
  const handleSubmit= (event) => {
    event.preventDefault();
    setPlacesFiltered(filterPlaces);
    history.push('/search');
    // setPlacesFiltered();
  }

  const handleChange =(event) =>{
    //console.log(`Seleccionaste ${event.target.value}`);
    if(!event.target.value){
      setFilterPlaces(places);
    }else{
      const filter = places.filter(place => place.country === event.target.value)
      //console.log(filter)
      setFilterPlaces(filter);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <select className="custom-select" onChange={handleChange}>
          <option defaultValue value="">Ubicación...</option>
          {uniqueCountries.map((country,index) => <option value={country} key={index}>{country}</option>)}
        </select>
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">Buscar</button>
        </div>
      </div>
    </form>
  )
}

export default InputSearch;
