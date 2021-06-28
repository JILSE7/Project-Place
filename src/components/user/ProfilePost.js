import React, { useContext, useState } from "react";
import PropTypes from 'prop-types'
import { ModalMap } from "../googleMaps/ModalMap";
import { useParams } from "react-router";
import { PlaceContext } from "../../context/PlaceContext";
import { fetchConToken } from '../../helpers/fetch';
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

export const ProfilePost = ({post, posts, setPosts, userLogin, setuserPost}) => {
  const history = useHistory();
  
    const { id } = useParams();
    const { userLogin: { uid } } = useContext(PlaceContext);

    const [update, setUpdate] = useState(false) 
    //modal
    const [modalOpen, setmodalOpen] = useState(false)

    const handleEditPost = ()=> {
        setUpdate(true);
        setmodalOpen(true);
    }
    

    const handleDrop = async()=> {
        console.log(post._id);
        const newPosts = posts.filter(newPost => newPost._id !== post._id)

        try 
        {

            Swal.fire({
                title: '¿Estás seguro de eliminar esta publicación?',
                text: "¡Tu no podrás revertir esta publicación!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, elimínala!',
                cancelButtonText: 'Cancelar'
              }).then(async(result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    '¡Publicación eliminada!',
                    'Tu publicación ha sido eliminada exitosamente.',
                    'success'
                  )

                  const userUpdate = await (await fetchConToken(`users/${userLogin.uid}`, {posts: newPosts}, 'PUT')).json();
                  const placeDelete = await( await fetchConToken(`places/${post._id}`, {}, 'DELETE')).json();
                    

                  if (placeDelete.ok && userUpdate.ok)
                  {
                    setPosts(newPosts);
                    window.location.reload(true);
                  }
                }
              })

              
        } catch(e) {
          console.log(e);
        }
    }

    const handleRoute = async(e)=> {
      if (e.detail >= 2)
      {
        // CHECAR ESTO!! IMPORTANTE!!
        //let fullPath = window.location.href;
        //let rootPath = fullPath.split('/')[0]+"/"+fullPath.split('/')[1]+"/"+fullPath.split('/')[2];
        //window.location.href = `${rootPath}/search/${post._id}`; 
        history.push(`/search/${post._id}`)
      }
    }

    return(
        <>
        <div className="post-item" onClick={handleRoute}>
            <img className="post-image" src={post.image} alt={post.place} />
            <div className="post-item-info">
                <div className="icons">
                    <ul>
                        <li className="post-item-likes"><i className="fas fa-heart" aria-hidden="true"></i> {post.likes.length}</li>
                        <li className="post-item-comments"><i className="fas fa-comment" aria-hidden="true"></i> {post.comments.length}</li>
                    </ul>
                    <ul>
                        <input id="uploadPostPhoto" name="file"  type="file" accept="image/*" style={{display:"none"}}/>
                        <li className="edit-post" style={(uid === id) ? null: {display:"none"}} onClick={handleEditPost}><i className="fas fa-edit"></i></li>
                        <li id="drop" onClick={handleDrop} className="delete-post" style={(uid === id) ? null: {display:"none"}}><i className="fas fa-trash-alt"></i></li>
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