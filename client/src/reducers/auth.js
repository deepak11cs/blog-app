
import {AUTH_USER, AUTH_ERROR} from '../actions/types';

const INITIAL_STATE = {
    isLogged: "",
}

const auth = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case AUTH_USER:
            return {...state, token: action.payload.token};
        case AUTH_ERROR: 
            return {...state};
        default: 
            return state;
    }
}


export default auth;