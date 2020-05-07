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
        paddingTop: '100px',
    }
  });

function SwipePage() {
    const classes = useStyles();
    return (
        <div className="swipePage">
            <Nav className="swipeNav" />

            <Grid container className={classes.gridContainer}  justify="center" >
                <Grid item >
                    <UserCard />
                </Grid>
            </Grid>

            <Grid container className={classes.gridContainer2} justify="center" >
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

            <Footer className="swipeFooter" />
        </div>
    )
}

function sayNo() {
    console.log("No");
}

function sayYes() {
    console.log("Yes");
}


export default SwipePage;