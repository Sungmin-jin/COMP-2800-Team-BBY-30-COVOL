import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import './../../styles/Login.css';

//Login page component
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  //inputs for login
  const { email, password } = formData;

  //set email and password inputs
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //using login function, send data to back-end
  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // this is checking
  // it checks token
  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  return (
    <div className='Login'>
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
