import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Grid,
	CssBaseline,
	Zoom
} from '@material-ui/core';
import TablaContactos from './TablaContactos';
import useInteractions from '../helpers/useInteractions';


const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(8),
		paddingLeft: theme.spacing(4)
	}
}));


export default function Clientes({ tarjeta }) {
	const { isFormContent } = useInteractions();
	const classes = useStyles()

	const acciones = () => {
		isFormContent(window.location.pathname, 'listaContactos')
	}

	React.useEffect(acciones, [])

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