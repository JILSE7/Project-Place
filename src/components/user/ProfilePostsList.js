import React, { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost';

export const ProfilePostsList = ({userPost, setuserPost}) => {
    //Nuevo estado con los post
    const [post, setPost] = useState([]);

    //1.- id
    //2.- filter !==
    //3.- mandar la peticion



    useEffect(() => {
        setPost(userPost.posts)
    }, [userPost])

    console.log(post);
    return (
        <div className="container-posts">
            <div className="posts-list">
                {
                    post !== undefined ?
                        (post.map(post => {
                            return <ProfilePost key={post._id} post = {post} userLogin = {userPost} setuserPost = {setuserPost}/>
                        }))
                        : null
                }
            </div>
        </div>
    )
}