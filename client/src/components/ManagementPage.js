import React, {Component} from 'react'

//Importing Footer Component
import Footer from './Footer';

//Prop Types
import PropTypes from 'prop-types';

//Material UI components    
import Button from "@material-ui/core/Button";

//CSS
import './../styles/ManagementPage.css';

import Nav from './Nav';

// This component will create a User Management Page
function ManagementPage() {
    return (
        <div className="ManagementPage">
            <Nav className="nav"/>
            <div className="management-content">
                <ManageCreatedListings />
                <ManageFoundListings />
                <CreateListingsBtn />
                <FindListingsBtn />
                <Back />
            </div>
            <Footer className="footer"/>
        </div>
    );
}

function ManageCreatedListings() {
    let currentlistings = []
    
    for (let i = 0; i < 5; i++) {
        currentlistings.push(<li><a className="listing" href="./matches">Placeholder Volunteer Listing</a></li>)
    }
    return (
        <div className="CreatedListings">
            <h1 className="title">Created Listings</h1>
            <ul className="list">
                {currentlistings}
            </ul>
        </div>
    )
}

function ManageFoundListings() {
    let currentlistings = []
    
    for (let i = 0; i < 5; i++) {
        currentlistings.push(<li><a className="listing" href="./matches">Placeholder Volunteer Listing</a></li>)
    }
    return (
        <div className="FoundListings">
            <h1 className="title">Found Listings</h1>
            <ul className="list">
                {currentlistings}
            </ul>
        </div>
    )
}

function CreateListingsBtn() {
    return (
        <div className="CreateListingsBtn">
            <a className="management-btn create-listings" href="">Create Listings</a>
        </div>
    )
}

function FindListingsBtn() {
    return (
        <div className="FindListingsBtn">
            <a className="management-btn find-listings" href="">Find Listings</a>
        </div>
    )
}

function Back() {
    return (
        <div className="Back">
            <a className="management-btn back-btn" href="/welcome">Back</a>
        </div>
    )
}

export default ManagementPage;