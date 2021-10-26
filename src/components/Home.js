import React from 'react';
import { auth } from '../firebase'
import Navbar from './Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
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
        <Navbar />
        <p>Welcome {auth.currentUser.displayName}</p>
        <button onClick={logout}>Logout</button>

        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

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

export default Home;