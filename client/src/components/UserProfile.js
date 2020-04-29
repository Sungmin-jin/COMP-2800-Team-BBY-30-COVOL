import React, { Component } from 'react';

// This component will create a User Profile Page
function UserProfile({profilePic, userName, userEmail}) {

    return (
        <div>
            {/* <UserHeader />
            <UserInfo /> */}
            <UserProfileBtn />
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

function UserProfileBtn() {
    return (
        <div>
            <a className="UserProfileBtn" href="">Edit Profile</a>
            <a className="UserProfileBtn" href="">Back</a>
        </div>
    )
}


export default UserProfile;