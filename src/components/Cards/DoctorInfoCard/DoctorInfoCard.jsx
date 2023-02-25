import './doctorInfoCard.css'
import DoctorImage from '../../../assets/doctor2.jpg'

const DoctorInfoCard = () => {
     return ( 
          <div className="d-card">
               <div className="doctor-details">
                    <img src={DoctorImage} alt="" />
                    <div className="details">
                         <h3>Dr. Arifalo Damilola</h3>
                         <p>General Practitioner</p>
                    </div>
               </div>
               <div className="card-divider"></div>
               <div className="doctor-stats">
                    <div className="stat">
                         <p className='stat-name'>Overall</p>
                         <p className='stat-value'>99</p>
                    </div>
                    <div className="stat">
                         <p className='stat-name'>Stat name</p>
                         <p className='stat-value'>35.5</p>
                    </div>
                    <div className="stat">
                         <p className='stat-name'>Stat name</p>
                         <p className='stat-value'>90%</p>
                    </div>
               </div>
          </div>
      );
}
 
export default DoctorInfoCard;