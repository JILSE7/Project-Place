import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import Swal from 'sweetalert2';
import { fetchConToken } from '../../../helpers/fetch';

export const SearchidImage = ({image, likes, comments, visitors, likeMe, placeId}) => {


    const [likesState, setlikesState] = useState(Number(likes));
    const [likeMeState, setLikesMeState] = useState(likeMe)
    // const [visitorState, setvisitor] = useState(visitors);

    
    const toggleLike = (e)=>{
        const classLike = e.target.classList;
        console.log(classLike);
        try {
            if(classLike.contains('far')){
                console.log('pponiendo like');
                setLikesMeState(true);
                setlikesState(Number(likesState) + 1)
                

            }else if(classLike.contains('fas')){
                console.log('quitando like');
                setLikesMeState(false);
                setlikesState(Number(likesState)-1)

            }
            
        } catch (error) {
            
        }

 
    }

    useEffect(() => {
       const addLikes = async() =>{
           const respuesta = await (await fetchConToken(`places/${placeId}`, {likes : likesState, likeMe: likeMeState}, 'PUT')).json();

           console.log(respuesta);
       }
       addLikes();

    }, [likeMeState])

    const toggleVisitors = () =>{
        console.log('toggle visitors');
    }


    return (
        <div className="searchId_img-container d-flex">
        
            <img className="searchId_img" src= {image} alt="profilePhoto"/>
            <div className="searchId_img-info">                                        
                <div className="searchId_img-info-social">              
                    <i onClick={toggleLike} className= {`${(likeMeState) ? "fas fa-surprise icon-social wonderl": "far fa-surprise icon-social wonder"}`}></i>
                    <p>{likesState}</p>
                </div>

                <div className="searchId_img-info-social">
                    <i onClick={toggleVisitors} className="fas fa-angle-double-down icon-social"></i>
                    <p>{visitors}</p>
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