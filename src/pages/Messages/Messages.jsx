import Search from "../../components/Search/Search";
import "./messages.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Messages = () => {

     return (
          <div className="layout">
                <div className="layout-content">
          <div className="home">
               <div className="middle-content">
                    <div className="search-n-notification">
                         <Search />
                    </div>
                    {/* start here */}
<br /><br />
  
 <div style={{'width':'100%'}}>
     
      <section className="discussions">
        <div className="discussion">
          <div className="photo">
            <div className="online"></div>
          </div>
          <div className="desc-contact">
            <p className="name">Dave Corlew</p>
            <p className="message">Let's meet for a coffee or something today ?</p>
          </div>
          <div className="timer">3 min</div>
        </div>

        <div className="discussion">
          <div className="photo">
          </div>
          <div className="desc-contact">
            <p className="name">Jerome Seiber</p>
            <p className="message">I've sent you the annual report</p>
          </div>
          <div className="timer">42 min</div>
        </div>
      </section>
      
      <section className="chat">
        <div className="header-chat">
          <i className="icon fa fa-user-o" aria-hidden="true"></i>
          <p className="name">Megan Leib</p>
          <i className="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
        </div>
        <div className="messages-chat">
          <div className="message">
            <div className="photo">
              <div className="online"></div>
            </div>
            <p className="text"> Hi, how are you ? </p>
          </div>
          <div className="message text-only">
            <p className="text"> What are you doing tonight ? Want to go take a drink ?</p>
          </div>
          <p className="time"> 14h58</p>
          <div className="message text-only">
            <div className="response">
              <p className="text"> Hey Megan ! It's been a while</p>
            </div>
          </div>
          <div className="message text-only">
            <div className="response">
              <p className="text"> When can we meet ?</p>
            </div>
          </div>
          <p className="response-time time"> 15h04</p>
          <div className="message">
            <div className="photo">
              <div className="online"></div>
            </div>
            <p className="text"> 9 pm at the bar if possible</p>
          </div>
          <p className="time"> 15h09</p>
        </div>
        <div className="footer-chat">
          <i className="icon fa fa-smile-o clickable"></i>
          <input type="text" className="write-message" placeholder="Type your message here"/>
          <i className="icon send fa fa-paper-plane-o clickable" aria-hidden="true"></i>
        </div>
      </section>
      </div>
                    {/* finis here */}
               </div>
             
          </div>
          </div>
          </div>
     );
};

export default Messages;
