import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
//Importing Footer Component
import Footer from './Footer';

//Prop Types
import PropTypes from 'prop-types';

//Material UI components
import Button from '@material-ui/core/Button';

//CSS
import './../styles/WelcomePage.css';

import logoIMG from './../image/logo.png';

//LOGOUT
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

// This component will create a User Welcome Page
function WelcomePage({ logo, userName, isAuthenticated, logout }) {
  if (!isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <div>
      <WelcomePageLogo logo={logo} />
      <WelcomePageName name={userName} />
      <WelcomePageVolunteerBtn />
      <WelcomePageProfileBtn />
      <WelcomePageLogout logout={logout} />
      <Footer />
    </div>
  );
}

// const WelcomePage = ({
//   logo,
//   userName,
//   auth: { isAuthenticated, loading },
//   logout,
// }) => {
//   if (isAuthenticated) {
//     return <Redirect to='/welcome' />;
//   }
//   return (
//     <div>
//       <WelcomePageLogo logo={logo} />
//       <WelcomePageName name={userName} />
//       <WelcomePageVolunteerBtn />
//       <WelcomePageProfileBtn />
//       <WelcomePageLogout logout={logout} />
//       <Footer />
//     </div>
//   );
// };

WelcomePage.propTypes = {
  logo: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

//This component is the logo of the User Welcome Page
function WelcomePageLogo({ logo }) {
  return <img className='logo2' alt='App Logo' src={logoIMG}></img>;
}

WelcomePageLogo.propTypes = {
  logo: PropTypes.string.isRequired,
};

//This component is the Welcome message to the user
function WelcomePageName({ userName }) {
  return (
    // <p className="WelcomePageName" >Welcome {userName}</p>
    <p className='WelcomePageName'>Welcome Justin</p>
  );
}

WelcomePageName.propTypes = {
  userName: PropTypes.string.isRequired,
};

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
const WelcomePageLogout = ({ logout }) => {
  return (
    <Fragment>
      <div>
        <a onClick={logout} href='/'>
          Logout
        </a>
      </div>
    </Fragment>
  );
};

// function WelcomePageLogout({ auth: logout }) {
//   return (
//     <div>
//       <a onClick={logout}>Logout</a>
//     </div>
//   );
// }

WelcomePage.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(WelcomePage);
