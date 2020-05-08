import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      minHeight: 350,
      maxHeight: 500,
    },
    media: {
      height: 225,
    },
  });   

function UserCard({picture, firstname, lastname, age, bio}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={picture}
          title="Profile Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {firstname} {lastname}
          </Typography>
          <Typography variant="h6" component="h4">
            {age} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {bio} 
          </Typography>
        </CardContent>
    </Card>
  );
}

export default UserCard;