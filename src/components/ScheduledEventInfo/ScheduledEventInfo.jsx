import MissedEvent from '../../assets/svg/missedevent.svg'

const ScheduledEventInfo = () => {
     const eventInfoStyle = {
          display: "flex",
          flexDirection: "column",
          backgroundColor: " white",
          border: '1px solid #94A3B8',
          padding: '0.7rem 0.8rem',
          borderRadius: '0.188rem'

     }

     const upperSection = {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem'
     }

     return ( 
          <div style={eventInfoStyle}>
               <div style={upperSection}>
                    <div style={{display: 'flex', width: 'auto'}}>
                         <img src={MissedEvent} alt="" />
                         <p style={{ marginLeft: '0.5rem', fontSize: '0.9rem', fontWeight: '500', color: '#1E293B'}}>Sarah  Wellman</p>
                    </div>
                    <div style={{fontSize: '0.813rem'}}>
                         8am-8:25am
                    </div>
                    
               </div>
               <h4 style={{marginBottom: '0.5rem', color: '#475569', fontSize: '0.813rem'}}>Event</h4>
               <p style={{fontSize: '0.688rem', color: '#475569'}}>Add note</p>
          </div>
      );
}
 
export default ScheduledEventInfo;