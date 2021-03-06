import react, { Component } from 'react'
import './styles/Navigation.css'
import immap_logo from './Assets/iMMAP-logostrapline_transparent-copy.png'

import { Link } from 'react-router-dom'



function Navigation() {
    return (
        <div className='container'>
            <div className='NavigationBar'>
                <div className='nav-logo'>
                    <img src={immap_logo} className='logo' alt="IMMAP logo"/>
                </div>
                <div className='nav-links'>
                    <Link onClick={()=>{window.location.href = "/"}} className='nav_link'>Add Profile</Link>
                    <Link onClick={()=>{window.location.href = "/Profile"}} className='nav_link'>View Profile</Link>
                </div>
                <div className='immap-links'>
                    <a href='https://immap.org/' className='immap-link'>Visit Us</a>
                </div>
            </div>
        </div>
    )
}

export default Navigation