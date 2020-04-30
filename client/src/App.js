import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import UserLoginPage from './components/UserLoginPage';
import UserProfile from './components/UserProfile';
import WelcomePage from './components/WelcomePage';
import SwipePage from './components/SwipePage';


//this is the way to use an image file in React
//you ACTUALLY have to import the image file
import logo from './image/logo.png';

class App extends Component {
  state = {
    profilePic: "",
    userName: "",
    userEmail: ""
  }
  
  render() {
    return (
      <div className="App">
        {/* <LandingPage logo={logo} /> */}

        {/* <UserProfile /> */}

        {/* <UserLoginPage /> */}

        {/* <WelcomePage logo={logo} /> */}

        <SwipePage />
      </div>
    )
  }
}

export default App