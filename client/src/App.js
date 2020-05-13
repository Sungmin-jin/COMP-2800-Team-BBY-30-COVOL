import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Our own components
import LandingPage from './components/LandingPage';
import WelcomePage from './components/WelcomePage';
import SwipePage from './components/SwipePage';

import Post from './components/post/Post';
import PostForm from './components/post-form/PostForm';
import Posts from './components/posts/Posts';
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
import AboutUs from './components/AboutUs';
import Management from './components/ManagementPage';
import Info from './components/InfoPage';
import Create from './components/CreateListing';
import ResponsiveNav from './components/ResponsiveNav';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';

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
          <Nav />
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
            <PrivateRoute path='/posts/:id' component={Post} />
            <PrivateRoute path='/posts' component={Posts} />
            <PrivateRoute path='/post-form' component={PostForm} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/manage' component={Management} />
            <Route path='/info' component={Info} />
            <Route path='/home' component={Home} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
