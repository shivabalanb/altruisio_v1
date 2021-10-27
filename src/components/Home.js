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
    

    

  return (
    <div>
        <Navbar />
        <p>Welcome {auth.currentUser.displayName}</p>
    </div>
  )
}

export default Home;