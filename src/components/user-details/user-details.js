import React, { Component } from "react";

import "./user-details.css";


export class UserDetails extends Component {

    state = {
        name: null,
        location: null,
        bio: null
    };


    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.user.login}`)
            .then(response => response.json())
            .then(user => this.setState( {name: user.name,
                                                location: user.location,
                                                bio: user.bio
                                                        }))
    }

    render() {

      const {name, location, bio} = this.state;

        return (
            <div className='user-details col-md card'>
                <img className='user-photo'
                     src={this.props.user.avatar_url}
                     alt="character"/>
                     <div className='card-body'>
                         <div className='login-item'>
                         <a className='login-link' href={this.props.user.html_url}>{this.props.user.login}</a>
                         <span className='name-text'>{name}</span>
                         </div>
                         <div className='discription-item'>{bio}</div>
                         <div className='inform-tem'>
                             <i className="fas fa-map-marker-alt"></i>
                             <span className='city-item'>{location}</span>
                             <i className="far fa-envelope email-p"></i>
                             <span className='email-item'>lorem@gmail.com</span>
                         </div>
                     </div>
             </div>

        )
    }}

