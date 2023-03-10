import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./calendar.css";
import Navbar from "../../components/Navbar/Navbar";

import { FiMoreVertical } from "react-icons/fi";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import CalendarEventAction from "../../components/CalendarEventAction/CalendarEventAction";
import ScheduledEventInfo from "../../components/ScheduledEventInfo/ScheduledEventInfo";

const Calendar = () => {
     const events = [{ title: "Meeting", start: new Date() }];

     return (
          <div className="calendar-page">
               {/* header */}
               <div className="calendar-page-header">
                    <Navbar />
               </div>

               {/* calendar */}
               <div className="calendar">
                    <FullCalendar
                         plugins={[dayGridPlugin]}
                         initialView="dayGridMonth"
                         events={events}
                         eventContent={renderEventContent}
                    />
               </div>

               <div className="calendar-quick-actions">
                    {/* draggable events card */}
                    <div className="draggable-events">
                         <div className="title-n-more">
                              <h4>DRAGGABLE EVENTS</h4>
                              <span>
                                   <FiMoreVertical />
                              </span>
                         </div>
                         <div className="create-new-event-btn">
                              <button> <span style={{'color':'white'}}>
                                   <BsFillBookmarkPlusFill />Create New
                                   Event</span>
                              </button>
                         </div>

                         <div className="d-events-options">
                              <CalendarEventAction
                                   name={"video call"}
                                   bgColor={"#DCFCE7"}
                                   color={"#16A34A"}
                              />
                              <CalendarEventAction
                                   name={"video call"}
                                   bgColor={"#FEF9C3"}
                                   color={"#CA8A04"}
                              />
                              <CalendarEventAction
                                   name={"video call"}
                                   bgColor={"#FEE2E2"}
                                   color={"#DC2626"}
                              />
                              <CalendarEventAction
                                   name={"video call"}
                                   bgColor={"#DBEAFE"}
                                   color={"#2563EB"}
                              />
                              <CalendarEventAction
                                   name={"video call"}
                                   bgColor={"#EED8FF"}
                                   color={"#9261F6"}
                              />
                         </div>
                    </div>

                    <div className="calendar-schedule">
                         <h4 style={{ color: '#747474', fontSize: '0.938rem', fontWeight: '600', lineHeight: '1.6rem',letterSpacing: '1px'}}>Monday, Jul 4 2023</h4>
                         <h6 style={{ color: '#949494', fontSize: '0.813rem', fontWeight: '500', lineHeight: '1.4rem',letterSpacing: '1px'}}>Don't Miss Scheduled Events</h6>

                         <div className="scheduled-events">
                              <ScheduledEventInfo />
                              <ScheduledEventInfo />
                              <ScheduledEventInfo />
                              <ScheduledEventInfo />
                         </div>
                    </div>
               </div>
          </div>
     );
};

function renderEventContent(eventInfo) {
     return (
          <>
               <b>{eventInfo.timeText}</b>
               <i>{eventInfo.event.title}</i>
          </>
     );
}

export default Calendar;
