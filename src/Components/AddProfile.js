import react, { Component, useState } from 'react'
import axios from 'axios'
import * as React from 'react'
import './styles/AddProfile.css'
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddCircle from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';

import { Link } from 'react-router-dom'




class AddProfile extends Component {


    constructor(props) {
        super(props)
        this.state = {
            file: null,
            name: '',
            age: '',
            job: '',
            currentjob: '',
            startdate: '',
            enddate: '',
            companyname: '',
            companylogo: '',
            jobdescript: '',
            image: '',
        }
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
        this.uploadSingleFile = this.uploadSingleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.SaveProfil = this.SaveProfil.bind(this);
    };

    handleInput = (e) => {
        this.setState({
            name: e.target.value,
            age: e.target.value,
            job: e.target.value,
            currentjob: e.target.value,
            startdate: e.target.value,
            enddate: e.target.value,
            companyname: e.target.value,
            companylogo: e.target.value,
            jobdescript: e.target.value,
            image: e.target.value,
        });
    }

    SaveProfil (e){
        e.preventDefault();

        const packets = {
            name:  this.state.name,
            age: this.state.age,
            job: this.state.job,
            currentjob: this.state.currentjob,
            startdate: this.state.startdate,
            enddate: this.state.enddate,
            companyname: this.state.companyname,
            companylogo: this.state.companylogo,
            jobdescript: this.state.jobdescript,
            image: this.state.image
        };

        axios.post('http://127.0.0.1:8000/api/add-profile', packets)
            .then((res) => {
                this.state = ({
                    file: null,
                    name: '',
                    age: '',
                    job: '',
                    currentjob: '',
                    startdate: '',
                    enddate: '',
                    companyname: '',
                    companylogo: '',
                    jobdescript: '',
                    image: '',
                })
                this.props.history.push('/')
            })
            .catch(err => console.log(err));
    }

    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    };

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    };

    render() {

        let imgPreview;
        if (this.state.file) {
            imgPreview = <img src={this.state.file} alt='' />;
        }

        const content = !this.state.checked
            ? <div className='col-md-6 col-sm-12 exp_date' id='end_dates'>

                <input type="date" class="profile_date_month form-control" name='enddate' value={this.state.enddate} onChange={this.handleInput} required />
            </div>
            : null;

        return (
            <div className='container'>
                <div className='row'>
                    <form action="" method="get" onSubmit={this.SaveProfil}>
                        <div className='identity'>
                            <div className="mb-3 profile_picture">
                                <div>
                                    <img src={this.state.file} alt='' className="profile_picture_img" />
                                </div>
                                <input type="file" name="image" className="mb-3 form-control" onChange={this.uploadSingleFile} />
                            </div>
                            <div class="mb-3">

                                <input type="text" name='name' class="profile_name form-control " value={this.state.name} placeholder="Full Name" onChange={this.handleInput} required />
                            </div>
                            <select class="profile_age form-select" aria-label="Default select example" name='age' value={this.state.age} onChange={this.handleInput}>
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

                        <div className='experience'>
                            <div className="work_experience">
                                <h1>Work Experiences</h1>
                            </div>
                            <input type="text" class="job_title form-control" placeholder="Job Title" name='job' value={this.state.job} onChange={this.handleInput} required />
                            <div class="job_checkbox form-check">
                                <input class="job_check form-check-input" type="checkbox" id="flexCheckDefault" checked={this.state.checked} onChange={this.handleChange} />
                                <label class="checkbox form-check-label" for="flexCheckDefault" name='currentjob' value={this.state.currentjob} onChange={this.handleInput}>
                                    Current Position
                                </label>
                            </div>

                            <div className='experience_dates'>
                                <div className='col-md-6 col-sm-12 exp_date' id='start_dates'>

                                    <input type="date" class="profile_date_month form-control" name='startdate' value={this.state.startdate} onChange={this.handleInput} required />

                                </div>
                                {content}
                            </div>
                            <div className='company_detail'>
                                <input type="text" class=" company_name form-control " placeholder="Company name" name='companyname' value={this.state.email} onChange={this.handleInput} required />
                                <input type="file" class=" company_logo form-control " placeholder="Company logo" name='companylogo' value={this.state.companylogo} onChange={this.handleInput} required />
                            </div>
                            <div className='job_descript'>
                                <textarea type="text" class="job_description form-control " placeholder="Job description" rows="5" name='jobdescript' value={this.state.jobdescript} onChange={this.handleInput} required />
                                <button class="add_exp"><AddCircle />   Add Experiences</button>
                            </div>

                            <div className='submit_button'>
                                <button class="save_button" type="submit" onClick={this.SaveProfil}><SaveIcon />   SAVE</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default AddProfile