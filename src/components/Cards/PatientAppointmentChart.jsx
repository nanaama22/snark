import { VictoryChart, VictoryBar, VictoryTheme } from "victory";


const PatientAppointmentChart = () => {

     const data = [
		{month: "January", earnings: 3},
		{month: "February", earnings: 10},
		{month: "March", earnings: 8},
		{month: "April", earnings: 5},
		{month: "May", earnings: 5},
		{month: "June", earnings: 4},
		{month: "July", earnings: 4},
		{month: "August", earnings: 3},
		{month: "September", earnings: 1},
		{month: "October", earnings: 1},
		{month: "November", earnings: 0},
		{month: "December", earnings: 0},
	   ];
     return (
          <VictoryChart
               theme={VictoryTheme.material}
               domainPadding={{ x: 10 }}
          >
               <VictoryBar 
               horizontal
               cornerRadius={{top: 5}}
               animate={{ duration: 1000 }}
               style={{
                    data: { fill: "#0071BD" }
               }}
               data={data}
               x="month"
               y="earnings"
               />
          </VictoryChart>
     )
}

export default PatientAppointmentChart