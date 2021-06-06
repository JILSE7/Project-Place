import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

const FotoCard = ({dataSource, history, id}) => {



  return (
    <div className="searchScreen_foto-card">
      <div className="d-flex flex-row align-items-center">
        <img className="searchScreen_user-photo" src={dataSource.user.profilePhoto} alt={dataSource.place} loading="lazy" />
        <p className="font-weight-bold p-0 m-0 ml-2 ">{dataSource.user.userName}</p>
      </div>
      <div className="searchScreen_image-container">
        <Link to={`/search/${dataSource.placeId}`}>
        <img src={`${dataSource.image}`} alt={dataSource.place} />
        <div className="searchScreen_middle">
            <div className="searchScreen_image-hover-text">
              <span ><i className="fas fa-heart" aria-hidden="true"></i> {dataSource.likes.length} </span>
              <span ><i className="fas fa-comment" aria-hidden="true"></i> {dataSource.comments.length} </span>
            </div>
        </div>
        </Link>
      </div>
      <h5 className="card-title">{dataSource.place}</h5>
      <p className="card-text">{dataSource.city}</p>
      <div className="searchScreen_tags-container">
        <div className="tags-slider">
            {dataSource.tags.map((tag, i) => {
                return <span 
                className="badge rounded-pill py-1 px-2 mx-1" key={i}>{tag}</span>
            })}
        </div>
      </div>
     
    </div>
  );
};

FotoCard.propTypes = {
  dataSource: PropTypes.shape({
    title: PropTypes.string,
    owner: PropTypes.string,
    ownerPhoto: PropTypes.string,
    imageUrl: PropTypes.string,
    location: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    likes: PropTypes.array,
    comments: PropTypes.arrayOf(PropTypes.shape({
      comment: PropTypes.string,
      likes: PropTypes.string,
      profilePhoto: PropTypes.string,
      userID: PropTypes.number
    }))
  })
};


export default withRouter(FotoCard);
