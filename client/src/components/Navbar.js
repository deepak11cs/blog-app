import React, { useRef, useState, useEffect} from 'react';
import { AppBar, Button, IconButton, Menu, MenuItem, makeStyles, Toolbar, Typography } from "@material-ui/core";

import SigninModal from './SigninModal';
import * as actions from '../actions';

import MenuIcon from '@material-ui/icons/Menu';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';



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
    const [anchorEl, setAnchorEl] = useState(null);
    function useOutsideAlerter(ref) {
        useEffect(() => {
            
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    closeMenu();
                }
            }
    
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const menuRef = useRef(null);
    useOutsideAlerter(menuRef);
    const openMenu = (event) => {
        setAnchorEl(event.target);
      };
      const closeMenu = () => {
        setAnchorEl(null);
      };
      const handleMenuLogout = ()=>{
          closeMenu();
          handleSignOut();
      }
      const handleMenuLogin = ()=>{
          closeMenu();
          handleSignin();
      }
      const history = useHistory();
      const gotoProfile = ()=>{
          closeMenu();
          history.push(`/user/${props.username}`);
      }
      const gotoPublish = ()=>{
          closeMenu();
          history.push('/publish');
      }
      const loggedbody = (
        <div ref={menuRef}>
            <MenuItem onClick={gotoProfile}>Profile</MenuItem>
            <MenuItem onClick={gotoPublish}>Publish</MenuItem>
            <MenuItem onClick={handleMenuLogout}>Logout</MenuItem>
        </div>
    );
    const body = (

        <div ref={menuRef}>
            <MenuItem  onClick={handleMenuLogin}>Login</MenuItem>
        </div>
    );
    
    return (

        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <IconButton  aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu} edge="start" className={classes.menuButton} color="primary" aria-label="menu">
                    <MenuIcon />
                    
                </IconButton>
                <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {(props.isLogged)?loggedbody:body}
                    </Menu>
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
        isLogged: (state.auth.token !== '' && state.auth.token !== null)?true:false,
        username: state.auth.username
    }
}

export default connect(mapStateToProps,actions)(Navbar);