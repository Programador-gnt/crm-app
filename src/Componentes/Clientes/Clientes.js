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


const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(8),
		paddingLeft: theme.spacing(4)
	}
}));


export default function Clientes({ tarjeta }) {
	const { dispatch } = React.useContext(AppInteractionContext)
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
						<TablaContactos tarjeta={tarjeta} />
					</Grid>
				</Grid>
			</Zoom>
		</React.Fragment>
	);
}