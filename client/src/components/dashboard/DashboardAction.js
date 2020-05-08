import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardAction = () => {
  return (
    <div className='dash-buttons'>
      <Link to='edit-profile' className='btn btn-light'>
        Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        Add Experience
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        Add Education
      </Link>
      <Link to='/manage' className='btn btn-light'>
        Volunteer Listing
      </Link>
    </div>
  );
};

export default DashboardAction;
