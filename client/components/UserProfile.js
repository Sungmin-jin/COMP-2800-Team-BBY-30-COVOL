import React, { Component } from 'react';

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

// function UserHeader({profilePic, userName}) {
//     return (
//         <img>{profilePic}</img>
//         <h2>{userName}</h2>
//     )
// }
// function UserHeader({profilePic, userName}) {
//     return (
//         <ImgSection picture="{profilePic}" />
//         <h2>{userName}</h2>
//     )
// }

// function ImgSection() {
//     return (
//         <img>{profilePic}</img>
//     )
// }

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