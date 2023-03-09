import './dashboardinfocard.css'
import AppointmentIcon from'../../../assets/svg/AppointmentIcon'

const DashboardInfoCard = ({name, stat,color}) => {
     return ( 
            <div className="dashboard-card">
                  {/* <img src={AppointmentIcon} alt="" className={'icon-border-'+color} /> */}
                  <span className={'icon-border-'+color}>
                        <AppointmentIcon  />
                  </span>
                  <div className='card-data'>
                        <p className='card-data-name'>{name}</p>
                        <p className='card-data-stat'>{stat}</p>
                  </div>
            </div>
      );
}
 
export default DashboardInfoCard;