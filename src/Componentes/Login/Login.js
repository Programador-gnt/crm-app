
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import GoogleIcon from 'mdi-material-ui/Google';
import { red } from '@material-ui/core/colors';
import Config from '../Config/Config';
import gapi from 'gapi-client';
import { Redirect } from 'react-router-dom';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				GNT Servicios generales SA
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://i.imgur.com/5opar7w.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.grey[50],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const ColorButton = withStyles(theme => ({
	root: {
		color: theme.palette.getContrastText(red[700]),
		backgroundColor: red[700],
		'&:hover': {
			backgroundColor: red[600],
		},
	},
}))(Button);


export default function Login() {
	const [irInicio, setIrInicio] = React.useState(false)
	const classes = useStyles();

	const ingresar = () => {
		const SCOPES = 'https://mail.google.com https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar https://www.google.com/m8/feeds/ https://www.googleapis.com/auth/contacts.readonly';
		gapi.load('auth2', initClient);
		function initClient() {
			gapi.auth2.authorize({
				client_id: `${Config.client_id}`,
				scope: SCOPES,
				// cookie_policy: 'none'
			}, response => {
				localStorage.setItem('tokenGoogle', JSON.stringify(response.access_token))
				perfil(response.access_token)
			});
		}
	}

	const perfil = async (TOKEN) => {
		await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${TOKEN}`, {
			method: 'GET',
			headers: {
				"Content-type": "application/json",
			}
		}).then(respuesta => {
			return respuesta.json()
		}).then(json => {
			localStorage.setItem('perfilGoogle', JSON.stringify(json))
			setIrInicio(true)
		})
	}

	if (irInicio === true) {
		return (<Redirect to='/inicio' />)
	}

	if (localStorage.getItem('tokenGoogle')) {
		return (<Redirect to='/inicio' />)
	}

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						GNT - CRM
          			</Typography>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Nickname"
						name="nickname"
						autoComplete="nickname"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Ingresar
            			</Button>
					<ColorButton
						fullWidth
						onClick={() => ingresar()}
						startIcon={<GoogleIcon />}
						variant="contained"
					>
						Ingresar con Google
						</ColorButton>
					<Box mt={5}>
						<Copyright />
					</Box>
				</div>
			</Grid>
		</Grid>
	);
}