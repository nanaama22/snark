import Navbar from "../../components/Navbar/Navbar";
import './appointment.css'


const Appointments = () => {
     return ( 
          <div className="appointment-page">
               {/* header */}
               <div className="appointment-page-header">
                    <Navbar />
               </div>
               <div className="appointment-page-content">
                    <h4>TODAY'S SUMMARY</h4>
                    <div className="appointment-summary">
                         <span className="appointment-summary-item">1</span>
                         <span className="appointment-summary-item item-bordered">2</span>
                         <span className="appointment-summary-item item-bordered">3</span>
                         <span className="appointment-summary-item item-bordered">4</span>
                    </div>

                    {/* upcoming appointment */}
                    <div className="upcoming-appointments-header">
                         <h4>UPCOMING APPOINTMENTS</h4>
                         <input type="date" />
                    </div>
                    {/* Horizontally scrollable */}
                    <div>

                    </div>


                    {/* incoming requests */}
                    <h4>INCOMING REQUESTS</h4>
                    <div></div>
               </div>
          </div>
      );
}
 
export default Appointments;