import Patient from "../../../assets/patient.png";
import './appointmentcard.css'

const AppointmentCard = ({ name,time,age,gender }) => {
     return (
          <div className="appointment-card">
               <div className="appointment-bio-data">
                    <img src={Patient} alt="" />
                    <div className="appointment-data">
                         <div className="appointment-patient-name-n-time">
                              <p>{name}</p> 
                              <p>{time}</p>
                         </div>
                         <h6>Video Consultation</h6>
                    </div>
               </div> 
               <div className="appointment-patient-details">
                    <div className="appointment-p-desc">
                         <p className="appointment-p-desc-metric">Age:</p>
                         <p className="appointment-p-desc-value">{age}</p>
                    </div>
                    <div className="appointment-p-desc">
                         
                         <p className="appointment-p-desc-metric">Gender:</p>
                         <p className="appointment-p-desc-value">{gender}</p>
                    </div>
               </div>
               <div className="appointment-buttons">
                    <button className="appointment-button">Reschedule</button>
                    <button className="appointment-button">View details</button>
               </div>
               
          </div>
     );
};

export default AppointmentCard;
