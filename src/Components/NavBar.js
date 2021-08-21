import React from 'react'
import '../scss/nav.css'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
        <div className="nav-bar d-flex justify-content-between align-items-center">
            <div className="nav-brand">
                    <img src="./logo.png" alt="" />
                   <span>My Shopeee</span> 
            </div>
            <div className="nav-list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/service">Service</Link> </li>
                        <li><Link to="/about">About</Link> </li>
                        <li><Link to="/contact">Contact</Link> </li>
                    </ul>
            </div>
            <div className="nav-list">
            <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">SignUp</Link> </li>
                    </ul>
            </div>
        </div>
    )
}

export default NavBar
