import { Box, Button, Chip, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Autocomplete from '@material-ui/lab/Autocomplete';
import { URI } from '../config';
import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5px 20px'
    },
    title: {
        maxWidth: '600px',
        width: '70%'
    },
    padding: {
        padding: '5px 20px'
    }
}));

const PublishArticle = (props) => {

    const [text, setText] = useState("");
    const history = useHistory();
    const classes = useStyles();
    const handleChange = (value) => {
        setText(value);
    }
    const publish = () => {

        //collect title and tags from user
        
        let tagList = document.getElementsByClassName('MuiChip-label');
        
        tagList = Object.keys(tagList).map((key,index)=>tagList[key].valueOf().textContent);
        
        const title = document.getElementById('title').value;
        console.log(tagList,title,text);
        if((!text) || tagList.length == 0 || (!title) || title.length<=4 || text.length<=4){
            alert('Title, tags and Content are all required fields (min length 4)');
            return ;
        }
        const formData = {
            title: title,
            tags: tagList,
            content: text
        }
        axios.post(`${URI}/publish`,formData,{headers: {'authorization': localStorage.getItem('token')}})
            .then(res=>{
                alert('Article successfully published!');
                history.push(`/user/${props.username}`);
            })
            .catch(res=>{
                alert('Not Published');
            });
    }
    const defaulttags = [
        'Science',
        'Technology',
        'History',
        'Space',
        'Tutorial',
    ];
    return (
        <>
            <Box className={classes.menu}>
                <TextField className={classes.title} id="title" label="Title" required />
                <Button variant="contained" color="primary" onClick={publish}>Publish</Button>
            </Box>
            <Box className={classes.padding}>
                <Autocomplete
                    multiple
                    id="tags"
                    options={defaulttags}
                    defaultValue={[]}
                    freeSolo
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip id="tagslist" variant="outlined" label={option} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField {...params} variant="filled" label="Tags" required placeholder="Add another" />
                    )}
                />
            </Box>
            <ReactQuill className={classes.padding} value={text} onChange={handleChange} />
        </>
    );

}

const mapStateToProps = (state)=>{
    return {
        username: state.auth.username
    }
}

export default connect(mapStateToProps)(PublishArticle);