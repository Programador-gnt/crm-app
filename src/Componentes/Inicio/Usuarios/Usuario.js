import React from 'react';
import Paper from '@material-ui/core/Paper';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import InicioContext from '../inicioContext'

export default function BarraUsuario({ febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre }) {
	const { inicio } = React.useContext(InicioContext)
	const data = [
		{ mes: 'Ene', contactos: inicio.usuarios },
		{ mes: 'Feb', contactos: febrero },
		{ mes: 'Mar', contactos: marzo },
		{ mes: 'Abr', contactos: abril },
		{ mes: 'May', contactos: mayo },
		{ mes: 'Jun', contactos: junio },
		{ mes: 'Jul', contactos: julio },
		{ mes: 'Ags', contactos: agosto },
		{ mes: 'Sep', contactos: septiembre },
		{ mes: 'Oct', contactos: octubre },
		{ mes: 'Nov', contactos: noviembre },
		{ mes: 'Dic', contactos: diciembre }
	];

	return (
		<Paper elevation={4}>
			<BarChart
				width={335}
				height={500}
				data={data}
				margin={{ left: -30, top: 5 }}>
				<CartesianGrid strokeDasharray="5 5" />
				<XAxis dataKey="mes" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar type="monotone" dataKey="contactos" fill="#39a24f" />
			</BarChart>
		</Paper>
	);
}