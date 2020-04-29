import React, { Component } from 'react';
import UserProfile from './components/UserProfile';

class App extends Component {
  state = {}
  
  render() {
    return (
      <div className="App">
        <UserProfile profilePic={profilePic} userName={userName} userEmail={userEmail} />
      </div>
    )
  }
}

export default App