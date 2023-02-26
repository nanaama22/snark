import './doctorprofileinfocard.css'
import DoctorImage from '../../../assets/doctor2.jpg'

const DoctorProfileInfoCard = () => {
     return ( 
          <div className="doctor-profile-info-card">
               <div className="d-details">
                    <img src={DoctorImage} alt="" />
                    <div className="details">
                         <h3>Dr. Arifalo Damilola</h3>
                         <p>General Practitioner</p>
                         <p>Nairobi, Kenya</p>
                    </div>
               </div>
               <div className="card-divider"></div>
               <div className="professional-bio">
                    <h4>Professional Bio</h4>
                    <p>a competent ent surgeon practicing for the past 13 years and having a wide range of experience in treating patients with all kinds of ENT issues. listens to and addresses all of the patients concerns and clearly explains the course of treatment</p>
               </div>
               <div className="card-divider"></div>
               <div className="doctor-info">
                    <div className="doctor-info-stat">
                         <p className='d-stat-name'>Current position</p>
                         <p className='d-stat-value'>General Practitioner</p>
                    </div>
                    <div className="doctor-info-stat">
                         <p className='d-stat-name'>Degree</p>
                         <p className='d-stat-value'>MBBS, MS in otolaryngology</p>
                    </div>
                    <div className="doctor-info-stat">
                         <p className='d-stat-name'>Speciality</p>
                         <p className='d-stat-value'>family physician, general surgery, nasoendscopic surgery</p>
                    </div>
                    <div className="doctor-info-stat">
                         <p className='d-stat-name'>Academic Qualification</p>
                         <p className='d-stat-value'> MBBS, Medical University, New Delhi MS ENT, Medical Institute, Mumbai DNB ENT, Medical College and Hospital, Ranchi</p>
                    </div>
                    <div className="doctor-info-stat">
                         <p className='d-stat-name'>LinkedIn</p>
                         <p className='d-stat-value'>linkdn/Profile.com </p>
                    </div>
               </div>
          </div>
      );
}
 
export default DoctorProfileInfoCard;