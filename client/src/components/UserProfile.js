import React, { Component } from 'react';

//Prop Types
import PropType from 'prop-types';

// CSS
import './../styles/UserProfile.css';

// For styling Material UI components
import { makeStyles } from '@material-ui/core/styles';

// For User Profile page header profile picture
import Avatar from '@material-ui/core/Avatar';

// For User Info List section
import List from "@material-ui/core/List";
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// Icons for User Info List section
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';


// a placeholder for user profile pic
import profilePic from './../image/logo.png';

// ?
import { Z_BLOCK } from 'zlib';

// This component will create a User Profile Page
function UserProfile({profilePic, userName, name, userEmail, userBio}) {

    return (
        <div>
            <UserHeader picture={profilePic} user={userName} />
            <UserInfo user={userName} name={name} userEmail={userEmail} userBio={userBio} />
            <UserProfileBtn />
        </div>
    )
}

// This component creates the user header containing the username and
// a profile picture.
const useStyles1 = makeStyles((theme) => ({
  root: {
    // marginLeft: '1em'
    justifySelf: 'center'
  },

  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  }
}));

function UserHeader({profilePic, userName}) {
    const classes = useStyles1();

    return (
        <div className="UserProfile_Header">
            {/* $$$$ TIP $$$$ 
                https://stackoverflow.com/questions/46066675/how-to-add-multiple-classes-in-material-ui-using-the-classes-props
                
                string interpolation:
                <div className={`${this.props.classes.container} ${this.props.classes.spacious}`}>
            */}
            {/* <Avatar className={classes.root, classes.large} alt="Profile Picture" src={profilePic} /> */}
            <Avatar className={`${classes.large} ${classes.root}`} alt="Profile Picture" src={profilePic} />

            {/* <h2>{userName}</h2> */}
            <h2>BBY TEAM 30</h2>
        </div>
     )
}

// styling for user info buttons
const useStyles2 = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 1500,
      backgroundColor: theme.palette.background.paper,
      margin: '0 auto',
      marginTop: '2em'
    }
  }));

// This compontent creates a list of all the user's Info as buttons
function UserInfo({userName, name, userEmail, userBio}) {
    const classes = useStyles2();
  
    return (
      
      <div className={classes.root}>
        <List component="nav" 
              aria-labelledby="nested-list-subheader" 
              subheader={<ListSubheader component="div" id="nested-list-subheader">User Profile</ListSubheader>} 
              className={classes.root}
              >

          <ListItem button>
            <ListItemText primary="User Name" secondary={userName} />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Name" secondary={name} />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Email" secondary={userEmail}   />
            {/* <ListItemText primary="Email:" secondary="mkim265@my.bcit.ca" /> */}
          </ListItem>

          <ListItem button>
            <ListItemText primary="Bio" secondary={userBio} />
          </ListItem>
          
        </List>
      </div>
    );
}

UserInfo.PropType = {
  userName: PropType.string.isRequired,
  age: PropType.number.isRequired,
  name: PropType.string.isRequired,
  email: PropType.string.isRequired,
  bio: PropType.string.isRequired
}
  
function UserProfileBtn() {
    return (
        <div>
            <a className="UserProfileBtn" href="">Edit Profile</a>
            <a className="UserProfileBtn" href="">Back</a>
        </div>
    )
}


export default UserProfile;