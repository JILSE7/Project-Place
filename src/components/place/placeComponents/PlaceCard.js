import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = ({ place, description = '', img, index}) => {
  console.log(img);
  return (
    <div className="col">
      <div className="card border-light">
        <img className="card-img-top rounded" src={img} alt={place} />
        <div className="card-body">
          <h5 className="card-title">{place}</h5>
          <p className="card-text">{description.slice(0,147)}</p>
        </div>
      </div>
    </div>
  )
}

PlaceCard.propTypes = {
  place: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PlaceCard;
