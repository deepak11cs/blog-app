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
    
    const updateArticles = (e)=>{
        let index = e.currentTarget.getAttribute('statekey');
        let newUser = {...user};
        let articleid = e.currentTarget.getAttribute('datakey');
        console.log(e.currentTarget);
        console.log(index,e.target.getAttribute('key'));
        axios.post(`${URI}/deletearticle/${articleid}`, null, { headers: { 'authorization': localStorage.getItem('token') } })
        .then(res=>{
            if(res){
                console.log('article removed successfully');
                if(index!==-1 && index){
                    newUser.articles.splice(index,1);
                    setUser(newUser);
                }
            
            }
            
        });
        
      }

    return (
        <>
            <div>{props.match.params.name}</div>
            <ArticleList controls="true" update={updateArticles} data={user.articles}/>
        </>
    );
}

export default UserProfile;