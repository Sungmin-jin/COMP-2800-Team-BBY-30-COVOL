import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile bg-light container' style={{ padding: '1rem' }}>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <h4>
          {status} {company && <span> at {company}</span>}
        </h4>
        <h4 className='my-1'>{location && <span>{location}</span>}</h4>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <FaCheck /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
