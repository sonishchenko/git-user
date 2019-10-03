import React from 'react';
import {UserDetails} from "../user-details/user-details";


import './App.css';


function App() {
  return (
    <div className="all-users">
        <div>
        <UserDetails />
        </div>
        <div>
            <UserDetails />
        </div>
    </div>

  );
}

export default App;
