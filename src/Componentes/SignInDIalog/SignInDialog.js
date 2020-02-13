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
import consumeWSGmail from '../Config/WebServiceGmail';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';

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


export default function SignInDialog({ abrir, cerrar }) {
	const classes = useStyles();
	const [MensajeEnviar, setMensajeEnviar] = React.useState({})
	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(false);
	const timer = React.useRef();
	var Mensaje

	const buttonClassname = clsx({
		[classes.buttonSuccess]: success,
	});

	const enviarChange = (e) => {
		setMensajeEnviar({
			...MensajeEnviar,
			[e.target.name]: e.target.value
		})
	}

	const enviarMensaje = () => {
		var BuildMail = require('buildmail')
		new BuildMail('text/plain').setContent(MensajeEnviar.Snippet).addHeader('From', '').addHeader('To', MensajeEnviar.To).addHeader('Subject', MensajeEnviar.Subject).build((err, mail) => {
			Mensaje = btoa(mail.toString())
			if (Mensaje) {
				setSuccess(false);
				setLoading(true);
				timer.current = setTimeout(() => {
					setSuccess(true);
					setLoading(false);
					consumeWSGmail('POST', 'messages/send', Mensaje, `?alt=json`)
				}, 2000)
			}
		})
	}

	React.useEffect(() => {
		return () => {
			clearTimeout(timer.current);
		};
	}, []);

	return (
		<React.Fragment>
			<CssBaseline />
			<Dialog fullWidth maxWidth="sm" open={abrir} onClose={cerrar}>
				<DialogTitle>
					Enviar mensaje
                </DialogTitle>

				<DialogContent>
					<Hidden xsDown>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Grid container direction="column" spacing={2}>
									<Grid item>
										<TextField
											autoComplete="to"
											name='To'
											fullWidth
											autoFocus
											label="Destinatario"
											placeholder="Correo electrónico"
											required
											onChange={enviarChange}
											type="text"
											variant="outlined"
										/>
									</Grid>

									<Grid item >
										<TextField
											autoComplete="motivo"
											fullWidth
											label="Subject"
											name='Subject'
											placeholder="Motivo del mensaje"
											onChange={enviarChange}
											required
											type="text"
											variant="outlined"
										/>
									</Grid>
									<Grid item >
										<TextField
											autoComplete="mensaje"
											fullWidth
											multiline
											rows={5}
											label="Mensaje"
											name='Snippet'
											placeholder="Cuerpo del mensaje"
											onChange={enviarChange}
											required
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
									autoComplete="to"
									name='To'
									fullWidth
									label="Destinatario"
									placeholder="Correo electrónico"
									onChange={enviarChange}
									required
									type="text"
									variant="outlined"
								/>
							</Grid>
							<Grid item xs>
								<TextField
									autoComplete="current-password"
									fullWidth
									label="Subject"
									name='Subject'
									placeholder="Motivo del mensaje"
									onChange={enviarChange}
									required
									type="text"
									variant="outlined"
								/>
							</Grid>
							<Grid item xs>
								<TextField
									autoComplete="mensaje"
									fullWidth
									multiline
									rows={5}
									label="Mensaje"
									name='Snippet'
									placeholder="Cuerpo del mensaje"
									onChange={enviarChange}
									required
									type="text"
									variant="outlined"
								/>
							</Grid>
						</Grid>
					</Hidden>
				</DialogContent>
				<DialogActions>
					<Button color="secondary" onClick={cerrar}>Cerrar</Button>
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
