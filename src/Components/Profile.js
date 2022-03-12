import react, { Component, useState } from 'react'
import * as React from 'react'
import './styles/Profile.css'
import CreateIcon from '@mui/icons-material/Create';




class Profile extends Component{

    render(){
        return (
            <div className='container'>


                <div className='row'>
                    <div className='col-md-3 profile_identity'>
                        <div className='profile_ident'>
                            <div className='ident_image'>
                                <img alt='' className="profile_picture_img" />
                            </div>
                            <div className='profile_details'>
                                <h1>Obedi Obadiah Mwendapeke</h1>
                                <p>85 Years Old</p>
                            </div>
                        </div>
                        <div className='edit_button'>
                            <div className='button_box'>
                                <button type="button" class="update_button"><CreateIcon /> Update</button>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-9 profile_experience'>
                        <div className='profile_experience_details'>
                            <div className='exp_head'>
                                <div className='exp_title'><h2>Employement Experience</h2></div>
                            </div>
                            <div className='exp_content'>
                                <h1 className='exp_post'>Full-stack Developer</h1>
                                <p className='exp_comp'>IMMAP Organization</p>
                                <p className='prof_date'>From 25 - November - 2010 To 25 - November - 2010</p>
                                <p className='prof_decript'>-Developing front-end website architecture.<br />
                                    -Designing user interactions on web pages.<br />
                                    -Worked with GitHub, Git, MongoDB, NodeJS, React, Redux, APIs, and other industry-leading development tools.<br />
                                    -Developing back-end website applications.<br />
                                    -Creating servers and databases for functionality.<br />
                                    -Ensuring cross-platform optimization for mobile phones.<br />
                                    -Ensuring responsiveness of applications.<br />
                                    -Working alongside graphic designers for web design features.<br />
                                    -Seeing through a project from conception to finished product.<br />
                                    -Designing and developing APIs.<br />
                                    -Meeting both technical and consumer needs.<br />
                                    -Staying abreast of developments in web applications and programming languages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile