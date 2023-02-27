import { AnalyticsCard } from '../../components/Cards/AnalyticsCard/AnalyticsCard';
import DoctorProfileInfoCard from '../../components/Cards/DoctorProfileInfoCard/DoctorProfileInfoCard';
import { LicensenCertification } from '../../components/Cards/LicensenCertification/LicensenCertification';
import { ReviewsRatings } from '../../components/Cards/Reviews-n-Ratings-Card/ReviewsRatings';
import './profile.css'

const Profile = () => {
     return ( 
          <div className="profile">
               <div className="upper-section">
                    <div className="doc-profile-info-card">
                         <DoctorProfileInfoCard />  
                    </div>
                    <div className='analytics-n-review'>
                         <div>
                              <h4>ANALYTICS</h4>
                              <AnalyticsCard />   
                         </div>
                         <div>
                              <h4>REVIEWS AND RATINGS</h4>
                              <ReviewsRatings />   
                         </div>
                    </div>
               </div>
               
               <div className="license-n-cert">
                    <h4>License and Certifications</h4>
                    <LicensenCertification>
                         <div className="license-content-1">
                              <div className='expiry-date'>
                                   <h4>Expiry Date</h4>
                                   <p> <span>22</span> / <span>03</span> / <span>23</span> </p>
                              </div>
                              <button>Renew License</button>     
                         </div>
                    </LicensenCertification>

                    <LicensenCertification>
                         <div className="license-content-2">
                              <div className="expiry-status-info">
                                   <h4>Senior Registrar License</h4>
                                   <div>
                                        <p>p-bar</p>
                                        <p>Expiry status</p>
                                   </div>
                              </div>
                              <div className='expiry-date'>
                                   <h4>Expiry Date</h4>
                                   <p> <span>22</span> / <span>03</span> / <span>23</span> </p>
                              </div>
                              <button>Renew License</button>     
                         </div>
                    </LicensenCertification>
               </div>
          </div>
      );
}
 
export default Profile;