import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import './../../styles/Login.css';
import Nav from './../Nav';
import Footer from './../Footer';


const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // this is checking 
  // it checks token
  if (isAuthenticated) {
    return <Redirect to='/welcome' />;
  }

  return (
    <div className="Login">
      {/* <Nav className="nav" /> */}
      <Fragment>
        <div className='container'>
          <h1 className='large text-primary'>Sign In</h1>
          <p className='lead'>Sign Into Your Account</p>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
                minLength='6'
              />
            </div>
            <input type='submit' className='btn btn-primary' value='Login' />
          </form>
          <p className='my-1'>
            Don't have an account? <Link to='/register'>Sign Up</Link>
          </p>
        </div>
      </Fragment>
      <Footer className="footer" />
    </div>
   
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
