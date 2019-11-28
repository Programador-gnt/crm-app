import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => (
	{
		root: {
			width: '100%',
			overflowX: 'auto',
			marginTop: theme.spacing(2)
		},
		table: {
			minWidth: 650,
		}
	}
));

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Samuel Bustamante', 'samueldhljdm@gmail.com', 977551191, 'GNT Servicios generales SA', 'ACTIVO'),
	createData('Betania Velasquez', 'betavirosis94@gmail.com', 963666784, 'BetavirosisBlog', 'ACTIVO'),
	createData('Enmanuel Bustamante', 'indioenma@gmail.com', 929032108, 'NINGUNA', 'ACTIVO'),
	createData('Freddy Contreras', 'alexander90music@gmail.com', 977448156, 'NINGUNA', 'ACTIVO'),
	createData('Juan Lizama', 'eljefe@gmail.com', 955123456, 'GNT Servicios generales SA', 'ACTIVO'),
];

export default function TablaUsuario() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Fade in={true} mountOnEnter unmountOnExit timeout={2000}>
				<Paper className={classes.root}>
					<Table className={classes.table} aria-label="simple table" aria-labelledby="tableTitle">
						<TableHead>
							<TableRow>
								<TableCell>Nombre</TableCell>
								<TableCell align="right">Email</TableCell>
								<TableCell align="right">Teléfono</TableCell>
								<TableCell align="right">Empresa</TableCell>
								<TableCell align="right">Estado</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map(row => (
								<TableRow key={row.name}>
									<TableCell component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell align="right">{row.calories}</TableCell>
									<TableCell align="right">{row.fat}</TableCell>
									<TableCell align="right">{row.carbs}</TableCell>
									<TableCell align="right">{row.protein}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Paper>
			</Fade>
		</React.Fragment>
	);
}