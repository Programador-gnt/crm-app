import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Cabecera from '../Layout/Cabecera';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
	root: {
		backgroundImage: 'url(https://i.imgur.com/5opar7w.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh'
	}
}));

export default function Login() {
	const classes = useStyles()
	return (
		<React.Fragment>
			<CssBaseline />
			<Cabecera />
			<Grid container component="main" className={classes.root} />

		</React.Fragment>
	);
}