import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/LandingPage.css';

function SwipePage({profilePic, userName, userEmail}) {

    return (
        <div>
            <UserPic picture="profilePic" />
            {/* <UserInfo /> */} 
            <MoreInfo />
            <YesSwipe />
            <NoSwipe />
        </div>
    )
}

function UserPic({profilePic}) {
    return (
        <div className="ProfilePic">
            {/* <img alt="Profile Picture" src={profilePic} /> */}
            <img alt="Profile Picture" src={test} />
        </div>
     )
}

{/* function UserInfo({}) */}

function MoreInfo({userName, userEmail}) {
    <div className="Info">
        {/* <p>{userName}</p> */}
        <p>Test Name</p>
        {/* <p>{userEmail}</p> */}
        <p>Test Email</p>
    </div>
}

function MoreInfo({}) {
    return (
        <div className="more-info">
            <a className="info-btn" href="">More Info</a> 
        </div>
    )
}

function YesSwipe({}) {
    return (
        <div className="swipe-yes">
            <a className="swipe-btn" href="">Yes</a> 
        </div>
    )
}

function NoSwipe({}) {
    return (
        <div className="swipe-no">
            <a className="swipe-btn" href="">No</a> 
        </div>
    )
}

export default SwipePage;