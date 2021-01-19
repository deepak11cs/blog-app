import React from 'react';
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";

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
    }
   
}));

const Navbar = () => {

    const classes = useStyles();
    const handleSignin = (e) => {
        
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
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;