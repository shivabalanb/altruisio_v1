import React from 'react'
import {Card, Button} from 'react-bootstrap'
function Volunteer() {
    return (
        

        <div className="text-center">
            <h1>Volunteer Now!</h1>
                <Card className='text-center'>
                   
                <h2 className='h4'>Bentonville Public Library</h2>
                <h2>Monday, November 8th, 2021, 3:00PM-5:00PM CDT</h2>
                <p className='m-5'>We need volunteers to help shelve books. Wear comfortable shoes!</p>                
                <Button href="">Sign Up</Button>
                </Card>
                <Card className='text-center'>
                   
                   <h2 className='h4'>Smallville Food Pantry</h2>
                   <h2>Tuesday, November 9th, 2021, 12:00PM-4:00PM CDT</h2>
                   <p className='m-5'>Volunteers will help organize canned goods and assist in packaging bags.</p>                
                   <Button href="./signUp.js">Sign Up</Button>
                   </Card>
       </div>
    )
}

export default Volunteer
