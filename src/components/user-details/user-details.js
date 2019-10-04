import React, { Component } from "react";

import "./user-details.css";

export class UserDetails extends Component {

    render() {
        return (
            <div className='user-details col-md card'>
                <img className='user-photo'
                     src='https://starwars-visualguide.com/assets/img/characters/3.jpg'
                     alt="character"/>
                     <div className='card-body'>
                         <div className='login-item'>
                         <a className='login-link' href='#'>Login</a>
                         <span className='name-text'>Name User</span>
                         </div>
                         <div className='discription-item'>
                             <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse, optio quasi sapiente suscipit unde.</span>
                         </div>
                         <div className='inform-tem'>
                             <i className="fas fa-map-marker-alt"></i>
                             <span className='city-item'>Kyiv</span>
                             <i className="far fa-envelope email-p"></i>
                             <span className='email-item'>lorem@gmail.com</span>
                         </div>
                     </div>
             </div>

        )
    }}

