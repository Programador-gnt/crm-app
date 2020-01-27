
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import consumeWSChat from '../Config/WebServiceChat';
import Copyright from './Copyright';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
	root: {
		backgroundImage: 'url(https://i.imgur.com/5opar7w.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh'
	},
	close: {
		padding: theme.spacing(0.5)
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),

	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	main: {
		// backgroundColor: 'rgba(255, 255, 255, 0.750)',
		opacity: '0.8',
		height: '60%',
		marginTop: theme.spacing(10),
		// borderRadius: '0 0 0 10'
	}
}));

export default function Login() {
	const [irInicio, setIrInicio] = React.useState(false)
	const [aviso, setAviso] = React.useState(false)
	const [cuerpo, setCuerpo] = React.useState({})
	const classes = useStyles();

	const handleCloseMensaje = () => {
		setAviso(false)
	};

	const onChange = (e) => {
		setCuerpo({
			...cuerpo,
			[e.target.name]: e.target.value
		})
	}

	const tecla = (e) => {
		if (e.keyCode === 13) {
			login()
		}
	}

	const login = () => {
		consumeWSChat('POST', 'login', cuerpo, '')
			.then(result => {
				localStorage.setItem('perfilGoogle', JSON.stringify(result))
				localStorage.setItem('tokenGoogle', `${result.name}${result.picture}${result.nickname}`)
				setIrInicio(true)
			}).catch(() => {
				setAviso(true)
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
			<Container component={Paper} elevation={5} maxWidth="xs" className={classes.main}>
				<CssBaseline />
				<Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={aviso} autoHideDuration={3000} onClose={handleCloseMensaje} style={{ opacity: '0.8' }}
					ContentProps={{ 'aria-describedby': 'mensaje' }}
					message={<Typography id="mensaje" variant='button'>Error al autenticar</Typography>}
					action={[
						<IconButton
							key="close"
							aria-label="close"
							color="inherit"
							className={classes.close}
							onClick={handleCloseMensaje}
						>
							<CloseIcon />
						</IconButton>,
					]}
				/>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
        </Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							label="Nickname"
							name="nickname"
							autoComplete="nickname"
							onKeyDown={tecla}
							onChange={onChange}
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
							onChange={onChange}
							onKeyDown={tecla}
							autoComplete="password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Recordarme"
						/>
						<Button
							fullWidth
							variant="contained"
							color="primary"
							onClick={() => login()}
							className={classes.submit}
						>
							Ingresar
          </Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Recuperar contraseña
              </Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Crear cuenta"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<Box mt={8}>
					<Copyright />
				</Box>
			</Container>
		</Grid>
	);
}