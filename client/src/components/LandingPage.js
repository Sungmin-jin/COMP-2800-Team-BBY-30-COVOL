import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/LandingPage.css';

// Nav component
import Nav from './Nav';
// Footer component
import Footer from './Footer';

import logoIMG from './../image/logo.png';

function LandingPage({logo}) {
    return (
        <div className="LandingPage">
            <Nav className="nav" />
            <LandingPageLogo logo={logo} />
            <LandingPageButtonLogin/>
            <LandingPageButtonRegister/>
            <Footer />
        </div>
    )
}

// LandingPage.propTypes = {
//     logo: PropTypes.string.isRequired
// }

function LandingPageLogo({logo}) {
    return (
        <img className="logo" alt="App Logo" src={logoIMG}></img>
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
            <a className="LandingPageBtn register" href="/register">REGISTER</a> 
        </div>
    )
}
export default LandingPage;
