import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class PieChartss extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <PieChart style={{ marginTop: '-3rem',  marginLeft: '2rem'}} width={400} height={400} onMouseEnter={this.onPieEnter}>
        <Pie 
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          style={{ margin: '20px'}}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="centric" verticalAlign="bottom" margin={{top: 20, left: 0, right: 0, bottom: 0}} />
      </PieChart>
    );
  }
}
