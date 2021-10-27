import React from 'react';
import { auth } from '../firebase'
import Navbar from './Navbar';

const Homepage = () => {
    

    

  return (
    <div>
        <Navbar />
        <p className="text-center m-4">Welcome {auth.currentUser.displayName}</p>
        {console.log(auth.currentUser)}
    </div>
  )
}

export default Homepage;