import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/LandingPage.css';

//this is the way to use an image file in React
//you ACTUALLY have to import the image file
// import logo from './../image/logo.png';

function LandingPage({logo}) {
    return (
        <div>
            <LandingPageLogo logo={logo} />
            <LandingPageButton/>>
        </div>
    )
}

LandingPage.propTypes = {
    logo: PropTypes.string.isRequired
}

function LandingPageLogo({logo}) {

    return (
        <img alt="App Logo" src={logo}></img>
    )
}

LandingPageLogo.propTypes = {
    logo: PropTypes.string.isRequired
}

function LandingPageButton() {
    return (
        <div className="con-1">
            <a className="LandingPageBtn" href="">Login</a>
            <a className="LandingPageBtn" href="">Register</a>
        </div>
    )
}


export default LandingPage;
