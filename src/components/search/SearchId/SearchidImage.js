import React, { useState } from 'react';
//Generic Patch
import {toggleLike, toggleVisitor} from '../../../helpers/Patch'
import PropTypes from 'prop-types'

export const SearchidImage = ({image, social, placeId}) => {
    const {likes, comments, visitors, likeMe} = social;

    const [likesState, setmeGusta] = useState(likes);
    const [likesMeState, setLikesMe] = useState(likeMe)
    const [visitorState, setvisitor] = useState(visitors);
    return (
        <div className="searchId_img-container d-flex">
        
            <img className="searchId_img" src= {image} alt="profilePhoto"/>
            <div className="searchId_img-info">                                        
                <div className="searchId_img-info-social">              
                    <i onClick={(e)=> toggleLike(e, likesState, setmeGusta,likesMeState, setLikesMe, placeId)} className= {`${(likesMeState) ? "fas fa-surprise icon-social wonderl": "far fa-surprise icon-social wonder"}`}></i>
                    <p>{likesState}</p>
                </div>

                <div className="searchId_img-info-social">
                    <i className="fas fa-angle-double-down icon-social" onClick={(e)=> toggleVisitor(e, visitorState, setvisitor)}></i>
                    <p>{visitorState}</p>
                </div>
                <div className="searchId_img-info-social">
                    <i className="far fa-comment-dots icon icon-social coment"></i>
                    <p>{comments.length}</p>
                </div>
            </div>
            
        </div>
    )
}


SearchidImage.propTypes = {
    image: PropTypes.string
}