import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

fetch('https://api.github.com/search/users?q=location:kiev&sort=followers&order=desc&per_page=10&page=1')
    .then((res) => {
        return res.json();
    })
    .then((body) => {
        console.log(body);
    });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
