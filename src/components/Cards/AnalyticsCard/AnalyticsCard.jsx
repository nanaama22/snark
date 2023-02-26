import "./analyticscard.css";

export const AnalyticsCard = () => {
     return (
          <div className="analytics-card">
               <div className="analytics">
                    <h5 className="a-label">Successful Consultations</h5>
                    <div className="analytics-graph"></div>
                    <p className="analytics-desc">
                         Total number of calls, video chats and schedules
                         appointments
                    </p>
               </div>
               <div className="analytics">
                    <h5 className="a-label">Total of patients</h5>
                    <div className="analytics-graph"></div>
                    <p className="analytics-desc">
                         Total number of patients, you have consulted with
                    </p>
               </div>
               <div className="analytics">
                    <h5 className="a-label">Average Daily Hours</h5>
                    <div className="analytics-graph"></div>
                    <p className="analytics-desc">
                         Average amount of time spent with patients daily
                    </p>
               </div>
          </div>
     );
};
