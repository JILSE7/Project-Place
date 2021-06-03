import React from 'react';

const InputSearch = ( {  }) => {

  return (
    <div className="input-group">
      <select className="custom-select" id="inputGroupSelect04">
        <option defaultValue>Ubicación...</option>
        {/* {
          statesMexico.map((stateMexico,index) => <option value={index} key={index}>{stateMexico}</option>)
        } */}
      </select>
      <div className="input-group-append">
        <button className="btn btn-primary" type="button">Buscar</button>
      </div>
    </div>
  )
}

export default InputSearch;
