import TableCard from "../../components/Cards/TableCard/TableCard";
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
                         <div className="appointment-summary-item">
                              <span>icon</span>
                              <div>
                                   <p>Appointments</p>
                                   <h5>11</h5>
                              </div>
                         </div>
                         <div className="appointment-summary-item item-bordered">
                              <span>icon</span>
                              <div>
                                   <p>Online Consultation</p>
                                   <h5>11</h5>
                              </div>
                         </div>
                         <div className="appointment-summary-item item-bordered">
                              <span>icon</span>
                              <div>
                                   <p>Missed</p>
                                   <h5>11</h5>
                              </div>
                         </div>
                         
                         <div className="appointment-summary-item item-bordered">
                              <span>icon</span>
                              <div>
                                   <p>Pending Approval</p>
                                   <h5>11</h5>
                              </div>
                         </div>
                    </div>

                    {/* upcoming appointment */}
                    <div className="upcoming-appointments-header">
                         <h4>UPCOMING APPOINTMENTS</h4>
                         <input type="date" />
                    </div>

                    {/* Horizontally scrollable */}
                    <div className="upcoming-appointments">
                         

                    </div>


                    {/* incoming requests */}
                    <h4>INCOMING REQUESTS</h4>
                    <div></div>
                    <TableCard />
               </div>
          </div>
      );
}
 
export default Appointments;