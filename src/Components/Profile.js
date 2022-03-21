import react, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import * as React from 'react'
import './styles/Profile.css'
import CreateIcon from '@mui/icons-material/Create';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditIcon from '@mui/icons-material/Edit';




class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            identities: '',
            experiences: []
        }
    }


    async componentDidMount() {
        const res = await fetch('http://127.0.0.1:8000/api/profile-identity');
        const data = await res.json();
        const resExp = await fetch('http://127.0.0.1:8000/api/profile-experience');
        const dataExp = await resExp.json();

        this.setState({
            identities: data,
            experiences: dataExp[dataExp.length - 1]
        });

        console.log(this.state.identities);
        console.log(this.state.experiences);
    }


    generateList = () => {
        return (
            <div>
                <div className='profile_ident'>
                    <div className='ident_image'>
                        <img src={this.state.identities.image} alt='' className="profile_picture_img" />
                    </div>
                    <div className='profile_details'>
                        <h1 name="profile_name">{this.state.identities.name}</h1>
                        <p>{this.state.identities.age} Years Old</p>
                    </div>
                    <div className='edit_button'>
                        <button className="update_button"><Link to="/EditProfile" className='button_link'><CreateIcon /> Update Profile</Link></button>
                    </div>
                </div>
                
            </div>
        )
    }

    generateExp = () => {
        return (
            <div>
                <div className='exp_content'>
                    <h1 className='exp_post'>{this.state.experiences.job}</h1>
                    <p className='exp_comp'>At {this.state.experiences.companyname}</p>
                    {/* <img src={this.state.experiences.companylogo} alt='' className="companylogo_img" /> */}
                    <p className='prof_date'>From {this.state.experiences.startdate} To {this.state.experiences.enddate}</p>
                    <p className='prof_decript'>{this.state.experiences.jobdescript}</p>
                </div>

            </div>
        )
    }


    



    render() {

        return (
            <div className='container'>

                <div className='row'>
                    <div className='col-md-3 col-mx-12 profile_identity'>
                        {this.generateList()}
                    </div>

                    <div className='col-md-9 col-mx-12 profile_experience'>
                        <div className='profile_experience_details'>
                            <div className='exp_head'>
                                <div className='exp_title'><h2>Employement Experience</h2></div>
                            </div>
                            {this.generateExp()}

                            {/* <div className='exp_content'>
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
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile