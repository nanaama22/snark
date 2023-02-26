import "./reviewsnratings.css";

export const ReviewsRatings = () => {
     return (
          <div className="reviews-card">
               <div className="reviews">
                    <h5 className="rnr-label">Satisfactory</h5>
                    <div className="reviews-graph"></div>
                    <p className="reviews-desc">
                      number of satisfied patients based on reviews and patient progress
                    </p>
               </div>
               <div className="reviews">
                    <h5 className="rnr-label">Average</h5>
                    <div className="reviews-graph"></div>
                    <p className="reviews-desc">
                         number of patients who were not completely satisfied
                    </p>
               </div>
               <div className="reviews">
                    <h5 className="rnr-label">Complaints</h5>
                    <div className="reviews-graph"></div>
                    <p className="reviews-desc">
                         no of complaints logged in by patients based on ratings
                    </p>
               </div>
          </div>
     );
};
