import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export const SearchidUser = ({user}) => {
    let follow = false;
    return (
        <div className="searchId_info-user">
            <div className="d-flex align-items-center">
                <img
                src={user.profilePhoto}
                className="searchId_info-user-img me-2"
                alt="userPhoto"
                />
                <div className="searchId_info-userid">
                   <Link to= {`/user/${user._id}`}> <h5>{user.userName}</h5> </Link>
                    <div className="d-flex">
                        <p className="me-2"> <i className="fas fa-users search-icon-user"></i>{user.followers} </p>
                        <p className="ml-3" ><i className="fas fa-image search-icon-user"></i>{user.posts.length}</p>
                    </div>
                </div>
            </div>
            {(follow)? <button className="btn btn-warning d-flex align-items-center"><i className="fas fa-user-check"></i></button> :
                       <button className="btn btn-success d-flex align-items-center"><i className="fas fa-user-plus"></i></button>}
        </div>
    )
}

SearchidUser.propTypes = {
   user: PropTypes.object
  }