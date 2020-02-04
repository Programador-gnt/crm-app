import React from 'react';
import Paper from '@material-ui/core/Paper';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function AreaGmail() {
	const data = [
		{ gmail: 'Ene', correos: 5, enviados: 10, recibidos: 4 },
		{ gmail: 'Feb', correos: 10, enviados: 8, recibidos: 5 },
		{ gmail: 'Mar', correos: 12, enviados: 7, recibidos: 7 },
		{ gmail: 'Abr', correos: 9, enviados: 5, recibidos: 2 },
		{ gmail: 'May', correos: 10, enviados: 20, recibidos: 6 },
		{ gmail: 'Jun', correos: 12, enviados: 25, recibidos: 9 },
		{ gmail: 'Jul', correos: 13, enviados: 8, recibidos: 7 },
		{ gmail: 'Ags', correos: 14, enviados: 6, recibidos: 9 },
		{ gmail: 'Sep', correos: 19, enviados: 18, recibidos: 2 },
		{ gmail: 'Oct', correos: 17, enviados: 8, recibidos: 1 },
		{ gmail: 'Nov', correos: 20, enviados: 7, recibidos: 8 },
		{ gmail: 'Dic', correos: 14, enviados: 16, recibidos: 9 }
	];

	return (
		<Paper elevation={4}>
			<AreaChart
				width={335}
				height={500}
				data={data}
				margin={{ left: -30, bottom: 5 }}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="gmail" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Area type="step" dataKey="correos" stackId="1" stroke="#8884d8" fill="#8884d8" />
				<Area type="step" dataKey="enviados" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
				<Area type="step" dataKey="recibidos" stackId="1" stroke="#ffc658" fill="#ffc658" />
			</AreaChart>
		</Paper>
	);
}