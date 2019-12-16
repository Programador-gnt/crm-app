import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGrid from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import listPlugin from '@fullcalendar/list';
import timelinePlugin from '@fullcalendar/timeline';
import gapi from 'gapi-client';
import Config from '../Config/Config';
import consumeWSCalendar from '../Config/WebServiceCalendar';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import GroupIcon from '@material-ui/icons/Group';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

const SCOPES = 'https://mail.google.com https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar https://www.google.com/m8/feeds/ https://www.googleapis.com/auth/contacts.readonly';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(10)
	},
	close: {
		padding: theme.spacing(0.5)
	},
	appBar: {
		position: 'relative'
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	avatar: {
		backgroundColor: theme.palette.primary.main
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
	cabeceraDialog: {
		position: 'relative'
	},
	invitadoss: {
		backgroundColor: theme.palette.secondary.main,
		width: 30,
		height: 30,
	}
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function Calendario() {
	const classes = useStyles()
	const header = {
		left: 'prev,next, today',
		center: 'title',
		right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
	}
	const formatoTiempo = {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		meridiem: true
	}
	const [eventosGoogle, setEventosGoogle] = React.useState([])
	const [aviso, setAviso] = React.useState(false);
	const [eventoConsultado, setEventoConsultado] = React.useState({})
	const [modalEventoVista, setModalEventoVista] = React.useState({})
	const [dialogEvento, setDialogEvento] = React.useState(false)
	const [colorEvento, setEventoColor] = React.useState('')
	const [idEventoEliminar, setIdEventoEliminar] = React.useState('')
	const datos = JSON.parse(localStorage.getItem('perfilGoogle'))
	const [fecha, setFecha] = React.useState({})
	const [abrirDialog, setAbrirDialog] = React.useState(false)
	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(false);
	const [eventoNuevo, setEventoNuevo] = React.useState({})
	const [attendees, setAttendees] = React.useState([])
	const [invitados, setInvitados] = React.useState('')
	const [colorId, setColorId] = React.useState(11)
	const timer = React.useRef();

	const buttonClassname = clsx({
		[classes.buttonSuccess]: success,
	});

	const GetEventos = () => {
		consumeWSCalendar('GET', '', '', '')
			.then(result => {
				setEventosGoogle(result)
				if (result.hasOwnProperty('error')) {
					gapi.load('auth2', initClient);
				} else {
					setEventosGoogle(obtenerEventos(result))
				}
				setAviso(true)
			})
	}

	function initClient() {
		gapi.auth2.authorize({
			apiKey: `${Config.api_key}`,
			client_id: `${Config.client_id}`,
			scope: SCOPES,
			cookie_policy: 'none'
		}, function (response) {
			localStorage.setItem('tokenGoogle', JSON.stringify(response.access_token));
			otroPerfil(response.access_token)
			GetEventos()
		});
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

	const obtenerEventos = (eventos) => {
		let evento = [eventos.items]
		let eventoLista = []

		evento.forEach(function (eventoItem) {
			for (let i = 0; i < eventoItem.length; i++) {

				if (eventoItem[i].start.hasOwnProperty('dateTime')) {
					let eventoNew = {
						"start": eventoItem[i].start.dateTime,
						"end": eventoItem[i].end.dateTime,
						"title": eventoItem[i].summary,
						"id": eventoItem[i].id,
						"backgroundColor": eventoItem[i].colorId === '1' ? '#a4bdfc' :
							eventoItem[i].colorId === '2' ? '#2896e2' :
								eventoItem[i].colorId === '3' ? '#9305a6' :
									eventoItem[i].colorId === '4' ? '#ff887c' :
										eventoItem[i].colorId === '5' ? '#fbd75b' :
											eventoItem[i].colorId === '6' ? '#ffb878' :
												eventoItem[i].colorId === '7' ? '#46d6db' :
													eventoItem[i].colorId === '8' ? '#616161' :
														eventoItem[i].colorId === '9' ? '#5484ed' :
															eventoItem[i].colorId === '10' ? '#51b749' :
																eventoItem[i].colorId === '11' ? '#dc2127' : '#E10000'
					}
					eventoLista.push(eventoNew);

				} else if (eventoItem[i].start.hasOwnProperty('date')) {
					let eventoNew = {
						"start": eventoItem[i].start.date,
						"end": eventoItem[i].end.date,
						"title": eventoItem[i].summary,
						"id": eventoItem[i].id,
						"backgroundColor": eventoItem[i].colorId === '1' ? '#a4bdfc' :
							eventoItem[i].colorId === '2' ? '#2896e2' :
								eventoItem[i].colorId === '3' ? '#9305a6' :
									eventoItem[i].colorId === '4' ? '#ff887c' :
										eventoItem[i].colorId === '5' ? '#fbd75b' :
											eventoItem[i].colorId === '6' ? '#ffb878' :
												eventoItem[i].colorId === '7' ? '#46d6db' :
													eventoItem[i].colorId === '8' ? '#e1e1e1' :
														eventoItem[i].colorId === '9' ? '#5484ed' :
															eventoItem[i].colorId === '10' ? '#51b749' :
																eventoItem[i].colorId === '11' ? '#dc2127' : '#E10000'
					}
					eventoLista.push(eventoNew);
				}
			}
		});
		return eventoLista
	}

	const handleCloseMensaje = () => {
		setAviso(false)
	};

	const eventClick = (informacionEvento) => {
		consultarEvento(informacionEvento.event.id)
		setEventoColor(informacionEvento.event.backgroundColor)
		setIdEventoEliminar(informacionEvento.event.id)
	}

	const consultarEvento = (id) => {
		consumeWSCalendar('GET', '/', '', `${id}`)
			.then(result => {
				setEventoConsultado(result)
				if (result.start.hasOwnProperty('dateTime')) {
					let fechaInicio = result.start.dateTime ? result.start.dateTime : {}
					let fechaFin = result.end.dateTime ? result.end.dateTime : {}
					setModalEventoVista({
						start: fechaInicio.substr(0, 10) + ' - ' + fechaInicio.substr(11, 5),
						end: fechaFin.substr(0, 10) + ' - ' + fechaFin.substr(11, 5)
					})
				} else if (result.start.hasOwnProperty('date')) {
					let fechaInicio = result.start.date ? result.start.date : {}
					let fechaFin = result.end.date ? result.end.date : {}
					setModalEventoVista({
						start: fechaInicio,
						end: fechaFin
					})
				}
			})
		setDialogEvento(true)
	}

	const handleCloseDialogEvento = () => {
		setDialogEvento(false);
		setModalEventoVista({})
		setEventoColor('')
		setEventoConsultado({})
		setIdEventoEliminar('')
	};

	const eliminarEvento = async () => {
		var token = JSON.parse(localStorage.getItem('tokenGoogle'))
		await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events/${idEventoEliminar}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			}
		}).then(() => {
			setDialogEvento(false)
			setModalEventoVista({})
			setEventoColor('')
			setEventoConsultado({})
			setIdEventoEliminar('')
		})
		GetEventos()
	}

	const dialogEventoNuevo = (rango) => {
		var dateStart = rango.startStr.substr(0, 19)
		var dateEnd = rango.endStr.substr(0, 19)
		setAbrirDialog(true)
		setFecha({
			...fecha,
			inicio: dateStart,
			fin: dateEnd
		})
		if (dateStart.length === 19) {

			setEventoNuevo({
				"colorId": colorId,
				"start": {
					dateTime: dateStart,
					timeZone: 'America/Lima'
				},
				"end": {
					dateTime: dateEnd,
					timeZone: 'America/Lima'
				},
				'reminders': {
					'useDefault': false,
					'overrides': [
						{ 'method': 'email', 'minutes': 30 },
						{ 'method': 'popup', 'minutes': 10 }
					]
				}

			})
		} else if (dateStart.length === 10) {
			setEventoNuevo({
				"colorId": colorId,
				"start": {
					date: dateStart,
				},
				"end": {
					date: dateEnd,
				},
				'reminders': {
					'useDefault': false,
					'overrides': [
						{ 'method': 'email', 'minutes': 24 * 60 },
						{ 'method': 'popup', 'minutes': 10 }
					]
				}
			})
		}

	}

	const guardarEvento = () => {
		if (!loading) {
			setSuccess(false);
			setLoading(true);
			timer.current = setTimeout(() => {
				setSuccess(true);
				setLoading(false);
				consumeWSCalendar('POST', '', eventoNuevo, `?alt=json`)
					.then(() => {
						setAbrirDialog(false)
						GetEventos()
						setAttendees([])
					})
			}, 2000)
		}
	}

	const handleChange = (e) => {
		setEventoNuevo({
			...eventoNuevo,
			[e.target.name]: e.target.value
		})
	}

	const handleChangeAttendees = (e) => {
		setInvitados(e.target.value)
	}

	const tecla = (e) => {
		if (e.keyCode === 13) {
			setAttendees([...attendees, { email: invitados, responseStatus: 'accepted' }])
			setEventoNuevo({
				...eventoNuevo,
				"sendUpdates": 'all',
				attendees: [...attendees, { email: invitados, responseStatus: 'accepted' }]
			})
			var campo = document.activeElement
			campo.value = ''
		}
	}

	const handleColor = (e) => {
		setColorId(e.target.value)
		setEventoNuevo({
			...eventoNuevo,
			"colorId": e.target.value
		})
	}

	const cerrarDialog = () => {
		setAttendees([])
		setAbrirDialog(false)
	}

	React.useEffect(GetEventos, [])

	return (
		<React.Fragment>
			<CssBaseline />
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				open={aviso}
				autoHideDuration={2000}
				onClose={handleCloseMensaje}
				style={{ opacity: '0.8' }}
				ContentProps={{
					'aria-describedby': 'message-id',
				}}
				message={<Typography id="message-id" variant='button'>Cargando eventos... {<LinearProgress color="primary" style={{ width: '100%', marginBottom: 0 }} />}</Typography>}
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
			<Dialog fullWidth open={abrirDialog} onClose={() => setAbrirDialog(false)}>
				<DialogTitle disableTypography>
					<Paper elevation={24}>
						<AppBar className={classes.cabeceraDialog}>
							<Toolbar>
								<Typography variant="h6" className={classes.title}>
									Crear Evento
						</Typography>
								<EventOutlinedIcon />
							</Toolbar>
						</AppBar>
					</Paper>
				</DialogTitle>

				<DialogContent>
					<Hidden xsDown>
						<Grid container direction="column" spacing={2}>
							<Grid item xs={12} sm={12}>
								<TextField
									autoComplete="summary"
									name='summary'
									autoFocus
									fullWidth
									label="Título del evento"
									placeholder="¿Cómo deseas nombrar el evento?"
									required
									onChange={handleChange}
									type="text"
									variant="outlined"
								/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<TextField
									autoComplete="description"
									fullWidth
									multiline
									rows={5}
									label="Descripción"
									name='description'
									placeholder="Describe tu evento"
									onChange={handleChange}
									required
									type="text"
									variant="outlined"
								/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<TextField
									id='email'
									autoComplete="email"
									name='email'
									fullWidth
									label="Participante"
									placeholder="participante@correo.com"
									onKeyDown={tecla}
									onChange={handleChangeAttendees}
									type="email"
									variant="outlined"
								/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<List>
									{attendees.length > 0 ?
										attendees.map((invit, index) => (
											<ListItem key={index}>
												<ListItemAvatar>
													<Avatar className={classes.invitadoss} size='small'>
														{invit.email.substr(0, 1)}
													</Avatar>
												</ListItemAvatar>
												<ListItemText primary={invit.email} />
											</ListItem>
										))
										:
										<ListItem>
											<ListItemText primary='Aún no posee invitados' />
										</ListItem>
									}
								</List>
							</Grid>
							<Grid item xs={12} sm={12}>
								<InvertColorsIcon style={{ color: colorId === 1 ? '#a4bdfc' : colorId === 2 ? '#7ae7bf' : colorId === 3 ? '#dbadff' : colorId === 4 ? '#ff887c' : colorId === 5 ? '#fbd75b' : colorId === 6 ? '#ffb878' : colorId === 7 ? '#46d6db' : colorId === 8 ? '#e1e1e1' : colorId === 9 ? '#5484ed' : colorId === 10 ? '#51b749' : colorId === 11 ? '#dc2127' : '' }} />
								<Select
									value={colorId}
									onChange={handleColor}
								>
									<MenuItem key={0} value={1}>Melrose</MenuItem>
									<MenuItem key={1} value={2}>Riptide</MenuItem>
									<MenuItem key={2} value={3}>Malva</MenuItem>
									<MenuItem key={3} value={4}>Mandarina</MenuItem>
									<MenuItem key={4} value={5}>Dandelion</MenuItem>
									<MenuItem key={5} value={6}>Dorado</MenuItem>
									<MenuItem key={6} value={7}>Turquesa</MenuItem>
									<MenuItem key={7} value={8}>Plomo</MenuItem>
									<MenuItem key={8} value={9}>Azul</MenuItem>
									<MenuItem key={9} value={10}>Verde Manzana</MenuItem>
									<MenuItem key={10} value={11}>Carmesí</MenuItem>
								</Select>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Typography variant='h6'>Fecha</Typography>
								<Typography variant='button'>{`${fecha.inicio} - ${fecha.fin}`}</Typography>
							</Grid>
						</Grid>
					</Hidden>
					<Hidden smUp>
						<Grid container direction="column" spacing={2}>
							<Grid item xs>
								<TextField
									autoComplete="summary"
									name='summary'
									fullWidth
									label="Título del evento"
									placeholder="¿Cómo deseas nombrar el evento?"
									required
									onChange={handleChange}
									type="text"
									variant="outlined"
								/>
							</Grid>
							<Grid item xs>
								<TextField
									autoComplete="description"
									fullWidth
									multiline
									rows={5}
									label="Descripción"
									name='description'
									placeholder="Describe tu evento"
									onChange={handleChange}
									required
									type="text"
									variant="outlined"
								/>
							</Grid>
							<Grid item>
								<TextField
									autoComplete="email"
									name='email'
									fullWidth
									label="Participante"
									placeholder="participante@correo.com"
									onKeyDown={tecla}
									onChange={handleChangeAttendees}
									type="email"
									variant="outlined"
								/>
							</Grid>
							<Grid item>
								<InvertColorsIcon style={{ color: colorId === 1 ? '#a4bdfc' : colorId === 2 ? '#7ae7bf' : colorId === 3 ? '#dbadff' : colorId === 4 ? '#ff887c' : colorId === 5 ? '#fbd75b' : colorId === 6 ? '#ffb878' : colorId === 7 ? '#46d6db' : colorId === 8 ? '#e1e1e1' : colorId === 9 ? '#5484ed' : colorId === 10 ? '#51b749' : colorId === 11 ? '#dc2127' : '' }} />
								<Select
									value={colorId}
									onChange={handleColor}
								>
									<MenuItem key={0} value={1}>Melrose</MenuItem>
									<MenuItem key={1} value={2}>Riptide</MenuItem>
									<MenuItem key={2} value={3}>Mauve</MenuItem>
									<MenuItem key={3} value={4}>Vivid Tangerine</MenuItem>
									<MenuItem key={4} value={5}>Dandelion</MenuItem>
									<MenuItem key={5} value={6}>Macaroni and Cheese</MenuItem>
									<MenuItem key={6} value={7}>Turquoise</MenuItem>
									<MenuItem key={7} value={8}>Mercury</MenuItem>
									<MenuItem key={8} value={9}>Cornflower Blue</MenuItem>
									<MenuItem key={9} value={10}>Apple</MenuItem>
									<MenuItem key={10} value={11}>Alizarin Crimson</MenuItem>
								</Select>
							</Grid>
							<Grid item>
								<List>
									{attendees.length > 0 ?
										attendees.map((invit, index) => (
											<ListItem key={index}>
												<ListItemAvatar>
													<Avatar className={classes.invitadoss} size='small'>
														{invit.email.substr(0, 1)}
													</Avatar>
												</ListItemAvatar>
												<ListItemText primary={invit.email} />
											</ListItem>
										))
										:
										<ListItem>
											<ListItemText primary='Aún no posee invitados' />
										</ListItem>
									}
								</List>
							</Grid>
							<Grid item >
								<Typography variant='h6'>Fecha</Typography>
								<Typography variant='button'>{`${fecha.inicio} - ${fecha.fin}`}</Typography>
							</Grid>
						</Grid>
					</Hidden>
				</DialogContent>
				<DialogActions>
					<Button color="secondary" onClick={() => cerrarDialog()}>Cerrar</Button>
					<Button
						onClick={() => guardarEvento()}
						color="primary"
						className={buttonClassname}
						disabled={loading}
						variant="contained">
						{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
						Guardar
                    </Button>
				</DialogActions>
			</Dialog>
			<Dialog fullScreen open={dialogEvento} onClose={handleCloseDialogEvento} TransitionComponent={Transition}>
				<AppBar className={classes.appBar} style={{ backgroundColor: colorEvento }}>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={handleCloseDialogEvento} aria-label="cerrar">
							<CloseIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							{eventoConsultado.summary}
						</Typography>
						<Fab size='small' color="secondary" aria-label="eliminar" onClick={() => eliminarEvento()}>
							<DeleteOutlineIcon /></Fab>
					</Toolbar>
				</AppBar>
				<List>
					<ListItem>
						<ListItemAvatar>
							<Avatar className={classes.avatar}>
								<GroupIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={eventoConsultado.hasOwnProperty('attendees') ? eventoConsultado.attendees.length + ' Invitado(s)' : ''} secondary={eventoConsultado.hasOwnProperty('attendees') ? eventoConsultado.attendees.map(invitados => (invitados.email + ', ')) : 'No posee invitados'} />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemAvatar>
							<Avatar className={classes.avatar}>
								<DescriptionOutlinedIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Descripción" secondary={eventoConsultado.hasOwnProperty('description') ? eventoConsultado.description : 'No posee descripción'} />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemAvatar>
							<Avatar className={classes.avatar}>
								<EventOutlinedIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Creador" secondary={eventoConsultado.hasOwnProperty('creator') ? eventoConsultado.creator.email : ''} />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemAvatar>
							<Avatar className={classes.avatar}>
								<ScheduleOutlinedIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Inicio" secondary={modalEventoVista.start} />
					</ListItem>
					<Divider />
					<ListItem>
						<ListItemAvatar>
							<Avatar className={classes.avatar}>
								<ScheduleOutlinedIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Final" secondary={modalEventoVista.end} />
					</ListItem>
				</List>
			</Dialog>
			<Paper elevation={4} className={classes.root}>
				<FullCalendar
					selectable={true}
					select={dialogEventoNuevo}
					weekNumbers={true}
					editable={true}
					defaultView='dayGridMonth'
					plugins={[dayGridPlugin, interactionPlugin, timeGrid, timelinePlugin, resourceTimelinePlugin, bootstrapPlugin, listPlugin]}
					themeSystem='standart'
					events={eventosGoogle}
					header={header}
					locale={datos.locale}
					eventClick={eventClick}
					eventLimit={true}
					eventTextColor='#fff'
					eventBorderColor='rgba(0, 0, 0, 0)'
					navLinks={true}
					schedulerLicenseKey='GPL-My-Project-Is-Open-Source'
					slotDuration='00:15'
					nowIndicator={true}
					eventTimeFormat={formatoTiempo}
				/>
			</Paper>
		</React.Fragment>
	);
}