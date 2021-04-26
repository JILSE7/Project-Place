import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

const FotoCard = ({dataSource, history}) => {

  return (
    <div className="searchScreen_foto-card">
      <div className="searchScreen_image-container">
        <Link to={`/search/${dataSource.id}`}>
        <img src={dataSource.image} />
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
      <p className="fst-italic">
          Posted by: 
            <span className="user-link">
                {`@${dataSource.userId}`}
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


export default withRouter(FotoCard);
