import { createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

const reducer = (users, action) => {
    switch (action.type) {
    case 'FETCH_USERS_START':
        return true;
    case 'FETCH_USERS_SUCCESS':
        return false ;   
    case 'FETCH_USERS_ERROR':
        return false ;  
     default:
         return users   
}
};

const store = createStore(reducer(thunkMiddleware) );

const fetchUsersStart = () => {({ type: FETCH_USERS_START })};

const fetchUsersSuccess = () => {({ type: FETCH_USERS_SUCCESS })};

const fetchUsersError = () => {({ type: FETCH_USERS_ERROR })};

export default store