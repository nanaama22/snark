import "./vitalscard.css";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory";


const VitalsCard = ({name, value}) => {
     const data1 = [
		{x: "January", y: Math.floor(Math.random() * 10) + 1},
		{x: "February", y: Math.floor(Math.random() * 10) + 1},
		{x: "March", y: Math.floor(Math.random() * 10) + 1},
		{x: "April", y: Math.floor(Math.random() * 10) + 1},
		{x: "May", y: Math.floor(Math.random() * 10) + 1},
		{x: "June", y: Math.floor(Math.random() * 10) + 1},
		{x: "July", y: Math.floor(Math.random() * 10) + 1},
	   ];
     return (
          <div className="vitals-card">
               <div className="vitals-head">
                    <div className="vitals-desc">
                         <h4>{name}</h4>
                         <h3>{value}</h3>
                    </div>
                    <div className="icon"></div>
               </div>
               <div className="vitals-graph">
                    <VictoryBar
                         style={{
                              data: { fill: "#1F419D" }
                         }}
                         cornerRadius={{top: 9.5, bottom: 9.5}}
                         domainPadding={10}
                         animate={{ duration: 2000 }}
                         data={data1}
                         x="x"
                         y="y"
                    />
               </div>
          </div>
     );
};

export default VitalsCard;
