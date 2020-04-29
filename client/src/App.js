import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
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