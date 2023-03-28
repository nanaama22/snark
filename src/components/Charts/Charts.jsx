import React, { PureComponent } from "react";
import {
     LineChart,
     Line,
     XAxis,
     YAxis,
     CartesianGrid,
     Tooltip,
     Legend,
} from "recharts";

const data = [
     {
          name: "MON",
          pv: 5,
     },
     {
          name: "TUE",
          pv: 22,
     },
     {
          name: "WED",
          pv: 12,
     },
     {
          name: "THU",
          pv: 25,
     },
     {
          name: "FRI",
          pv: 18,
     },
     {
          name: "SAT",
          pv: 40,
     },
     {
          name: "SUN",
          pv: 18,
     },
];

export default class Charts extends PureComponent {
     static demoUrl = "https://codesandbox.io/s/tiny-line-chart-r5z0f";

     render() {
          return (
               <div style={{ display: "block", width: "100%" }}>
                    <LineChart width={700} height={300} data={data}>
                         <Line
                              type="monotone"
                              dataKey="pv"
                              stroke="#8884d8"
                              strokeWidth={2}
                         />
                         <XAxis dataKey="name" />
                         <YAxis />
                         <Tooltip />
                         <CartesianGrid strokeDasharray="3 3" />
                    </LineChart>
               </div>
          );
     }
}
