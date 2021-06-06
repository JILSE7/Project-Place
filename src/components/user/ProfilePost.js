import React from "react";

export const ProfilePost = ({post}) => {
    console.log(post);
    return(
        <div className="post-item">
            <img className="post-image" src={post.image} alt={post.place} />
            <div className="post-item-info">
                <ul>
                    <li className="post-item-likes"><i className="fas fa-heart" aria-hidden="true"></i> {post.likes.length} </li>
                    <li className="post-item-comments"><i className="fas fa-comment" aria-hidden="true"></i> {post.comments.length} </li>
                </ul>
                <h4> {post.description} </h4>
            </div>
        </div>
    );
};