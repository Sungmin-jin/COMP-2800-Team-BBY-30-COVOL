import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//CSS
import './../styles/LandingPage.css';

//Images
import logoIMG from './../image/logo.png';

//Creates the landing page with multiple components
function LandingPage({ logo }) {
  return (
    <div className='LandingPage'>
      <LandingPageLogo logo={logo} />
      <LandingPageButtonLogin />
      <LandingPageButtonRegister />
    </div>
  );
}

//Creates the logo copoment for the landing page
function LandingPageLogo({ logo }) {
  return <img className='logo' alt='App Logo' src={logoIMG}></img>;
}

//Creates the login button for the landing page
function LandingPageButtonLogin() {
  return (
    <div
      className='login'
      style={{ margin: 'auto', display: 'block', textAlign: 'center' }}
    >
      <a className='LandingPageBtn' href='/login'>
        LOGIN
      </a>
    </div>
  );
}

//Creates the register button for the landing page
function LandingPageButtonRegister() {
  return (
    <div
      className='register'
      style={{ margin: 'auto', display: 'block', textAlign: 'center' }}
    >
      <a className='LandingPageBtn register' href='/register'>
        REGISTER
      </a>
    </div>
  );
}

LandingPage.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LandingPage);
