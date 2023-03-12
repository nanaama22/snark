import React from 'react';
import Logo from './Logo';
import './Registration.css';
import Uploadicon from '../../assets/Upload icon.png'
import { Link } from "react-router-dom";

const SecondStep = () => {
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
                            <h3>Upload Credentials</h3>
                        <form>
                            <div className="file-uploader">
                                <div className="upload-inner">
                                    <img src={Uploadicon} alt="uploader" className="upload-img"/>
                                    <p>Drag & drop files or <a>Browse</a></p>
                                <input type='file'/>
                                </div>
                            </div>

                            <div className="uploading-file">

                            </div>
                            <div className='uploaded-files'>

                            </div>
                            <button type='submit' className="upload-btn"><Link to={'/app/dashboard'} style={{'color':'white'}}>Create Account</Link></button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default SecondStep