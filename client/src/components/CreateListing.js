import React, {Component} from 'react'

//CSS
import './../styles/MatchesPage.css';

import placeholderIMG from './../image/placeholder.png'

// This component will create a User Management Page
function MatchesPage() {
    return (
        <div className="MatchesPage">
            <div className="matches-content">
                <Name />
                <Desc />
                <Info />
                <Delete />
                <Back />
            </div>
        </div>
    );
}

function Name() {
    return (
        <form className="Name">
            <label>Listing Name:</label>
            <text name="listingName"></text>
        </form>
    )
}

function Desc() {
    return (
        <form className="Desc">
            <label>Description: </label>
            <textarea name="desc"></textarea>
        </form>
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
            <div className="matches-section task-section">
                <h2>Tasks:</h2>
                <ol className="tasks matches-info">
                    {taskList}
                </ol>
            </div>
            <br />
            <div className="matches-section req-section">
                <h2>Requirements:</h2>
                <ol className="requirements matches-info">
                    {reqList}
                </ol>
            </div>
            <div className="matches-section contact-section">
                <h2>Contact Info:</h2>
                <ul className="contact matches-info">
                    {contactList}
                </ul>
            </div>
            <div className="matches-section location-section">
                <h2>Location:</h2>
                <p className="matches-info">Address</p>
            </div>
            <div className="matches-section time-section">
                <h2>Time:</h2>
                <p className="matches-info">12:00pm</p>
            </div>
            <div className="matches-section additional-info-section">
                <h2>Additional Info:</h2>
                <p className="matches-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id 
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

function Delete() {
    return (
        <div className="Remove">
            <a className="matches-btn matches-remove" href="">Remove</a>
        </div>
    )
}

function Back() {
    return (
        <div className="Back">
            <a className="matches-btn matches-back" href="/manage">Back</a>
        </div>
    )
}

export default MatchesPage;