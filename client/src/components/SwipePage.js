import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/SwipePage.css';

function SwipePage({profilePic, userName, userEmail}) {

    return (
        <div className="SwipePage">
            <UserPic profilePic={profilePic} />
            <UserInfo userName={userName} userEmail={userEmail} /> 
            <MoreInfo />
            <YesSwipe />
            <NoSwipe />
        </div>
    )
}

SwipePage.propTypes = {
    profilePic: PropTypes.string.isRequired
}

function UserPic({profilePic}) {
    return (
        <img className="pic" alt="Profile Picture" src={profilePic}></img>
    )
}

UserPic.propTypes = {
    profilePic: PropTypes.string.isRequired
}

function UserInfo({userName, userEmail}) {
    return (
        <div className="user-info">
            {/* <p>{userName}</p> */}
            <p>Test Name</p>
            {/* <p>{userEmail}</p> */}
            <p>Test Email</p>
        </div>
    )
}

function MoreInfo() {
    return (
        <div className="more-info">
            <a className="info-btn" href="">More Info</a> 
        </div>
    )
}

function YesSwipe() {
    return (
        <div className="swipe-yes">
            <a className="swipe-btn" href="">Yes</a> 
        </div>
    )
}

function NoSwipe() {
    return (
        <div className="swipe-no">
            <a className="swipe-btn" href="">No</a> 
        </div>
    )
}

export default SwipePage;