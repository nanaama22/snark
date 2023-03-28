import AppointmentCard from "../../components/Cards/AppointmentCard/AppointmentCard";
import TableCard from "../../components/Cards/TableCard/TableCard";
import Navbar from "../../components/Navbar/Navbar";
import './appointment.css'


const Appointments = () => {
     return ( 
          <div className="appointment-page">
               {/* header */}
               <div className="appointment-page-header">
                    <Navbar showbutton={'true'}/>
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
                         <AppointmentCard name={'Abuya Adamut'} time={'3:45'} age={'23'} gender={'Male'} />
                         <AppointmentCard name={'Blessing Aasir'} time={'23:12'} age={'18'} gender={'Female'}/>
                         <AppointmentCard name={'Virtue Absko'} time={'16:00'} age={'33'} gender={'Male'}/>
                         <AppointmentCard name={'Akeyo Mathew'} time={'09:55'} age={'51'} gender={'Male'}/>
                         <AppointmentCard name={'Cora Asher'} time={'15:05'} age={'12'} gender={'Male'}/>
                         <AppointmentCard name={'Duni Declan'} time={'09:37'} age={'36'} gender={'Male'}/>
                         <AppointmentCard name={'Isla Jasper'} time={'14:20'} age={'45'} gender={'Male'}/>

                    </div>


                    {/* incoming requests */}
                    <h4 style={{ margin: "2rem 0 1rem 0" }}>INCOMING REQUESTS</h4>
                    <div></div>
                    <TableCard />
               </div>
          </div>
      );
}
 
export default Appointments;