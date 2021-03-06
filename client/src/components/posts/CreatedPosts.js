import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './CreatedPostItem';
import { getMyPosts } from '../../actions/post';

// Component that displays all the user's created posts
const Posts = ({ getMyPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getMyPosts();
  }, [getMyPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <div className='container'>
      <h1 className='large text-primary'>Created Listings</h1>
      <div className='posts'>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

Posts.propTypes = {
  getMyPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getMyPosts })(Posts);
