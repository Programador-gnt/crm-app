import React from 'react';
import { CssBaseline, Dialog, DialogTitle, DialogContent, DialogActions, Hidden, Grid, Button, CircularProgress } from '@material-ui/core'
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { blue, green, red } from '@material-ui/core/colors';
import GoogleIcon from 'mdi-material-ui/Google';
import FacebookIcon from '@material-ui/icons/Facebook';
import Config from '../Config/Config';
import gapi from 'gapi-client';
// import consumeWSChat from '../Config/WebServiceChat';
// import { CometChat } from '@cometchat-pro/chat';


const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		alignItems: 'center',
	},
	wrapper: {
		margin: theme.spacing(1),
		position: 'relative',
	},
	buttonSuccess: {
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700],
		},
	},
	fabProgress: {
		color: green[500],
		position: 'absolute',
		top: -6,
		left: -6,
		zIndex: 1,
	},
	buttonProgress: {
		color: red[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
	FacebookProgress: {
		color: blue[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	}
}));

const ColorButton = withStyles(theme => ({
	root: {
		color: theme.palette.getContrastText(red[700]),
		backgroundColor: red[700],
		'&:hover': {
			backgroundColor: red[900],
		},
	},
}))(Button);

const FacebookButton = withStyles(theme => ({
	root: {
		color: theme.palette.getContrastText(blue[700]),
		backgroundColor: blue[700],
		'&:hover': {
			backgroundColor: blue[900],
		},
	},
}))(Button);

export default function ChatDialog(props) {
	const classes = useStyles();
	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(false);
	const [loadingF, setLoadingF] = React.useState(false);
	const [successF, setSuccessF] = React.useState(false);
	const SCOPES = 'https://mail.google.com https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar https://www.google.com/m8/feeds/ https://www.googleapis.com/auth/contacts.readonly';
	const timer = React.useRef();
	const { dialogProps } = props

	const buttonClassname = clsx({
		[classes.buttonSuccess]: success,
	});

	const buttonClassnameF = clsx({
		[classes.buttonSuccess]: successF,
	});

	const login = () => {
		if (!loading) {
			setSuccess(false);
			setLoading(true);
			timer.current = setTimeout(() => {
				setSuccess(true);
				setLoading(false);
				// consumeWSChat('GET', 'google', '', '')
				// 	.then(result => {
				// 		localStorage.setItem('tokenGoogle', JSON.stringify(result.access_token))
				// 	})
				gapi.load('auth2', initClient)
				function initClient() {
					gapi.auth2.authorize({
						apiKey: `${Config.api_key}`,
						client_id: `${Config.client_id}`,
						scope: SCOPES,
						cookie_policy: 'none'
					}, response => {
						if (response.hasOwnProperty('error')) {

						} else {
							localStorage.setItem('tokenGoogle', JSON.stringify(response.access_token))
							props.funcion()
						}
					});
				}
			}, 2000)
		}
	}

	const loginF = () => {
		if (!loadingF) {
			setSuccessF(false);
			setLoadingF(true);
			timer.current = setTimeout(() => {
				setSuccessF(true);
				setLoadingF(false);
				props.funcion()
				// CometChat.login(usuario.uid, Config.chatKey)
				// 	.then(result => {
				// 		localStorage.setItem('usuarioChat', JSON.stringify(result))
				// 		props.funcion()
				// 	})
			}, 2000)
		}
	}

	React.useEffect(() => {
		return () => {
			clearTimeout(timer.current);
		};
	}, []);

	return (
		<React.Fragment>
			<CssBaseline />
			<Dialog {...dialogProps} open={props.abrir} onClose={props.funcion}>
				<DialogTitle>
					Configuraciones
                </DialogTitle>

				<DialogContent>
					<Hidden xsDown>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Grid container direction="column" spacing={2}>
									<Grid item>
										<ColorButton
											fullWidth
											className={buttonClassname}
											onClick={() => login()}
											disabled={loading}
											startIcon={<GoogleIcon />}
											variant="contained">
											{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
											Ingresar con Google
										</ColorButton>
									</Grid>
									<Grid item>
										<FacebookButton
											fullWidth
											className={buttonClassnameF}
											onClick={() => loginF()}
											disabled={loadingF}
											startIcon={<FacebookIcon />}
											variant="contained">
											{loadingF && <CircularProgress size={24} className={classes.FacebookProgress} />}
											Ingresar con Facebook
										</FacebookButton>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Hidden>
					<Hidden smUp>
						<Grid container direction="column" spacing={2}>
							<Grid item xs>
								<ColorButton
									fullWidth
									className={buttonClassname}
									onClick={() => login()}
									disabled={loading}
									startIcon={<GoogleIcon />}
									variant="contained">
									{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
									Ingresar con Google
								</ColorButton>
							</Grid>
							<Grid item xs>
								<FacebookButton
									fullWidth
									className={buttonClassnameF}
									onClick={() => loginF()}
									disabled={loadingF}
									startIcon={<FacebookIcon />}
									variant="contained">
									{loadingF && <CircularProgress size={24} className={classes.FacebookProgress} />}
									Ingresar con Facebook
								</FacebookButton>
							</Grid>
						</Grid>
					</Hidden>
				</DialogContent>
				<DialogActions>
					<Button color="secondary" onClick={props.funcion}>Cerrar</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
