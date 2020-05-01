import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/LandingPage.css';

import logo from './../image/logo.png';


function LandingPage({logo}) {
    return (
        <div className="LandingPage">
            <LandingPageLogo logo={logo} />
            <LandingPageButtonLogin/>
            <LandingPageButtonRegister/>
        </div>
    )
}

// LandingPage.propTypes = {
//     logo: PropTypes.string.isRequired
// }

function LandingPageLogo({logo}) {
    return (
        <img className="logo" alt="App Logo" src={logo}></img>
    )
}

// LandingPageLogo.propTypes = {
//     logo: PropTypes.string.isRequired
// }

function LandingPageButtonLogin() {
    return (
        <div className="login">
            <a className="LandingPageBtn" href="/login">LOGIN</a>
        </div>
    )
}

function LandingPageButtonRegister() {
    return (
        <div className="register">
            <a className="LandingPageBtn register" href="">REGISTER</a> 
        </div>
    )
}
export default LandingPage;
