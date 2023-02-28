

const CalendarEventAction = ({name, bgColor, color}) => {
     let eventStyle = {
          color: color,
          backgroundColor: bgColor,
          border: "1px dotted"+ color,
          borderRadius: "0.3rem",
          padding: "0.188rem",
          fontSize: '12px',
          width: "100%",
          cursor: "pointer"
     }
     return ( 
          <button style={eventStyle}>
               {name}
          </button>
      );
}
 
export default CalendarEventAction;