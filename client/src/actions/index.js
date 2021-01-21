import {AUTH_USER, AUTH_ERROR} from './types';
import {URI} from '../config';
import axios from 'axios';

export const signup = (props, next) => async dispatch=>{
    try{
        const response = await axios.post(`${URI}/signup`,props,{
            headers: {
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Credentials": true,
            }
        });
        dispatch({type: AUTH_USER, payload: {token: response.data.token}});
        localStorage.setItem('token',response.data.token);
        next();
    }
    catch(e){
        dispatch({type: AUTH_ERROR, payload: 'Email is in use'});
    }
}

export const signout = (next)=>async (dispatch)=>{
    localStorage.clear();
    dispatch({type: AUTH_USER,payload: {token: ''}});
    next();
}

export const signin= (formProps,callback)=>async (dispatch)=>{
    try{
        const response = await axios.post(`${URI}/signin`,formProps);
        dispatch({type: AUTH_USER, payload: {token: response.data.token}});
        localStorage.setItem('token',response.data.token);
        callback();
    }catch(e){
        dispatch({type: AUTH_ERROR, payload: ''})
    }
}