import React, { Component } from 'react';

// This component will create a User Profile Page
function UserProfile({profilePic, userName, userEmail}) {
    state = {}

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
            <input type="button" name="Edit Profile" value=""></input>
            <input type="button" name="Back" value=""></input>
        </div>
    )
}


export default UserProfile;