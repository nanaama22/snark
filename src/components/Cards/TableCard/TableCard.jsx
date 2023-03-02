import './tablecard.css'

const TableCard = () => {
     return ( 
          <div className='table-card'>
               <div className='table-details'>
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
                         <td>Eleanor Pena</td>
                         <td>Acne</td>
                         <td>9:23</td>
                         <td>Video Call</td>
                         </tr>
                         <tr>
                         <td>Eleanor Pena</td>
                         <td>Acne</td>
                         <td>9:23</td>
                         <td>Video Call</td>
                         </tr>
                         <tr>
                         <td>Eleanor Pena</td>
                         <td>Acne</td>
                         <td>9:23</td>
                         <td>Video Call</td>
                         </tr>
                         <tr>
                         <td>Eleanor Pena</td>
                         <td>Acne</td>
                         <td>9:23</td>
                         <td>Video Call</td>
                         </tr>
                         <tr>
                         <td>Eleanor Pena</td>
                         <td>Acne</td>
                         <td>9:23</td>
                         <td>Video Call</td>
                         </tr>
                         </tbody>
  
</table>
               </div>
          </div>
      );
}
 
export default TableCard;