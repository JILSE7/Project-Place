import React from 'react'
import ProfilePost from './ProfilePost';

export const ProfilePostsList = ({userPost, setuserPost}) => {
    
    return (
        <div className="container-posts">
            <div className="posts-list">
                {
                    userPost.posts !== undefined ?
                        (userPost.posts.map(post => {
                            return <ProfilePost key={post._id} post = {post} userLogin = {userPost} setuserPost = {setuserPost}/>
                        }))
                        : null
                }
            </div>
        </div>
    )
}