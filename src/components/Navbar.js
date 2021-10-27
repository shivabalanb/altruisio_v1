import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {auth} from '../firebase'
import './Navbar.css'

function Navbar() {
    const logout = () => {
        auth.signOut()
    }

    function Home() {
        return <h2>Home</h2>;
      }
      
      function About() {
        return <h2>About</h2>;
      }
      
      function Users() {
        return <h2>Users</h2>;
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
        <a class="nav-link" href="#"><Link to="/about">About</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/users">Users</Link></a>
      </li>
      
    </ul>
  </div>
  <button class="btn btn-default" onClick={logout}>Logout</button>

</nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
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
