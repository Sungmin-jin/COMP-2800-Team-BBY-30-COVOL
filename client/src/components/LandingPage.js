import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/LandingPage.css';


function LandingPage({logo}) {
    return (
        <div className="LandingPage">
            <LandingPageLogo logo={logo} />
            <LandingPageButton/>
        </div>
    )
}

LandingPage.propTypes = {
    logo: PropTypes.string.isRequired
}

function LandingPageLogo({logo}) {
    return (
        <img className="logo" alt="App Logo" src={logo}></img>
    )
}

LandingPageLogo.propTypes = {
    logo: PropTypes.string.isRequired
}

function LandingPageButton() {
    return (
        <div className="con-1">
            <a className="LandingPageBtn login" href="">LOGIN</a>
            <a className="LandingPageBtn register" href="">REGISTER</a> 
        </div>
    )
}

export default LandingPage;
