import { Grid, makeStyles, Paper } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { URI } from '../config';
import ArticleList from './ArticleList';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const UserProfile = (props) => {
    const classes = useStyles();
    const [user, setUser] = useState({ articles: [] });
    const history = useHistory();
    useEffect(() => {
        axios.post(`${URI}/user/${props.match.params.name}`, null, { headers: { 'authorization': localStorage.getItem('token') } })
            .then(res => {
                setUser(res.data);
            })
            .catch(res => {
                history.push('/');
            });
    }, []);

    const updateArticles = (e) => {
        let index = e.currentTarget.getAttribute('statekey');
        let newUser = { ...user };
        let articleid = e.currentTarget.getAttribute('datakey');
        console.log(e.currentTarget);
        console.log(index, e.target.getAttribute('key'));
        axios.post(`${URI}/deletearticle/${articleid}`, null, { headers: { 'authorization': localStorage.getItem('token') } })
            .then(res => {
                if (res) {
                    console.log('article removed successfully');
                    if (index !== -1 && index) {
                        newUser.articles.splice(index, 1);
                        setUser(newUser);
                    }

                }

            });

    }

    return (
        <>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>

                            <h1>{props.match.params.name}</h1>
                            <h3>Total articles : {user.articles.length}</h3>

                        </Paper>
                    </Grid>

                </Grid>
            </div>

            <ArticleList controls="true" update={updateArticles} data={user.articles} />
        </>
    );
}

export default UserProfile;