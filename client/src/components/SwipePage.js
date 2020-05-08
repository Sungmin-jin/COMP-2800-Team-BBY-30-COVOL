import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/SwipePage.css';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';


import Nav from './Nav'
import Footer from './Footer';

import Grid from '@material-ui/core/Grid';
import UserCard from './UserCard';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '10px',
    }
  });

function SwipePage({}) {
    const classes = useStyles();
    return (
        <div className="swipePage">
            <Nav className="swipeNav" />

            <Grid container className={classes.gridContainer}  justify="center" >
                <Grid item >
                    <UserCard 
                    picture={data[0].picture}
                    firstname={data[0].firstname}
                    lastname={data[0].lastname}
                    age={data[0].age}
                    bio={data[0].bio}/>
                </Grid>
            </Grid>

            <Grid container className={classes.gridContainer2} className="swipeButton" justify="center" >
                <Grid item xs={3} >
                    <IconButton aria-label="No" color="secondary" onClick={sayNo} >
                        <ClearIcon fontSize='large'/>
                    </IconButton>
                </Grid>

                <Grid item xs={3} >
                    <IconButton aria-label="Yes" color="primary" onClick={sayYes} >
                        <CheckIcon fontSize='large'/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid>
                <Grid item ex={12} >
                <Footer className="swipeFooter" />
                </Grid>
            </Grid>
        </div>
    )
}

function sayNo() {
    console.log("No");
}

function sayYes() {
    console.log("Yes");
}

const data = [
    {
    id: '1',
    firstname: 'Justin',
    lastname: 'Payne',
    age: '25',
    picture: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    bio: 'This is just a placeholder bio so I can see how the card looks. Hopefully its decent because I have no idea what im doing.'
    }
    ];

export default SwipePage;