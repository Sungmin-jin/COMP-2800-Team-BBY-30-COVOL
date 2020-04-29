import React, { Component } from 'react';
import UserProfile from './../components/UserProfile'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProfile profilePic={profilePic} userName={userName} userEmail={userEmail} />
      </div>
    )
  }
}

export default App