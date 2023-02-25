import './nextappointment.css'
import Patient from '../../../assets/patient.png'

const NextAppointment = () => {
     return ( 
          <div className="n-card">
               <h4>NEXT APPOINTMENT</h4>
               <div className='appointment-details'>
                    <div className="bio-data">
                         <img src={Patient} alt="" />
                         <div className="ap-data">
                              <div className='name-n-time'> <p>Sarah Wellman</p> <p>9:00</p> </div>
                              <h6>Video Consultation</h6>
                         </div>
                    </div>
                    
               </div>
               <button className="view-history">View Patient History</button>
          </div>
      );
}
 
export default NextAppointment;