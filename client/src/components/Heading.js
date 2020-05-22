import React from 'react';

//CSS
import './../styles/Heading.css';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';



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
  
  function Heading ({profilePic, userName}) {
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

  export default Heading;