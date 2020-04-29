import React, { Component } from 'react';
import UserProfile from './components/UserProfile';

class App extends Component {
  state = {
    profilePic: "",
    userName: "",
    userEmail: ""
  }
  
  render() {
    return (
      <div className="App">
        <UserProfile profilePic={this.state.profilePic} userName={this.state.userName} userEmail={this.state.userEmail} />
      </div>
    )
  }
}

export default App