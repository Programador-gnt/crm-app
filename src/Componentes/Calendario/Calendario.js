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

const SCOPES = 'https://mail.google.com https://www.googleapis.com/auth/calendar https://www.google.com/m8/feeds/ https://www.googleapis.com/auth/contacts.readonly';

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
	}
}));

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
		});
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
					// eventClick={this.eventClick}
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