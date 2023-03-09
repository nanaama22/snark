import Patient from "../../../assets/patient.png";
import './appointmentcard.css'

const AppointmentCard = ({ status }) => {
     return (
          <div className="appointment-card">
               <div className="appointment-bio-data">
                    <img src={Patient} alt="" />
                    <div className="appointment-data">
                         <div className="appointment-patient-name-n-time">
                              <p>Sarah Wellman</p> 
                              <p>9:00</p>
                         </div>
                         <h6>Video Consultation</h6>
                    </div>
               </div>
               <div className="appointment-patient-details">
                    <div className="appointment-p-desc">
                         <p className="appointment-p-desc-metric">Age:</p>
                         <p className="appointment-p-desc-value">18</p>
                    </div>
                    <div className="appointment-p-desc">
                         
                         <p className="appointment-p-desc-metric">Gender:</p>
                         <p className="appointment-p-desc-value">Female</p>
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
