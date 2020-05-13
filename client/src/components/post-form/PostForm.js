import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { addPost } from '../../actions/post';
import { connect } from 'react-redux';

const PostForm = ({ addPost, history }) => {
  const [formData, setFormData] = useState({
    text: '',
    location: '',
    title: '',
    task: '',
  });

  const { text, location, title, task } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='container'>
      <h1 className='large text-primary'>Add Post</h1>
      <small>* = required field</small>

      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addPost(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Title'
            name='title'
            value={title}
            onChange={onChange}
            required
          />
        </div>

        <textarea
          name='text'
          value={text}
          onChange={onChange}
          cols='30'
          rows='5'
        ></textarea>

        <div className='form-group'>
          <input
            type='text'
            placeholder='* Task'
            name='task'
            value={task}
            onChange={onChange}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='* Location'
            name='location'
            value={location}
            onChange={onChange}
            required
          />
        </div>

        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
