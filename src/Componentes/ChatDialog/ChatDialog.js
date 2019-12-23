import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Config from '../Config/Config';
import { CometChat } from '@cometchat-pro/chat'

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
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
}));


export default function ChatDialog(props) {
	const classes = useStyles();
	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(false);
	const timer = React.useRef();
	// const perfil = JSON.parse(localStorage.getItem('perfilGoogle'))
	// const headers = {
	//     'Content-Type': 'application/json',
	//     appid: Config.chatID,
	//     apikey: Config.chatKey
	// }
	const [usuario, setUsuario] = React.useState({
		// name: perfil.name,
		// avatar: perfil.picture
	})
	const { dialogProps } = props

	const buttonClassname = clsx({
		[classes.buttonSuccess]: success,
	});

	const enviarChange = (e) => {
		setUsuario({
			...usuario,
			[e.target.name]: e.target.value
		})
	}

	const enviarMensaje = () => {
		if (usuario) {
			setSuccess(false);
			setLoading(true);
			timer.current = setTimeout(() => {
				setSuccess(true);
				setLoading(false);
				CometChat.login(usuario.uid, Config.chatKey)
					.then(result => {
						localStorage.setItem('usuarioChat', JSON.stringify(result))
						props.funcion()
					})
			}, 2000)
		}
	}

	const tecla = (e) => {
		if (e.keyCode === 13) {
			enviarMensaje()
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
					Login chat
                </DialogTitle>

				<DialogContent>
					<Hidden xsDown>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Grid container direction="column" spacing={2}>
									<Grid item>
										<TextField
											autoComplete="uid"
											name='uid'
											autoFocus
											label="Nickname"
											placeholder="Nombre de usuario"
											required
											onKeyDown={tecla}
											onChange={enviarChange.bind()}
											type="text"
											variant="outlined"
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Hidden>
					<Hidden smUp>
						<Grid container direction="column" spacing={2}>
							<Grid item xs>
								<TextField
									autoComplete="uid"
									name='uid'
									fullWidth
									label="Nickname"
									placeholder="Nombre de usuario"
									onChange={enviarChange.bind()}
									required
									type="text"
									variant="outlined"
								/>
							</Grid>
						</Grid>
					</Hidden>
				</DialogContent>
				<DialogActions>
					<Button color="secondary" onClick={props.funcion}>Cerrar</Button>
					<Button
						onClick={() => enviarMensaje()}
						color="primary"
						className={buttonClassname}
						disabled={loading}
						variant="contained">
						{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
						Enviar
                    </Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
