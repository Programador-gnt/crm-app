import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import Backdrop from '@material-ui/core/Backdrop';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DomainIcon from '@material-ui/icons/Domain';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import consumeWSChat from '../Config/WebServiceChat';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
	back: {
		transform: 'translateZ(0px)',
		position: 'fixed',
		zIndex: 100
	},
	card: {
		width: 400,
		margin: theme.spacing(5)
	},
	avatar: {
		backgroundColor: theme.palette.secondary.main,
		width: 70,
		height: 70,
		margin: 'auto'
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
	}
}));


const actions = [
	{ name: 'Volver' },
	{ name: 'Guardar' }
];

export default function Nuevo(props) {
	const [open, setOpen] = React.useState(false)
	const [arrayTelefono, setArrayTelefono] = React.useState([])
	const [arrayCorreo, setArrayCorreo] = React.useState([])
	const [arrayRedes, setArrayRedes] = React.useState([])
	const [arrayDireccion, setArrayDireccion] = React.useState([])
	const [dialogDireccion, setDialogDireccion] = React.useState(false)
	const [aviso, setAviso] = React.useState(false)
	const [empresa, setEmpresa] = React.useState({
		tdocumento: 1,
		tdireccion: 1,
		pais: 1,
		ttelefono: 1,
		tcorreo: 1,
		tsocial: 1
	})
	const classes = useStyles()

	const handleOpen = () => {
		setOpen(true);
	};

	const handleCloseButton = () => {
		setOpen(false);
	};

	const teclaRuc = async (e) => {
		if (e.keyCode === 13) {
			if (typeof empresa.ruc === 'undefined') {

			} else {
				await fetch(`https://dniruc.apisperu.com/api/v1/ruc/${empresa.ruc}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByb2dyYW1hZG9yQGdudC5wZSJ9.h0kKyOThfiofLhCBJIctabYiQb7dWpk_kOe0hVwUR4g`, {
					method: 'GET',
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
				}).then(respuesta => {
					return respuesta.json()
				}).then(json => {
					setEmpresa({
						...empresa,
						razonsocial: json.razonSocial
					})
				})
			}
		}
	}

	const agregarTelefono = () => {
		setArrayTelefono([...arrayTelefono, { numero: empresa.telefono, tipo: empresa.ttelefono }])
	}

	const eliminarTelefono = (i) => {
		setArrayTelefono(arrayTelefono.splice(i))
	}

	const agregarCorreo = () => {
		setArrayCorreo([...arrayCorreo, { direccion: empresa.correo, tipo: empresa.tcorreo }])
	}

	const eliminarCorreo = (i) => {
		setArrayCorreo(arrayCorreo.splice(i))
	}

	const agregarRedes = () => {
		setArrayRedes([...arrayRedes, { nombre: empresa.social, tipo: empresa.tsocial }])
	}

	const eliminarRedes = (i) => {
		setArrayRedes(arrayRedes.splice(i))
	}

	const agregarDireccion = () => {
		setArrayDireccion([...arrayDireccion, { pais: empresa.pais, direccion1: empresa.direccion1, direccion2: empresa.direccion2, departamento: empresa.departamento, provincia: empresa.provincia, distrito: empresa.distrito }])
		setDialogDireccion(false)
	}

	const eliminarDireccion = (i) => {
		setArrayDireccion(arrayDireccion.splice(i))
	}

	const onChangeEmpresa = (e) => {
		setEmpresa({
			...empresa,
			[e.target.name]: e.target.value
		})
	}

	const guardar = () => {
		consumeWSChat('POST', 'empresas/nuevo', empresa, '')
			.then(result => {
				console.log(result)
				setAviso(true)
			})
	}

	const handleCloseMensaje = () => {
		setAviso(false)
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<main className={classes.layout}>
				<Paper elevation={4} className={classes.root}>
					<Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={aviso} autoHideDuration={3000} onClose={handleCloseMensaje} style={{ opacity: '0.8' }}
						ContentProps={{ 'aria-describedby': 'mensaje' }}
						message={<Typography id="mensaje" variant='button'>Guardado con éxito</Typography>}
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
					<Typography variant='h6' color='textPrimary'>Nueva empresa</Typography>
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
													name='tdireccion'
													select
													value={empresa.tdireccion}
													fullWidth
													label="Tipo"
													required
													onChange={onChangeEmpresa}
													type="text"
												>
													<MenuItem value={1}>Casa</MenuItem>
													<MenuItem value={2}>Trabajo</MenuItem>
												</TextField>
											</Grid>
											<Grid item>
												<TextField
													name='direccion1'
													autoFocus
													fullWidth
													label="Dirección 1"
													placeholder="Av- ejemplo #número"
													required
													onChange={onChangeEmpresa}
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
													onChange={onChangeEmpresa}
													type="text"
												/>
											</Grid>
											<Grid item>
												<TextField
													name='pais'
													select
													value={empresa.pais}
													fullWidth
													label="País"
													required
													onChange={onChangeEmpresa}
													type="text"
												>
													<MenuItem value={1}>Perú</MenuItem>
													<MenuItem value={2}>Estados Unidos</MenuItem>
													<MenuItem value={3}>Italia</MenuItem>
												</TextField>
											</Grid>
											<Grid item>
												<TextField
													name='departamento'
													fullWidth
													label="Departamento"
													placeholder="Lima"
													required
													onChange={onChangeEmpresa}
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
													onChange={onChangeEmpresa}
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
													onChange={onChangeEmpresa}
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
											name='tdireccion'
											select
											value={empresa.tdireccion}
											fullWidth
											label="Tipo"
											required
											onChange={onChangeEmpresa}
											type="text"
										>
											<MenuItem value='casa'>Casa</MenuItem>
											<MenuItem value='trabajo'>Trabajo</MenuItem>
										</TextField>
									</Grid>
									<Grid item xs>
										<TextField
											name='direccion1'
											autoFocus
											fullWidth
											label="Dirección 1"
											placeholder="Av- ejemplo #número"
											required
											onChange={onChangeEmpresa}
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
											onChange={onChangeEmpresa}
											type="text"
										/>
									</Grid>
									<Grid item xs>
										<TextField
											name='pais'
											select
											value={empresa.pais}
											fullWidth
											label="País"
											required
											onChange={onChangeEmpresa}
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
											onChange={onChangeEmpresa}
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
											onChange={onChangeEmpresa}
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
											onChange={onChangeEmpresa}
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
								icon={action.name === 'Volver' ? <ArrowBackOutlinedIcon /> : action.name === 'Guardar' ? <SaveOutlinedIcon /> : ''}
								tooltipTitle={action.name}
								onClick={action.name === 'Volver' ? () => props.history.push('/empresas') : action.name === 'Guardar' ? () => guardar() : ''}
							/>
						))}
					</SpeedDial>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={3}>
							<TextField
								select
								className={classes.texto}
								name='tdocumento'
								value={empresa.tdocumento}
								margin='normal'
								fullWidth
								onChange={onChangeEmpresa}
								helperText='Tipo'
								type="text"
							>
								<MenuItem value={1}>RUC</MenuItem>
								<MenuItem value={2}>OTROS</MenuItem>
								<MenuItem value={3}>DNI</MenuItem>
							</TextField>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								name='ruc'
								value={empresa.ruc}
								margin='normal'
								autoFocus
								fullWidth
								label="RUC"
								onChange={onChangeEmpresa}
								onKeyDown={teclaRuc}
								placeholder="Ingrese Ruc"
								helperText='presione enter'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={6} />
						<Grid item xs={12} sm={6}>
							<TextField
								name='razonsocial'
								value={empresa.razonsocial}
								margin='normal'
								onChange={onChangeEmpresa}
								fullWidth
								helperText="Razón social"
								placeholder="Ingrese razón social"
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={6} />
						<Divider />
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6"  >
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
										<ListItemText primary='No hay direcciones agregadas' />
									</ListItem>
								}
							</List>
							<Divider />
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6"  >
								Teléfonos
						    </Typography>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								name='telefono'
								value={empresa.telefono}
								margin='normal'
								fullWidth
								label="Teléfono"
								onChange={onChangeEmpresa}
								placeholder="Ingrese número de teléfono"
								helperText='número de teléfono'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								select
								className={classes.texto}
								name='ttelefono'
								value={empresa.ttelefono}
								margin='normal'
								fullWidth
								onChange={onChangeEmpresa}
								helperText='Tipo'
								type="text"
							>
								<MenuItem value={1}>Personal</MenuItem>
								<MenuItem value={2}>Trabajo</MenuItem>
								<MenuItem value={3}>Fijo</MenuItem>
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
											<ListItemText primary={tlf.numero} secondary={tlf.tipo === 1 ? 'Personal' : tlf.tipo === 2 ? 'Trabajo' : tlf.tipo === 3 ? 'Trabajo' : ''} />
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
							<Typography variant="h6"  >
								Correos
						    </Typography>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								name='correo'
								value={empresa.correo}
								margin='normal'
								fullWidth
								label="Correo"
								onChange={onChangeEmpresa}
								placeholder="Ingrese dirección de correo"
								helperText='Dirección de correo'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								select
								className={classes.texto}
								name='tcorreo'
								value={empresa.tcorreo}
								margin='normal'
								fullWidth
								onChange={onChangeEmpresa}
								helperText='Tipo'
								type="text"
							>
								<MenuItem value={1}>Personal</MenuItem>
								<MenuItem value={2}>Trabajo</MenuItem>
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
											<ListItemText primary={crr.direccion} secondary={crr.tipo === 1 ? 'Personal' : crr.tipo === 2 ? 'Trabajo' : ''} />
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
							<Typography variant="h6"  >
								Redes sociales
						    </Typography>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								name='social'
								value={empresa.social}
								margin='normal'
								fullWidth
								label="Red social"
								onChange={onChangeEmpresa}
								placeholder="Ingrese red social"
								helperText='Red social'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								select
								className={classes.texto}
								name='tsocial'
								value={empresa.tsocial}
								margin='normal'
								fullWidth
								onChange={onChangeEmpresa}
								helperText='Tipo'
								type="text"
							>
								<MenuItem value={1}>Facebook</MenuItem>
								<MenuItem value={2}>Instagram</MenuItem>
								<MenuItem value={3}>Twitter</MenuItem>
								<MenuItem value={4}>Linkedin</MenuItem>
								<MenuItem value={5}>Youtube</MenuItem>
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
												{red.tipo === 2 ? <InstagramIcon color='error' /> :
													red.tipo === 1 ? <FacebookIcon color='primary' /> :
														red.tipo === 3 ? <TwitterIcon color='primary' /> :
															red.tipo === 4 ? <LinkedInIcon /> :
																red.tipo === 5 ? <YouTubeIcon color='error' /> : ''}
											</ListItemAvatar>
											<ListItemText primary={red.nombre} secondary={red.tipo === 1 ? 'Facebook' : red.tipo === 2 ? 'Instagram' : red.tipo === 3 ? 'Twitter' : red.tipo === 4 ? 'LinkedIn' : red.tipo === 5 ? 'YouTube' : ''} />
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