import React from 'react';
import '../Registration/Registration.css';
import './Login.css';
import Logo from '../Registration/Logo';

const Registration1 = () => {
  return (
    <div className="login-page">
        <div className="registration-container">
            <Logo/>
        <div className="f-container">
            <div className="login-inner">
            <h1><strong>Welcome Back!</strong></h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input placeholder="yourname@example.gmail.com" type="email"/>
                </div>
                <div className="form-group">
                    <label>Id Number</label>
                    <input placeholder="Enter your ID number" type="text"/>
                </div>
                <div className="b-form">
                    <div>
                    <input type="checkbox"/>
                    <label className="c-label">Remember me</label>
                    </div>
                    <p>Forgot id?</p>
                </div>
                <button type="submit" className="login-btn">login</button>
            </form>
            <p className="signup-text">Don't have an account? <span className="signup-link"><a>Sign up</a></span></p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Registration1