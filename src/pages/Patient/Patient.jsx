import Navbar from '../../components/Navbar/Navbar';
import './patient.css'
import { BsChevronRight } from 'react-icons/bs';
import { IoPinOutline } from 'react-icons/io5';
import { HiMail, HiOutlineArrowSmRight, HiOutlineClipboardList, HiOutlineClock, HiPencil, HiPhone } from "react-icons/hi";
import PatientImg from '../../assets/patient.png'
import { FaBusinessTime, FaPrescriptionBottleAlt, FaRegStickyNote, FaStickyNote } from 'react-icons/fa';
import { GiBackwardTime } from 'react-icons/gi';


const Patient = () => {
     return ( 
		<div className="patients-page">
			{/* header */}
			<div className="patients-page-header">
				<Navbar />
			</div>
			<div className="patients-tab">
				<div style={{ display: 'flex', justifyContent: 'center'}}>
					<span style={{marginRight: '0.5rem'}}>Patients</span> 
					<span style={{marginRight: '0.5rem'}}><BsChevronRight size={12}/></span>
					<span>John Doe</span>
				</div>

				<div className='patients-quick-actions'>
					<span><FaBusinessTime /> <p>Medical History</p> </span>
					<div className="q-a-border"></div>
					<span><GiBackwardTime /> <p>Treatment</p> </span>
					<div className="q-a-border"></div>
					<span><FaPrescriptionBottleAlt /> <p>Prescription</p> </span>
					<div className="q-a-border"></div>
					<span> <HiOutlineClipboardList /> <p>Lab results</p> </span>
					<div className="q-a-border"></div>
					<span> <FaStickyNote /> <p>Insurance</p> </span>

				</div>
			</div>

			<div className="patients-section">
				<div className="left-section">
					<div className="patients-info-card">
						<div className="image-name-loc">
							<img sizes='10px' src={PatientImg} alt="" />
							<h4 style={{ color: 'black'}}>Sarah Wellman</h4>
							<p style={{ color: '#827E7E', fontSize: '0.875rem'}}> <IoPinOutline color='#000'/> Garissa, Kenya</p>
						</div>
						<div>
							<div className="txt">
								{/* Row one */}
								<div className="txt-content">
									<p>Sex</p>
									<small>female</small>
								</div>
								<div className="txt-content">
									<p>Age</p>
									<small>43</small>
								</div>
								<div className="txt-content">
									<p>Ethnicity</p>
									<small>Asian</small>
								</div>

								{/* Row two */}
								<div className="txt-content">
									<p>Height</p>
									<small>6ft 3</small>
								</div>
								<div className="txt-content">
									<p>Weight</p>
									<small>250lb</small>
								</div>
								<div className="txt-content">
									<p>Body type</p>
									<small>Endomorph</small>
								</div>

								{/* Row three */}
								<div className="txt-content">
									<p>Smoking</p>
									<small>No</small>
								</div>
								<div className="txt-content">
									<p>Alcohol</p>
									<small>Yes</small>
								</div>
								<div className="txt-content">
									<p>Drugs</p>
									<small>No</small>
								</div>

							</div>
							<div className="patients-contact">
								<p style={{ display: 'flex', alignItems: 'center'}}> <HiPhone color='#525252' size={20} style={{ marginRight: '0.5rem'}} /> <span style={{ fontWeight: 400, color: '#000'}}>123 456 789 42</span> </p>
								<p style={{ display: 'flex', alignItems: 'center'}}> <HiMail color='#525252' size={20} style={{ marginRight: '0.5rem'}} /> <span style={{ fontWeight: 400, color: '#000'}}>sarahwellman@gmail.com</span> </p>
								<div style={{ display: 'flex', alignItems: 'center'}}>
									<span style={{ marginRight: '0.5rem', backgroundColor: '#E9ECEF', padding: '0.3rem', borderRadius: '3px'}}> <HiOutlineArrowSmRight color='#525252' size={20} /> </span>
									<p style={{ fontWeight: 600, fontSize: '0.938rem'}}>Send Message</p>
								</div>
								<div style={{ display: 'flex', alignItems: 'center'}}>
									<span style={{ marginRight: '0.5rem', backgroundColor: '#E9ECEF', padding: '0.3rem', borderRadius: '3px'}}> <HiOutlineClock color='#525252' size={20} /> </span>
									<p style={{ fontWeight: 600, fontSize: '0.938rem'}}>Schedule Appointment</p>
								</div>
							</div>
						</div>
					</div>
					<div className="patients-appointment-logger">
						<h4 style={{textAlign: 'center'}}>Appointments</h4>
						<div className='months-n-values'> 
							
						</div>
					</div>
				</div>


				<div className="right-section">
					<div className='patient-vitals'>
						<div className="header-n-button">
							<div>
								<h4>OVERALL STATS</h4>
								<p>Last Update: 12 Hours Ago</p>
							</div>
							<button className='time-button'>This Week</button>
							
						</div>
						<div className="patient-vitals-cards"></div>
					</div>


					<div className="patient-medical-history">
						<div className='header-n-button'>
							<h4>GENERAL MEDICAL HISTORY</h4>
							<button style={{ background: "#1F419D",
								borderRadius: '3px',
								display: 'flex', 
								alignItems: 'center', 
								justifyContent: 'center',
								padding: '0.5rem',
								border: 'none',
							}}
							> 
								<HiPencil color='#fff'/> 
							</button>
						</div>
						<div className="medical-history-card">
							<div className="disease-content">
								<p>Chicken pox</p> 
								<span>Not Immune</span>
							</div>
							<div className="disease-content">
								<p>Measles</p> 
								<span>Not Immune</span>
							</div>
							<div className="disease-content">
								<p>Hepatitis B Vaccine</p> 
								<span>Vaccinated</span>
							</div>
							<div className="disease-content">
								<p>Covid 19</p> 
								<span>Immune</span>
							</div>
							<div className="disease-content">
								<p>Measles</p> 
								<span>Not Immune</span>
							</div>
							<div className="disease-content">
								<p>Hepatitis B Vaccine</p> 
								<span>Vaccinated</span>
							</div>
						</div>
					</div>
					<div className="patient-medication-list">
						<div className='header-n-button'>
							<h4>MEDICATIONS TAKEN REGULARLY</h4>
							<button style={{ background: "#1F419D",
								borderRadius: '3px',
								display: 'flex', 
								alignItems: 'center', 
								justifyContent: 'center',
								padding: '0.5rem',
								border: 'none',
							}}
							> 
								<HiPencil color='#fff'/> 
							</button>
						</div>
						<div className="medication-card">
							<div className="medication-content">
								<p>Hydrocordone</p> 
								<span>2.5ml</span>
								<small>Twice daily</small>
							</div>
							<div className="medication-content">
								<p>Hydrocordone</p> 
								<span>2.5ml</span>
								<small>Twice daily</small>
							</div>
							<div className="medication-content">
								<p>Licinopril</p> 
								<span>3.0ml</span>
								<small>Once daily</small>
							</div>
							<div className="medication-content">
								<p>Licinopril</p> 
								<span>3.0ml</span>
								<small>Once daily</small>
							</div>
							<div className="medication-content">
								<p>Licinopril</p> 
								<span>3.0ml</span>
								<small>Once daily</small>
							</div>
							<div className="medication-content">
								<p>Licinopril</p> 
								<span>3.0ml</span>
								<small>Once daily</small>
							</div>
						</div>
					</div>
					
				</div>
			</div>

		</div>
      );
}
 
export default Patient;