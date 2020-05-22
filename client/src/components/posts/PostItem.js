import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';

//CSS
import '../../styles/Post.css';

//Creates the post item with data from the database 
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
      <p>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      <div className='postButton'>
        <Link to={`/info/${_id}`} className='btn btn-primary'>
          <p className='postButton'> More Detail </p>
        </Link>
      </div>
    </div>
  </div>
);

//PropTypes to check if incoming props are of the correct type
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
};

//Connects the component to the redux store
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deletePost })(PostItem);
