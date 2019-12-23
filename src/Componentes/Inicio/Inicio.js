import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Usuarios from './Graficos/Usuarios/Usuarios';
import Reuniones from './Graficos/Reuniones/Reuniones'
import { Grid } from '@material-ui/core';
import Llamadas from './Graficos/Llamadas/Llamadas';
import Gmail from './Graficos/Gmail/Gmail';
import BarraUsuario from './Usuarios/Usuario';
import TortaReuniones from './Usuarios/Reuniones';
import Zoom from '@material-ui/core/Zoom';
import LineaLlamadas from './Usuarios/Llamadas';
import AreaGmail from './Usuarios/Gmail'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(8),
		paddingLeft: theme.spacing(4)
	},
	usuarios: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1)
	}
}));


export default function Inicio() {
	const classes = useStyles()

	return (
		<React.Fragment>
			<CssBaseline />
			<Paper elevation={4} className={classes.root}>
				<Grid container spacing={1}>
					<Zoom in={true}>
						<Grid item lg={3}
							sm={6}
							xl={3}
							xs={12} className={classes.usuarios}>
							<Usuarios />
						</Grid>
					</Zoom>
					<Zoom in={true} timeout={500}>
						<Grid item lg={3}
							sm={6}
							xl={3}
							xs={12} className={classes.usuarios}>
							<Reuniones />
						</Grid>
					</Zoom>
					<Zoom in={true} timeout={1000}>
						<Grid item lg={3}
							sm={6}
							xl={3}
							xs={12} className={classes.usuarios}>
							<Llamadas />
						</Grid>
					</Zoom>
					<Zoom in={true} timeout={1500}>
						<Grid item lg={3}
							sm={6}
							xl={3}
							xs={12} className={classes.usuarios}>
							<Gmail />
						</Grid>
					</Zoom>
					<Grid item xs={12} sm={6} xl={3} lg={3}>
						<BarraUsuario />
					</Grid>
					<Grid item xs={12} sm={6} xl={3} lg={3}>
						<TortaReuniones />
					</Grid>
					<Grid item xs={12} sm={6} xl={3} lg={3}>
						<LineaLlamadas />
					</Grid>
					<Grid item xs={12} sm={6} xl={3} lg={3}>
						<AreaGmail />
					</Grid>
				</Grid>
			</Paper>
		</React.Fragment>
	);
}