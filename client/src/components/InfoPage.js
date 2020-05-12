import React, {Component} from 'react'

//Importing Footer Component
import Footer from './Footer';

//Prop Types
import PropTypes from 'prop-types';

//Material UI components    
import Button from "@material-ui/core/Button";

//CSS
import './../styles/InfoPage.css';

import Nav from './Nav';

// This component will create a User Management Page
function InfoPage(listingName, description) {
    return (
        <div className="InfoPage">
            <div className="info-content">
                <Name listingName={listingName}/>
                <Desc description={description} />
                <Info />
                <Back />
            </div>
        </div>
    );
}

function Name(listingName) {
    return (
        <div className="Name">
            <label> {listingName} </label>
        </div>
    )
}

function Desc(description) {
    return (
        <div className="Desc">
            <label>Description: </label>
            <p> {description} </p>
        </div>
    )
}

function Info() {
    let taskList = [];
    let reqList = [];
    let contactList = []
    for (let i = 0; i < 5; i++) {
        taskList.push(<li>Placeholder Task {i+1}</li>)
    }

    for (let i = 0; i < 5; i++) {
        reqList.push(<li>Placeholder Requirement {i+1}</li>)
    }

    for (let i = 0; i < 3; i++) {
        contactList.push(<li>Contact Info {i+1}</li>)
    }
    return (
        <div className="Info">
            <div className="info-section task-section">
                <h2>Tasks:</h2>
                <ol className="tasks info-info">
                    {taskList}
                </ol>
            </div>
            <br />
            <div className="info-section req-section">
                <h2>Requirements:</h2>
                <ol className="requirements info-info">
                    {reqList}
                </ol>
            </div>
            <div className="info-section contact-section">
                <h2>Contact Info:</h2>
                <ul className="contact info-info">
                    {contactList}
                </ul>
            </div>
            <div className="info-section location-section">
                <h2>Location:</h2>
                <p className="info-info">Address</p>
            </div>
            <div className="info-section time-section">
                <h2>Time:</h2>
                <p className="info-info">12:00pm</p>
            </div>
            <div className="info-section additional-info-section">
                <h2>Additional Info:</h2>
                <p className="info-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id 
                lorem lectus. Maecenas rhoncus elit tincidunt diam volutpat mattis. 
                Sed interdum urna leo, vitae auctor dui pellentesque vel. Duis non 
                elit laoreet, pretium purus ut, malesuada turpis. Donec laoreet accumsan 
                erat, sed convallis sem sollicitudin vel. Nulla vestibulum enim nec odio 
                dignissim, sed finibus nisi commodo. Quisque eget scelerisque lorem. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada 
                fames ac turpis egestas.</p>
            </div>
        </div>
    )
}

function Back() {
    return (
        <div className="Back">
            <a className="info-btn info-back" href="/manage">Back</a>
        </div>
    )
}

export default InfoPage;