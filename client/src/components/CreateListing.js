import React, {Component} from 'react'

//CSS

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
            <input type="text" name="listingName"></input>
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

function Tasks() {

}

function Requirements() {

}

function Time() {
    
}

function Location() {
    <form>
        <label>Location:</label>
        <input type="text" name="location"></input>
    </form>
}

function Additional() {
    <form>
        <label>Additional Info:</label>
        <textarea name="additional"></textarea>
    </form>
}

function Back() {
    return (
        <div className="Back">
            <a className="matches-btn matches-back" href="/manage">Back</a>
        </div>
    )
}

export default MatchesPage;