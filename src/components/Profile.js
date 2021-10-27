import React from 'react'
import {auth} from '../firebase'

function Profile() {
    return (
        <div className="text-center">
           <h2 className="display-4 m-5">Profile</h2>
           <h2>{auth.currentUser.email}</h2>
        </div>
    )
}

export default Profile
