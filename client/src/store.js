import {createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
    reducers,
    {
        auth: { token: localStorage.getItem("token"), username: localStorage.getItem("username")},

    },
    applyMiddleware(thunk)
);

export default store;
