import React, { Component } from 'react';
import {UserDetails} from "../user-details/user-details";

import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []


        };
    }
     componentDidMount() {
        fetch('https://api.github.com/search/users?q=location:kiev&sort=followers&order=desc&per_page=10&page=1')
            .then(response => response.json())
            .then(users => this.setState( {users: users.items} ))
     }

    render() {

    const { users } = this.state;

        return (
               users.map( (user, index) => (<UserDetails key={index} {...user}/>) )
                )
    }

}
