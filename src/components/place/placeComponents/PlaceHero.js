import React, { memo } from 'react';
import hero from '../../../assets/hero-Fullwidth.png';
import PropTypes from 'prop-types';

const Hero = memo(( { statesMexico } ) => {
  console.log(statesMexico);
  return (
    <>
      <div className="container pt-3 search">
        <div className="input-group">
          <select className="custom-select" id="inputGroupSelect04">
            <option defaultValue>Choose...</option>
            {
              statesMexico.map((stateMexico,index) => <option value={index} key={index}>{stateMexico}</option>)
            }
          </select>
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">Buscar</button>
          </div>
        </div>
        <h1>DESCUBRE <br/> NUEVOS LUGARES</h1>
        <img src={hero} alt='hero' className='img-fluid' />
      </div>

      <div className="hero">
        <section>
          <div className="input-group">
            <select className="custom-select" id="inputGroupSelect04">
              <option defaultValue>Choose...</option>
              {
                statesMexico.map((stateMexico,index) => <option value={index} key={index}>{stateMexico}</option>)
              }
            </select>
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">Buscar</button>
            </div>
          </div>
        </section>
        <h1>DESCUBRE <br/> NUEVOS LUGARES</h1>
      </div>
    </>
  )
})

Hero.propTypes = {
  statesMexico: PropTypes.array.isRequired,
}

export default Hero;
