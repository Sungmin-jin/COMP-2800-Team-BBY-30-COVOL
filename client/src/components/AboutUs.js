import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/AboutUs.css';
import Nav from './Nav';
import Footer from './Footer';
import tonyIMG from './../image/tony.jpg';
import justinIMG from './../image/justin.jpg';
import jasonIMG from './../image/jason.jpg';
import anthonyIMG from './../image/anthony.jpg';

function AboutUs({profilePic, userName, userEmail}) {

    return (
        <div className="AboutUs">
            <Nav className="nav"/>
            <div className="content">
                <TonyPic />
                <JustinPic />
                <JasonPic />
                <AnthonyPic />
                <TeamParagraph />
            </div>
            <Footer className="footer" />
        </div>
    )
}

function TonyPic() {
    return (
        <div className="TonyPic">
            <img className="pic tony" alt="Tony Minseok Kim" src={tonyIMG}></img>
            <p className="name">Tony Minseok Kim</p>
        </div>
    )
}

function JustinPic() {
    return (
        <div className="JustinPic">
            <img className="pic justin" alt="Justin Payne" src={justinIMG}></img>
            <p className="name">Justin Payne</p>
        </div>
    )
}

function JasonPic() {
    return (
        <div className="JasonPic">
            <img className="pic jason" alt="Jason Sungmin Jin" src={jasonIMG}></img>
            <p className="name">Jason Sungmin Jin</p>
        </div>
    )
}

function AnthonyPic() {
    return (
        <div className="AnthonyPic">
            <img className="pic anthony" alt="Anthony Uch" src={anthonyIMG}></img>
            <p className="name">Anthony Uch</p>
        </div>
    )
}

function TeamParagraph() {
    return (
        <div className="TeamParagraph">
            <p className="team-paragraph">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. In sed tempus neque. Cras iaculis, urna vitae 
                dignissim fermentum, nulla ipsum lacinia quam, dapibus ultricies 
                ligula ligula at ex. Donec vulputate fringilla sapien, sit amet 
                euismod mi pulvinar a. Nam cursus nisl ac maximus sodales. Duis 
                eu nisi dolor. Etiam non imperdiet odio, eu suscipit tellus. Ut 
                magna sem, lobortis nec neque quis, lacinia facilisis metus. 
                Aliquam vel libero ut arcu molestie malesuada quis in lacus.
            </p>
        </div>
    )
}

export default AboutUs;