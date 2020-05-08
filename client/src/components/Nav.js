import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'teal',
    //   '&:hover': {
    //     cursor: "pointer",
    //  },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = useStyles();

  const guestLink = (
    <Button color='inherit' component={Link} to='/login'>
      Log in
    </Button>
  );

  const authLink = (
    <Button color='inherit' onClick={logout}>
      Log out
    </Button>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}></Typography>
          <Button color='inherit' component={Link} to='/profiles'>
            Volunteers
          </Button>
          <Button color='inherit' component={Link} to='/dashboard'>
            My Profile
          </Button>
          <Button color='inherit' component={Link} to='/aboutus'>
            About Us
          </Button>
          <Button color='inherit' component={Link} to='/'>
            Home
          </Button>
          {!loading && (
            <Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Nav);
