import './dashboardinfocard.css'
import Appoint from'../../../assets/svg/appointment.svg'

const DashboardInfoCard = ({name, stat}) => {
     return ( 
            <div className="dashboard-card">
                  <img src={Appoint} alt="" className="icon-border" />
                  <div className='card-data'>
                        <p className='card-data-name'>{name}</p>
                        <p className='card-data-stat'>{stat}</p>
                  </div>
            </div>
      );
}
 
export default DashboardInfoCard;