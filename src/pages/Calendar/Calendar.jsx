import Sidebar from "../../components/Sidebar/Sidebar";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'




const Calendar = () => {
    const events = [
        { title: 'Meeting', start: new Date() }
      ]


     return (
          <div className="layout">
                <div className="layout-content">
          <div className="home">
               <div className="middle-content" style={{'background':'white','padding':'20px'}}>
                    {/* start here */}
             

                    <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
                    {/* finis here */}
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
    )
  }

export default Calendar;
