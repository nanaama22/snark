import "./sidebar.css";
import { IoLogOut } from "react-icons/io5";
import Logo from "../../assets/logo.png";

// icons
import DashboardIcon from "../../assets/svg/dashboard.svg";
import AppointmentIcon from "../../assets/svg/appointment.svg";
import MessageIcon from "../../assets/svg/chat.svg";
import ProfileIcon from "../../assets/svg/profile.svg";
import CalendarIcon from "../../assets/svg/calendar.svg";

const Sidebar = () => {
     return (
          <div className="sidebar">
               <div className="logo-n-menu">
                    <img className="logo" src={Logo} alt="" />
                    <div className="menu">
                         <ul>
                              <li>
                                   <img src={DashboardIcon} alt="" />
                                   <p>Dashboard</p>
                              </li>
                              <li>
                                   <img src={AppointmentIcon} alt="" />
                                   <p>Appointments</p>
                              </li>
                              <li>
                                   <img src={MessageIcon} alt="" />
                                   <p>Messages</p>
                              </li>
                              <li>
                                   <img src={ProfileIcon} alt="" />
                                   <p>Profile</p>
                              </li>
                              <li>
                                   <img src={CalendarIcon} alt="" />
                                   <p>Calendar</p>
                              </li>
                         </ul>
                    </div>
               </div>

               <div className="logout">
                    <span className="logout-data">
                         <IoLogOut style={{ fontSize: "1.7rem" }} />
                         <span>Log Out</span>
                    </span>
               </div>
          </div>
     );
};

export default Sidebar;
