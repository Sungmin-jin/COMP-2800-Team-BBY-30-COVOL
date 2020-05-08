import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Our own components
import LandingPage from './components/LandingPage';
import WelcomePage from './components/WelcomePage';
import SwipePage from './components/SwipePage';

import Profiles from './components/profiles/Profiles';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/Alert';
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/Profile-form/CreateProfile';
import EditProfile from './components/Profile-form/EditProfile';
import AddExperience from './components/Profile-form/AddExperience';
import AddEducation from './components/Profile-form/AddEducation';
import Profile from './components/profile/Profile';
//this is the way to use an image file in React
//you ACTUALLY have to import the image file
import logo from './image/logo.png';
import profile from './image/profilepic.jpg';
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
            <Route path='/profiles' component={Profiles} />
            <Route path='/profile/:id' component={Profile} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/welcome' component={WelcomePage} />
            <PrivateRoute path='/create-profile' component={CreateProfile} />
            <Route path='/swipepage' component={SwipePage} />
            <PrivateRoute path='/add-experience' component={AddExperience} />
            <PrivateRoute path='/edit-profile' component={EditProfile} />
            <PrivateRoute path='/add-education' component={AddEducation} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
