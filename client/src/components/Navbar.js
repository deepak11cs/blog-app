import React, { useState } from 'react';
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";

import SigninModal from './SigninModal';
import * as actions from '../actions';

import MenuIcon from '@material-ui/icons/Menu';
import {connect} from 'react-redux';


const useStyles = makeStyles((theme) => ({
    appBar: {
        background: "#fff"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    
   
}));

const Navbar = (props) => {

    const classes = useStyles();
    
    const [open, setOpen] = useState(false);
    const handleSignin = (e) => {
        handleOpen();
    }
    const handleOpen = ()=>{
        setOpen(true);
    }
    const handleClose = ()=>{
        setOpen(false);
    }
    const handleSignOut = (e)=>{
        props.signout((err)=>{
            if(!err){
                console.log('successfully signed out!');
            }
        });
    }
    console.log(props.isLogged);
    return (

        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title} color="primary">
                    Blogs
                </Typography>
                {(props.isLogged===false)?<Button color="primary" onClick={handleSignin} >Log in</Button>:<Button color="primary" onClick={handleSignOut}>Log out</Button>}
                <SigninModal openModal={open} closeModal={handleClose}/>
            </Toolbar>
        </AppBar>
    );
}
function mapStateToProps(state){
    return {
        isLogged: (state.auth.token !== '' && state.auth.token !== null)?true:false
    }
}

export default connect(mapStateToProps,actions)(Navbar);