import react, { Component, useState } from 'react'
import * as React from 'react'
import './styles/Profile.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import SaveIcon from '@mui/icons-material/Save';
import swal from 'sweetalert'
import EditIcon from '@mui/icons-material/Edit';




class EditProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            job: '',
            currentjob: '',
            startdate: '',
            enddate: '',
            companyname: '',
            companylogo: '',
            jobdescript: '',
        }
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
        this.uploadSingleFile = this.uploadSingleFile.bind(this);
        this.uploadSingleFileComapny = this.uploadSingleFileComapny.bind(this);
        this.handleInputName = this.handleInputName.bind(this);
        this.handleInputAge = this.handleInputAge.bind(this);
        this.handleInputJob = this.handleInputJob.bind(this);
        this.handleInputCurrentjob = this.handleInputCurrentjob.bind(this);
        this.handleInputStartDate = this.handleInputStartDate.bind(this);
        this.handleInputEndDate = this.handleInputEndDate.bind(this);
        this.handleInputCompanyName = this.handleInputCompanyName.bind(this);
        this.handleInputJobDescript = this.handleInputJobDescript.bind(this);
        this.SaveProfil = this.SaveProfil.bind(this);
        this.SaveExperienceEnddate = this.SaveExperienceEnddate.bind(this);
    };

    handleInputName = (e) => {
        this.setState({
            name: e.target.value,
        });
    }
    handleInputAge = (e) => {
        this.setState({
            age: e.target.value,
        });
    }
    handleInputJob = (e) => {
        this.setState({
            job: e.target.value,
        });
    }
    handleInputCurrentjob = (e) => {
        this.setState({
            currentjob: e.target.value,
        });
    }
    handleInputStartDate = (e) => {
        this.setState({
            startdate: e.target.value,
        });
    }
    handleInputEndDate = (e) => {
        this.setState({
            enddate: e.target.value,
        });
    }

    handleInputCompanyName = (e) => {
        this.setState({
            companyname: e.target.value,
        });
    }
    handleInputJobDescript = (e) => {
        this.setState({
            jobdescript: e.target.value,
        });
    }


    handleChange() {
        this.setState({
            checked: !this.state.checked,
        })
    };


    uploadSingleFile(e) {
        this.setState({
            image: URL.createObjectURL(e.target.files[0]),
        })
    };

    uploadSingleFileComapny(e) {
        this.setState({
            companylogo: URL.createObjectURL(e.target.files[0])
        })
    };



    SaveProfil = async (e) => {
        e.preventDefault();
        try {

            const data = {
                name: this.state.name,
                age: this.state.age,
                image: this.state.image
            };


            const res = await axios.post('http://127.0.0.1:8000/api/add-profile-identity', data)
            if (res.data.status === 200) {
                swal({
                    title: "Message",
                    text: "Profile edited successfully",
                    icon: "success",
                });
            }
        }
        catch (error) {
            swal('Warning', "Failed to save, Please make sure all fields are completed", error);
        }

    }



    SaveExperienceEnddate = async (e) => {
        e.preventDefault();
        try {
            if (this.state.checked) {
                const data = {
                    name: this.state.name,
                    job: this.state.job,
                    startdate: this.state.startdate,
                    enddate: "Current Position",
                    companyname: this.state.companyname,
                    companylogo: this.state.companylogo,
                    jobdescript: this.state.jobdescript,
                };

                const res = await axios.post('http://127.0.0.1:8000/api/add-profile-experience', data)
                if (res.data.status === 200) {

                    swal({
                        title: "Message",
                        text: "Experience edited successfully",
                        icon: "success",
                    });
                }
            }
            else {
                const data = {
                    name: this.state.name,
                    job: this.state.job,
                    startdate: this.state.startdate,
                    enddate: this.state.enddate,
                    companyname: this.state.companyname,
                    companylogo: this.state.companylogo,
                    jobdescript: this.state.jobdescript,
                };

                const res = await axios.post('http://127.0.0.1:8000/api/add-profile-experience', data)
                if (res.data.status === 200) {

                    swal({
                        title: "Message",
                        text: "Experience edited successfully",
                        icon: "success",
                    });
                }
            }
        }
        catch (error) {
            swal('Warning', "Failed to save, Please make sure all fields are completed", error);
        }

    }




    render() {

        const content = !this.state.checked
            ? <div className='col-md-6 col-sm-12 exp_date' id='end_dates'>

                <input type="date" class="profile_date_month form-control" name='enddate' value={this.state.enddate} onChange={this.handleInputEndDate} required />
            </div>
            : null;

        return (
            <div className='container'>
                <div className='row'>
                    <div className='Edit_title'>
                        <h1>PROFILE INFORMATIONS EDITOR</h1>
                    </div>
                    <form action="" method="post" enctype="multipart/form-data" checkCheckBox={this.handleChangeCheckbox}>
                        <div className='identity'>
                            <div className="mb-3 profile_picture">
                                <div>
                                    <img src={this.state.image} alt='' className="profile_picture_img" />
                                </div>
                                <input type="file" name="image" className="mb-3 form-control" onChange={this.uploadSingleFile} />
                            </div>
                            <div class="mb-3">

                                <input type="text" name='name' class="profile_name form-control " value={this.state.name} placeholder="Full Name" onChange={this.handleInputName} required />
                            </div>
                            <select class="profile_age form-select" aria-label="Default select example" name='age' value={this.state.age} onChange={this.handleInputAge}>
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

                            <div className='submit_button'>
                                <button className="save_button" type="submit" onClick={this.SaveProfil}><EditIcon />EDIT IDENTITY</button>
                            </div>

                        </div>

                        <div className='experience'>
                            <div className="work_experience">
                                <h1>Work Experiences</h1>
                            </div>
                            <input type="text" class="job_title form-control" placeholder="Job Title" name='job' value={this.state.job} onChange={this.handleInputJob} required />
                            <div class="job_checkbox form-check">
                                <input class="job_check form-check-input" type="checkbox" id="flexCheckDefault" checked={this.state.checked} onChange={this.handleChange} />
                                <label class="checkbox form-check-label" for="flexCheckDefault" name='currentjob' value={this.state.currentjob} onChange={this.handleInputEndDate}>
                                    Current Position
                                </label>
                            </div>

                            <div className='experience_dates'>
                                <div className='col-md-6 col-sm-12 exp_date' id='start_dates'>

                                    <input type="date" class="profile_date_month form-control" name='startdate' value={this.state.startdate} onChange={this.handleInputStartDate} required />

                                </div>
                                {content}
                            </div>
                            <div className='company_detail'>
                                <input type="text" className=" company_name form-control " placeholder="Company name" name='companyname' value={this.state.companyname} onChange={this.handleInputCompanyName} required />
                                <input type="file" className=" company_logo form-control " placeholder="Company logo" name='companylogo' onChange={this.uploadSingleFileComapny} required />
                            </div>
                            <div className='job_descript'>
                                <textarea type="text" className="job_description form-control " placeholder="Job description" rows="5" name='jobdescript' value={this.state.jobdescript} onChange={this.handleInputJobDescript} required />
                            </div>

                            <div className='submit_button'>
                                <button
                                    className="save_button"
                                    type="submit"
                                    onClick={this.SaveExperienceEnddate}>
                                    <EditIcon />
                                    EDIT EXPERIENCE
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditProfile