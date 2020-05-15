import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import { addFavourite, addExperience } from '../../actions/profile';
import Moment from 'react-moment';
import ShowPost from './ShowPost';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  // const [formData, setFormData] = useState({
  //   id: '',
  // });
  const [id, setId] = useState('');

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
      {/* <button
        className='btn btn-primary'
        onClick={(e) => {
          setFormData({ id: post._id });
          addFavourite(formData);
        }}
      >
        Favourite
      </button> */}
      {/* <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(id);
        addFavourite(id);
      }} */}
      >
      <button
        // type='submit'
        // value='Favourite'
        class='btn btn-primary'
        onClick={async (e) => {
          setId(post._id);
          await console.log(id);
          addFavourite(id);
        }}
      >
        Favourite
      </button>
      {/* </form> */}
    </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  addFavourite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost, addFavourite })(Post);
