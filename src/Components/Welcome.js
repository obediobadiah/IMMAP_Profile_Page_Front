import react, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Welcome.css'
import welcome_img from './Assets/undraw_dev_productivity_re_fylf.svg'
import Facebook from '@mui/icons-material/Facebook';
import Google from '@mui/icons-material/Google';


class Welcome extends Component {
    render() {
        return (
            <div className='welcome_container'>
                <div className='row welcome_content'>
                    <div className='col-md-6 welcome_img'>
                        <img src={welcome_img} className='welcome_vector' alt='welcome vector' />
                    </div>
                    <div className='col-md-6 welcome_login_data'>
                        <h1>Welcome!!</h1>
                        <h2>Sign In to your Account</h2>
                        <input type="text" className=" username form-control " placeholder="User name" name='companyname' required />
                        <input type="text" className=" password form-control " placeholder="Password" name='companyname' required />
                        <Link to="/" className='forgot_pass'><p>Forgot Password?</p></Link>
                        <Link to="/AddProfile" className='login_link'><button>Login</button></Link><br />
                        <Link to="/" className='login_link'><button>Log out</button></Link>

                        <div className='auth_links'>
                            <div className='auth_link'>
                                <span className='facebook'><Facebook /></span>
                                <span className='google'><Google /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome