import react, { Component, useState } from 'react'
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
            show: false,
            showExp: false,
            identities: '',
            experiences: []
        }

        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleModal() {
        this.setState({
            show: !this.state.show
        });
    }

    handleModalExp() {
        this.setState({
            show: !this.state.showExp
        });
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
                <div className='ident_image'>
                    <img src={this.state.identities.image} alt='' className="profile_picture_img" />
                </div>
                <div className='profile_details'>
                    <h1 name="profile_name">{this.state.identities.name}</h1>
                    <p>{this.state.identities.age} Years Old</p>
                </div>
            </div>
        )
    }

    generateExp = () => {
        return (
            <div>
                <div className='exp_content'>
                    <h1 className='exp_post'>{this.state.experiences.job}</h1>
                    <p className='exp_comp'>{this.state.experiences.companyname}</p>
                    <p className='prof_date'>From {this.state.experiences.startdate} To {this.state.experiences.enddate}</p>
                    <p className='prof_decript'>{this.state.experiences.jobdescript}</p>
                </div>
            </div>
        )
    }

    handleChange() {
        this.setState({
            checked: !this.state.checked,
        })
    };




    render() {

        const content = !this.state.checked
            ? <div className='col-md-6 col-sm-12 exp_date' id='end_dates'>

                <input type="date" class="profile_date_month form-control" name='enddate' value={this.state.enddate} onChange={this.handleInputEndDate} required />
            </div>
            : null;

        return (
            <div className='container'>

                <Modal className="modal fade bd-example-modal-lg" show={this.state.show}>
                    <Modal.Header>
                        <Modal.Title>
                            UPDATE PROFILE IDENTITY
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form action="" method="post" enctype="multipart/form-data">
                            <div className='identity_edit'>
                                <div className="mb-3 profile_picture_edit">
                                    <div>
                                        <img alt='' className="profile_picture_img_edit" />
                                    </div>
                                    <input type="file" name="image" className="mb-3 form-control" />
                                </div>
                                <div class="mb-3">

                                    <input type="text" name='name' class="profile_name_edit form-control " placeholder="Full Name" required />
                                </div>
                                <select class="profile_age_edit form-select" aria-label="Default select example" name='age'>
                                    <option selected disabled hidden>Select Age</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                    <option value="32">32</option>
                                    <option value="33">33</option>
                                    <option value="34">34</option>
                                    <option value="35">35</option>
                                    <option value="36">36</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                    <option value="40">40</option>
                                    <option value="41">41</option>
                                    <option value="42">42</option>
                                    <option value="43">43</option>
                                    <option value="44">44</option>
                                    <option value="44">45</option>
                                </select>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-danger">
                            <EditIcon />
                            UPDATE PROFILE
                        </Button>
                        <Button variant="secondary" onClick={() => { this.handleModal() }}>
                            CANCEL
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal className="modal fade bd-example-modal-lg" show={this.state.showExp}>
                    <Modal.Header>
                        <Modal.Title>
                            UPDATE PROFILE IDENTITY
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form action="" method="post" enctype="multipart/form-data">
                            <div className='experience'>
                                <div className="work_experience">
                                    <h1>Work Experiences</h1>
                                </div>
                                <input type="text" class="job_title form-control" placeholder="Job Title" name='job' required />
                                <div class="job_checkbox form-check">
                                    <input class="job_check form-check-input" type="checkbox" id="flexCheckDefault" checked={this.state.checked} onChange={this.handleChange} />
                                    <label class="checkbox form-check-label" for="flexCheckDefault" name='currentjob'>
                                        Current Position
                                    </label>
                                </div>

                                <div className='experience_dates'>
                                    <div className='col-md-6 col-sm-12 exp_date' id='start_dates'>

                                        <input type="date" class="profile_date_month form-control" name='startdate' required />

                                    </div>
                                    {content}
                                </div>
                                <div className='company_detail'>
                                    <input type="text" className=" company_name form-control " placeholder="Company name" name='companyname' required />
                                    <input type="file" className=" company_logo form-control " placeholder="Company logo" name='companylogo' required />
                                </div>
                                <div className='job_descript'>
                                    <textarea type="text" className="job_description form-control " placeholder="Job description" rows="5" name='jobdescript' required />
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-danger">
                            <EditIcon />
                            UPDATE PROFILE
                        </Button>
                        <Button variant="secondary" onClick={() => { this.handleModalExp() }}>
                            CANCEL
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className='row'>
                    <div className='col-md-3 col-mx-12 profile_identity'>
                        <div className='profile_ident'>
                            {this.generateList()}
                        </div>
                        <div className='edit_button'>
                            <div className='button_box'>
                                <button type="button" class="update_button" onClick={() => { this.handleModal() }}><CreateIcon /> Update</button>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-9 col-mx-12 profile_experience'>
                        <div className='profile_experience_details'>
                            <div className='exp_head'>
                                <div className='exp_title'><h2>Employement Experience</h2></div>
                                <div className='exp_edit_icon'><EditIcon onClick={() => { this.handleModal() }} /></div>
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