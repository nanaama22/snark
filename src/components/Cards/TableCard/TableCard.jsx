import "./tablecard.css";

const TableCard = () => {
     return (
          <div className="table-card">
               <div className="table-details">
                    <h4>TODAY'S APPOINTMENTS</h4>
               </div>

               <div className="table">
                    <table className="customers">
                         <thead>
                              <tr>
                                   <th>Name</th>
                                   <th>Reason</th>
                                   <th>Time</th>
                                   <th>Type</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr>
                                   <td>Abuya Adamu</td>
                                   <td>Acne</td>
                                   <td>12:23</td>
                                   <td>Video Call</td>
                              </tr>
                              <tr>
                                   <td>Blesssing Aasir</td>
                                   <td>catarrh</td>
                                   <td>09:49</td>
                                   <td>Video Call</td>
                              </tr>
                              <tr>
                                   <td>Virtue Absko</td>
                                   <td>measles</td>
                                   <td>14:00</td>
                                   <td>Video Call</td>
                              </tr>
                              <tr>
                                   <td>Akeyo Mathew</td>
                                   <td>diabetes</td>
                                   <td>17:05</td>
                                   <td>Video Call</td>
                              </tr>
                              <tr>
                                   <td>Cora Asher</td>
                                   <td>Asthma</td>
                                   <td>01:50</td>
                                   <td>Video Call</td>
                              </tr>
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default TableCard;
