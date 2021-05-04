import React from "react";

export const ProfilePost = ({post}) => {
    return(
        <div className="post-item">
            <img className="post-image" src={post.photo} alt="" />
            <div className="post-item-info">
                <ul>
                    <li className="post-item-likes"><i className="fas fa-heart" aria-hidden="true"></i> {post.likes} </li>
                    <li className="post-item-comments"><i className="fas fa-comment" aria-hidden="true"></i> {post.comments} </li>
                </ul>
                <h4> {post.description} </h4>
            </div>
        </div>
    );
};