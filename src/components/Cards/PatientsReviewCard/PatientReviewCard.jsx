import './patientreview.css'
import PieChartss from '../../Charts/PieChartss';

const PatientReviewCard = () => {
     return ( 
          <div className="p-card">
               <h4>PATIENT'S REVIEW</h4>
               <PieChartss/>
          </div>
      );
}
 
export default PatientReviewCard;