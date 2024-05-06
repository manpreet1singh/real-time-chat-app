import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <div class="container">
            <h2 class="log">
                notyourSocial
            </h2>
            <div class="search-bar">
                <i class="uil uil-search"></i>
                <input type="search" placeholder="search for a username"/>
            </div>
            <div class="create">
                <label class="btn btn-primary" for="create-post">Create</label>
            </div>
            <div class="profile-picture">
                <img class="pp" src="./images/photo_2023-05-22_00-24-38.jpg" alt=""/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar