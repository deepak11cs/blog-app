import React, { useState } from 'react';
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";

import SigninModal from './SigninModal';


import MenuIcon from '@material-ui/icons/Menu';



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

const Navbar = () => {

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

    
    return (

        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title} color="primary">
                    Blogs
                </Typography>
                <Button color="primary" onClick={handleSignin} >Login</Button>
                <SigninModal openModal={open} closeModal={handleClose}/>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;