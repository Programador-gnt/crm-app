import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Usuarios from './Graficos/Usuarios/Usuarios';
import Reuniones from './Graficos/Reuniones/Reuniones'
import { Grid } from '@material-ui/core';
import Llamadas from './Graficos/Llamadas/Llamadas';
import Gmail from './Graficos/Gmail/Gmail';
import BarraUsuario from './Usuarios/Usuario';
import TortaReuniones from './Usuarios/Reuniones';
import Zoom from '@material-ui/core/Zoom';
import LineaLlamadas from './Usuarios/Llamadas';
import AreaGmail from './Usuarios/Gmail';
import { AuthTokenRequest } from '../helpers/AxiosInstance';
import loginContext from '../helpers/loginContext'

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
	const [total, setTotal] = React.useState(null)
	const [totalReuniones, setTotalReuniones] = React.useState(null)
	const perfil = React.useContext(loginContext)[0]
	const classes = useStyles()

	const consultarUsuarios = () => {
		AuthTokenRequest.get('contactos')
			.then(result => {
				setTotal(result.data.length)
			})
	}

	const consultarReuniones = () => {
		AuthTokenRequest.get('eventos', {
			params: {
				creator: perfil.correo
			}
		}).then(result => {
			setTotalReuniones(result.data.length)
		})
	}

	React.useEffect(consultarUsuarios, [])
	React.useEffect(consultarReuniones, [])

	return (
		<React.Fragment>
			<CssBaseline />
			<Grid container spacing={1} className={classes.root}>
				<Zoom in={true}>
					<Grid item lg={3}
						sm={6}
						xl={3}
						xs={12} className={classes.usuarios}>
						<Usuarios total={total} />
					</Grid>
				</Zoom>
				<Zoom in={true} timeout={500}>
					<Grid item lg={3}
						sm={6}
						xl={3}
						xs={12} className={classes.usuarios}>
						<Reuniones total={totalReuniones} />
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
					<BarraUsuario
						enero={total}
						febrero={5}
						marzo={2}
						abril={1}
						mayo={6}
						junio={7}
						julio={1}
						agosto={6}
						septiembre={3}
						octubre={1}
						noviembre={7}
						diciembre={4}
					/>
				</Grid>
				<Grid item xs={12} sm={6} xl={3} lg={3}>
					<TortaReuniones
						enero={totalReuniones}
						febrero={5}
						marzo={2}
						abril={1}
						mayo={6}
						junio={7}
						julio={1}
						agosto={6}
						septiembre={3}
						octubre={1}
						noviembre={7}
						diciembre={4}
					/>
				</Grid>
				<Grid item xs={12} sm={6} xl={3} lg={3}>
					<LineaLlamadas />
				</Grid>
				<Grid item xs={12} sm={6} xl={3} lg={3}>
					<AreaGmail />
				</Grid>
			</Grid>
		</React.Fragment>
	);
}