import React from 'react'


function Navbar() {
    return (
        

        <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Altruismo</a>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
      
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Volunteer</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Profile</a>
      </li>
      
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar
