import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Our own components
import LandingPage from './components/LandingPage';
import UserProfile from  './components/UserProfile';
import WelcomePage from './components/WelcomePage';
import SwipePage from './components/SwipePage';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';
import Management from './components/ManagementPage'
import Matches from './components/MatchesPage'
import ResponsiveNav from './components/ResponsiveNav';

//this is the way to use an image file in React
//you ACTUALLY have to import the image file
import logo from './image/logo.png';
import profile from './image/profilepic.jpg'
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <ResponsiveNav />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />

            <Route path='/userprofile' component={UserProfile} />
            <Route path='/welcome' component={WelcomePage}/>
            <Route path='/swipepage' component={SwipePage} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/manage' component={Management} />
            <Route path='/matches' component={Matches} />
          </Switch>
          <Footer className="footer" />
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
