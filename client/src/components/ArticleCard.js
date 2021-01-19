import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme)=>({
    title: {
        flexGrow: 1
    },
    card: {
        maxWidth: "100%",
    },
}));

export default function ArticleCard() {
    const classes  = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
              </Typography>
                <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
              </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
              </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );

}