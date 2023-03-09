import './patientreview.css'
import PieChartss from '../../Charts/PieChartss';

const PatientReviewCard = () => {
     return ( 
          <div className="p-card">
               <h6>PATIENT'S REVIEW</h6>
               <PieChartss/>
          </div>
      );
}
 
export default PatientReviewCard;