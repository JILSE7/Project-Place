import React, { useContext, useState } from "react";
import PropTypes from 'prop-types'
import { ModalMap } from "../googleMaps/ModalMap";
import { useParams } from "react-router";
import { PlaceContext } from "../../context/PlaceContext";

export const ProfilePost = ({post, userLogin, setuserPost}) => {

    const { id } = useParams();
    const { userLogin: { uid } } = useContext(PlaceContext);

    const [update, setUpdate] = useState(false) 
    //modal
    const [modalOpen, setmodalOpen] = useState(false)

    const handleEditPost = ()=> {
        setUpdate(true);
        setmodalOpen(true);
    }
    
    const handleClickPostPhoto =(e)=> {
        e.preventDefault();
        document.querySelector('#uploadPostPhoto').click();
    }
    
    const handleDrop = () => {
        console.log(post._id);
        
    }

    return(
        <>
        <div className="post-item">
            <img className="post-image" src={post.image} alt={post.place} />
            <div className="post-item-info">
                <div className="icons">
                    <ul>
                        <li className="post-item-likes"><i className="fas fa-heart" aria-hidden="true"></i> {post.likes.length}</li>
                        <li className="post-item-comments"><i className="fas fa-comment" aria-hidden="true"></i> {post.comments.length}</li>
                    </ul>
                    <ul>
                        <input id="uploadPostPhoto" name="file"  type="file" style={{display:"none"}}/>
                        <li className="edit-post" style={(uid === id) ? null: {display:"none"}} onClick={handleEditPost}><i class="fas fa-edit"></i></li>
                        <li id="drop" onClick={handleDrop} className="delete-post" style={(uid === id) ? null: {display:"none"}}><i class="fas fa-trash-alt"></i></li>
                    </ul>
                </div>
                <h4> {post.description} </h4>
            </div>
        </div>
        <ModalMap setmodalOpen={setmodalOpen} modalOpen= {modalOpen} post= {post} update= {update} userLogin={userLogin} setuserPost ={setuserPost}/>
        </>
    );
};

ProfilePost.propTypes = {
    post: PropTypes.object.isRequired
};

export default ProfilePost;