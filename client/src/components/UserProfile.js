import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import './../styles/UserProfile.css';
import test from './../image/logo.png';

// This component will create a User Profile Page
function UserProfile({profilePic, userName, userEmail}) {

    return (
        <div>
            <UserHeader picture="profilePic" user="userName" />
            {/* <UserInfo /> */}
            <UserProfileBtn />
        </div>
    )
}

// This component creates the user header containing the username and
// a profile picture.
function UserHeader({profilePic, userName}) {
    return (
        <div>
            {/* <Avatar alt="Profile Picture" src={profilePic} /> */}
            <Avatar alt="Profile Picture" src={test} />
            {/* <h2>{userName}</h2> */}
            <h2>BBY TEAM 30</h2>
        </div>
     )
}

//styling for user info buttons
const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  }));

//This compontent creates a list of all the user's Info as buttons
// function UserInfo(userEmail, userPassword) {
//     const classes = useStyles();
  
//     return (
//       <div className={classes.root}>
//         <List component="nav" aria-label="secondary mailbox folders">
//           <ListItem button>
//             <ListItemText primary="Email:" secondary={userEmail} />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="password:" secondary={userPassword}   />
//           </ListItem>
//         </List>
//       </div>
//     );
//   }

function UserProfileBtn() {
    return (
        <div className="con-1">
            <a className="UserProfileBtn" href="">Edit Profile</a>
            <a className="UserProfileBtn" href="">Back</a>
        </div>
    )
}


export default UserProfile;