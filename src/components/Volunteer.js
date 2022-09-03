import React from 'react'
import {Card, Button} from 'react-bootstrap'
import signUp from "./signUp"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Volunteer() {
    return (
        
      <Router>

      <Switch path="/volunteer">
        <div className="text-center">
            <h1>Volunteer Now!</h1>
                <Card className='text-center'>
                   
                <h2 className='h4'>Bentonville Public Library</h2>
                <h2>Monday, November 8th, 2021, 3:00PM-5:00PM CDT</h2>
                <p className='m-5'>We need volunteers to help shelve books. Wear comfortable shoes!</p>                
                <Button href="/myschedule">Sign Up</Button>
                </Card>
                <Card className='text-center'>
                   
                   <h2 className='h4'>Smallville Food Pantry</h2>
                   <h2>Tuesday, November 9th, 2021, 12:00PM-4:00PM CDT</h2>
                   <p className='m-5'>Volunteers will help organize canned goods and assist in packaging bags.</p>                
                   <Button href="/myschedule">Sign Up</Button>
                   </Card>
                   </div>
       </Switch>
      <Switch path="/myschedule">
        <signUp />
      </Switch>
       </Router>
    )
}

export default Volunteer
