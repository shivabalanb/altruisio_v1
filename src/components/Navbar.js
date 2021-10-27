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

function Navbar() {
    const logout = () => {
        auth.signOut()
    }
      
    return (

    <div>

        <Router>
      <div>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Altruismo</a>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
      
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/">Home</Link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/volunteer">Volunteer</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/profile">Profile</Link></a>
      </li>
      
    </ul>
  </div>
  <button class="btn btn-default" onClick={logout}>Logout</button>

</nav>
        </div>

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
