import React from "react";
import PropTypes from "prop-types";

const FotoCard = ({dataSource}) => {
  return (
    <div className="searchScreen_foto-card">
      <div className="searchScreen_image-container">
        <img src={dataSource.imageUrl} />
        <div className="searchScreen_middle">
            <div className="searchScreen_image-hover-text">ABRIR</div>
        </div>
      </div>
      <h5 className="card-title">{dataSource.title}</h5>
      <p className="card-text">{dataSource.location}</p>
      <div className="searchScreen_tags-container">
        <div className="tags-slider">
            {dataSource.tags.map(tag => {
                return <span 
                className="badge rounded-pill text-light text-thin py-1 px-2 mx-1 bg-secondary">{tag}</span>
            })}
        </div>
      </div>
      <p className="fst-italic">
          Posted by: 
            <span className="user-link">
                {`@${dataSource.owner}`}
            </span>
      </p>
    </div>
  );
};

FotoCard.propTypes = {
  dataSource: PropTypes.shape({
    title: PropTypes.string,
    owner: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  })
};

export default FotoCard;
