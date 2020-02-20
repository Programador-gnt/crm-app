import React from 'react';
import { CssBaseline, Card, CardContent, CardActions, Avatar, Typography, Grid, Tooltip, Paper, TextField, Button, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GoogleIcon from 'mdi-material-ui/Google';
import EventIcon from '@material-ui/icons/Event';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AppInteractionContext from '../helpers/appInteraction';
import { AuthTokenRequest } from '../helpers/AxiosInstance';
import ContactosContext from './contactosContext'

const useStyles = makeStyles(theme => ({
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
			padding: theme.spacing(3)
		}
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	}
}));

export default function Info() {
	const { dispatch } = React.useContext(AppInteractionContext)
	const [infor, setInfor] = React.useState({})
	const [editar, setEditar] = React.useState(true)
	const { contactos, dispatchContactos } = React.useContext(ContactosContext)
	const classes = useStyles()

	const info = () => {
		AuthTokenRequest.get('contactos/info', {
			params: {
				id_usuarios: contactos.id_usuarios
			}
		}).then(result => {
			setInfor(result.data)
		})
	}

	const consultarAcciones = () => {
		AuthTokenRequest.post('acciones', { form: 'contactosInfo' })
			.then(result => {
				dispatch(['contactosInfo', `${window.location.pathname}/info`, 'funcion', result.data])
			})
	}

	React.useEffect(consultarAcciones, [])

	React.useEffect(info, [])

	return (
		<React.Fragment>
			<CssBaseline />
			<Zoom in={true} timeout={500}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={4}>
						<Card className={classes.card} raised={true}>
							<CardContent>
								<Avatar className={classes.avatar} src={infor.avatar} />
								<Typography variant="h5" className={classes.texto} color='secondary'>
									{infor.name}
								</Typography>
								<Typography variant="body1" className={classes.texto} color='textPrimary'>
									{infor.correo}
								</Typography>
								<Typography variant="body1" className={classes.texto} color='textSecondary'>
									{infor.empresa}
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
							<Grid container spacing={2}>
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
								<Grid item xs={12} className={classes.buttons}>
									<Button color='secondary' className={classes.button} disabled={editar} onClick={() => setEditar(true)}>Cancelar</Button>
									<Button variant='contained' color='primary' className={classes.button} disabled={editar}>Guardar</Button>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</Zoom>
		</React.Fragment>
	);
}