import React, { Component } from 'react';

// Component for all posts created by the user
import Posts from './posts/CreatedPosts'

//CSS
import './../styles/ManagementPage.css';


// This component will create a User Management Page
function ManagementPage() {
  return (
    <div className='ManagementPage'>
      <div className='created-posts'>
        <Posts />
      </div>
      <div className='found-posts'>
        
      </div>
    </div>
  );
}

export default ManagementPage;
