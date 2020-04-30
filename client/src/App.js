import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import UserProfile from './components/UserProfile';
import WelcomePage from './components/WelcomePage';

//this is the way to use an image file in React
//you ACTUALLY have to import the image file
// import logo from './../image/logo.png';
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
        {/* <UserProfile /> */}
      
        {/* <LandingPage logo={logo} /> */}

        <WelcomePage logo={logo} />
      </div>
    )
  }
}

export default App