import React, { Component } from 'react';

//Prop Types
import PropType from 'prop-types';

//importing Heading component
import Heading from './Heading';

// CSS
import './../styles/UserProfile.css';

// For styling Material UI components
import { makeStyles } from '@material-ui/core/styles';

// For User Info List section
import List from "@material-ui/core/List";
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// Icons for User Info List section
import { green } from '@material-ui/core/colors';
import EmailIcon from '@material-ui/icons/Email';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PersonIcon from '@material-ui/icons/Person';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';


// a placeholder for user profile pic
import profilePic from './../image/logo.png';

// ?
import { Z_BLOCK } from 'zlib';

// This component will create a User Profile Page
function UserProfile({profilePic, userName, isVerified, userEmail, userBio}) {

    return (
        <div className="UserProfilePage">
            <Heading picture={profilePic} user={userName} />
            <UserInfo userName={userName}  isVerified={isVerified} userEmail={userEmail} userBio={userBio} />
            {/* <UserInfo /> */}

            <UserProfileBtnEdit />
            <UserProfileBtnBack />
        </div>
    )
}


// styling for user info buttons
const iconStyle = makeStyles((theme) => ({
  root: {
    // '& > userProfileIcon': {
      marginRight: theme.spacing(1),
    // },
  },
}));


// This compontent creates a list of all the user's Info as buttons
function UserInfo({userName, isVerified, userEmail, userBio}) {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     userName: "", 
  //     isVerified: false,
  //     userEmail: "",
  //     userBio: "",
      
  //   };
  // }




    

      const classes = iconStyle();

      return (
      
        // <div className={classes.root}>
        <div className="UserProfile_Info">
          <List component="nav" 
                aria-labelledby="nested-list-subheader" 
                subheader={<ListSubheader component="div" id="nested-list-subheader">User Profile</ListSubheader>} 
                className="UserProfile_Info"
                >
  
            <ListItem button>
              <PersonIcon className={classes.root} style={{color: green[500]}} />
              <ListItemText primary="Full Legal Name" secondary={userName} />
            </ListItem>
  
            <ListItem button>
              <VerifiedUserIcon className={classes.root} style={{color: green[500]}} />
              <ListItemText primary="Verified" secondary={isVerified} />
            </ListItem>
  
            <ListItem button>
              <EmailIcon className={classes.root} style={{color: green[500]}} />
              <ListItemText primary="Email" secondary={userEmail}   />
              {/* <ListItemText primary="Email:" secondary="mkim265@my.bcit.ca" /> */}
            </ListItem>
  
            <ListItem button>
              <ImportContactsIcon className={classes.root} style={{color: green[500]}} />
              <ListItemText primary="Bio" secondary={userBio} />
            </ListItem>
            
          </List>
        </div>
      );
    
}

UserInfo.PropType = {
  userName: PropType.string.isRequired,
  isVerified: PropType.bool.isRequired,
  userEmail: PropType.string.isRequired,
  userBio: PropType.string.isRequired
}
  
function UserProfileBtnEdit() {
    return (
      <div className="edit">
        <a className="UserProfileBtn" href="">Edit Profile</a>
      </div>
    )
}

function UserProfileBtnBack() {
  return (
    <div className="back">
      <a className="UserProfileBtn" href="/welcome">Back</a>
    </div>
  )
}


export default UserProfile;