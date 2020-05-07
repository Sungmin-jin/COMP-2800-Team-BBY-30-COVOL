import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 350,
    },
    media: {
      height: 225,
    },
  });   

function UserCard({bio, firstname, lastname, age, picture}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          //image={picture}
          image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          title="Profile Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {firstname} {lastname}
            Justin Payne
          </Typography>
          <Typography variant="h6" component="h4">
            {age}
            25
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {bio}
            This is just a placeholder bio so i can see how the card looks.
            hopefully its decent because i have no idea what im doing.
          </Typography>
        </CardContent>
    </Card>
  );
}

export default UserCard;