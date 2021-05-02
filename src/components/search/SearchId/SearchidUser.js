import React from 'react'

export const SearchidUser = ({user}) => {
    let follow = false;

    return (
        <div className="searchId_info-user">
            <div className="d-flex align-items-center">
                <img
                src={user.profilePhoto}
                className="searchId_info-user-img me-2"
                />
                <div className="searchId_info-userid">
                    <h5>{user.username}</h5>
                    <div className="d-flex">
                        <p className="me-2"> <i className="fas fa-users search-icon-user"></i>{user.followers} </p>
                        <p className="ml-3" ><i className="fas fa-image search-icon-user"></i>{user.posts.length}</p>
                    </div>
                </div>
            </div>
            {(follow)? <button className="btn btn-warning d-flex align-items-center"><i className="fas fa-user-check"></i></button> :
                       <button className="btn btn-success d-flex align-items-center"><i class="fas fa-user-plus"></i></button>}
        </div>
    )
}
