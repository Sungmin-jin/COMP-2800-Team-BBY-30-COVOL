import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';
import '../../styles/Post.css';

const PostItem = ({
  deletePost,
  auth,
  post: { _id, text, name, avatar, title, location, email, task, user, date },
}) => (
  <div className='postItem'>
    <div>
      {/* <Link to={`/profile/${user}`}> */}
        <img className='postAvatar' src={avatar} alt='' />
        <h4 className='postName'>{name}</h4>
      {/* </Link> */}
    </div>
    <div className='postInfo'>
      <p>Title: {title}</p>
      <p>Location: {location}</p>
      <p>Required Task: {task}</p>
      <p>Summary: {text}</p>
      <p>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      <div className='postButton'>
        <Link to={`/posts/${_id}`} className='btn btn-primary'>
          <p className='postButton'> More Detail </p>
        </Link>
      </div>

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
