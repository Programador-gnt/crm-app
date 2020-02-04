import React from 'react';
import Paper from '@material-ui/core/Paper';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { Chart, ArgumentAxis, ValueAxis, LineSeries, Title } from "@devexpress/dx-react-chart-material-ui";
// import { Animation } from '@devexpress/dx-react-chart';


export default function LineaLlamadas() {
	const data = [
		{ mes: 'Ene', llamadas: 20, realizadas: 10, recibidas: 10 },
		{ mes: 'Feb', llamadas: 40, realizadas: 12, recibidas: 28 },
		{ mes: 'Mar', llamadas: 35, realizadas: 20, recibidas: 15 },
		{ mes: 'Abr', llamadas: 50, realizadas: 45, recibidas: 5 },
		{ mes: 'May', llamadas: 30, realizadas: 15, recibidas: 15 },
		{ mes: 'Jun', llamadas: 70, realizadas: 25, recibidas: 45 },
		{ mes: 'Jul', llamadas: 48, realizadas: 24, recibidas: 24 },
		{ mes: 'Ags', llamadas: 15, realizadas: 6, recibidas: 9 },
		{ mes: 'Sep', llamadas: 20, realizadas: 18, recibidas: 2 },
		{ mes: 'Oct', llamadas: 9, realizadas: 8, recibidas: 1 },
		{ mes: 'Nov', llamadas: 15, realizadas: 7, recibidas: 8 },
		{ mes: 'Dic', llamadas: 25, realizadas: 16, recibidas: 9 }
	];

	return (
		<Paper elevation={4}>
			<LineChart
				width={335}
				height={500}
				data={data}
				margin={{ left: -30, bottom: 5 }}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="mes" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="llamadas" stroke="#8884d8" activeDot={{ r: 8 }} />
				<Line type="monotone" dataKey="realizadas" stroke="#82ca9d" />
				<Line type="monotone" dataKey="recibidas" stroke="#000000" />
			</LineChart>
			{/* <Chart data={data}>
				<ArgumentAxis />
				<ValueAxis />
				<LineSeries valueField="contactos" argumentField="mes" color='#6e2bb3' />
				<LineSeries valueField="no" argumentField="mes" color='#39a24f' />
				<Title text="Llamadas" />
				<Animation duration={1000} />
			</Chart> */}
		</Paper>
	);
}