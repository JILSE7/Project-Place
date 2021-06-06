import React from 'react'
import { ProfilePost } from './ProfilePost';

export const ProfilePostsList = ({user}) => {
    return (
        <div className="container-posts">
            <div className="posts-list">
                {
                    user.posts !== undefined ?
                        (user.posts.map(post => {
                            return <ProfilePost key={post._id} post = {post} />
                        }))
                        : null
                }
            </div>
        </div>
    )
}