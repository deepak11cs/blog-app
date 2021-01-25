import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { URI } from '../config';
import ArticleList from './ArticleList';

const UserProfile = (props)=>{

    const [user,setUser] = useState({});
    const history = useHistory();
    useEffect(()=>{
        axios.post(`${URI}/user/${props.match.params.name}`,null,{headers: {'authorization': localStorage.getItem('token')}})
            .then(res=>{
                setUser(res.data);
            })
            .catch(res=>{
                history.push('/');
            });
    },[]);
    
    return (
        <>
            <div>{props.match.params.name}</div>
            <ArticleList data={user.articles}/>
        </>
    );
}

export default UserProfile;