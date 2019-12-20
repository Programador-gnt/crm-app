import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


export default function TortaReuniones() {
	const data = [
		{ mes: 'Ene', contactos: 5 },
		{ mes: 'Feb', contactos: 10 },
		{ mes: 'Mar', contactos: 12 },
		{ mes: 'Abr', contactos: 9 },
		{ mes: 'May', contactos: 10 },
		{ mes: 'Jun', contactos: 12 },
		{ mes: 'Jul', contactos: 13 },
		{ mes: 'Ags', contactos: 14 },
		{ mes: 'Sep', contactos: 19 },
		{ mes: 'Oct', contactos: 17 },
		{ mes: 'Nov', contactos: 5 },
		{ mes: 'Dic', contactos: 14 }
	];

	return (
		<Paper elevation={4}>
			<Chart data={data}>
				<PieSeries valueField="contactos" argumentField="mes" innerRadius={0.6} />
				<Title text="Reuniones" />
				<Animation duration={1000} />
			</Chart>
		</Paper>
	);
}