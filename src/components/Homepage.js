import React from 'react';
import Navbar from './Navbar';

const Homepage = () => {
    

    

  return (
    <div>
        <Navbar />
        <h3 className="text-center p-2">What is Altruismo?</h3>
        <p className="text-center p-2">Altruismo is a volunteer platform where you can find service opportunities in your community.</p>
        <h3 className="text-center">Head to the volunteer page to start finding opportunities now!</h3>
        {/* {console.log(auth.currentUser)} */}
        <p className="text-center p-2">Created 2021 by Kate Pearce and Shiva Balathandayuthapani</p>
    </div>
  )
}

export default Homepage;