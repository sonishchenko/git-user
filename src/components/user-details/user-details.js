import React, { Component } from "react";

import "./user-details.css";

export class UserDetails extends Component {

    render() {
        return (
            <div className='user-details col-md card'>
                <img className='user-photo'
                     src={this.props.avatar_url}
                     alt="character"/>
                     <div className='card-body'>
                         <div className='login-item'>
                         <a className='login-link' href='#'>{this.props.login}</a>
                         <span className='name-text'>{this.props.name}</span>
                         </div>
                         <div className='discription-item'>
                             {this.props.description}
                         </div>
                         <div className='inform-tem'>
                             <i className="fas fa-map-marker-alt"></i>
                             <span className='city-item'>{this.props.location}</span>
                             <i className="far fa-envelope email-p"></i>
                             <span className='email-item'>lorem@gmail.com</span>
                         </div>
                     </div>
             </div>

        )
    }}

