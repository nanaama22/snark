import React from 'react';
import './Registration.css';
import Mainlogo from '../../assets/main-logo.png';
import Circle from '../../assets/Circle bar.png';
import Appointments from '../../assets/appointments.png';
import Activities from '../../assets/activities.png';
import Bell from '../../assets/bell.png';

const Logo = () => {
  return (
    <div>
        <div className="left-container">
                <div className="logo-container"><img src={Mainlogo} alt="main-logo"/></div>
                <div className="left-img-container">
                    <div className="n-index">
                        <img src={Circle} alt="circle" className='img-reg'/>
                    </div>
                    <div className="p-index">
                        {/* <div>
                            <img src={Appointments} alt="appointments"/>
                        </div> */}
                        <div className="p-container">
                            <div className="appointments-container">
                                <img src={Appointments} alt="appointments" className='img-reg'/>
                            </div>
                            <div className="row" id="bottom-row">
                                <div className="col-1">
                                    <img src={Activities} alt="activities" className='img-reg'/>
                                </div>
                                <div className="col-2">
                                    <img src={Bell} alt="bell-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-text">
                    <h3>Time To Manage Your Clinic With A Modern System</h3>
                </div>
            </div>
    </div>
  )
}

export default Logo