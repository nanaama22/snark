import Search from "../../components/Search/Search";
import "./messages.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { IoCreateOutline } from "react-icons/io5";
import { RiSendPlane2Fill } from "react-icons/ri";

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
								<p className="name">Leslie Alexander</p>
								<p className="timer">1 hour ago</p>
							</div>
                                   <p className="message">
                                        You are welcome. I would schedule...
                                   </p>
                              </div>
                         </div>
                    </section>

                    <section className="chat">
                         <div className="header-chat">
                              <i
                                   className="icon fa fa-user-o"
                                   aria-hidden="true"
                              ></i>
                              <p className="name">Megan Leib</p>
                              <i
                                   className="icon clickable fa fa-ellipsis-h right"
                                   aria-hidden="true"
                              ></i>
                         </div>
                         <div className="messages-chat">
                              <div className="message">
                                   <div className="photo">
                                        <div className="online"></div>
                                   </div>
                                   <p className="text"> Hi, how are you ? </p>
                              </div>
                              <div className="message text-only">
                                   <p className="text">
                                        {" "}
                                        What are you doing tonight ? Want to go
                                        take a drink ?
                                   </p>
                              </div>
                              <p className="time"> 14h58</p>
                              <div className="message text-only">
                                   <div className="response">
                                        <p className="text">
                                             {" "}
                                             Hey Megan ! It's been a while
                                        </p>
                                   </div>
                              </div>
                              <div className="message text-only">
                                   <div className="response">
                                        <p className="text">
                                             {" "}
                                             When can we meet ?
                                        </p>
                                   </div>
                              </div>
                              <p className="response-time time"> 15h04</p>
                              <div className="message">
                                   <div className="photo">
                                        <div className="online"></div>
                                   </div>
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
