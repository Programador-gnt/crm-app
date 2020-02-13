import React from 'react';
import {
	CssBaseline,
	Paper,
	Typography,
	Grid,
	Divider,
	TextField,
	Avatar,
	Fab,
	ListItemText,
	ListItem,
	List,
	ListItemAvatar,
	AppBar,
	Toolbar,
	MenuItem,
	DialogTitle,
	DialogContent,
	DialogActions,
	Hidden,
	Button,
	Dialog,
	Zoom
} from '@material-ui/core'
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DomainIcon from '@material-ui/icons/Domain';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import PhotoIcon from '@material-ui/icons/Photo';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import { useHistory } from 'react-router-dom';
import { AuthTokenRequest } from '../helpers/AxiosInstance'

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		marginTop: theme.spacing(12),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 1000,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
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
		backgroundColor: theme.palette.secondary.main,
		width: 70,
		height: 70
	},
	texto: {
		marginTop: theme.spacing(4)
	},
	info: {
		marginTop: theme.spacing(1)
	},
	input: {
		display: 'none',
	},
	cabecera: {
		position: 'relative',
		marginTop: theme.spacing(1)
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	boton: {
		marginTop: theme.spacing(3)
	}
}));


const actions = [
	{ name: 'Volver' },
	{ name: 'Guardar' }
];

export default function Nuevo() {
	const history = useHistory()
	const [open, setOpen] = React.useState(window.screen.width < 769 ? false : true)
	const [denei, setDenei] = React.useState('')
	const [ruc, setRuc] = React.useState('')
	const [informacion1, setInformacion1] = React.useState({})
	const [informacion2, setInformacion2] = React.useState({})
	const [imagenAvatar, setImagenAvatar] = React.useState('')
	const [avatarGuardar, setAvatarGuardar] = React.useState([])
	const [telefonos, setTelefonos] = React.useState({ tipo: 'personal' })
	const [arrayTelefono, setArrayTelefono] = React.useState([])
	const [correos, setCorreos] = React.useState({ tipo: 'personal' })
	const [arrayCorreo, setArrayCorreo] = React.useState([])
	const [redes, setRedes] = React.useState({ tipo: 'facebook' })
	const [arrayRedes, setArrayRedes] = React.useState([])
	const [direccion, setDireccion] = React.useState({ tipo: 'casa', pais: 'peru' })
	const [arrayDireccion, setArrayDireccion] = React.useState([])
	const [dialogDireccion, setDialogDireccion] = React.useState(false)
	const classes = useStyles()
	const perfil = JSON.parse(localStorage.getItem('perfilGoogle'))

	const onChange = (e) => {
		setDenei(e.target.value)
	}

	const onChangeRuc = (e) => {
		setRuc(e.target.value)
	}

	const tecla = async (e) => {
		if (e.keyCode === 13) {
			if (typeof denei === 'undefined') {

			} else {
				await fetch(`https://dniruc.apisperu.com/api/v1/dni/${denei}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByb2dyYW1hZG9yQGdudC5wZSJ9.h0kKyOThfiofLhCBJIctabYiQb7dWpk_kOe0hVwUR4g`, {
					method: 'GET',
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
				}).then(respuesta => {
					return respuesta.json()
				}).then(json => {
					setInformacion1(json)
				})
			}
		}
	}

	const teclaRuc = async (e) => {
		if (e.keyCode === 13) {
			if (typeof ruc === 'undefined') {

			} else {
				await fetch(`https://dniruc.apisperu.com/api/v1/ruc/${ruc}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByb2dyYW1hZG9yQGdudC5wZSJ9.h0kKyOThfiofLhCBJIctabYiQb7dWpk_kOe0hVwUR4g`, {
					method: 'GET',
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
				}).then(respuesta => {
					return respuesta.json()
				}).then(json => {
					setInformacion2(json)
				})
			}
		}
	}


	const onChangeTelefonos = (e) => {
		setTelefonos({
			...telefonos,
			[e.target.name]: e.target.value
		})
	}

	const agregarTelefono = () => {
		setArrayTelefono([...arrayTelefono, telefonos])
	}

	const eliminarTelefono = (i) => {
		setArrayTelefono(arrayTelefono.splice(i))
	}

	const onChangeCorreos = (e) => {
		setCorreos({
			...correos,
			[e.target.name]: e.target.value
		})
	}

	const agregarCorreo = () => {
		setArrayCorreo([...arrayCorreo, correos])
	}

	const eliminarCorreo = (i) => {
		setArrayCorreo(arrayCorreo.splice(i))
	}

	const onChangeRedes = (e) => {
		setRedes({
			...redes,
			[e.target.name]: e.target.value
		})
	}

	const agregarRedes = () => {
		setArrayRedes([...arrayRedes, redes])
	}

	const eliminarRedes = (i) => {
		setArrayRedes(arrayRedes.splice(i))
	}

	const onChangeDireccion = (e) => {
		setDireccion({
			...direccion,
			[e.target.name]: e.target.value
		})
	}

	const agregarDireccion = () => {
		setArrayDireccion([...arrayDireccion, direccion])
		setDialogDireccion(false)
	}

	const eliminarDireccion = (i) => {
		setArrayDireccion(arrayDireccion.splice(i))
	}

	const handleAvatarChange = (event) => {
		if (!event) {
			return;
		}

		const files = event.target.files;

		if (!files) {
			return;
		}

		const avatar = files[0];

		if (!avatar) {
			return;
		}

		const fileTypes = [
			'image/gif',
			'image/jpeg',
			'image/png',
			'image/webp',
			'image/svg+xml'
		];

		if (!fileTypes.includes(avatar.type)) {
			return;
		}

		if (avatar.size > (20 * 1024 * 1024)) {
			return;
		}

		setImagenAvatar(URL.createObjectURL(avatar))
		setAvatarGuardar(URL.createObjectURL(avatar))
	};

	const guardar = () => {
		console.log(avatarGuardar)
		AuthTokenRequest.post('contactos/upload', {foto: avatarGuardar})
			.then(() => {
			
			})
	}

	const preventActionClickClose = (evt, action) => {
		evt.preventDefault()
		evt.stopPropagation()
		if (action.name === 'Volver') {
			history.push('/contactos')
		}
		if (action.name === 'Guardar') {
			guardar()
		}
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<main className={classes.layout}>
				<Paper elevation={4} className={classes.root}>
					<Dialog fullWidth open={dialogDireccion} onClose={() => setDialogDireccion(false)}>
						<DialogTitle disableTypography>
							<Paper elevation={24}>
								<AppBar className={classes.cabecera}>
									<Toolbar variant='dense'>
										<Typography variant="button" className={classes.title}>
											Agregar dirección
						</Typography>
										<HomeOutlinedIcon />
									</Toolbar>
								</AppBar>
							</Paper>
						</DialogTitle>

						<DialogContent>
							<Hidden xsDown>
								<Grid container spacing={1}>
									<Grid item xs={12}>
										<Grid container direction="column" spacing={2}>
											<Grid item sm={6}>
												<TextField
													name='tipo'
													select
													value={direccion.tipo}
													fullWidth
													label="Tipo"
													required
													onChange={onChangeDireccion}
													type="text"
												>
													<MenuItem value='casa'>Casa</MenuItem>
													<MenuItem value='trabajo'>Trabajo</MenuItem>
												</TextField>
											</Grid>
											<Grid item>
												<TextField
													name='direccion1'
													fullWidth
													label="Dirección 1"
													placeholder="Av- ejemplo #número"
													required
													onChange={onChangeDireccion}
													type="text"
												/>
											</Grid>
											<Grid item >
												<TextField
													name='direccion2'
													fullWidth
													label="Dirección 2"
													placeholder="Urb ejemplo"
													required
													onChange={onChangeDireccion}
													type="text"
												/>
											</Grid>
											<Grid item>
												<TextField
													name='pais'
													select
													value={direccion.pais}
													fullWidth
													label="País"
													required
													onChange={onChangeDireccion}
													type="text"
												>
													<MenuItem value='peru'>Perú</MenuItem>
													<MenuItem value='eua'>Estados Unidos</MenuItem>
													<MenuItem value='italia'>Italia</MenuItem>
												</TextField>
											</Grid>
											<Grid item>
												<TextField
													name='departamento'
													fullWidth
													label="Departamento"
													placeholder="Lima"
													required
													onChange={onChangeDireccion}
													type="text"
												/>
											</Grid>
											<Grid item >
												<TextField
													name='provincia'
													fullWidth
													label="Provincia"
													placeholder="Lima"
													required
													onChange={onChangeDireccion}
													type="text"
												/>
											</Grid>
											<Grid item >
												<TextField
													name='distrito'
													fullWidth
													label="Distrito"
													placeholder="Miraflores"
													required
													onChange={onChangeDireccion}
													type="text"
												/>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Hidden>
							<Hidden smUp>
								<Grid container direction="column" spacing={2}>
									<Grid item sm={6}>
										<TextField
											name='tipo'
											select
											value={direccion.tipo}
											fullWidth
											label="Tipo"
											required
											onChange={onChangeDireccion}
											type="text"
										>
											<MenuItem value='casa'>Casa</MenuItem>
											<MenuItem value='trabajo'>Trabajo</MenuItem>
										</TextField>
									</Grid>
									<Grid item xs>
										<TextField
											name='direccion1'
											fullWidth
											label="Dirección 1"
											placeholder="Av- ejemplo #número"
											required
											onChange={onChangeDireccion}
											type="text"
										/>
									</Grid>
									<Grid item xs>
										<TextField
											name='direccion2'
											fullWidth
											label="Dirección 2"
											placeholder="Urb ejemplo"
											required
											onChange={onChangeDireccion}
											type="text"
										/>
									</Grid>
									<Grid item xs>
										<TextField
											name='pais'
											select
											value={direccion.pais}
											fullWidth
											label="País"
											required
											onChange={onChangeDireccion}
											type="text"
										>
											<MenuItem value='peru'>Perú</MenuItem>
											<MenuItem value='eua'>Estados Unidos</MenuItem>
											<MenuItem value='italia'>Italia</MenuItem>
										</TextField>
									</Grid>
									<Grid item>
										<TextField
											name='departamento'
											fullWidth
											label="Departamento"
											placeholder="Lima"
											required
											onChange={onChangeDireccion}
											type="text"
										/>
									</Grid>
									<Grid item >
										<TextField
											name='provincia'
											fullWidth
											label="Provincia"
											placeholder="Lima"
											required
											onChange={onChangeDireccion}
											type="text"
										/>
									</Grid>
									<Grid item >
										<TextField
											name='distrito'
											fullWidth
											label="Distrito"
											placeholder="Miraflores"
											required
											onChange={onChangeDireccion}
											type="text"
										/>
									</Grid>
								</Grid>
							</Hidden>
						</DialogContent>
						<DialogActions>
							<Button color="secondary" onClick={() => setDialogDireccion(false)}>Cerrar</Button>
							<Button
								color="primary"
								onClick={() => agregarDireccion()}
								variant="contained">
								Guardar
                    </Button>
						</DialogActions>
					</Dialog>
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
								icon={action.name === 'Volver' ? <ArrowBackOutlinedIcon /> : action.name === 'Guardar' ? <SaveOutlinedIcon /> : ''}
								tooltipTitle={action.name}
								onClick={evt => preventActionClickClose(evt, action)}
							/>
						))}
					</SpeedDial>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6">
								Información personal
						    </Typography>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								name='dni'
								value={denei}
								margin='normal'
								autoFocus
								fullWidth
								label="DNI"
								onChange={onChange}
								onKeyDown={tecla}
								placeholder="Ingrese dni"
								helperText='presione enter'
								type="text"
							/>
						</Grid>
						<Grid item sx={12} sm={3}>
							<input className={classes.input} id="icon-button-file" type="file" name='file' onChange={handleAvatarChange} />
							<label htmlFor="icon-button-file">
								{imagenAvatar ?
									<Zoom in={true} timeout={500}>
										<Avatar className={classes.avatar} src={imagenAvatar === '' ? perfil.picture : imagenAvatar} />
									</Zoom>
									: <Button color="primary" component="span" startIcon={<PhotoIcon />} variant="contained" className={classes.boton}>
										Subir...
                                </Button>}
							</label>
						</Grid>
						<Grid item xs={12} sm={6} />
						<Grid item xs={12} sm={6}>
							<TextField
								name='apellidoPaterno'
								value={informacion1.apellidoPaterno}
								margin='normal'
								fullWidth
								helperText="Apellido paterno"
								placeholder="Ingrese apellido paterno"
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								name='apellidoMaterno'
								value={informacion1.apellidoMaterno}
								margin='normal'
								fullWidth
								helperText="Apellido materno"
								placeholder="Ingrese apellido materno"
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								name='nombres'
								value={informacion1.nombres}
								margin='normal'
								fullWidth
								helperText="nombres"
								placeholder="Ingrese nombres"
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								name='fechanacimiento'
								margin='normal'
								fullWidth
								helperText="Fecha de nacimiento"
								placeholder="Ingrese fecha de nacimiento"
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4} />
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={3}>
							<TextField
								name='ruc'
								value={ruc}
								margin='normal'
								fullWidth
								label="RUC"
								onChange={onChangeRuc}
								onKeyDown={teclaRuc}
								placeholder="Ingrese Ruc"
								helperText='presione enter'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={9} />
						<Grid item xs={12} sm={6}>
							<TextField
								name='razonSocial'
								value={informacion2.razonSocial}
								margin='normal'
								fullWidth
								helperText="Razón social"
								placeholder="Ingrese razón social"
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								name='cargo'
								margin='normal'
								fullWidth
								helperText="Cargo que ocupa"
								placeholder="Cargo"
								type="text"
							/>
						</Grid>
						<Divider />
					</Grid>
					<Grid container spacing={2}>
						<Divider />
						<Grid item xs={12}>
							<Typography variant="h6">
								Direcciones
						    </Typography>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Fab color='secondary' size='small' className={classes.texto} aria-label='agregar' onClick={() => setDialogDireccion(true)}>
								<HomeOutlinedIcon />
							</Fab>
						</Grid>
						<Grid item xs={12} sm={12}>
							<List>
								{arrayDireccion.length > 0 ?
									arrayDireccion.map((drc, index) => (
										<ListItem key={index}>
											<ListItemAvatar>
												<DomainIcon color='secondary' />
											</ListItemAvatar>
											<ListItemText primary={`${drc.direccion1}, ${drc.direccion2}`} secondary={`${drc.distrito}, ${drc.provincia}, ${drc.pais}`} />
											<DeleteOutlineOutlinedIcon color='error' onClick={() => eliminarDireccion(index)} style={{ cursor: 'pointer' }} />
										</ListItem>
									))
									:
									<ListItem>
										<ListItemText primary='No hay números agregados' />
									</ListItem>
								}
							</List>
							<Divider />
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6">
								Teléfonos
						    </Typography>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								name='numero'
								value={telefonos.numero}
								margin='normal'
								fullWidth
								label="Teléfono"
								onChange={onChangeTelefonos}
								placeholder="Ingrese número de teléfono"
								helperText='número de teléfono'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								select
								className={classes.texto}
								name='tipo'
								value={telefonos.tipo}
								margin='normal'
								fullWidth
								onChange={onChangeTelefonos}
								helperText='Tipo'
								type="text"
							>
								<MenuItem value='personal'>Personal</MenuItem>
								<MenuItem value='trabajo'>Trabajo</MenuItem>
								<MenuItem value='fijo'>Fijo</MenuItem>
							</TextField>
						</Grid>
						<Grid item xs={12} sm={3}>
							<Fab color='secondary' size='small' className={classes.texto} aria-label='agregar' onClick={() => agregarTelefono()}>
								<AddIcon />
							</Fab>
						</Grid>
						<Grid item xs={12} sm={12}>
							<List>
								{arrayTelefono.length > 0 ?
									arrayTelefono.map((tlf, index) => (
										<ListItem key={index}>
											<ListItemAvatar>
												<PhoneAndroidOutlinedIcon color='secondary' />
											</ListItemAvatar>
											<ListItemText primary={tlf.numero} secondary={tlf.tipo} />
											<CallOutlinedIcon color='primary' onClick={() => alert('llamando a ' + tlf.numero)} style={{ cursor: 'pointer' }} />
											<DeleteOutlineOutlinedIcon color='error' onClick={() => eliminarTelefono(index)} style={{ cursor: 'pointer' }} />
										</ListItem>
									))
									:
									<ListItem>
										<ListItemText primary='No hay números agregados' />
									</ListItem>
								}
							</List>
							<Divider />
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6">
								Correos
						    </Typography>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								name='direccion'
								value={correos.direccion}
								margin='normal'
								fullWidth
								label="Correo"
								onChange={onChangeCorreos}
								placeholder="Ingrese dirección de correo"
								helperText='Dirección de correo'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								select
								className={classes.texto}
								name='tipo'
								value={correos.tipo}
								margin='normal'
								fullWidth
								onChange={onChangeCorreos}
								helperText='Tipo'
								type="text"
							>
								<MenuItem value='personal'>Personal</MenuItem>
								<MenuItem value='trabajo'>Trabajo</MenuItem>
							</TextField>
						</Grid>
						<Grid item xs={12} sm={3}>
							<Fab color='secondary' size='small' className={classes.texto} aria-label='agregar' onClick={() => agregarCorreo()}>
								<AddIcon />
							</Fab>
						</Grid>
						<Grid item xs={12} sm={12}>
							<List>
								{arrayCorreo.length > 0 ?
									arrayCorreo.map((crr, index) => (
										<ListItem key={index}>
											<ListItemAvatar>
												<MailOutlineOutlinedIcon color='secondary' />
											</ListItemAvatar>
											<ListItemText primary={crr.direccion} secondary={crr.tipo} />
											<DeleteOutlineOutlinedIcon color='error' onClick={() => eliminarCorreo(index)} style={{ cursor: 'pointer' }} />
										</ListItem>
									))
									:
									<ListItem>
										<ListItemText primary='No hay correos agregados' />
									</ListItem>
								}
							</List>
							<Divider />
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6">
								Redes sociales
						    </Typography>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								name='nombre'
								value={redes.nombre}
								margin='normal'
								fullWidth
								label="Red social"
								onChange={onChangeRedes}
								placeholder="Ingrese red social"
								helperText='Red social'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								select
								className={classes.texto}
								name='tipo'
								value={redes.tipo}
								margin='normal'
								fullWidth
								onChange={onChangeRedes}
								helperText='Tipo'
								type="text"
							>
								<MenuItem value='facebook'>Facebook</MenuItem>
								<MenuItem value='instagram'>Instagram</MenuItem>
								<MenuItem value='twitter'>Twitter</MenuItem>
								<MenuItem value='linkedin'>Linkedin</MenuItem>
								<MenuItem value='youtube'>Youtube</MenuItem>
							</TextField>
						</Grid>
						<Grid item xs={12} sm={3}>
							<Fab color='secondary' size='small' className={classes.texto} aria-label='agregar' onClick={() => agregarRedes()}>
								<AddIcon />
							</Fab>
						</Grid>
						<Grid item xs={12} sm={12}>
							<List>
								{arrayRedes.length > 0 ?
									arrayRedes.map((red, index) => (
										<ListItem key={index}>
											<ListItemAvatar>
												{red.tipo === 'instagram' ? <InstagramIcon color='error' /> :
													red.tipo === 'facebook' ? <FacebookIcon color='primary' /> :
														red.tipo === 'twitter' ? <TwitterIcon color='primary' /> :
															red.tipo === 'linkedin' ? <LinkedInIcon /> :
																red.tipo === 'youtube' ? <YouTubeIcon color='error' /> : ''}
											</ListItemAvatar>
											<ListItemText primary={red.nombre} secondary={red.tipo} />
											<DeleteOutlineOutlinedIcon color='error' onClick={() => eliminarRedes(index)} style={{ cursor: 'pointer' }} />
										</ListItem>
									))
									:
									<ListItem>
										<ListItemText primary='No hay red social agregada' />
									</ListItem>
								}
							</List>
						</Grid>
					</Grid>
				</Paper>
			</main>
		</React.Fragment>
	);
}