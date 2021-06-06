import React, { memo, useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import moment from 'moment'
import { fetchConToken } from '../../../helpers/fetch';
import { PlaceContext } from '../../../context/PlaceContext';


export const SearchIdComments = memo(({comment, placeId, comments}) => {

    //UserLogin
    const {userLogin: {uid}} = useContext(PlaceContext);

    //Destructuring 
    const {comment: comentario, date,likes, user, _id} = comment;

     //Extrayendo los likes del objeto likes
     const [likesState, setlikesState] = useState(likes);

     //Buscando tu ya le has dado like a la publicacion
     const [likeMeState, setLikesMeState] = useState(likes.some(like => like === uid));

    

   

    const toggleHeart = (e)=>{

            const classHeart = e.target.classList;
    
            if(classHeart.contains('far')){

                //addLike
                comments.forEach((comentario) => {//Recorriendo el arreglo de los comentarios
                    if(comentario._id === _id){//Ubicando el comentario
                        setlikesState([...likesState, uid]);
                        setLikesMeState(true);
        
                        
                    }
                });

            }else if(classHeart.contains('fas')){
                //RemoveLike
                comments.forEach((comentario) => {
                    if(comentario._id === _id){
                        setlikesState(likesState.filter(likes => likes != uid));
                        setLikesMeState(false);
                      
                    }
                });
            }   
    }


    useEffect(() => {
        comment.likes = likesState;
        const addLikes = async() =>{
            const respuesta = await (await fetchConToken(`places/${placeId}`,{comments : comments}, 'PUT')).json();
            if(!respuesta.ok){
                Swal.fire('Uppppsss..!', respuesta.msg, 'warning');
            }
        }
        addLikes();
    }, [likesState])


    return (
        <div className="searchId_comments-users">
               <div className="box-user">
                    <img
                    src={user.profilePhoto}
                    className="searchId_info-user-img me-2"
                    alt="ProfilePhoto"
                    />
                    <div className="Comment-user">
                        <p><span>{user.userName} </span>{comentario}</p>
                        <p className="mt-2 date">{moment(Number(date)).format('LLL')}</p>
                    </div>
               </div>
                   <div className="d-flex flex-column">
                    <i  onClick={(e)=> toggleHeart(e)} className={`${(likeMeState) ?  "fas fa-heart heart pointer" : "far fa-heart heart pointer" }`} ></i>
                    <p className="text-center">{likesState.length}</p>
                   </div>
            </div>
    )
})
