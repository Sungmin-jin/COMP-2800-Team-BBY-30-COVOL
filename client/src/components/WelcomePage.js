import React, { Component } from 'react'

//Prop Types
import PropTypes from 'prop-types'

//Material UI components    
import Button from "@material-ui/core/Button";

//CSS
import './../styles/WelcomePage.css';

// This component will create a User Welcome Page
function WelcomePage({logo, userName}) {
    return (
        <div>
            <WelcomePageLogo logo ={logo} />
            <WelcomePageName name ={userName} />
            <WelcomePageVolunteerBtn />
            <WelcomePageProfileBtn />
            <WelcomePageLogout />
        </div>
    )
}

WelcomePage.propTypes = {
    logo: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired  
}

//This component is the logo of the User Welcome Page
function WelcomePageLogo ({logo}) {
    return (
        <img className="logo" alt="App Logo" src={logo}></img>
    )
}

WelcomePageLogo.propTypes = {
    logo: PropTypes.string.isRequired 
}

//This component is the Welcome message to the user 
function WelcomePageName ({userName}) {
    return (
        // <p className="WelcomePageName" >Welcome {userName}</p>
        <p className="WelcomePageName" >Welcome Justin</p>
    )
}

WelcomePageName.propTypes = {
    userName: PropTypes.string.isRequired 
}

//This component is the buttons on the User Welcome page
function WelcomePageVolunteerBtn() {
    return (
        <div className="con-1">
            <a className="WelcomePageBtn" href="">Volunteer</a>
        </div>
    )
}

//This component is the buttons on the User Welcome page
function WelcomePageProfileBtn() {
    return (
        <div className="con-1">
            <a className="WelcomePageBtn" href="">Profile</a> 
        </div>
    )
}

//this component is the logout button on the User Welcome page
function WelcomePageLogout() {
    return (
        <div>
            <Button>Logout</Button>
        </div>
    )
}

export default WelcomePage;