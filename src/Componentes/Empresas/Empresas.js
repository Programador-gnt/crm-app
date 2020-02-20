import React from 'react';
import {
	Grid,
	CssBaseline,
	Zoom
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TablaEmpresas from './TablaEmpresas';
import AppInteractionContext from '../helpers/appInteraction';
import { AuthTokenRequest } from '../helpers/AxiosInstance';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(8),
		paddingLeft: theme.spacing(4)
	},
	avatar: {
		backgroundColor: theme.palette.secondary.main
	}
}));


export default function Empresas() {
	const { dispatch } = React.useContext(AppInteractionContext)
	const classes = useStyles()

	const consultarAcciones = () => {
		AuthTokenRequest.post('acciones', { form: 'listaEmpresas' })
			.then(result => {
				dispatch(['listaEmpresas', window.location.pathname, 'funcion', result.data])
			})
	}

	React.useEffect(consultarAcciones, [])

	return (
		<React.Fragment>
			<CssBaseline />
			<Zoom in={true} timeout={500}>
				<Grid container spacing={1} className={classes.root}>
					<Grid item xs={12}>
						<TablaEmpresas />
					</Grid>
				</Grid>
			</Zoom>
		</React.Fragment>
	);
}