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

const SCOPES = 'https://mail.google.com https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar https://www.google.com/m8/feeds/ https://www.googleapis.com/auth/contacts.readonly';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(10)
	},
	calendario: {
		width: '100%'
	},
	close: {
		padding: theme.spacing(0.5)
	},
	appBar: {
		position: 'relative',
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	avatar: {
		backgroundColor: theme.palette.primary.main
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
			client_id: `${Config.client_id}`,
			scope: SCOPES
		}, function (response) {
			localStorage.setItem('tokenGoogle', JSON.stringify(response.access_token));
			otroPerfil(response.access_token)
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
		}).then(respuesta => {
			console.log(respuesta)
			setDialogEvento(false)
			setModalEventoVista({})
			setEventoColor('')
			setEventoConsultado({})
			setIdEventoEliminar('')
		})
		GetEventos()
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
			<Dialog fullScreen open={dialogEvento} onClose={handleCloseDialogEvento} TransitionComponent={Transition}>
				<AppBar className={classes.appBar} style={{ backgroundColor: colorEvento }}>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={handleCloseDialogEvento} aria-label="close">
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
						<ListItemText primary="Descripción" secondary={eventoConsultado.description} />
					</ListItem>
				</List>
			</Dialog>
			<Paper elevation={4} className={classes.root}>
				<FullCalendar
					// className={classes.calendario}
					selectable={true}
					// select={this.modalOpen2}
					weekNumbers={true}
					editable={true}
					defaultView='dayGridMonth'
					plugins={[dayGridPlugin, interactionPlugin, timeGrid, timelinePlugin, resourceTimelinePlugin, bootstrapPlugin, listPlugin]}
					themeSystem='standart'
					events={eventosGoogle}
					header={header}
					locale='es'
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