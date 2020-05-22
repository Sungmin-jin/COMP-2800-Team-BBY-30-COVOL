import React from 'react';
import PropTypes from 'prop-types';

// show basic profile of the user
const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    user: { name, avatar, email },
  },
}) => {
  //url to redirect to where user contact by email
  const emailAddress = 'mailto:' + email;
  return (
    <div className='profile-top bg-primary p-2'>
      <img className='round-img my-1' src={avatar} alt='' />
      <h1 className='large'>{name}</h1>
      <p className='lead'>
        {/* check company field exists */}
        {status} {company && <span> at {company}</span>}
      </p>
      {/* check location field exists */}
      <p>{location && <span>{location}</span>}</p>
      <a href={emailAddress} className='btn form-text'>
        Contact Me
      </a>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
