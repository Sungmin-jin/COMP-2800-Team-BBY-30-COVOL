import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

//Creates the profiles page with every current user profile in the 
//database. 
const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <div className='container'>
      {/* if datas are loading or profiles do not exist show spinner */}
      {loading || profiles === undefined || profiles === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Volunteers</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Browse and connect with
            Voulunteers!
          </p>
          <div className='profiles'>
            {/* if there is no profile */}
            {profiles.length > 0 ? (
              //map an array that contains all users' profile
              profiles.map((profile) => (
                // pass each person's profile data
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
