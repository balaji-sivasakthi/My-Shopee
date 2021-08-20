import React from 'react'
import '../scss/nav.css'
function NavBar() {
    return (
        <div className="nav-bar d-flex justify-content-between align-items-center">
            <div className="nav-brand">
                    <img src="./logo.png" alt="" />
                   <span>My Shopeee</span> 
            </div>
            <div className="nav-list">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
            </div>
        </div>
    )
}

export default NavBar
