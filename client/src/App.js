import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Our own components
import LandingPage from './components/LandingPage';
import Post from './components/post/Info';
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
import ResponsiveNav from './components/ResponsiveNav';
import Footer from './components/Footer';
import Home from './components/Home';

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
            <Route path='/profile/:id' component={Profile} />
            <Route
              exact
              path='/profiles'
              path='/profile'
              component={Profiles}
            />
            <Route path='/profiles' component={Profiles} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/create-profile' component={CreateProfile} />
            <PrivateRoute path='/add-experience' component={AddExperience} />
            <PrivateRoute path='/edit-profile' component={EditProfile} />
            <PrivateRoute path='/add-education' component={AddEducation} />
            <PrivateRoute path='/info/:id' component={Post} />
            <PrivateRoute path='/createvolunteerlisting' component={PostForm} />
            <Route path='/aboutus' component={AboutUs} />
            <PrivateRoute
              path='/managevolunteerlistings'
              component={Management}
            />
            <PrivateRoute path='/home' component={Home} />
            <PrivateRoute path='/findvolunteerlistings' component={Posts} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
