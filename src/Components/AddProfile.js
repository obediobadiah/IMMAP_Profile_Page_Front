import react, { Component, useState } from 'react'
import * as React from 'react'
import './styles/AddProfile.css'
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import save from '@mui/icons-material/Save';

import { Link } from 'react-router-dom'



class AddProfile extends Component {

    


    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
    }

    handleChange() {
        this.setState({
          checked: !this.state.checked
      })
    }

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }

    render() {

        let imgPreview;
        if (this.state.file) {
            imgPreview = <img src={this.state.file} alt='' />;
        }

        const content = !this.state.checked 
    	? <div className='col-md-6 col-sm-12 exp_date' id='end_dates'>

        <select class="profile_date_month form-select" aria-label="Default select example" required>
            <option selected disabled hidden>End Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </select>

        <select class="profile_date_year form-select" aria-label="Default select example" required>
            <option selected disabled hidden>End Year</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
    </div>
      : null;

        return (
            <div className='container'>
                <div className='row'>
                    <form action="" method="get" >
                        <div className='identity'>
                            <div className="mb-3 profile_picture">
                                <div>
                                    <img src={this.state.file} alt='' className="profile_picture_img" />
                                </div>
                                <input type="file" className="mb-3 form-control" onChange={this.uploadSingleFile} />
                            </div>
                            <div class="mb-3">

                                <input type="text" class="profile_name form-control " placeholder="Full Name" required/>
                            </div>
                            <select class="profile_age form-select" aria-label="Default select example">
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
                            <input type="text" class="job_title form-control" placeholder="Job Title" required/>
                            <div class="job_checkbox form-check">
                                <input class="job_check form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={ this.state.checked } onChange={ this.handleChange }/>
                                <label class="checkbox form-check-label" for="flexCheckDefault">
                                    Current Position
                                </label>
                            </div>

                            <div className='experience_dates'>
                                <div className='col-md-6 col-sm-12 exp_date' id='start_dates'>
                                    <select class="profile_date_month form-select" aria-label="Default select example">
                                        <option selected disabled hidden>Start Month</option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                    <select class="profile_date_year form-select" aria-label="Default select example">
                                        <option selected disabled hidden>Start Year</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                    </select>

                                </div>
                                { content }
                            </div>
                            <div className='company_detail'>
                                <input refs="email" type="mail" class=" company_name form-control " placeholder="Company name" required />
                                <input type="file" class=" company_logo form-control " placeholder="Company logo" required />
                            </div>
                            <div className='job_descript'>
                                <textarea type="text" class="job_description form-control " placeholder="Job description" rows="5" required />
                                <button class="add_exp">Add Experiences</button>
                            </div>

                            <div className='submit_button'>
                                <button class="save_button" type="submit"><save />SAVE</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default AddProfile