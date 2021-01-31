import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ArticleList from './ArticleList';
import axios from 'axios';
import { URI } from '../config';

const useStyles = makeStyles((theme) => ({

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
    }
  }));
  

const HomePage = (props) => {


    const classes = useStyles();
  const [articles, getArticles] = useState([]);

  useEffect(() => {
    axios.post(`${URI}/`, null, { headers: { 'authorization': localStorage.getItem('token') } })
      .then(res => {
        getArticles(res.data);
      });
  }, []);

    return (
        <>
            <Box className={classes.hero}>
                <Box className={classes.quote}>
                    Ideas are easy. <br />
                    Implementation is hard.
                </Box>
            </Box>


            <ArticleList data={articles} />
        </>

    );

}

export default HomePage;