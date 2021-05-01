import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const PlaceCard = ({dataSource, history, id}) => {
  console.log(dataSource.users);
  return (
    <div className="searchScreen_foto-card">
      <div className="d-flex flex-row align-items-center">
        {/* <img className="searchScreen_user-photo" src={dataSource.users.profilePhoto} alt="Photo" />
        <p className="font-weight-bold p-0 m-0 ml-2 ">{dataSource.users.username}</p> */}
      </div>
      <div className="searchScreen_image-container">
        <Link to={`/search/${dataSource.id}`}>
        <img src={`${dataSource.image}`} />
        </Link>
        <div className="searchScreen_middle">
            <div className="searchScreen_image-hover-text">ABRIR</div>
        </div>
      </div>
      <h5 className="card-title">{dataSource.place}</h5>
      <p className="card-text">{dataSource.address}</p>
      <div className="searchScreen_tags-container">
        <div className="tags-slider">
            {dataSource.tags.map(tag => {
                return <span 
                className="badge rounded-pill text-light text-thin py-1 px-2 mx-1 bg-secondary">{tag}</span>
            })}
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
