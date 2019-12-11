import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import consumeWSGmail from '../Config/WebServiceGmail';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import gapi from 'gapi-client';
import Config from '../Config/Config';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import LinearProgress from '@material-ui/core/LinearProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { saveAs } from 'file-saver';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import Backdrop from '@material-ui/core/Backdrop';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '@material-ui/core/Modal';
import Zoom from '@material-ui/core/Zoom';
import TextField from '@material-ui/core/TextField';
import SignInDialog from '../SignInDIalog/SignInDialog';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			<Box>{children}</Box>
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(10)
	},
	card: {
		width: 400,
		margin: theme.spacing(5)
	},
	media: {
		height: 100,
		paddingTop: '56.25%'
	},
	pestaña: {
		width: '100%'
	},
	typography: {
		padding: theme.spacing(2)
	},
	close: {
		padding: theme.spacing(0.5)
	},
	table: {
		minWidth: 650
	},
	iframe: {
		width: "100%",
		border: 0,
		minHeight: "80%",
		height: "600px",
		display: "flex"
	},
	speedDial: {
		position: 'fixed',
		bottom: theme.spacing(7),
		right: theme.spacing(2),
	},
	back: {
		transform: 'translateZ(0px)',
		position: 'fixed',
		zIndex: 100
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	estiloModal: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	}
}));

const actions = [
	{ name: 'Buscar' },
	{ name: 'Nuevo' }
];

function Gmail() {
	const [valor, setValor] = React.useState(0);
	const [perfil, setPerfil] = React.useState({})
	const classes = useStyles();
	const theme = useTheme();
	const [MensajesInbox, setMensajesInbox] = React.useState({})
	const [idsInbox, setIdsInbox] = React.useState([])
	const [MensajesSent, setMensajesSent] = React.useState({})
	const [idsSent, setIdsSent] = React.useState([])
	const [MensajesChat, setMensajesChat] = React.useState({})
	const [idsChat, setIdsChat] = React.useState([])
	const [aviso, setAviso] = React.useState(false);
	const [cuerpo, setCuerpo] = React.useState('')
	const [label, setLabel] = React.useState('INBOX')
	const [openModal, setOpenModal] = React.useState(false)
	const [conversion, setConversion] = React.useState('')
	const [cabecera, setCabecera] = React.useState('')
	const [type, setType] = React.useState('')
	const [fileName, setFileName] = React.useState('')
	const [arregloTipo, setArregloTipo] = React.useState('')
	const [mensajeAdjunto, setMensajeAdjunto] = React.useState({})
	const [correo, setCorreo] = React.useState('google')
	const [open, setOpen] = React.useState(false)
	const [modalBusqueda, setModalBusqueda] = React.useState(false)
	const [openDialog, setOpenDialog] = React.useState(false)
	var arrayInbox = []
	var arraySent = []
	var arrayChat = []
	const SCOPES = 'https://mail.google.com https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar https://www.google.com/m8/feeds/ https://www.googleapis.com/auth/contacts.readonly';
	var subjject
	var To
	var From
	var Dates
	var chatFrom
	const datos = JSON.parse(localStorage.getItem('perfilGoogle'))

	const handleCambio = (event, newValue) => {
		setValor(newValue);
	};

	const handleChangeIndex = index => {
		setValor(index);
	};

	const handleCloseMensaje = () => {
		setAviso(false)
	};

	const mensajesInbox = () => {
		consumeWSGmail('GET', 'messages', '', `?q=${correo}&labelIds=INBOX`)
			.then(result => {
				setMensajesInbox(result)
				if (result.hasOwnProperty('error')) {
					gapi.load('auth2', initClient);
				} else {
					if (result.resultSizeEstimate > 0) {
						for (let i = 0; i < result.messages.length; i++) {
							consumeWSGmail('GET', 'messages/', '', `${result.messages[i].id}?q=${correo}&labelIds=INBOX`)
								.then(resultado => {
									arrayInbox.push(resultado)
								})
						}
					} else {

					}
				}
				console.log(MensajesInbox)
				setAviso(true)
				setIdsInbox(arrayInbox)
				setModalBusqueda(false)
			})
	}

	const mensajesSent = () => {
		consumeWSGmail('GET', 'messages', '', `?q=${correo}&labelIds=SENT`)
			.then(result => {
				setMensajesSent(result)
				if (result.hasOwnProperty('error')) {
				} else {
					if (result.resultSizeEstimate > 0) {
						for (let i = 0; i < result.messages.length; i++) {
							consumeWSGmail('GET', 'messages/', '', `${result.messages[i].id}?q=${correo}&labelIds=SENT`)
								.then(resultado => {
									arraySent.push(resultado)
								})
						}
					} else {


					}
				}
				console.log(MensajesSent)
				setIdsSent(arraySent)
			})
	}

	const mensajesChat = () => {
		consumeWSGmail('GET', 'messages', '', `?q=${correo}&labelIds=CHAT`)
			.then(result => {
				setMensajesChat(result)
				if (result.hasOwnProperty('error')) {
				} else {
					if (result.resultSizeEstimate > 0) {
						for (let i = 0; i < result.messages.length; i++) {
							consumeWSGmail('GET', 'messages/', '', `${result.messages[i].id}?q=${correo}&labelIds=CHAT`)
								.then(resultado => {
									arrayChat.push(resultado)
								})
						}
					} else {


					}
				}
				console.log(MensajesChat)
				setIdsChat(arrayChat)
			})
	}

	function initClient() {
		gapi.auth2.authorize({
			apiKey: `${Config.api_key}`,
			client_id: `${Config.client_id}`,
			scope: SCOPES,
			cookie_policy: 'none'
		}, (response) => {
			localStorage.setItem('tokenGoogle', JSON.stringify(response.access_token));
			setIdsInbox([])
			setIdsSent([])
			setIdsChat([])
			mensajesInbox()
			mensajesSent()
			mensajesChat()
			perfilUsuario()
			otroPerfil(response.access_token)
		})
	}

	const otroPerfil = async (TOKEN) => {
		await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${TOKEN}`, {
			method: 'GET',
			headers: {
				"Content-type": "application/json",
			}
		}).then(respuesta => {
			return respuesta.json()
		}).then(json => {
			localStorage.setItem('perfilGoogle', JSON.stringify(json))
		})
	}

	const perfilUsuario = () => {
		consumeWSGmail('GET', 'profile', '', '')
			.then(result => {
				setPerfil(result)
			})
	}

	React.useEffect(perfilUsuario, []);
	React.useEffect(mensajesInbox, []);
	React.useEffect(mensajesSent, []);
	React.useEffect(mensajesChat, []);

	const getInfo = (payload) => {
		let melopia = [payload.headers]
		melopia.forEach(function (cabeza) {
			for (let i = 0; i < cabeza.length; i++) {
				if (cabeza[i].name === 'To') {
					To = cabeza[i].value
				} else if (cabeza[i].name === 'From') {
					From = cabeza[i].value
				} else if (cabeza[i].name === 'Date') {
					Dates = cabeza[i].value
				} else if (cabeza[i].name === 'Subject') {
					subjject = cabeza[i].value
				}
			}
		})
	}

	const eliminar = async (Id) => {
		var token = JSON.parse(localStorage.getItem("tokenGoogle"))
		await fetch(`https://www.googleapis.com/gmail/v1/users/me/messages/${Id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			}
		}).then(() => {
			mensajesInbox()
			mensajesSent()
			mensajesChat()
		})

	}

	const Cuerpoo = (mensaje) => {
		setCorreo(correo)
		setCuerpo(mensaje.snippet)
		setOpenModal(true)

		if (label === 'CHAT') {
			setConversion(mensaje.snippet)
			getHeaderChat(mensaje.payload)
		} else {
			getBody(mensaje.payload)
			getHeader(mensaje.payload)
			getAdjunto(mensaje.payload, mensaje.id)
		}
	}

	const getBody = (message) => {
		var encodedBody = '';
		if (message.hasOwnProperty('parts')) {
			if (typeof message.parts === 'undefined') {
				encodedBody = message.body.data;
			} else {
				encodedBody = getHTMLPart(message.parts);
			}
		} else {
			encodedBody = message.body.data;
		}
		encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
		setConversion(decodeURIComponent(escape(window.atob(encodedBody))))
	}

	const getHTMLPart = (parts) => {
		for (var i = 0; i <= parts.length; i++) {
			if (typeof parts[i].parts === 'undefined') {
				if (parts[i].mimeType === 'text/html') {
					return parts[i].body.data;
				}
			}
			else {
				return getHTMLPart(parts[i].parts);
			}
		}
		return '';
	}

	const getHeaderChat = (payload) => {
		let melopia = [payload.headers]
		melopia.forEach(function (cabeza) {
			for (let i = 0; i < cabeza.length; i++) {
				chatFrom = cabeza[i].value
			}
		})
	}

	const getHeader = (payload) => {
		let melopia = [payload.headers]
		melopia.forEach(function (cabeza) {
			for (let i = 0; i < cabeza.length; i++) {
				if (cabeza[i].name === 'Subject') {
					setCabecera(cabeza[i].value)
				} else if (cabeza[i].name === 'From') {
					chatFrom = cabeza[i].value
				}
			}
		})
	}

	const getAdjunto = (payload, id) => {
		let atId
		if (payload.hasOwnProperty('parts')) {
			let parts = [payload.parts]
			parts.forEach(function (partes) {
				for (let i = 0; i < partes.length; i++) {
					if (typeof partes[i].filename !== 'undefined') {
						atId = partes[i].body.attachmentId
						setType(partes[i].mimeType)
						setFileName(partes[i].filename)
						setArregloTipo(fileName.split('.')[1])
					}
				}
			})
			consultarAdjunto(id, atId)
		} else {

		}
	}

	const consultarAdjunto = (id1, id2) => {
		consumeWSGmail('GET', 'messages/', '', `${id1}/attachments/${id2}`)
			.then(result => {
				setMensajeAdjunto(result)
			})
	}

	const crearArchivo = () => {
		var b64toBlob = require('b64-to-blob');
		let encodedBody = mensajeAdjunto.data
		if (typeof encodedBody !== 'undefined') {
			encodedBody = encodedBody.replace(/ /g, '+').replace(/_/g, '/').replace(/-/g, '+');
			var blob = b64toBlob(encodedBody, type);
			saveAs(blob, fileName);
		} else {

		}
	}

	const handleOpen = () => {
		setOpen(true);
	};

	const handleCloseButton = () => {
		setOpen(false);
	};

	const handleCloseModalBusqueda = () => {
		setModalBusqueda(false)
	}

	const onChangeCorreo = (e) => {
		setCorreo(e.target.value)
	}

	const Enter = (e) => {
		if (e.keyCode === 13) {
			setIdsInbox([])
			setIdsSent([])
			setIdsChat([])
			mensajesInbox()
			mensajesChat()
			mensajesSent()
		}
	}

	const closeDialog = () => {
		setOpenDialog(false)
		setIdsInbox([])
		setIdsSent([])
		setIdsChat([])
		mensajesInbox()
		mensajesChat()
		mensajesSent()
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<SignInDialog abrir={openDialog} cerrar={closeDialog.bind()} />
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				open={aviso}
				autoHideDuration={3000}
				onClose={handleCloseMensaje}
				style={{ opacity: '0.8' }}
				ContentProps={{
					'aria-describedby': 'message-id',
				}}
				message={<Typography id="message-id" variant='button'>Cargando mensajes... {<LinearProgress color="primary" style={{ width: '100%', marginBottom: 0 }} />}</Typography>}
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
			<Paper elevation={4} className={classes.root} >
				<Modal
					aria-labelledby='transition-modal-title'
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={modalBusqueda}
					onClose={handleCloseModalBusqueda}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{ timeout: 500 }}>
					<Zoom in={modalBusqueda} timeout={500}>
						<div className={classes.estiloModal}>
							<Typography variant="h6">
								Buscar
								</Typography>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								label="¿Qué deseas buscar?"
								autoComplete="correo"
								autoFocus
								onChange={onChangeCorreo.bind()}
								onKeyDown={Enter.bind()}
								value={correo}
							/>
						</div>
					</Zoom>
				</Modal>
				{console.log(cuerpo)}
				{console.log(arregloTipo)}
				<Backdrop open={open} className={classes.back} />
				<SpeedDial
					ariaLabel="SpeedDial tooltip example"
					className={classes.speedDial}
					icon={<MenuIcon />}
					onClose={handleCloseButton}
					onOpen={handleOpen}
					open={open}>

					{actions.map(action => (
						<SpeedDialAction
							key={action.name}
							icon={action.name === 'Nuevo' ? <AddCircleIcon /> : action.name === 'Buscar' ? <SearchIcon /> : ''}
							tooltipTitle={action.name}
							onClick={action.name === 'Nuevo' ? () => setOpenDialog(true) : action.name === 'Buscar' ? () => setModalBusqueda(true) : ''}
						/>
					))}
				</SpeedDial>
				<Dialog open={openModal} onClose={() => setOpenModal(false)}>
					<DialogTitle disableTypography>
						<Typography variant="h6">
							{label === 'CHAT' ? chatFrom : cabecera}
						</Typography>
					</DialogTitle>
					<DialogContent>
						<iframe className={classes.iframe} srcDoc={conversion} title={cabecera} />
					</DialogContent>
					<DialogActions>
						<Typography variant='button' style={{ cursor: 'pointer' }} title='Descargar Archivo' onClick={() => crearArchivo()}>{fileName}</Typography>
					</DialogActions>
				</Dialog>
				<Grid container alignItems='center' justify='center'>
					<Card className={classes.card}>
						<CardHeader
							avatar={
								<Avatar alt="..." src={datos.picture} />
							}
							title={perfil.emailAddress}
						/>
						<CardMedia
							className={classes.media}
							image="https://i.imgur.com/RGf2v43.jpg"
						/>
						<CardContent>
							<Typography variant="button" color="textSecondary" component="p">
								{`Mensajes totales: ${perfil.messagesTotal}`}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
						</CardActions>
					</Card>
				</Grid>
				<Fade in={true} mountOnEnter unmountOnExit timeout={1000}>
					<div className={classes.pestaña}>
						<AppBar position="static" color='primary'>
							<Tabs
								value={valor}
								onChange={handleCambio}
								indicatorColor="secondary"
								variant="fullWidth"
								aria-label="full width tabs example"
							>
								<Tab label={<Typography variant='button'>Inbox</Typography>} {...a11yProps(0)} onClick={() => setLabel('INBOX')} />
								<Tab label={<Typography variant='button'>Enviados</Typography>} {...a11yProps(1)} onClick={() => setLabel('SENT')} />
								<Tab label={<Typography variant='button'>Chat</Typography>} {...a11yProps(2)} onClick={() => setLabel('CHAT')} />
							</Tabs>
						</AppBar>
						<SwipeableViews
							axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
							index={valor}
							onChangeIndex={handleChangeIndex}
						>
							<TabPanel value={valor} index={0} dir={theme.direction}>
								<Table className={classes.table} aria-label="simple table" aria-labelledby="tableTitle">
									<TableHead>
										<TableRow>
											<TableCell style={{ maxWidth: 100 }}>Origen</TableCell>
											<TableCell align="left" style={{ maxWidth: 100 }}>Enviado por:</TableCell>
											<TableCell align="left" style={{ maxWidth: 100 }}>Subject</TableCell>
											<TableCell align="left" style={{ maxWidth: 100 }}>Fecha</TableCell>
											<TableCell align="right">Eliminar</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{idsInbox.length ?
											idsInbox.map((mensaje, index) => (
												<TableRow key={index}>
													<TableCell onClick={() => Cuerpoo(mensaje)} style={{ cursor: 'pointer' }}>{mensaje.labelIds[0] === 'IMPORTANT' ? mensaje.labelIds[2] :
														mensaje.labelIds[0] === 'Label_1' ? mensaje.labelIds[1] :
															mensaje.labelIds[0] === 'CATEGORY_PROMOTIONS' ? mensaje.labelIds[2] :
																mensaje.labelIds[0] === 'CATEGORY_UPDATES' ? mensaje.labelIds[1] :
																	mensaje.labelIds[0] === 'CATEGORY_FORUMS' ? mensaje.labelIds[1] :
																		mensaje.labelIds[0] === 'CATEGORY_PERSONAL' ? mensaje.labelIds[1] : mensaje.labelIds[0]}</TableCell>
													<TableCell align="left" onLoad={getInfo(mensaje.payload)} onClick={() => Cuerpoo(mensaje)} style={{ cursor: 'pointer' }}>{From}</TableCell>
													<TableCell align="left" onClick={() => Cuerpoo(mensaje)} style={{ cursor: 'pointer' }}><strong>{subjject}</strong>{` - ${mensaje.snippet.substr(0, 20)}...`}</TableCell>
													<TableCell align="left" onClick={() => Cuerpoo(mensaje)} style={{ cursor: 'pointer' }}>{Dates.substr(5, 11)}</TableCell>
													<TableCell align="right">{<IconButton aria-label='eliminar' onClick={() => eliminar(mensaje.id)}><DeleteOutlineIcon color='primary' /></IconButton>}</TableCell>
												</TableRow>
											))

											:
											<TableRow>
												<TableCell align='left'>
													<Typography variant='button'>No hay nada para mostrar</Typography>
												</TableCell>
											</TableRow>
										}
									</TableBody>
								</Table>
							</TabPanel>
							<TabPanel value={valor} index={1} dir={theme.direction}>
								<Table className={classes.table} aria-label="simple table" aria-labelledby="tableTitle">
									<TableHead>
										<TableRow>
											<TableCell style={{ maxWidth: 100 }}>Origen</TableCell>
											<TableCell align="left" style={{ maxWidth: 100 }}>Enviado a:</TableCell>
											<TableCell align="left" style={{ maxWidth: 100 }}>Subject</TableCell>
											<TableCell align="left" style={{ maxWidth: 100 }}>Fecha</TableCell>
											<TableCell align="right">Eliminar</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{idsSent.length ?
											idsSent.map((mensaje, index) => (
												<TableRow key={index}>
													<TableCell onClick={() => Cuerpoo(mensaje)} style={{ cursor: 'pointer' }}>{mensaje.labelIds[0] === 'IMPORTANT' ? mensaje.labelIds[2] :
														mensaje.labelIds[0] === 'Label_1' ? mensaje.labelIds[1] :
															mensaje.labelIds[0] === 'CATEGORY_PROMOTIONS' ? mensaje.labelIds[2] :
																mensaje.labelIds[0] === 'CATEGORY_UPDATES' ? mensaje.labelIds[1] :
																	mensaje.labelIds[0] === 'CATEGORY_FORUMS' ? mensaje.labelIds[1] :
																		mensaje.labelIds[0] === 'CATEGORY_PERSONAL' ? mensaje.labelIds[1] : mensaje.labelIds[0]}</TableCell>
													<TableCell align="left" onLoad={getInfo(mensaje.payload)} onClick={() => Cuerpoo(mensaje)} style={{ cursor: 'pointer' }}>{To}</TableCell>
													<TableCell align="left" onClick={() => Cuerpoo(mensaje)} style={{ cursor: 'pointer' }}><strong>{subjject}</strong>{` - ${mensaje.snippet.substr(0, 20)}...`}</TableCell>
													<TableCell align="left" onClick={() => Cuerpoo(mensaje)} style={{ cursor: 'pointer' }}>{Dates.substr(5, 11)}</TableCell>
													<TableCell align="right">{<IconButton aria-label='eliminar' onClick={() => eliminar(mensaje.id)}><DeleteOutlineIcon color='primary' /></IconButton>}</TableCell>
												</TableRow>
											))

											:
											<TableRow>
												<TableCell align='left'>
													<Typography variant='button'>No hay nada para mostrar</Typography>
												</TableCell>
											</TableRow>
										}

									</TableBody>
								</Table>
							</TabPanel>
							<TabPanel value={valor} index={2} dir={theme.direction}>
								<Table className={classes.table} aria-label="simple table" aria-labelledby="tableTitle">
									<TableHead>
										<TableRow>
											<TableCell style={{ maxWidth: 100 }}>Origen</TableCell>
											<TableCell align="left" style={{ maxWidth: 100 }}>Enviado por:</TableCell>
											<TableCell align="left" style={{ maxWidth: 100 }}>Subject</TableCell>
											<TableCell align="left" style={{ maxWidth: 100 }}>Fecha</TableCell>
											<TableCell align="right">Eliminar</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{idsChat.length ?
											idsChat.map((mensaje, index) => (
												<TableRow key={index}>
													<TableCell onClick={() => Cuerpoo(mensaje)} style={{ cursor: 'pointer' }}>{mensaje.labelIds[0] === 'IMPORTANT' ? mensaje.labelIds[2] :
														mensaje.labelIds[0] === 'Label_1' ? mensaje.labelIds[1] :
															mensaje.labelIds[0] === 'CATEGORY_PROMOTIONS' ? mensaje.labelIds[2] :
																mensaje.labelIds[0] === 'CATEGORY_UPDATES' ? mensaje.labelIds[1] :
																	mensaje.labelIds[0] === 'CATEGORY_FORUMS' ? mensaje.labelIds[1] :
																		mensaje.labelIds[0] === 'CATEGORY_PERSONAL' ? mensaje.labelIds[1] : mensaje.labelIds[0]}</TableCell>
													<TableCell align="left" onLoad={getInfo(mensaje.payload)} onClick={() => Cuerpoo(mensaje)} style={{ cursor: 'pointer' }}>{From}</TableCell>
													<TableCell align="left" onClick={() => Cuerpoo(mensaje)} style={{ cursor: 'pointer' }}><strong>{subjject}</strong>{` - ${mensaje.snippet.substr(0, 20)}...`}</TableCell>
													<TableCell align="left" onClick={() => Cuerpoo(mensaje)} style={{ cursor: 'pointer' }}>{Dates.substr(5, 11)}</TableCell>
													<TableCell align="right">{<IconButton aria-label='eliminar' onClick={() => eliminar(mensaje.id)}><DeleteOutlineIcon color='primary' /></IconButton>}</TableCell>
												</TableRow>
											))

											:
											<TableRow>
												<TableCell align='left'>
													<Typography variant='button'>No hay nada para mostrar</Typography>
												</TableCell>
											</TableRow>
										}
									</TableBody>
								</Table>
							</TabPanel>
						</SwipeableViews>
					</div>

				</Fade>
			</Paper>
		</React.Fragment>
	);
}
export default Gmail;