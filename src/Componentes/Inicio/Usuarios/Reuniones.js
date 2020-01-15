import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


export default function TortaReuniones(props) {
	const data = [
		{ mes: 'Ene', contactos: props.enero },
		{ mes: 'Feb', contactos: props.febrero },
		{ mes: 'Mar', contactos: props.marzo },
		{ mes: 'Abr', contactos: props.abril },
		{ mes: 'May', contactos: props.mayo },
		{ mes: 'Jun', contactos: props.junio },
		{ mes: 'Jul', contactos: props.julio },
		{ mes: 'Ags', contactos: props.agosto },
		{ mes: 'Sep', contactos: props.septiembre },
		{ mes: 'Oct', contactos: props.octubre },
		{ mes: 'Nov', contactos: props.noviembre },
		{ mes: 'Dic', contactos: props.diciembre }
	];

	return (
		<Paper elevation={4}>
			<Chart data={data}>
				<PieSeries valueField="contactos" argumentField="mes" innerRadius={0.6}/>
				<Title text="Reuniones" />
				<Animation duration={1000} />
			</Chart>
		</Paper>
	);
}