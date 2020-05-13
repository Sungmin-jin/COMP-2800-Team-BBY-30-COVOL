import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from './../actions/post';

//CSS
import './../styles/InfoPage.css';

import Nav from './Nav';

// This component will create a User Management Page
function InfoPage(listingName, description, tasks, requirements, location, time, additionalInfo) {
    return (
        <div className="InfoPage">
            <div className="info-content">
                <Name listingName={listingName}/>
                <Desc description={description} />
                <Tasks tasks={tasks} />
                <Requirements requirements={requirements} />
                <Location location={location}/>
                <Time time={time} />
                <AdditionalInfo additionalInfo={additionalInfo} />
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

function Tasks(tasks) {
    let taskList = []
        for (let i = 0; i < tasks.length; i++) {
            taskList.push(<li>{tasks[i]}</li>)
        }
    return (
        <div className="Tasks">
            <label>Tasks: </label>
                <ul>
                    {taskList}
                </ul>
        </div>
    )
}

function Requirements(requirements) {
    let reqList = []
        for (let i = 0; i < requirements.length; i++) {
            reqList.push(<li>{requirements[i]}</li>)
        }
    return (
        <div className="Requirements">
            <label>Requirements: </label>
                <ul>
                    {reqList}
                </ul>
        </div>
    )
} 

function Location(location) {
    return (
        <div className="Location">
            <label>Location: </label>
            <p> {location} </p>
        </div>
    )
}

function Time(time) {
    return (
        <div className="Time">
            <label>Time: </label>
            <p> {time} </p>
        </div>
    )
}

function AdditionalInfo(additonalInfo) {
    return (
        <div className="AdditionalInfo">
            <label>Additional Info: </label>
            <p> {additonalInfo} </p>
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