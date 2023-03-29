import Search from "../../components/Search/Search";
import "./messages.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { IoCreateOutline } from "react-icons/io5";
import { RiSendPlane2Fill } from "react-icons/ri";
import { FiMoreVertical } from "react-icons/fi";
import { FaVideo, FaPhoneAlt } from "react-icons/fa";


const Messages = () => {
     return (
          <div className="messages-page">
               {/* header */}
               <div className="messages-page-header">
                    <Navbar />
               </div>

               {/* start here */}

               <div className="message-section">
                    <section className="discussions">
					<div style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem"}}>
						<h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'black'}}>Recent Chat</h4>
						<span><IoCreateOutline size={25}/></span>
					</div>
					<div style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem", color: 'black'}}>
						<p style={{ borderBottom: '3px solid #1F419D', width: '2rem', textAlign: 'center'}}>All</p>
						<p>Patients</p>
						<p>Doctors</p>
					</div>
					<div className="discussion-list">
						<div className="discussion">
							<div className="photo"></div>
							<div className="desc-contact">
								<div style={{ display: 'flex', justifyContent: 'space-between'}}>
									<p className="name">Leslie Alexander</p>
									<p className="timer">1 hour ago</p>
								</div>
								<p className="message">
									You are welcome. I would schedule...
								</p>
							</div>
						</div>
						<div className="discussion">
							<div className="photo"></div>
							<div className="desc-contact">
								<div style={{ display: 'flex', justifyContent: 'space-between'}}>
									<p className="name">Amanda Halls</p>
									<p className="timer">32 min ago</p>
								</div>
								<p className="message">
									Send me the details....
								</p>
							</div>
						</div>
						<div className="discussion">
							<div className="photo"></div>
							<div className="desc-contact">
								<div style={{ display: 'flex', justifyContent: 'space-between'}}>
									<p className="name">Michael Drills</p>
									<p className="timer">6 hours ago</p>
								</div>
								<p className="message">
									Next Week will be a break for ....
								</p>
							</div>
						</div>
						<div className="discussion">
							<div className="photo"></div>
							<div className="desc-contact">
								<div style={{ display: 'flex', justifyContent: 'space-between'}}>
									<p className="name">Hagan Affour</p>
									<p className="timer">2 min ago</p>
								</div>
								<p className="message">
									Hi.. Good evening and thank you...
								</p>
							</div>
						</div>
						<div className="discussion">
							<div className="photo"></div>
							<div className="desc-contact">
								<div style={{ display: 'flex', justifyContent: 'space-between'}}>
									<p className="name">Walter Hillson</p>
									<p className="timer">11 hour ago</p>
								</div>
								<p className="message">
									Send me the invoice of the service...
								</p>
							</div>
						</div>
						<div className="discussion">
							<div className="photo"></div>
							<div className="desc-contact">
								<div style={{ display: 'flex', justifyContent: 'space-between'}}>
									<p className="name">Anita Wills</p>
									<p className="timer">2 sec ago</p>
								</div>
								<p className="message">
									Thank you very much.... I am grateful
								</p>
							</div>
						</div>
					</div>
                    </section>

                    <section className="chat">
                         <div className="header-chat">
						<div style={{ display: 'flex', alignItems: 'center'}}>
							<div className="photo">
								<div className="online"></div>
							</div>
							<div>
								<p className="name">Leslie Alexander</p>	
								<p className="name" style={{ fontSize: '0.7rem', fontWeight:'400', textTransform: 'capitalize'}}>Active now</p>
							</div>
						</div>
						<div className="chat-header-action-items">
							<FaPhoneAlt />
							<FaVideo />
							<FiMoreVertical />
						</div>
						
                              
                         </div>
                         <div className="messages-chat">
                              <div className="message">
                                   {/* <div className="photo">
                                        <div className="online"></div>
                                   </div> */}
                                   <p className="text"> Hi, how are you ? </p>
                              </div>
                              <div className="message">
                                   <p className="text">
                                        {" "}
                                        What are you doing tonight ? Want to go
                                        take a drink ?
                                   </p>
                              </div>
                              <p className="time"> 14h58</p>
                              <div className="message">
                                   <div className="response">
                                        <p className="text">
                                             {" "}
                                             Hey Megan ! It's been a while
                                        </p>
                                   </div>
                              </div>
                              <div className="message">
                                   <div className="response">
                                        <p className="text">
                                             {" "}
                                             When can we meet ?
                                        </p>
                                   </div>
                              </div>
                              <p className="response-time time"> 15h04</p>
                              <div className="message">
                                   {/* <div className="photo">
                                        <div className="online"></div>
                                   </div> */}
                                   <p className="text">
                                        {" "}
                                        9 pm at the bar if possible
                                   </p>
                              </div>
                              <p className="time"> 15h09</p>
                         </div>
                         <div className="footer-chat">
                              <i className="icon fa fa-smile-o clickable"></i>
                              <input
                                   type="text"
                                   className="write-message"
                                   placeholder="Type your message here"
                              />
                              <i
                                   className="icon send fa fa-paper-plane-o clickable"
                                   aria-hidden="true"
                              ></i>
						<button className="send-button"><span>Send</span> <RiSendPlane2Fill /> </button>
                         </div>
                    </section>
               </div>
               {/* finis here */}
          </div>
     );
};

export default Messages;
