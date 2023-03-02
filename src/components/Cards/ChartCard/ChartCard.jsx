import './chartcard.css'
import Charts from '../../Charts/Charts';

const ChartCard = () => {
     return ( 
          
          <div className='chart-card'>
               <div className='chart-details'>
                   <h4>SUCCESSFUL APPOINTMENTS</h4> 
                   <button className='time-button'>This Week</button>
               </div>
               
               <div className="chart">
               <Charts/>
               </div>
          </div>
      );
}
 
export default ChartCard;