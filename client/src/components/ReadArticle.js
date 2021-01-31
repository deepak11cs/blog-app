import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { URI } from '../config';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { makeStyles } from '@material-ui/core';
 
const ArticleContent = (props)=>{

    return (

        <div dangerouslySetInnerHTML={{__html: props.content}}></div>
    );
}

const useStyles = makeStyles((theme)=>({

    padding: {
        padding: '5px 10%'
    }

}));

const ReadArticle = (props)=>{

    const classes = useStyles();

    const [data,setData] = useState('');
    const history = useHistory();
    useEffect(()=>{

        axios.post(`${URI}/article/${props.match.params.id}`)
            .then(res=>{

                
                setData(res.data);
            })
            .catch(res=>{
                history.push('/');
            });

    },[]);


    return (

        
        <div className={classes.padding}>
            <h1>{data.title}</h1>
            <ArticleContent content={data.content}/>
        </div>

    );

}

export default ReadArticle;