import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ArticleCard from './components/ArticleCard';
import Navbar from './components/Navbar';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
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

  media: {
    height: 240
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">

      <Navbar />

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
            <ArticleCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ArticleCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ArticleCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ArticleCard />
          </Grid>
        </Grid>

      </Container>

    </div>
  );
}

export default App;
