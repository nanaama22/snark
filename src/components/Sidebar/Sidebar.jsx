import "./sidebar.css";
import { IoLogOut } from "react-icons/io5";
import Logo from "../../assets/logo.png";

// icons
import DashboardIcon from "../../assets/svg/DashboardIcon";
import AppointmentIcon from "../../assets/svg/AppointmentIcon";
import ChatIcon from "../../assets/svg/ChatIcon";
import ProfileIcon from "../../assets/svg/ProfileIcon";
import CalendarIcon from "../../assets/svg/CalendarIcon";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {

     const menuItems = [
          {id: 1, name:"Dashboard", path:"/app/dashboard", icon: DashboardIcon},
          {id: 2, name:"Appointments", path:"/app/appointments", icon: AppointmentIcon},
          {id: 3, name:"Messages", path:"/app/messages", icon: ChatIcon},
          {id: 4, name:"Calendar", path:"/app/calendar", icon: CalendarIcon },
          {id: 5, name:"Profile", path:"/app/profile", icon: ProfileIcon},
          {id: 6, name:"Patients", path:"/app/patients", icon: ProfileIcon},
     ]

     const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0].id);

     const handleClick = (menuItem) => {
          setSelectedMenuItem(menuItem)
     }

     return (
          <div className="sidebar">
               <div className="logo-n-menu">
                    <img className="logo" src={Logo} alt="" />
                    <div className="menu">
                         <ul>
                              {
                                   menuItems.map((item) => (
                                        <Link key={item.id} to={item.path} className="menu-link" onClick={() => handleClick(item.id)}>
                                             <li>
                                                  {
                                                       selectedMenuItem === item.id ? <item.icon className="menu-icon" selected={true}/> : <item.icon className="menu-icon" />
                                                       
                                                  }
                                                  {
                                                       selectedMenuItem == item.id ? <p className="selected">{item.name}</p> : <p>{item.name}</p>
                                                  }
                                                  
                                             </li>
                                        </Link> 
                                   ))
                              }
                              {/* <Link to={'/app/dashboard'} className="menu-link" active>
                                   <li>
                                        <img src={DashboardIcon} alt="" />
                                        <p>Dashboard</p>
                                   </li>
                              </Link>
                              <Link to={'/app/appointments'} className="menu-link">
                                   <li>
                                        <img src={AppointmentIcon} alt="" />
                                        <p>Appointments</p>
                                   </li>
                              </Link>
                              <Link to={'/app/messages'} className="menu-link">
                                   <li>
                                        <img src={MessageIcon} alt="" />
                                        <p>Messages</p>
                                   </li>
                              </Link>
                              <Link to={'/app/profile'} className="menu-link">
                                   <li>
                                        <img src={ProfileIcon} alt="" />
                                        <p>Profile</p>
                                   </li>
                              </Link>
                              <Link to={'/app/calendar'} className="menu-link">
                                   <li>
                                        <img src={CalendarIcon} alt="" />
                                        <p>Calendar</p>
                                   </li>
                              </Link> */}
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
