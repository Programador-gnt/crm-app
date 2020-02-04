import React from 'react';
import { CssBaseline, Card, CardContent, CardActions, Avatar, Typography, Grid, Tooltip, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import GoogleIcon from 'mdi-material-ui/Google';
import EventIcon from '@material-ui/icons/Event';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { AuthTokenRequest } from '../helpers/AxiosInstance';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
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
	},
	Paper: {
		width: '100%',
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			width: '100%',
			padding: theme.spacing(3),
		}
	}
}));

const actions = [
	{ name: 'Volver' }
];

export default function Info() {
	const history = useHistory()
	const [open, setOpen] = React.useState(window.screen.width < 769 ? false : true)
	const id = window.location.search.split('=')[1]
	const [infor, setInfor] = React.useState({})
	const [editar, setEditar] = React.useState(true)
	const classes = useStyles()

	const info = () => {
		AuthTokenRequest.get('contactos/info', {
			params: {
				id_usuarios: id
			}
		}).then(result => {
			setInfor(result.data)
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
			<Grid container className={classes.root} spacing={1}>
				<Grid item xs={12} sm={4}>
					<Card className={classes.card} raised={true}>
						<CardContent>
							<Avatar className={classes.avatar} src={infor.avatar} />
							<Typography variant="h5" className={classes.texto} color='secondary'>
								{infor.name}
							</Typography>
							<Typography variant="body1" className={classes.texto} color='textSecondary'>
								{infor.correo}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<Tooltip title='Enviar mensaje'>
								<IconButton>
									<GoogleIcon color='primary' />
								</IconButton>
							</Tooltip>
							<Tooltip title='Agendar reunión'>
								<IconButton>
									<EventIcon color='primary' />
								</IconButton>
							</Tooltip>
							<Tooltip title='Llamar'>
								<IconButton>
									<PhoneAndroidIcon color='primary' />
								</IconButton>
							</Tooltip>
							<Tooltip title='Editar'>
								<IconButton onClick={() => setEditar(!editar)}>
									<EditOutlinedIcon color='primary' />
								</IconButton>
							</Tooltip>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={12} sm={8}>
					<Paper elevation={4} className={classes.Paper}>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Typography variant="h6" color='textSecondary'>
									Perfil de contacto
						    	</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									name='name'
									value={infor.name || ''}
									disabled={editar}
									margin='normal'
									autoFocus
									fullWidth
									helperText='Name'
									type="text"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									name='dni'
									value={infor.dni || ''}
									disabled={editar}
									margin='normal'
									fullWidth
									helperText='Dni'
									type="text"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									name='empresa'
									value={infor.empresa || ''}
									disabled={editar}
									margin='normal'
									fullWidth
									helperText='Empresa'
									type="text"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									name='telefono'
									value={infor.telefono || ''}
									disabled={editar}
									margin='normal'
									fullWidth
									helperText='Telefono'
									type="text"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									name='correo'
									value={infor.correo || ''}
									disabled={editar}
									margin='normal'
									fullWidth
									helperText='Correo'
									type="text"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									name='cargo'
									value={infor.cargo || ''}
									disabled={editar}
									margin='normal'
									fullWidth
									helperText='Cargo'
									type="text"
								/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}