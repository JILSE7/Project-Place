import React from 'react'
import { ProfileCover } from './ProfileCover';
import { ProfileMenu } from './ProfileMenu';

export const UserScreen = () => {
    return (
        <section className="user-profile-section">
            <div className="user-profile-container">
                <ProfileCover />
                <ProfileMenu />
            </div>
        </section>
    )
}
