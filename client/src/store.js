import {createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
    reducers,
    {
        auth: { isLogged: localStorage.getItem("token")},

    },
    applyMiddleware(thunk)
);

export default store;
