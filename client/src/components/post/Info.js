import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import Moment from 'react-moment';
import ShowPost from './ShowPost';
import { addFavourite } from '../../actions/profile';
import { Link } from 'react-router-dom';
import '../../styles/Info.css';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post == null ? (
    <Spinner />
  ) : (
    <div className='container'>
      <Link to={`/profile/${post.user}`}>
        <div className='info-top'>
          <img className='info-avatar round-img' src={post.avatar} />
          <p className='info-title'>{post.title}</p>
        </div>
      </Link>
      <div className='info-user'>
        <p>
          Posted on:&nbsp;
          <Moment format='YYYY/MM/DD'>{post.date}</Moment>
        </p>
        <p>Posted by: {post.name}</p>
        <p>Contact Info: {post.email}</p>
      </div>
      <div className='info-content'>
        <p>Description: {post.text}</p>
        <p>Tasks: {post.task}</p>
        <p>Location: {post.location}</p>
      </div>
      <div className='info-buttons'>
        <div className='info-contact'>
          <a
            href={'mailto:' + post.email}
            className='btn btn-primary info-button'
          >
            Contact
          </a>
        </div>
        <form
          className='form'
          onSubmit={(e) => {
            e.preventDefault();
            addFavourite(post.id, loading);
          }}
        ></form>
      </div>
    </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
