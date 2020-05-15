import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import { getSavedPosts } from '../../actions/post';

const Posts = ({ getSavedPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getSavedPosts();
  }, [getSavedPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <div className='container'>
      <h1 className='large text-primary'>Volunteer Lists</h1>
      <div className='posts'>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

Posts.propTypes = {
  getSavedPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getSavedPosts })(Posts);
