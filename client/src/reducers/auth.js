import { AccordionActions } from '@material-ui/core';
import {AUTH_USER, AUTH_ERROR} from '../actions/types';

const INITIAL_STATE = {
    isLogged: "",
}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case AUTH_USER:
            return {...state, isLogged: true};
        case AUTH_ERROR: 
            return {...state};
        default: 
            return state;
    }
}