import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { uploadPhoto } from '../../helpers/maps';
import { fetchConToken } from '../../helpers/fetch';
import Swal from 'sweetalert2';
import { useParams } from "react-router";
import { PlaceContext } from "../../context/PlaceContext";


const ProfilePost = ({post}) => {

    const [publicacion, setPublicacion] = useState({})

    const { id } = useParams();

    const { userLogin: { uid }  } = useContext(PlaceContext);

    const [postPhoto, setPostPhoto] = useState(post.image);

    useEffect(() => {
        setPublicacion(post);
        setPostPhoto(post.image);
    }, [setPublicacion, post]);

    const handleClickPostPhoto =(e)=> {
        e.preventDefault();
        document.querySelector('#uploadPostPhoto').click();
    }

    const handleFileChangePostPhoto = async(e)=> {
        try 
        {
          const file = e.target.files[0];
  
          Swal.fire({
              title: 'Uploading',
              text: 'Please wait....',
              allowOutsideClick: false,
              showConfirmButton: false,
              willOpen: ()=>{
                  Swal.showLoading();
              }
          })
  
          const postPhoto = await uploadPhoto(file);
          Swal.close();
  
          Swal.fire({
            imageUrl: postPhoto,
            imageWidth: 800,
            imageAlt: 'A tall image'
          })

          const upload = await (await fetchConToken(`places/${uid}`, {}, 'GET')).json();
          
          console.log(upload);

          if (upload.ok)
          {
            setPostPhoto(postPhoto);
          }
  
  
        } catch(e) {
          console.log(e);
        }
      }

    return(
        <div className="post-item">
            <img className="post-image" src={post.image} alt={post.place} />
            <div className="post-item-info">
                <div className="icons">
                    <ul>
                        <li className="post-item-likes"><i className="fas fa-heart" aria-hidden="true"></i> {post.likes.length}</li>
                        <li className="post-item-comments"><i className="fas fa-comment" aria-hidden="true"></i> {post.comments.length}</li>
                    </ul>
                    <ul>
                        <input id="uploadPostPhoto" name="file" onChange={handleFileChangePostPhoto} type="file" style={{display:"none"}}/>
                        <li className="change-image" onClick={handleClickPostPhoto}><i class="fas fa-images"></i></li>
                        <li className="edit-post"><i class="fas fa-edit"></i></li>
                    </ul>
                </div>
                <h4> {post.description} </h4>
            </div>
        </div>
    );
};

ProfilePost.propTypes = {
    post: PropTypes.object.isRequired
};

export default ProfilePost;