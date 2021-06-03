import React from 'react';
import PropTypes from 'prop-types';

import InputSearch from '../../layout/layoutComponents/InputSearch';

import heroOneSlide from '../../../assets/Hero_oneslide.png';
import heroTwoSlide from '../../../assets/Hero_twoslide.png';
import heroThreeSlide from '../../../assets/Hero_threeslide.png';


const Hero = ( { history } ) => {
  return (
    <>
      <div id="carouselPlaces" className="carousel slide carousel-fade d-none d-md-block" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={heroOneSlide} className="d-block w-100" alt={heroOneSlide} />
          </div>
          <div className="carousel-item">
            <img src={heroTwoSlide} className="d-block w-100" alt={heroTwoSlide} />
          </div>
          <div className="carousel-item">
            <img src={heroThreeSlide} className="d-block w-100" alt={heroThreeSlide} />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselPlaces" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselPlaces" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="d-md-none mt-5">
        <img src={heroOneSlide} className="mb-3 img-fluid" alt={heroOneSlide} />
        <div className="container">
          <InputSearch history={history}/>
        </div>
      </div>
    </>
  )
}

Hero.propTypes = {
  statesMexico: PropTypes.array.isRequired,
}

export default Hero;
