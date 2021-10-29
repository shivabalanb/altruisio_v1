import React from 'react'
import {auth} from '../firebase'
import firebase from 'firebase'
import './Profile.css'
import headshot from './headshot_natural.jpg'
import {Card} from 'react-bootstrap'

function Profile() {
    const firebaseApp = firebase.apps[0]
    const db = firebase.firestore();
    const fetchBlogs=async()=>{
        const response=db.collection('users');
        const data=await response.get();
        let userinfo = data.docs.filter(item=>{
            return item.data()
           })
        console.log(userinfo);
    }

    return (
        
        
        <div className="text-center">
           <div className="container-p">
               <div className=' card h-75' style={{width: "400px"}}>
                 
                   <div className='p-5 align-middle imgb'>
                   <img onClick={fetchBlogs} src={headshot} alt="" />
                   </div>
                   
                   
                   
               </div>
               <Card className='text-center'>
                   <h2 className='display-4 m-5'>Shiva Balathandayuthapani</h2>
                <h2 className='h4'>Account Email: {auth.currentUser.email}</h2>
                <h2>Volunteer Hours: 35</h2>
                <p className='m-5'>Bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>                

                   <i class="fas fa-book-open"></i>
                </Card>
                <p>{JSON.stringify(firebaseApp.options, null, 2)}</p>
           </div> 
        </div>
    )
}

export default Profile
