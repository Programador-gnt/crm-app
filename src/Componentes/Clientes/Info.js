import React from 'react';
import { CssBaseline, Card, CardContent, CardActions, Avatar, Typography, Grid, Divider, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import GoogleIcon from 'mdi-material-ui/Google';
import EventIcon from '@material-ui/icons/Event';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import consumeWSChat from '../Config/WebServiceChat';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(8),
		paddingLeft: theme.spacing(4)
	},
	speedDial: {
		position: 'fixed',
		bottom: theme.spacing(7),
		right: theme.spacing(2),
	},
	card: {
		width: 400,
		margin: theme.spacing(5)
	},
	avatar: {
		backgroundColor: theme.palette.primary.main,
		width: 150,
		height: 150,
		margin: 'auto'
	},
	texto: {
		textAlign: 'center',
		marginTop: theme.spacing(1)
	},
	info: {
		marginTop: theme.spacing(1)
	}
}));

const actions = [
	{ name: 'Volver' }
];

export default function Info() {
	const history = useHistory()
	const [open, setOpen] = React.useState(true)
	const id = window.location.search.split('=')[1]
	const [infor, setInfor] = React.useState({})
	const classes = useStyles()

	const info = () => {
		consumeWSChat('GET', 'contactos/info', '', `?id_usuarios=${id}`)
			.then(result => {
				setInfor(result)
			})
	}

	const preventActionClickClose = (evt, action) => {
		evt.preventDefault()
		evt.stopPropagation()
		if (action.name === 'Volver') {
			history.push('/contactos')
		}
	}

	React.useEffect(info, [])

	return (
		<React.Fragment>
			<CssBaseline />
			<Grid className={classes.root}>
				<Grid item xs={12}>
					<Typography component="h1" variant="h4" align="center" color='textSecondary'>
						Información de contacto
          			</Typography>
					<SpeedDial
						ariaLabel="SpeedDial tooltip example"
						className={classes.speedDial}
						icon={<SpeedDialIcon />}
						onClick={() => setOpen(!open)}
						open={open}>

						{actions.map(action => (
							<SpeedDialAction
								tooltipOpen
								key={action.name}
								icon={action.name === 'Volver' ? <ArrowBackOutlinedIcon /> : ''}
								tooltipTitle={action.name}
								onClick={evt => preventActionClickClose(evt, action)}
							/>
						))}
					</SpeedDial>
					<Grid container alignItems='center' justify='center'>
						<Card className={classes.card}>
							<CardContent>
								<Avatar className={classes.avatar} src={infor.avatar} />
								<Typography variant="h5" className={classes.texto} color='secondary'>
									{infor.name}
								</Typography>
								<Typography variant="body1" className={classes.texto} color='textSecondary'>
									{infor.empresa}
								</Typography>
								<Divider />
								<Typography variant="subtitle2" className={classes.info} color='textPrimary'>
									Email
                                {/* Incluso cuando todo es perfecto, siempre puedes mejorarlo. Rompe barreras en tu cabeza, crea algo loco y no olvides que programar es poesía... */}
								</Typography>
								<Typography variant="body1" color='textSecondary'>
									{infor.correo}
								</Typography>
								<Typography variant="subtitle2" className={classes.info} color='textPrimary'>
									Teléfono
                            </Typography>
								<Typography variant="body1" color='textSecondary'>
									{infor.telefono}
								</Typography>
								<Typography variant="subtitle2" className={classes.info} color='textPrimary'>
									Status
                            </Typography>
								<Chip
									icon={<FaceIcon />}
									label={infor.status}
									color="primary"
									onDelete={() => console.log('status')}
									deleteIcon={<DoneIcon />}
									variant="outlined"
								/>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton aria-label="Gmail">
									<GoogleIcon color='primary' />
								</IconButton>
								<IconButton aria-label="Agendar">
									<EventIcon color='primary' />
								</IconButton>
								<IconButton aria-label="Llamadas">
									<PhoneAndroidIcon color='primary' />
								</IconButton>
								<IconButton aria-label="Llamadas">
									<EditOutlinedIcon color='primary' />
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}