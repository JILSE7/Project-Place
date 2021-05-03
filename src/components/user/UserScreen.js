import React, { memo, useContext } from "react";
import ProfileCover from './ProfileCover';
import { ProfileMenu } from './ProfileMenu';
import { ProfilePostsList } from './ProfilePostsList';
import { PlaceContext } from '../../context/PlaceContext';

export const UserScreen = memo(() => {
    //UserContext
    const {userLogin} = useContext(PlaceContext);


    return (
        <React.Fragment>
            <section className="user-profile-section">
                <div className="user-profile-container">
                    <ProfileCover user = {userLogin} />
                    <ProfileMenu />
                </div>
            </section>

            <ProfilePostsList user = {userLogin} />
        </ React.Fragment>
    )
});
