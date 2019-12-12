import { createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

const reducer = (users, action) => {
    switch (action.type) {
    case fetching === true:
        return 'FETCH_USERS_START';
    case fetching === false:
        return 'FETCH_USERS_SUCCESS' ;   
    case fetching === false:
        return 'FETCH_USERS_ERROR';  
     default:
         return users   
}
};

const store = createStore(reducer(thunkMiddleware) );

const fetchUsersStart = () => {({ type: FETCH_USERS_START })};

const fetchUsersSuccess = () => {({ type: FETCH_USERS_SUCCESS })};

const fetchUsersError = () => {({ type: FETCH_USERS_ERROR })};

export default store