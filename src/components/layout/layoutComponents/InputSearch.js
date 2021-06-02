import React, { useState, useContext } from 'react';
import { PlaceContext } from '../../../context/PlaceContext';

const InputSearch = ( { statesMexico, history }) => {

  const { places, setPlacesFiltered } = useContext(PlaceContext);
  const [filterPlaces, setFilterPlaces] = useState();
  const handleSubmit= (event) => {
    event.preventDefault();
    setPlacesFiltered(filterPlaces);
    history.push('/search');
    // setPlacesFiltered();
  }

  const handleChange =(event) =>{
    console.log(`Seleccionaste ${event.target.value}`);
    if(!event.target.value){
      setFilterPlaces(places);
    }else{
      const filter = places.filter(place => place.city === event.target.value)
      console.log(filter)
      setFilterPlaces(filter);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <select className="custom-select" onChange={handleChange}>
          <option defaultValue value="">Ubicación...</option>
          {statesMexico.map((stateMexico,index) => <option value={stateMexico} key={index}>{stateMexico}</option>)}
        </select>
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">Buscar</button>
          {/* <Link to="/search"><button className="btn btn-primary" type="submit">Buscar</button></Link> */}
        </div>
      </div>
    </form>
  )
}

export default InputSearch;
