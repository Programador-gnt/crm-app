import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CabeceraLogin from '../Layout/CabeceraLogin';
import Paper from '@material-ui/core/Paper';
import { Redirect } from 'react-router-dom'

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

	if (localStorage.getItem('tokenGoogle')) {
		return (<Redirect to='/inicio' />)
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<Paper elevation={4}>
				<CabeceraLogin />
			</Paper>
			<Grid container component="main" className={classes.root} />

		</React.Fragment>
	);
}