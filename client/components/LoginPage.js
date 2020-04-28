import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../css/LoginPage.css';


function LoginPage({logo}) {
    return (
        <div>
            <LoginPageLogo logo={logo} />
            <LoginButton/>
            <RegisterButton/>
        </div>
    )
}

LoginPage.propTypes = {
    logo: PropTypes.string.isRequired
}

function LoginPageLogo({logo}) {
    return (
        <img alt="App Logo" src={logo}></img>
    )
}

LoginPageLogo.propTypes = {
    logo: PropTypes.string.isRequired
}

function LoginButton() {
    return (
        <div className="con-1 loginBtn">
            <span>Login</span>
        </div>
    )
}

function RegisterButton() {
    return (
        <div className="con-1 regBtn">
            <span>Register</span>
        </div>
    )
}

export default LoginPage;
