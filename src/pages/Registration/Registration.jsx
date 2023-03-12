import React, {useState} from 'react';
import './Registration.css';
import Logo from './Logo';
import { Link } from "react-router-dom";


const Registration = () => {

  


  return (
    <div className="registration-page">
        <div className="registration-container">
            <Logo />
            <div className="f-container">
            <div className="f-container-inner">
            <div className="f-container-header">
<h1>Create Account</h1>
<h3>Join the world's leading appointment management system in three easy steps</h3>
<div></div>
</div>
<div className="">
    <h2 className="header-2">Verify your email</h2>
    <div className="email-container">
        <div className="email-inner">
            <p>A Mail Has Been Sent To Example@Gmail.Com, Kindly Verify That This Is You</p>
            <p>Your Login Details And Identification Number Will Be Attached In The Email Provided</p>
        </div>
    </div>
    <p id="help-text"><a href="#" className="help-link">Need any Help?</a></p>
</div>
<button type="submit" className="submit-btn"><Link to={'/registration2'} style={{'color':'white'}}>Next</Link></button>
</div>
            </div>
        </div>
    </div>
  )
}

export default Registration




