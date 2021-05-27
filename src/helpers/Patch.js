import {URL} from './Gets'


export const handleAddComment = async(placeId,commentsArr,newComment, setcommentsArr, setComment)=>{
    console.log(placeId);
    //PATCH de los comentarios
    try {
        await fetch(`${URL}/places/${placeId}`, {
            method: 'PATCH',
            body: JSON.stringify({comments: [...commentsArr, newComment]}),
            headers: {
                'Content-Type': 'application/json'
            }
            
        });

    } catch (error) {
        console.log(error);
    }

    setcommentsArr([...commentsArr, newComment]);
    setComment('')
};



//Heart
export const toggleHeart = async(e,likes, placeId, comment, arrComents, setHeartcomments) =>{

    const classHeart = e.target.classList;

    if(classHeart.contains('far')){
        //addLike
        arrComents.forEach((comentario, i, array) => {
            if(comentario.id === comment.id){
                comentario.likeMe = true;
                comentario.likes = likes+1;
            }
        });
        
        
  
        const commentsUpdate = {comments: arrComents}
        setHeartcomments(likes+1)
        await patchGeneric(placeId,commentsUpdate);
           
    }else if(classHeart.contains('fas')){
        arrComents.forEach((comentario, i, array) => {
            if(comentario.id === comment.id){
                comentario.likeMe = false;
                comentario.likes = (likes <=0)? 0: likes-1;
            }
        })
        
      
        const commentsUpdate = {comments: arrComents}
        setHeartcomments((likes <=0)? 0: likes-1);
        await patchGeneric(placeId,commentsUpdate);
    }
    
}


//Likes
export const toggleLike = async(e,likes, estadoLikes, likeMe, estadoLikeMe, placeId) =>{

    if(likeMe){
        estadoLikes(likes -1);
        estadoLikeMe(false);
        await patchGeneric(placeId, {likes: likes, likeMe:likeMe})


    }else {
        estadoLikes(likes+1)
        estadoLikeMe(true);
        await patchGeneric(placeId, {likes: likes, likeMe:likeMe})
    }
};

//Pendiente
// export const toggleVisitor = (e, visitorState, state)=>{
//     console.log(e.target);
//     console.log(visitorState);
//     console.log(state);
// }




export const patchGeneric = async(placeId, object) =>{
     try {
        await fetch(`${URL}/places/${placeId}`, {
            method: 'PATCH',
            body: JSON.stringify(object),
            headers: { 'Content-Type': 'application/json'}});
    } catch (error) {console.log(error);}
}
