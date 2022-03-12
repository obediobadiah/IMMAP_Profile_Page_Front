import react, { Component, useState } from 'react'
import * as React from 'react'
import './styles/Profile.css'
import CreateIcon from '@mui/icons-material/Create';
import SearchIcon from '@mui/icons-material/Search';




class Profile extends Component {

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 profile_identity'>
                        <div className='modify_icon'>
                            <p><CreateIcon /></p>
                        </div>
                        <div className='profile_ident'>

                            <div className='ident_image'>
                                <img alt='' className="profile_picture_img" />
                            </div>
                            <div className='profile_details'>
                                <h1>Obedi Obadiah Mwendapeke</h1>
                                <p>85 Years Old</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-9 profile_experience'>
                        <div className='exp_head'>
                            <div className='exp_title'><h2>Employement Experience</h2></div>
                            <div className='modify_icon'>
                                <p><CreateIcon /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile