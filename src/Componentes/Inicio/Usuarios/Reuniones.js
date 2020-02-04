import React from 'react';
import { Paper } from '@material-ui/core';
import { PieChart, Pie, Tooltip } from 'recharts';
// import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';
// import { Animation } from '@devexpress/dx-react-chart';


export default function TortaReuniones(props) {
	const { enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre } = props
	const data = [
		{ name: 'Ene', value: enero },
		{ name: 'Feb', value: febrero },
		{ name: 'Mar', value: marzo },
		{ name: 'Abr', value: abril },
		{ name: 'May', value: mayo },
		{ name: 'Jun', value: junio },
		{ name: 'Jul', value: julio },
		{ name: 'Ags', value: agosto },
		{ name: 'Sep', value: septiembre },
		{ name: 'Oct', value: octubre },
		{ name: 'Nov', value: noviembre },
		{ name: 'Dic', value: diciembre }
	];

	return (
		<Paper elevation={4}>
			<PieChart width={350} height={500} margin={{ left: -20, top: 5 }}>
				<Pie dataKey="value" isAnimationActive={true} data={data} cx={200} cy={200} outerRadius={140} fill="#3782e2" label />
				<Tooltip />
			</PieChart>
			{/* <Chart data={data}>
				<PieSeries valueField="contactos" argumentField="mes" innerRadius={0.6}/>
				<Title text="Reuniones" />
				<Animation duration={1000} />
			</Chart> */}
		</Paper>
	);
}