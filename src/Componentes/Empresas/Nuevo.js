import React from 'react';
import { LinearProgress, CssBaseline, Paper, Typography, Grid, TextField, Fab, ListItemText, ListItem, List, ListItemAvatar, AppBar, Toolbar, MenuItem, DialogTitle, DialogContent, DialogActions, Hidden, Button, Dialog, Snackbar, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DomainIcon from '@material-ui/icons/Domain';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CloseIcon from '@material-ui/icons/Close';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import AppInteractionContext from '../helpers/appInteraction';
import { AuthTokenRequest } from '../helpers/AxiosInstance';

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
			width: 800,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
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
	},
	table: {
		minWidth: 300
	}
}));


export default function Nuevo() {
	const { dispatch } = React.useContext(AppInteractionContext)
	const [dialogDireccion, setDialogDireccion] = React.useState(false)
	const [aviso, setAviso] = React.useState(false)
	const [listaActiva, setListaActiva] = React.useState(null)
	const [listaActivaTelefono, setListaActivaTelefono] = React.useState(null)
	const [listaActivaFechas, setListaActivaFechas] = React.useState(null)
	const [listaActivaCorreo, setListaActivaCorreo] = React.useState(null)
	const [listaActivaRedes, setListaActivaRedes] = React.useState(null)
	const [listaActivaBanco, setListaActivaBanco] = React.useState(null)
	const [isLoading, setIsLoading] = React.useState(false)
	const [cargos, setCargos] = React.useState([])
	const [empresa, setEmpresa] = React.useState({
		tdocumento: 1,
		tdireccion: 1,
		pais: 1,
		ttelefono: 1,
		tcorreo: 1,
		tsocial: 1,
		basc: false,
		cadenasuministros: false,
		despachocarga: false,
		trazabilidad: false,
		personalentrenado: false,
		apoyoinfo: false
	})
	const classes = useStyles()

	const teclaRuc = async (e) => {
		if (e.keyCode === 13) {
			if (typeof empresa.ruc === 'undefined') {

			} else {
				setIsLoading(true)
				await fetch(`https://dniruc.apisperu.com/api/v1/ruc/${empresa.ruc}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByb2dyYW1hZG9yQGdudC5wZSJ9.h0kKyOThfiofLhCBJIctabYiQb7dWpk_kOe0hVwUR4g`, {
					method: 'GET',
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					}
				}).then(respuesta => {
					return respuesta.json()
				}).then(json => {
					setIsLoading(false)
					document.getElementById('botonDireccion').focus()
					setEmpresa({
						...empresa,
						razonsocial: json.razonSocial
					})
				})
			}
		}
	}

	const conusltarCargos = () => {
		AuthTokenRequest.get('contactos/empresa', {
			params: {
				empresa: empresa.razonsocial
			}
		}).then(respuesta => {
			setCargos(respuesta.data)
		})
	}

	const agregarTelefono = () => {
		setListaActiva(true)
		document.getElementById('fechaactividades').focus()
	}

	const eliminarTelefono = () => {
		setListaActiva(false)
		document.getElementById('telefono').focus();
		setEmpresa({
			...empresa,
			telefono: ''
		})
	}

	const agregarFechaImportante = () => {
		setListaActivaFechas(true)
		document.getElementById('emailfacturaelectronica').focus()
		conusltarCargos()
	}

	const eliminarFechaImportante = () => {
		setListaActivaFechas(false)
		document.getElementById('fechaimportante').focus();
		setEmpresa({
			...empresa,
			fechaimportante: ''
		})
	}

	const agregarCorreo = () => {
		setListaActivaCorreo(true)
		document.getElementById('social').focus()
	}

	const eliminarCorreo = () => {
		setListaActivaCorreo(false)
		document.getElementById('correo').focus();
		setEmpresa({
			...empresa,
			correo: ''
		})
	}

	const agregarRedes = () => {
		setListaActivaRedes(true)
	}

	const eliminarRedes = () => {
		setListaActivaRedes(false)
		document.getElementById('social').focus();
		setEmpresa({
			...empresa,
			social: ''
		})
	}

	const agregarDireccion = () => {
		setListaActivaTelefono(true)
		setDialogDireccion(false)
	}

	const eliminarDireccion = () => {
		setListaActivaTelefono(false)
		setDialogDireccion(true)
		setEmpresa({
			...empresa,
			direccion1: '',
			direccion2: '',
			departamento: '',
			provincia: '',
			distrito: ''
		})
	}

	const onChangeEmpresa = (e) => {
		setEmpresa({
			...empresa,
			[e.target.name]: e.target.value
		})
	}

	const guardar = () => {
		AuthTokenRequest.post('empresas/nuevo', empresa)
			.then(() => {
				setAviso(true)
			})
	}

	const handleCloseMensaje = () => {
		setAviso(false)
	};

	const agregarCuenta = () => {
		setListaActivaBanco(true)
		document.getElementById('correo').focus()
	}

	const eliminarCuenta = () => {
		setListaActivaBanco(false)
		document.getElementById('banco').focus();
		setEmpresa({
			...empresa,
			banco: '',
			tipo: '',
			cuenta: '',
			sectorista: '',
			telefonoBanco: ''
		})
	}

	const consultarAcciones = () => {
		AuthTokenRequest.post('acciones', { form: 'empresasNuevo' })
			.then(result => {
				dispatch(['empresasInfo', window.location.pathname, guardar, result.data])
			})
	}

	React.useEffect(consultarAcciones, [])


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
													onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('direccion2').focus() } }}
													onChange={onChangeEmpresa}
													type="text"
												/>
											</Grid>
											<Grid item >
												<TextField
													id='direccion2'
													name='direccion2'
													fullWidth
													label="Dirección 2"
													placeholder="Urb ejemplo"
													required
													onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('departamento').focus() } }}
													onChange={onChangeEmpresa}
													type="text"
												/>
											</Grid>
											<Grid item>
												<TextField
													id='pais'
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
													id='departamento'
													name='departamento'
													fullWidth
													label="Departamento"
													placeholder="Lima"
													required
													onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('provincia').focus() } }}
													onChange={onChangeEmpresa}
													type="text"
												/>
											</Grid>
											<Grid item >
												<TextField
													id='provincia'
													name='provincia'
													fullWidth
													label="Provincia"
													placeholder="Lima"
													required
													onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('distrito').focus() } }}
													onChange={onChangeEmpresa}
													type="text"
												/>
											</Grid>
											<Grid item >
												<TextField
													id='distrito'
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
											onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('direccion2').focus() } }}
											onChange={onChangeEmpresa}
											type="text"
										/>
									</Grid>
									<Grid item xs>
										<TextField
											id='direccion2'
											name='direccion2'
											fullWidth
											label="Dirección 2"
											placeholder="Urb ejemplo"
											required
											onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('departamento').focus() } }}
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
											id='departamento'
											name='departamento'
											fullWidth
											label="Departamento"
											placeholder="Lima"
											required
											onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('provincia').focus() } }}
											onChange={onChangeEmpresa}
											type="text"
										/>
									</Grid>
									<Grid item >
										<TextField
											id='provincia'
											name='provincia'
											fullWidth
											label="Provincia"
											placeholder="Lima"
											required
											onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('distrito').focus() } }}
											onChange={onChangeEmpresa}
											type="text"
										/>
									</Grid>
									<Grid item >
										<TextField
											id='distrito'
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
								id='botonAgregarDireccion'
								color="primary"
								onClick={() => agregarDireccion()}
								variant="contained">
								Guardar
                    </Button>
						</DialogActions>
					</Dialog>
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
								value={empresa.ruc || ''}
								margin='normal'
								autoFocus
								fullWidth
								label="RUC"
								disabled={isLoading}
								onChange={onChangeEmpresa}
								onKeyDown={teclaRuc}
								placeholder="Ingrese Ruc"
								helperText='presione enter'
								type="text"
							/>
							{isLoading && <LinearProgress color='secondary' />}
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								name='razonsocial'
								value={empresa.razonsocial || ''}
								className={classes.texto}
								margin='normal'
								onChange={onChangeEmpresa}
								fullWidth
								helperText="Razón social"
								placeholder="Ingrese razón social"
								type="text"
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant="h6"  >
								Dirección
						    </Typography>
						</Grid>
						<Grid item xs={12} sm={1}>
							<Fab id='botonDireccion' color='secondary' size='small' className={classes.texto} aria-label='agregar' onClick={() => setDialogDireccion(true)}>
								<HomeOutlinedIcon />
							</Fab>
						</Grid>
						<Grid item xs={12} sm={11}>
							<List>
								{listaActivaTelefono ?
									<ListItem>
										<ListItemAvatar>
											<DomainIcon color='secondary' />
										</ListItemAvatar>
										<ListItemText primary={`${empresa.direccion1}, ${empresa.direccion2}`} secondary={`${empresa.distrito}, ${empresa.provincia}, ${empresa.pais === 1 ? 'Perú' : 'otro país'}`} />
										<DeleteOutlineOutlinedIcon color='error' onClick={() => eliminarDireccion()} style={{ cursor: 'pointer' }} />
									</ListItem>
									:
									<ListItem>
										<ListItemText primary='No hay direcciones agregadas' />
									</ListItem>
								}
							</List>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
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
						<Grid item xs={12} sm={4}>
							<TextField
								name='telefono'
								id='telefono'
								value={empresa.telefono || ''}
								margin='normal'
								fullWidth
								label="Teléfono"
								onKeyDown={e => { if (e.keyCode === 13) { agregarTelefono() } }}
								onChange={onChangeEmpresa}
								placeholder="Ingrese número de teléfono"
								helperText='presiona Enter'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<List>
								{listaActiva ?
									<ListItem>
										<ListItemAvatar>
											<PhoneAndroidOutlinedIcon color='primary' />
										</ListItemAvatar>
										<ListItemText primary={empresa.telefono} secondary={empresa.ttelefono === 1 ? 'Personal' : empresa.ttelefono === 2 ? 'Trabajo' : empresa.ttelefono === 3 ? 'Trabajo' : ''} />
										<DeleteOutlineOutlinedIcon color='error' onClick={() => eliminarTelefono()} style={{ cursor: 'pointer' }} />
									</ListItem>
									: null}
							</List>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={4}>
							<TextField
								id='fechaactividades'
								name='fechaactividades'
								value={empresa.fechaactividades || ''}
								margin='normal'
								fullWidth
								label="Fecha de inicio de actividades"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('rubro').focus() } }}
								placeholder="Ingrese fecha"
								helperText='ejemplo: 2016'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								id='rubro'
								name='rubro'
								value={empresa.rubro || ''}
								margin='normal'
								fullWidth
								label="Rubro"
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('pproductos').focus() } }}
								onChange={onChangeEmpresa}
								placeholder="Ingrese rubro"
								helperText='ej: logística etc...'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								id='pproductos'
								name='pproductos'
								value={empresa.pproductos || ''}
								margin='normal'
								fullWidth
								label="Principales productos"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('tfechaimportante').focus() } }}
								placeholder="servicios que comercializan"
								helperText='productos que comercializan'
								type="text"
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12}>
							<Typography variant="h6"  >
								Fechas importantes
						    </Typography>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								id='tfechaimportante'
								name='tfechaimportante'
								value={empresa.tfechaimportante || ''}
								margin='normal'
								fullWidth
								label="Tipo fecha"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('fechaimportante').focus() } }}
								placeholder="Ingrese fecha importante"
								helperText='eje: aniversario'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								name='fechaimportante'
								id='fechaimportante'
								value={empresa.fechaimportante || ''}
								margin='normal'
								fullWidth
								label="Fecha importante"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { agregarFechaImportante() } }}
								placeholder="dd/mm/YY"
								helperText='presione Enter'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<List>
								{listaActivaFechas ?
									<ListItem>
										<ListItemAvatar>
											<CakeOutlinedIcon color='primary' />
										</ListItemAvatar>
										<ListItemText primary={empresa.fechaimportante} secondary={empresa.tfechaimportante} />
										<DeleteOutlineOutlinedIcon color='error' onClick={() => eliminarFechaImportante()} style={{ cursor: 'pointer' }} />
									</ListItem>
									: null}
							</List>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Table className={classes.table} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Cargo</TableCell>
										<TableCell align="right">Nombre</TableCell>
										<TableCell align="right">DNI</TableCell>
										<TableCell align="right">Correo</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{cargos.length ?
										cargos.map((contactos, index) => (
											<TableRow key={index}>
												<TableCell component="th">{contactos.cargo}</TableCell>
												<TableCell align="right">{contactos.name}</TableCell>
												<TableCell align="right">{contactos.dni}</TableCell>
												<TableCell align="right">{contactos.correo}</TableCell>
											</TableRow>
										))
										: null}
								</TableBody>
							</Table>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={4}>
							<TextField
								id='emailfacturaelectronica'
								name='emailfacturaelectronica'
								value={empresa.emailfacturaelectronica || ''}
								margin='normal'
								fullWidth
								label="Envío de factura electrónica"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('empleados').focus() } }}
								placeholder="email@ejemplo.com"
								helperText='ingrese un email'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								id='empleados'
								name='empleados'
								value={empresa.empleados || ''}
								margin='normal'
								fullWidth
								label="Cantidad de empleados"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('obreros').focus() } }}
								placeholder="Cantidad"
								helperText='ingrese una cantidad'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								id='obreros'
								name='obreros'
								value={empresa.obreros || ''}
								margin='normal'
								fullWidth
								label="Cantidad de obreros"
								onChange={onChangeEmpresa}
								placeholder="Cantidad"
								helperText='ingrese una cantidad'
								type="text"
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant='h6'>Datos de seguridad</Typography>
						</Grid>
						<Grid item xs={12}>
							<List>
								<ListItem button>
									<ListItemText primary='Cuenta con certificación BASC' />
									<Checkbox
										checked={empresa.basc}
										name='basc'
										onChange={e => { setEmpresa({ ...empresa, [e.target.name]: e.target.checked }) }}
										color='primary'
									/>
								</ListItem>
								<ListItem button>
									<ListItemText primary='Cuenta con alguna certificación de seguridad en la cadena de suministros' />
									<Checkbox
										checked={empresa.cadenasuministros}
										name='cadenasuministros'
										onChange={e => { setEmpresa({ ...empresa, [e.target.name]: e.target.checked }) }}
										color='primary'
									/>
								</ListItem>
								<ListItem button>
									<ListItemText primary='Cuenta con protocolos de seguridad para la manipulación de y despacho de carga' />
									<Checkbox
										checked={empresa.despachocarga}
										name='despachocarga'
										onChange={e => { setEmpresa({ ...empresa, [e.target.name]: e.target.checked }) }}
										color='primary'
									/>
								</ListItem>
								<ListItem button>
									<ListItemText primary='Cuenta con procedimiento de trazabilidad de la carga de exportación e importación' />
									<Checkbox
										checked={empresa.trazabilidad}
										name='trazabilidad'
										onChange={e => { setEmpresa({ ...empresa, [e.target.name]: e.target.checked }) }}
										color='primary'
									/>
								</ListItem>
								<ListItem button>
									<ListItemText primary='Cuenta con personal seleccionado y entrenado en seguridad en la cadena de suministros' />
									<Checkbox
										checked={empresa.personalentrenado}
										name='personalentrenado'
										onChange={e => { setEmpresa({ ...empresa, [e.target.name]: e.target.checked }) }}
										color='primary'
									/>
								</ListItem>
								<ListItem button>
									<ListItemText primary='Desearía que NEW TRANSPORT apoyara con información de seguridad en sus operaciones' />
									<Checkbox
										checked={empresa.apoyoinfo}
										name='apoyoinfo'
										onChange={e => { setEmpresa({ ...empresa, [e.target.name]: e.target.checked }) }}
										color='primary'
									/>
								</ListItem>
							</List>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant='h6'>Datos financieros</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								name='capitalsocial'
								value={empresa.capitalsocial || ''}
								margin='normal'
								fullWidth
								label="Capital social"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('fechadecorte').focus() } }}
								placeholder="capital social"
								helperText='ingrese capital social'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								id='fechadecorte'
								name='fechadecorte'
								value={empresa.fechadecorte || ''}
								margin='normal'
								fullWidth
								label="Fecha de corte"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('activocorriente').focus() } }}
								placeholder="01/01/2020"
								helperText='ingrese una fecha'
								type="text"
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={4}>
							<TextField
								id='activocorriente'
								name='activocorriente'
								value={empresa.activocorriente || ''}
								margin='normal'
								fullWidth
								label="Activo corriente"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('activototal').focus() } }}
								placeholder="activo corriente"
								helperText='ingrese el activo corriente'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								id='activototal'
								name='activototal'
								value={empresa.activototal || ''}
								margin='normal'
								fullWidth
								label="Activo total"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('pasivocorriente').focus() } }}
								placeholder="activo total"
								helperText='ingrese el activo total'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								id='pasivocorriente'
								name='pasivocorriente'
								value={empresa.pasivocorriente || ''}
								margin='normal'
								fullWidth
								label="Pasivo corriente"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('patrimonio').focus() } }}
								placeholder="pasivo corriente"
								helperText='ingrese el pasivo corriente'
								type="text"
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={4}>
							<TextField
								id='patrimonio'
								name='patrimonio'
								value={empresa.patrimonio || ''}
								margin='normal'
								fullWidth
								label="Patrimonio"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('ventas').focus() } }}
								placeholder="patrimonio"
								helperText='ingrese el patrimonio'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								id='ventas'
								name='ventas'
								value={empresa.ventas || ''}
								margin='normal'
								fullWidth
								label="Ventas"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('resultadoneto').focus() } }}
								placeholder="ventas"
								helperText='ingrese las ventas'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								id='resultadoneto'
								name='resultadoneto'
								value={empresa.resultadoneto || ''}
								margin='normal'
								fullWidth
								label="Resultado neto"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('formadepago').focus() } }}
								placeholder="resultado neto"
								helperText='ingrese el resultado neto'
								type="text"
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={3}>
							<TextField
								id='formadepago'
								name='formadepago'
								value={empresa.formadepago || ''}
								margin='normal'
								fullWidth
								label="Forma de pago"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('garantia').focus() } }}
								placeholder="forma de pago"
								helperText='ingrese la forma de pago'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								id='garantia'
								name='garantia'
								value={empresa.garantia || ''}
								margin='normal'
								fullWidth
								label="Garantía"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('credito').focus() } }}
								placeholder="garantía"
								helperText='ingrese la garantía'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								id='credito'
								name='credito'
								value={empresa.credito || ''}
								margin='normal'
								fullWidth
								label="Crédito"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('montopromedio').focus() } }}
								placeholder="crédito"
								helperText='ingrese plazo en días'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								id='montopromedio'
								name='montopromedio'
								value={empresa.montopromedio || ''}
								margin='normal'
								fullWidth
								label="Monto promedio"
								onChange={onChangeEmpresa}
								placeholder="embarque mensual"
								helperText='ingrese embarques mensuales'
								type="text"
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant='h6'>Referencias bancarias</Typography>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								id='banco'
								name='banco'
								value={empresa.banco || ''}
								margin='normal'
								fullWidth
								label="Banco"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('tipo').focus() } }}
								placeholder="Banco"
								helperText='ej: BCP'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField
								id='tipo'
								name='tipo'
								value={empresa.tipo || ''}
								margin='normal'
								fullWidth
								label="Tipo"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('cuenta').focus() } }}
								placeholder="Tipo de cuenta"
								helperText='tipo de cta'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								id='cuenta'
								name='cuenta'
								value={empresa.cuenta || ''}
								margin='normal'
								fullWidth
								label="Cuenta"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('sectorista').focus() } }}
								placeholder="N° de cuenta"
								helperText='n° de cta'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField
								id='sectorista'
								name='sectorista'
								value={empresa.sectorista || ''}
								margin='normal'
								fullWidth
								label="Sectorista"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { document.getElementById('telefonoBanco').focus() } }}
								placeholder="Sectorista"
								helperText='sectorista'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={2}>
							<TextField
								id='telefonoBanco'
								name='telefonoBanco'
								value={empresa.telefonoBanco || ''}
								margin='normal'
								fullWidth
								label="Telefono"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { agregarCuenta() } }}
								placeholder="Telefono"
								helperText='telefono'
								type="text"
							/>
						</Grid>
						<Grid item xs={12}>
							<List>
								{listaActivaBanco ?
									<ListItem>
										<ListItemAvatar>
											<HomeOutlinedIcon color='primary' />
										</ListItemAvatar>
										<ListItemText primary={`${empresa.banco} - ${empresa.cuenta}`} secondary={empresa.tipo} />
										<DeleteOutlineOutlinedIcon color='error' onClick={() => eliminarCuenta()} style={{ cursor: 'pointer' }} />
									</ListItem>
									: null}
							</List>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
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
						<Grid item xs={12} sm={4}>
							<TextField
								name='correo'
								id='correo'
								value={empresa.correo || ''}
								margin='normal'
								fullWidth
								label="Correo"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { agregarCorreo() } }}
								placeholder="Ingrese dirección de correo"
								helperText='presiona Enter'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<List>
								{listaActivaCorreo ?
									<ListItem button onClick={() => eliminarCorreo()}>
										<ListItemText primary={empresa.correo} secondary={empresa.tcorreo === 1 ? 'Personal' : empresa.tcorreo === 2 ? 'Trabajo' : ''} />
									</ListItem>
									: null}
							</List>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
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
						<Grid item xs={12} sm={4}>
							<TextField
								name='social'
								id='social'
								value={empresa.social || ''}
								margin='normal'
								fullWidth
								label="Red social"
								onChange={onChangeEmpresa}
								onKeyDown={e => { if (e.keyCode === 13) { agregarRedes() } }}
								placeholder="Ingrese red social"
								helperText='Red social'
								type="text"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<List>
								{listaActivaRedes ?
									<ListItem button onClick={() => eliminarRedes()}>
										<ListItemText primary={empresa.social} secondary={empresa.tsocial === 1 ? 'Facebook' : empresa.tsocial === 2 ? 'Instagram' : empresa.tsocial === 3 ? 'Twitter' : empresa.tsocial === 4 ? 'LinkedIn' : empresa.tsocial === 5 ? 'YouTube' : ''} />
									</ListItem>
									: null}
							</List>
						</Grid>
					</Grid>
				</Paper>
			</main>
		</React.Fragment>
	);
}