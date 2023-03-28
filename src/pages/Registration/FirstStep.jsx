import React from 'react';
import Logo from './Logo';
import './Registration.css';
import { Link } from "react-router-dom";
const FirstStep = () => {
  return (
    <div className="registration-page">
        <div className="registration-container">
            <Logo />

        <div className="f-container">
            <div className="f-container-inner">
            <div className="f-container-header"> 
            <h1>Create Account</h1>
            <p>Join the world's leading appointment management system in three easy steps</p>
            <div></div>
            <div>
                <h3>Register</h3>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Surname First"/>
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="text" placeholder="yourname@example.gmail.com"/>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" placeholder="Enter your phone number"/>
                    </div>
                    <div className="form-group-pair">
                    <div className="form-group" id="form-pair">
                        <label>County</label>
                        <input type="text" placeholder="E.G Busia County"/>
                    </div>
                    <div className="form-group" id="form-pair">
                        <label>City</label>
                        <input type="text" placeholder="E.G Nairobi"/>
                    </div>
                    </div>
                    <div className="form-group">
                        <label>Area Of Specialization</label>
                        <input type="text" placeholder="E.G Orthopedic Surgeon"/>
                    </div>
                    <button type="submit" className="submit-btn"><Link to={'/registration'} style={{'color':'white'}}>Next</Link></button>
                </form>
            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FirstStep