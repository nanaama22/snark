import "./analyticscard.css";

export const AnalyticsCard = () => {
     return (
          <div className="analytics-card">
               <div className="analytics">
                    <h5 className="a-label">Successful Consultations</h5>
                    <div className="analytics-graph-1">
                    <div className="inner">
                         {/* <span className="inner-texxt">1,564</span> */}
                         </div>
                    </div>
                    <p className="analytics-desc">
                         Total number of calls, video chats and schedules
                         appointments
                    </p>
               </div>
               <div className="analytics">
                    <h5 className="a-label">Total of patients</h5>
                    <div className="analytics-graph-2">
                    <div className="inner">
                         {/* <span className="inner-textx-1">001</span> */}
                         </div>
                    </div>
                    <p className="analytics-desc">
                         Total number of patients, you have consulted with
                    </p>
               </div>
               <div className="analytics">
                    <h5 className="a-label">Average Daily Hours</h5>
                    <div className="analytics-graph-3">
                    <div className="inner">
                         {/* <span className="inner-textxx-2">350</span> */}
                         </div>
                    </div>
                    <p className="analytics-desc">
                         Average amount of time spent with patients daily
                    </p>
               </div>
          </div>
     );
};
