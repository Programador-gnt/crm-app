import React from 'react';
import {
	Grid,
	CssBaseline,
	Zoom
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TablaEmpresas from './TablaEmpresas';
import AppInteractionContext from '../helpers/appInteraction';
import Info from './Info';
import Nuevo from './Nuevo'

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
	const { interactions } = React.useContext(AppInteractionContext)
	const classes = useStyles()

	return (
		<React.Fragment>
			<CssBaseline />
			<Zoom in={true} timeout={500}>
				<Grid container spacing={1} className={classes.root}>
					<Grid item xs={12}>
						{interactions.formContent.path === '/empresas/info' ?
							<Info /> :
							interactions.formContent.path === '/empresas/nuevo' ?
								<Nuevo /> :
								<TablaEmpresas />
						}
					</Grid>
				</Grid>
			</Zoom>
		</React.Fragment>
	);
}