import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import Moment from 'react-moment';
import ShowPost from './ShowPost';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post == null ? (
    <Spinner />
  ) : (
    <div className='container'>
      <p>{post.name}</p>
      <p>{post.location}</p>
      <p>{post.email}</p>
      <p>{post.task}</p>
      <p>{post.text}</p>
      <p>{post.title}</p>
      <img src={post.avatar} className='round-img' />
      <Moment format='YYYY/MM/DD'>{post.date}</Moment>
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
