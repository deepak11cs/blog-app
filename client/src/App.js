import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Card, CardActions, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#fff"
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "3.6rem",

  },
  quote: {
    textAlign: "center",
    padding: "5px"
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",

  },
  media: {
    height: 240
  }
}));

function App() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className="App">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} color="primary">
            Blogs
          </Typography>
          <Button color="primary" >Login</Button>
        </Toolbar>
      </AppBar>

      <Box className={classes.hero}>
        <Box className={classes.quote}>
          Ideas are easy. <br />
          Implementation is hard.
        </Box>
      </Box>


      <Container maxWidth="lg" className={classes.blogsContainer}>

        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
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
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
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
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
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
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
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
          </Grid>
        </Grid>

      </Container>

    </div>
  );
}

export default App;
