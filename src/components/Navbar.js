import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {auth} from '../firebase'
import Home from './Home';
import './Navbar.css'
import Profile from './Profile';
import Volunteer from './Volunteer';
import Logo from './altruismo.PNG'

function Navbar() {
    const logout = () => {
        auth.signOut()
    }
      
    return (

    <div>

        <Router>
      <div>
        <nav class="sticky-top navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
    <img src={Logo} class="d-inline-block align-top w-50" alt=""/>
  </a>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
      
    <ul class="navbar-nav">
      <li class="nav-item" >
        <a class="nav-link" ><Link to="/" style={{color: 'white'}}>Home</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><Link to="/volunteer" style={{color: 'white'}}>Volunteer</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><Link to="/profile" style={{color: 'white'}}>Profile</Link></a>
      </li>
      
    </ul>
  </div>
  <button class="btn btn-default" onClick={logout}>Logout</button>

</nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/volunteer">
            <Volunteer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>


    </div>  


    )
}

export default Navbar
