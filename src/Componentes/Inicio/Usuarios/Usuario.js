import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart, BarSeries, Title, ArgumentAxis, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


export default function BarraUsuario(props) {
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
				<ArgumentAxis />
				<ValueAxis max={1} />
				<BarSeries valueField="contactos" argumentField="mes" color='#39a24f' />
				<Title text="Contactos" />
				<Animation duration={500} />
			</Chart>
		</Paper>
	);
}