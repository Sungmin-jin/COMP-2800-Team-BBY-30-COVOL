import React, { Component } from 'react';
import LandingPage from './components/LandingPage';

//this is the way to use an image file in React
//you ACTUALLY have to import the image file
// import logo from './../image/logo.png';
import logo from './image/logo.png';

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage logo={logo} />
      </div>
    )
  }
}

export default App