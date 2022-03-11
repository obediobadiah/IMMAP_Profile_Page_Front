import react, { Component } from 'react'
import './styles/AddProfile.css'

import { Link } from 'react-router-dom'



class AddProfile extends Component {
    render() {
        return (
            <div className='container'>
                <div className='NavBar'>
                    <div className='nav-links'>
                        <Link to=""></Link>
                    </div>
                    <div className='immap-links'>
                        <a href='https://immap.org/' className='immap-link'></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddProfile