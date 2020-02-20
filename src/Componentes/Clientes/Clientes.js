import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Grid,
	CssBaseline,
	Zoom
} from '@material-ui/core';
import TablaContactos from './TablaContactos';
import AppInteractionContext from '../helpers/appInteraction';
import { AuthTokenRequest } from '../helpers/AxiosInstance';
import ContactosContext from './contactosContext';
import Info from './Info'


const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(8),
		paddingLeft: theme.spacing(4)
	}
}));


export default function Contactos({ tarjeta }) {
	const { interactions, dispatch } = React.useContext(AppInteractionContext)
	const { contactos } = React.useContext(ContactosContext)
	const classes = useStyles()

	const consultarAcciones = () => {
		AuthTokenRequest.post('acciones', { form: 'listaContactos' })
			.then(result => {
				dispatch(['listaContactos', window.location.pathname, 'funcion', result.data])
			})
	}

	React.useEffect(consultarAcciones, [])

	return (
		<React.Fragment>
			<CssBaseline />
			<Zoom in={true} timeout={500}>
				<Grid container spacing={1} className={classes.root}>
					<Grid item xs={12}>
						{contactos.abrirInfo ?
							<Info /> :
							interactions.formContent.path === '/contactos' ?
								<TablaContactos tarjeta={tarjeta} /> : null
						}
					</Grid>
				</Grid>
			</Zoom>
		</React.Fragment>
	);
}