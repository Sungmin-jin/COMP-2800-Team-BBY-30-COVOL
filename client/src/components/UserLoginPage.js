import React, { Component } from 'react';
import PropType from 'prop-types';

// Nav Component
import Nav from './Nav';

import { makeStyles } from '@material-ui/core/styles';

// TextField from Material-UI
import TextField from '@material-ui/core/TextField';

import LockIcon from '@material-ui/icons/Lock';
import AccountCircle from '@material-ui/icons/AccountCircle';

import logo from './../image/logo.png';

import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControl from '@material-ui/core/FormControl';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



function UserLoginPage() {
    return (
        <div>
            <Nav />
            <PageLogo />
            <PageTxtField />
            {/* <PageLink1 />
            <PageBtn1 />
            <PageLink2 /> */}
        </div>
    )
}

function PageLogo() {
    return (
        <img alt="PageLogo" src={logo}></img>
    )
}

// Decorating PageTxtField
const useStyles1 = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

function PageTxtField() {
    const classes = useStyles1();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        // <div className={classes.root}>
        //     <FormControl className={clsx(classes.margin, classes.textField)}>
        //         <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        //         <Input
        //         id="standard-adornment-password"
        //         type={values.showPassword ? 'text' : 'password'}
        //         defaultValue="Password"
        //         value={values.password}
        //         onChange={handleChange('password')}
        //         startAdornment={
        //             <InputAdornment position="start">
        //             <LockIcon />
        //             </InputAdornment>
        //         }
        //         endAdornment={
        //             <InputAdornment position="end">
        //             <IconButton
        //                 aria-label="toggle password visibility"
        //                 onClick={handleClickShowPassword}
        //                 onMouseDown={handleMouseDownPassword}
        //             >
        //                 {values.showPassword ? <Visibility /> : <VisibilityOff />}
        //             </IconButton>
        //             </InputAdornment>
        //         }
        //         />
        //     </FormControl>

        //     <FormControl className={clsx(classes.margin, classes.textField)}>
        //         <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        //         <Input
        //         id="standard-adornment-password"
        //         type={values.showPassword ? 'text' : 'password'}
        //         value={values.password}
        //         onChange={handleChange('password')}
        //         startAdornment={
        //             <InputAdornment position="start">
        //             <LockIcon />
        //             </InputAdornment>
        //         }
        //         endAdornment={
        //             <InputAdornment position="end">
        //             <IconButton
        //                 aria-label="toggle password visibility"
        //                 onClick={handleClickShowPassword}
        //                 onMouseDown={handleMouseDownPassword}
        //             >
        //                 {values.showPassword ? <Visibility /> : <VisibilityOff />}
        //             </IconButton>
        //             </InputAdornment>
        //         }
        //         />
        //     </FormControl>
        // </div>
        <form>

            <input type="text" name="name" />

            <input type="submit" value="Submit" />
        </form> 
    );
}

export default UserLoginPage