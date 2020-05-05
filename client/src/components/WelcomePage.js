import React, { Component, useEffect, Fragment } from 'react';
import Spinner from './layout/Spinner';
//Importing Footer Component
import Footer from './Footer';

//Prop Types
import PropTypes from 'prop-types';

//Material UI components
import Button from '@material-ui/core/Button';

//CSS
import './../styles/WelcomePage.css';

import logoIMG from './../image/logo.png';

import { logout } from '../actions/auth';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';

// This component will create a User Welcome Page
function WelcomePage({
  logo,
  userName,
  logout,
  getCurrentProfile,
  auth,
  profile: { profile, loading },
}) {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <WelcomePageLogo logo={logo} />
      <WelcomePageName />
      <WelcomePageVolunteerBtn />
      <WelcomePageProfileBtn />
      <WelcomePageLogout logout={logout} />
      <Footer />
    </Fragment>
  );
}

//This component is the logo of the User Welcome Page
function WelcomePageLogo({ logo }) {
  return <img className='logo2' alt='App Logo' src={logoIMG}></img>;
}

//This component is the Welcome message to the user
function WelcomePageName() {
  return (
    // <p className="WelcomePageName" >Welcome {userName}</p>
    <p className='WelcomePageName'>Welcome Justin</p>
  );
}

//This component is the buttons on the User Welcome page
function WelcomePageVolunteerBtn() {
  return (
    <div className='con-1'>
      <a className='WelcomePageBtn' href=''>
        Volunteer
      </a>
    </div>
  );
}

//This component is the buttons on the User Welcome page
function WelcomePageProfileBtn() {
  return (
    <div className='con-1'>
      <a className='WelcomePageBtn' href='./userprofile'>
        Profile
      </a>
    </div>
  );
}

//this component is the logout button on the User Welcome page
function WelcomePageLogout({ logout }) {
  return (
    <div>
      <a href='/login' onClick={logout} className='WelcomePageBtn'>
        Log out
      </a>
    </div>
  );
}
WelcomePage.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  logo: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { logout, getCurrentProfile })(
  WelcomePage
);
