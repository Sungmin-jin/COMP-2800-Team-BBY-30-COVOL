import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';

const PostItem = ({
  deletePost,
  auth,
  post: { _id, text, name, avatar, title, location, email, task, user, date },
}) => ( 
  <div>
    <div>
      <p>{text}</p>
      <p>{location}</p>
      <p>{title}</p>
      <p>{task}</p>
      <p>{email}</p>
      <p>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      <Link to={`/info/${_id}`} className='btn btn-primary'>
        <p className='large'> More Detail </p>
      </Link>

      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deletePost(_id)}
          type='button'
          className='btn btn-danger'
        >
          Delete
        </button>
      )}
    </div>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deletePost })(PostItem);
