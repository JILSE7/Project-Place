import React, { useState } from "react";
import { ModalMap } from "../googleMaps/ModalMap";

export const ProfilePost = ({post}) => {
    
    //modal
    const [modalOpen, setmodalOpen] = useState(false)

    const handleEditPost = ()=> {
        setmodalOpen(true);
    }
    return(
        <>
        <div className="post-item">
            <img className="post-image" src={post.image} alt={post.place} />
            <div className="post-item-info" onDoubleClick={handleEditPost}>
                <ul>
                    <li className="post-item-likes"><i className="fas fa-heart" aria-hidden="true"></i> {post.likes.length} </li>
                    <li className="post-item-comments"><i className="fas fa-comment" aria-hidden="true"></i> {post.comments.length} </li>
                </ul>
                <h4> {post.description} </h4>
            </div>
        </div>
        <ModalMap setmodalOpen={setmodalOpen} modalOpen= {modalOpen} post= {post}/>
        </>
    );
};