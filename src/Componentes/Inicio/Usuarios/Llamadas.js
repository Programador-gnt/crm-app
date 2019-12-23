import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, ArgumentAxis, ValueAxis, LineSeries, Title } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from '@devexpress/dx-react-chart';


export default function LineaLlamadas() {
	const data = [
		{ mes: 'Ene', contactos: 5, no: 10 },
		{ mes: 'Feb', contactos: 10, no: 8 },
		{ mes: 'Mar', contactos: 12, no: 7 },
		{ mes: 'Abr', contactos: 9, no: 5 },
		{ mes: 'May', contactos: 10, no: 20 },
		{ mes: 'Jun', contactos: 12, no: 25 },
		{ mes: 'Jul', contactos: 13, no: 8 },
		{ mes: 'Ags', contactos: 14, no: 6 },
		{ mes: 'Sep', contactos: 19, no: 18 },
		{ mes: 'Oct', contactos: 17, no: 8 },
		{ mes: 'Nov', contactos: 20, no: 7 },
		{ mes: 'Dic', contactos: 14, no: 16 }
	];

	return (
		<Paper elevation={4}>
			<Chart data={data}>
				<ArgumentAxis />
				<ValueAxis />
				<LineSeries valueField="contactos" argumentField="mes" color='#6e2bb3' />
				<LineSeries valueField="no" argumentField="mes" color='#39a24f' />
				<Title text="Llamadas" />
				<Animation duration={1000} />
			</Chart>
		</Paper>
	);
}