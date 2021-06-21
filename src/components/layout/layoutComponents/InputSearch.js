import React, { useState, useContext } from 'react';
import { PlaceContext } from '../../../context/PlaceContext';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';

const InputSearch = ( { history }) => {

    

  const { places, setPlacesFiltered, uniqueCountries, lastSearch ,setlastSearch } = useContext(PlaceContext);
  
  const [filterPlaces, setFilterPlaces] = useState();
  const [country, setcountry] = useState("")
  const handleSubmit= (event) => {
    event.preventDefault();
    setPlacesFiltered(filterPlaces);
    //history.push('/search');
    // setPlacesFiltered();
  }
  console.log(uniqueCountries);
  
  const handleChange =(event) =>{
    //console.log(`Seleccionaste ${event.target.value}`);
    setlastSearch(event.target.innerText);

    console.log(lastSearch);
    if(!lastSearch){
      setFilterPlaces(places);
      history.push('/search');
    }else{
      const filter = places.filter(place => place.country === event.target.innerText)
      //console.log(filter)
      setFilterPlaces(filter);
      
    }

    handleSubmit(event);
  }

  //autocomplete
    const defaultProps = {
      options: uniqueCountries,
      getOptionLabel: (option) => option,
    };

  return (
    <form onSubmit={handleSubmit} className="w-50">
      <div className="input-group Search__inputS">
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        className="w-100"
        autoComplete
        includeInputInList
        value={lastSearch}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} label={"Busca un Pais"} margin="normal" />}
      />  
      </div>
    </form>
  )
}

export default InputSearch;
