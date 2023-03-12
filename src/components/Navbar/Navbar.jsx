import Search from '../Search/Search';
import './navbar.css'

const Navbar = () => {
     return (
          <div className="navbar-page-header">
               <div className="navbar-page-search-n-button">
                    <div className="navbar-page-search">
                         <Search />
                    </div>

                    <button style={{'color':'white'}}>Add Appointment</button>
               </div>
          </div>
     );
};

export default Navbar;
