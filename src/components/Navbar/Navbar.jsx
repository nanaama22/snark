import Search from '../Search/Search';
import './navbar.css'

const Navbar = ({display}) => {
     return (
          <div className="navbar-page-header">
               <div className="navbar-page-search-n-button">
                    <div className="navbar-page-search">
                         <Search />
                    </div>

                   <button style={{'color':'white','display':display}}>Add Appointment</button> <span class="button button5">50%</span>
               </div>
          </div>
     );
};

export default Navbar;
