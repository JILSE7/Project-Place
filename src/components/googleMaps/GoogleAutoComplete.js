import React, { useEffect, useState } from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import { getCity, getCountry } from '../../helpers/maps';


export const GoogleAutoComplete = ({newPlace, setnewPlace}) => {


    const [address, setaddress] = useState("")

    const handleSelect = async(address) => {
        try {
            const results = await geocodeByAddress(address);
            const ll = await getLatLng(results[0]);
        
            console.log(results);
            const {address_components} = results[0]
            let ciudad = getCity(address_components);
            let pais = getCountry(address_components);  
            console.log(ciudad, pais);

            if(results && address_components){
                setnewPlace({
                  ...newPlace,
                  address: results[0].formatted_address,
                  city: (typeof ciudad === "string")? ciudad : ciudad.long_name,
                  country: pais.long_name,
                  mapPosition:{
                    lat: ll.lat,
                    lng: ll.lng
                  },
                  marketPosition:{
                    lat: ll.lat,
                    lng: ll.lng
                  }
                })
                console.log('me movi');
              }
            
        } catch (error) {
            console.log(error);
        } 
    }

    useEffect(() => {
        localStorage.setItem('ubication', JSON.stringify(newPlace))
   }, [newPlace, setnewPlace]);


    return (
        <div className="google_autocomplete">      
    
        {/* <p>lat: {ubication.marketPosition.lat}</p>
        <p>lng: {ubication.marketPosition.lat}</p>
        <p>adrress: {ubication.address}</p> */}
        <PlacesAutocomplete
        value={address}
        onChange={setaddress}
        onSelect={handleSelect}
        id="inputMapa"
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, i) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#ffa500ba', cursor: 'pointer',  paddingBottom: '15px', color: 'black' }
                  : { backgroundColor: 'transparent', cursor: 'pointer',  paddingBottom: '15px'  };
                return (
                  <div
                  className="mb-5" 
                  id="div_sugerencia"
                  key={i}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span className="mb-5" id="sugerencia">{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <i className="fas fa-search-location"></i>
      </div>

  
    )
}
