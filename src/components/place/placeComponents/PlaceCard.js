import React from 'react';

const PlaceCard = ({ place, description = '' }) => {
  return (
    <div className="col">
      <div className="card border-light">
        <img className="card-img-top rounded" src="https://i2.wp.com/foodandpleasure.com/wp-content/uploads/2020/08/cenote-ik-kil-mexico.jpg?fit=1024%2C680&ssl=1" alt={place} />
        <div className="card-body">
          <h5 className="card-title">{place}</h5>
          <p className="card-text">{description.slice(0,147)}</p>
        </div>
      </div>
    </div>
  )
}

export default PlaceCard;
