import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, makeStyles, Modal, OutlinedInput, TextField } from "@material-ui/core";
import React, { useState } from 'react';
import clsx from 'clsx';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import theme from "../theme";


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #fff',
        borderRadius: '8px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    formTitle: {
        fontFamily: 'serif',
        fontSize: '1.6em',
    },
    input: {
        width: '100%',
        margin: '5px'
    },
    textButton: {
        float: 'right',
        marginTop: '5px'
    }
}));
const SigninModal = (props) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const handleChange = (event) => {
        setPassword(event.target.value);
    };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h3 className={classes.formTitle}>Sign in to <span>Blogs</span></h3>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField className={classes.input} id="outlined-basic" label="Username" variant="outlined" />
                <FormControl className={clsx(classes.margin, classes.textField), classes.input} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                <Button className={classes.input} variant="outlined" disabled>
                    Sign in
                </Button>
                <Button className={classes.textButton} color="primary">Create New Account</Button>
            </form>
        </div>
    );
    return (



        <Modal
            open={props.openModal}
            onClose={props.closeModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>


    );

}


export default SigninModal;