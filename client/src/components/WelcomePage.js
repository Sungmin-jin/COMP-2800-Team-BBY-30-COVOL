import React, {Component} from 'react'

//Importing Footer Component
import Footer from './Footer';

//Prop Types
import PropTypes from 'prop-types';

//Material UI components    
import Button from "@material-ui/core/Button";

//CSS
import './../styles/WelcomePage.css';

import Nav from './Nav';
import logoIMG from './../image/logo.png';

// This component will create a User Welcome Page
function WelcomePage({logo, userName}) {
    return (
        <div className="WelcomePage">
            <Nav className="nav"/>
            <WelcomePageLogo logo ={logo} />
            <WelcomePageName name ={userName} />
            <div className="featureBtns">
                <WelcomePageVolunteerBtn />
                <WelcomePageListingBtn />
                <WelcomePageManageBtn />
            </div>
            <WelcomePageProfileBtn />
            <WelcomePageLogout />
            <Footer className="footer"/>
        </div>
    );
}

WelcomePage.propTypes = {
    logo: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired  
}

//This component is the logo of the User Welcome Page
function WelcomePageLogo ({logo}) {
    return (
        <img className="logo2" alt="App Logo" src={logoIMG}></img>
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
            <a className="WelcomePageBtn volunteer" href="">Find Listings</a>
        </div>
    )
}

function WelcomePageManageBtn() {
    return (
        <div className="con-1">
            <a className="WelcomePageBtn manage" href="./manage">Manage Listings</a>
        </div>
    )
}

//This component is the buttons on the User Welcome page
function WelcomePageProfileBtn() {
    return (
        <div className="con-1">
            <a className="WelcomePageBtn profile" href="./userprofile">Profile</a> 
        </div>
    )
}

function WelcomePageListingBtn() {
    return (
        <div className="con-1">
            <a className="WelcomePageBtn welcome-listing" href="">Create Listings</a>
        </div>
    )
}

//this component is the logout button on the User Welcome page
function WelcomePageLogout() {
    return (
        <div className="logout-btn">
            <Button>Logout</Button>
        </div>
    )
}

export default WelcomePage;