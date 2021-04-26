import React from "react";
import PropTypes from "prop-types";

const FotoCard = ({dataSource}) => {
  return (
    <div className="searchScreen_foto-card">
      <div className="d-flex flex-row align-items-center">
        <img className="searchScreen_user-photo" src={dataSource.ownerPhoto} alt="Photo"/>
        <p className="font-weight-bold p-0 m-0 ml-2 ">{dataSource.owner}</p>
      </div>
      <div className="searchScreen_image-container">
        <img src={dataSource.imageUrl} />
        <div className="searchScreen_middle">
            <div className="searchScreen_image-hover-text">ABRIR</div>
        </div>
      </div>
      <div className="px-3 py-1">
        <h5 className="card-title">{dataSource.title}</h5>
        <p className="card-text">{dataSource.location}</p>
        <div className="searchScreen_tags-container">
          <div className="tags-slider mb-2">
              {dataSource.tags.map(tag => {
                  return <span 
                  className="badge rounded-pill text-light text-thin py-1 px-2 mx-1 bg-secondary">{tag}</span>
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

FotoCard.propTypes = {
  dataSource: PropTypes.shape({
    title: PropTypes.string,
    owner: PropTypes.string,
    ownerPhoto: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  })
};

export default FotoCard;
