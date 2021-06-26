import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import Swal from 'sweetalert2';
import { fetchConToken } from '../../../helpers/fetch';
//Iconos
import { RiMapPinUserLine, RiMapPin2Line } from "react-icons/ri";

export const SearchidImage = memo(({image, likes, comments, visitors: visitas,placeId, userLogin}) => {



    //Extrayendo los likes del objeto likes
    const [likesState, setlikesState] = useState(likes.map(like => like._id));
    //Buscando tu ya le has dado like a la publicacion
    const [likeMeState, setLikesMeState] = useState(likes.some(like => like._id === userLogin.uid));
    //userNames 
    const [userNames, setuserNames] = useState(likes.map(like => like.userName));
    //Visitors
    const [visitors, setVisitors] = useState(visitas.map(id => id._id));
    const [visitorMe, setvisitorMe] = useState(visitas.some(visit => visit._id == userLogin.uid));
  

    //Likes
    const toggleLike = (e)=>{
        const classLike = e.target.classList;
            if(classLike.contains('far')){
                
                console.log('pponiendo like');
                setlikesState([...likesState, userLogin.uid]);
                setuserNames([...userNames,userLogin.userName])
                setLikesMeState(true);
            }else if(classLike.contains('fas')){
                console.log('quitando like');
                setlikesState(likesState.filter(id => id !== userLogin.uid));
                setuserNames(userNames.filter(userName => userName != userLogin.userName));
                setLikesMeState(false);
                
            }
    };


    useEffect(() => {

       const addLikes = async() =>{
           const respuesta = await (await fetchConToken(`places/${placeId}`, {likes : likesState}, 'PUT')).json();
           if(!respuesta.ok){
               Swal.fire('Uppppsss..!', respuesta.msg, 'warning');
           }
       }
       addLikes();
       
    }, [likesState]);


    const toggleVisitors = (e) =>{
        e.preventDefault()
        console.log('hola');
        if(visitors.find(user => user === userLogin.uid )){
            console.log('quitando visita');
            setVisitors(visitors.filter(id => id !== userLogin.uid));
            setvisitorMe(false); 
        }else{
            console.log('agregando visita');
            setVisitors([...visitors, userLogin.uid]);
            setvisitorMe(true); 
        }
        window.location.reload();
    };

 

    useEffect(() => {
        const addVisitors = async() =>{
            const respuesta = await (await fetchConToken(`places/${placeId}`, {visitors : visitors}, 'PUT')).json();
            if(!respuesta.ok){
                Swal.fire('Uppppsss..!', respuesta.msg, 'warning');
            }
        }
        addVisitors();
     }, [visitors]);

     const mostarLIst = () => document.querySelector('.searchImage__divList').style.display = 'block';
     const cerrarList = () => document.querySelector('.searchImage__divList').style.display = 'none';
     
 
    return (
        <div className="searchId_img-container d-flex">
        
           <img className="searchId_img" src= {image} alt="profilePhoto"/>
            <div className="d-flex  w-100 justify-content-between align-items-center">
                <div className="searchId_img-info">                                        
                    <div className="searchId_img-info-social">              
                        <i onClick={toggleLike} className= {`${(likeMeState) ? "fas fa-heart icon-social wonderl": "far fa-heart icon-social wonder"}`}></i>
                        <p>{likesState.length}</p>
                    </div>

                    <div className="searchId_img-info-social">
                        { visitorMe ? 
                            (<RiMapPinUserLine onClick={toggleVisitors} style={{color:"green"}} className=" icon-social"/>)
                                    :
                            (<RiMapPin2Line onClick={toggleVisitors}  className="icon-social vists" />)

                        }
                        <p>{visitors.length}</p>
                    </div>
                    <div className="searchId_img-info-social">
                        <i className="far fa-comment-dots icon icon-social coment"></i>
                        <p>{comments.length}</p>
                    </div>
                </div>
                <div className="searchId_img-info-likes-social">
                    {
                        (userNames.length >= 4) ? 
                        (<p className="userlist" onMouseEnter={mostarLIst} onMouseOut={cerrarList}>{`${userNames[0]}, ${userNames[1]}, ${userNames[2]} & ${userNames.length-3} personas mas les encanta esta publicacion`}</p>)
                                            :
                        (userNames.length >= 3)  ? 
                        (<p>{`${userNames[0]}, ${userNames[1]} & ${userNames[2]}  les encanta esta publicacion`}</p>)
                                            :
                        ( userNames.length>1 && userNames.length<=2) ? 
                        (<p className="userList">{`${userNames[0]}, ${userNames[1]} les encanta esta publicacion`}</p>)
                                            :
                        (userNames.length>=1)   ? 
                        (<p>{`${userNames[0]} le encanta esta publicacion`}</p>)
                                            :
                        (<p>{`Esta publicacion aun no tiene reacciones`}</p>)            
                    }
                </div>
            </div> 
            {   (userNames.length >= 4)  && 
                <div className="searchImage__divList">
                        {userNames.map(user => (
                            <p>{user}</p>
                        ))}
                </div>

            }
            
        </div>
    )
})


SearchidImage.propTypes = {
    image: PropTypes.string
}