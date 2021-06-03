import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ArticleCard from './ArticleCard';

const useStyles = makeStyles((theme) => ({

    blogsContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    }
}));


const ArticleList = (props) => {

    const classes = useStyles();
    let body;
    if(props.data && props.data.length>0){
        body = props.data.map((ele,index)=>{

            return (
                <Grid item xs={12} sm={6} md={4}>
                    <ArticleCard datakey={ele._id} statekey={index} update={props.update} controls={props.controls} data={ele}/>
                </Grid>
            )

        });
    }
    else{
        body = (
                <div>No Articles found</div>
        );
    }


    return (

        <Container maxWidth="lg" className={classes.blogsContainer}>

            <Typography variant="h4" className={classes.blogTitle}>
                Articles
        </Typography>

            <Grid container spacing={3}>
                {body}
            </Grid>

        </Container>

    );

}

export default ArticleList;