import ChartCard from "../../components/Cards/ChartCard/ChartCard";
import DashboardInfoCard from "../../components/Cards/DashboardInfoCard/DashboardInfoCard";
import DoctorInfoCard from "../../components/Cards/DoctorInfoCard/DoctorInfoCard";
import NextAppointment from "../../components/Cards/NextAppointmentCard/NextAppointmentCard";
import PatientReviewCard from "../../components/Cards/PatientsReviewCard/PatientReviewCard";
import TableCard from "../../components/Cards/TableCard/TableCard";
import Search from "../../components/Search/Search";
import "./home.css";

const Home = () => {
     return (
          <div className="home">
               <div className="middle-content">
                    <div className="search-n-notification">
                         <Search />
                    </div>
                    <div className="hello-n-date">
                         <div className="hello">
                              <h2>Hi Damiola, </h2>
                              <p> you have 22 appointments today</p> 
                         </div>
                         <div className="date">
                              <p>Tuesday, 5 Nov, 2021</p>
                              <p>8:02am</p>
                         </div>
                    </div>
                    <div className="dashboard-info">
                         <DashboardInfoCard name={'Total appointment'} stat={'300'} color={'green'}/>
                         <DashboardInfoCard name={'Earnings'} stat={'KES 300,000'} color={'pink'}/>
                         <DashboardInfoCard name={'New Patients'} stat={'62'} color={'purple'}/>
                    </div>
                    <div className="chart">
                         <ChartCard />
                    </div>
                    <div className="appointments-table">
                         <TableCard />
                    </div>
               </div>
               <div className="right-content">
                    <div className="doctor-info-card">
                         <DoctorInfoCard />
                    </div>
                    <div className="next-appointment-card">
                         <NextAppointment />
                    </div>
                    <div className="patient-review-card">
                         <PatientReviewCard />
                    </div>
               </div>
          </div>
     );
};

export default Home;
