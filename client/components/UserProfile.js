import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

// This component will create a User Profile Page
function UserProfile({profilePic, userName, userEmail}) {
    state = {}

    return (
        <div>
            <UserHeader />
            <UserInfo />
            <EditProfileBtn />
            <BackBtn />
        </div>
    )
}

// This component creates the user header containing the username and
// a profile picture.
function UserHeader({profilePic, userName}) {
    return (
        <div>
            <Avatar alt="Profile Picture" src={profilePic}/>
            <h2>{userName}</h2>
        </div>
     )
}

function EditProfileBtn() {
    return (
        <div>
            <input></input>
        </div>
    )
}

function BackBtn() {

}
export default UserProfile;