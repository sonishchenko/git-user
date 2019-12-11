import { createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

const reducer = (users, action) {
    
}

const store = createStore(reducer(thunkMiddleware) ) 

export default store