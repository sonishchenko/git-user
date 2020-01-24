import { createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

const reducer = (state, action) => {
    switch (action.type) {
    case 'FETCH_USERS_START':
        return { ...state, fetching: true};
    case 'FETCH_USERS_SUCCESS':
        return  { ...state, fetching: false};   
    case 'FETCH_USERS_ERROR':
        return { ...state, fetching: false};  
     default:
         return state   
}
};

const store = createStore(reducer(thunkMiddleware) );

export default store