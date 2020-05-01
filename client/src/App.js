import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Our own components
import LandingPage from './components/LandingPage';
import UserProfile from  './components/UserProfile';
import WelcomePage from './components/WelcomePage';
import SwipePage from './components/SwipePage';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/Alert';

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
          <Switch>
            <Route exact path='/' component={LandingPage} />
            
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />

            <Route path='/userprofile' component={UserProfile} />
            <Route path='/welcome' component={WelcomePage} />
            <Route path='/swipepage' component={SwipePage} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
