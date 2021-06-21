import React, { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost';

export const ProfilePostsList = ({userPost, setuserPost}) => {
    //Nuevo estado con los post
    const [posts, setPosts] = useState([]);

    //1.- id
    //2.- filter !==
    //3.- mandar la peticion



    useEffect(() => {
        setPosts(userPost.posts)
    }, [userPost])

    console.log(posts);
    return (
        <div className="container-posts">
            <div className="posts-list">
                {
                    posts !== undefined ?
                        (posts.map(post => {
                            return <ProfilePost key={post._id} post = {post} posts = {posts} setPosts = {setPosts} userLogin = {userPost} setuserPost = {setuserPost}/>
                        }))
                        : null
                }
            </div>
        </div>
    )
}