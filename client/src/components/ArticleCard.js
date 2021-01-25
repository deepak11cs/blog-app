import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
    card: {
        maxWidth: "100%",
    },
}));

const ArticleCard = (props) => {
    const classes = useStyles();

    const tags = props.data.tag.map(ele => {
        return (
            <span>ele</span>
        )
    });

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {tags}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.data.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.data.author.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.data.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Read More</Button>
            </CardActions>
        </Card>
    );

}


export default ArticleCard;