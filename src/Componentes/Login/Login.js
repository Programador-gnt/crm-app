
import React from 'react';
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	Box,
	Grid,
	Typography,
	Paper,
	IconButton,
	Container,
	FormControlLabel,
	Checkbox,
	Link,
	LinearProgress,
	Snackbar
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import Copyright from '../Layout/Copyright';
import { AuthTokenRequest } from '../helpers/AxiosInstance'


const useStyles = makeStyles(theme => ({
	root: {
		backgroundImage: 'url(https://i.imgur.com/lCikkLi.jpg)',
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
		opacity: '0.8',
		height: '60%',
		marginTop: theme.spacing(10),
		[theme.breakpoints.down(400 + theme.spacing(2) * 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		}
	}
}));

export default function Login() {
	const [irInicio, setIrInicio] = React.useState(false)
	const [aviso, setAviso] = React.useState(false)
	const [cuerpo, setCuerpo] = React.useState({ nickname: '', password: '' })
	const [isLoading, setIsLoading] = React.useState(false)
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
		if (!isLoading) {
			setIsLoading(true);
			setTimeout(() => {
				AuthTokenRequest.post('login', cuerpo)
					.then(result => {
						setIsLoading(false)
						localStorage.setItem('perfilGoogle', JSON.stringify(result.data))
						localStorage.setItem('tokenGoogle', `${result.data.name}${result.data.picture}${result.data.nickname}`)
						setIrInicio(true)
					}).catch(() => {
						setAviso(true)
						setIsLoading(false)
						document.getElementById('password').focus();
					})
			}, 1000)
		}
	}

	if (irInicio === true) {
		return (<Redirect to='/inicio' />)
	}

	if (localStorage.getItem('tokenGoogle')) {
		return (<Redirect to='/inicio' />)
	}

	return (
		<Grid container component="main" className={classes.root}>
			<Container component={Paper} elevation={5} maxWidth='xs' className={classes.main}>
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
							label='Nickname'
							name="nickname"
							autoComplete="nickname"
							onKeyDown={tecla}
							disabled={isLoading}
							onChange={onChange}
							autoFocus
							error={aviso}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							error={aviso}
							required
							fullWidth
							id='password'
							name="password"
							label='Password'
							type="password"
							onChange={onChange}
							disabled={isLoading}
							onKeyDown={tecla}
							autoComplete="password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Recordarme"
							disabled={isLoading}
						/>
						{isLoading && <LinearProgress color='secondary' />}
						<Button
							fullWidth
							variant="contained"
							color="primary"
							onClick={() => login()}
							disabled={cuerpo.password === '' ? true : isLoading ? true : false}
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
					<Box mt={8}>
						<Copyright />
					</Box>
				</div>
			</Container>
		</Grid>
	);
}