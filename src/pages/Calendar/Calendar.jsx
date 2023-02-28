import Sidebar from "../../components/Sidebar/Sidebar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./calendar.css";
import Search from "../../components/Search/Search";
import Navbar from "../../components/Navbar/Navbar";

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
                        //  weekends={false}/
                         events={events}
                         eventContent={renderEventContent}
                    />
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
