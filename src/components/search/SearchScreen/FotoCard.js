import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import moment from 'moment'
import { GoClock } from "react-icons/go";
const FotoCard = ({dataSource, history, id}) => {

  console.log(dataSource.date);

  return (
    <div className="searchScreen_foto-card">
      <div className="head d-flex justify-content-between align-items-center">
        <div className="d-flex flex-row align-items-center">
          <img className="searchScreen_user-photo" src={dataSource.user.profilePhoto} alt={dataSource.place} loading="lazy" />
          <p className="font-weight-bold p-0 m-0 ml-2 ">{dataSource.user.userName}</p>
        </div>
        <div className="d-flex">
        <GoClock style={{color: "orangered"}}/>
        <p className="date">{moment(Number(dataSource.date)).format('LL')}</p>
        </div>
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
      <h5 className="card-title px-2 align-middle">
        <i 
          className="fas fa-globe-americas fa-xs mr-2"
          style={{color: "orange"}}>
        </i>
        {dataSource.place}
      </h5>
      <p className="card-text px-2 align-middle">
        <i 
          className="fas fa-map-marker-alt fa-xs mr-2"
          style={{color: "orange"}}>
        </i>
        {dataSource.city}</p>
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
