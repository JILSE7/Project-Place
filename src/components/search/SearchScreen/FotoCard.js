import React from "react";
import PropTypes from "prop-types";

const FotoCard = ({dataSource}) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={dataSource.imageUrl}/>
        <div class="middle">
            <div class="image-hover-text">ABRIR</div>
        </div>
      </div>
      <h5 className="card-title">{dataSource.title}</h3>
      <p class="card-text">{dataSource.location}</p>
      <div className="container">
        <div className="tags-slider">
            {dataSource.tags.map(tag => {
                return <span 
                className="badge rouded-pill bg-secondary">{tag}</span>
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
