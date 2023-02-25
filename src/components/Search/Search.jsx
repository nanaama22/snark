import './search.css'
import SearchIcon from '../../assets/svg/search.svg'

const Search = () => {
     return ( 
          // flex in
          <div className="search"> 
               <img src={SearchIcon} alt="" className="icon" />
               <div className="divider"></div>
               <input type="text" className="search-input" placeholder='Search anything'/>
          </div>
      );
}
 
export default Search;