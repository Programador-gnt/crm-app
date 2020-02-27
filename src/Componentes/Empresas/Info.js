import React from 'react';
import { CssBaseline, Grid, Card, CardContent, CardActions, Avatar, Zoom, Typography, IconButton, Tooltip, Paper, Button, TextField, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AppInteractionContext from '../helpers/appInteraction';
import { AuthTokenRequest } from '../helpers/AxiosInstance';
import EmpresasContext from './empresasContext'

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
	const { interactions, dispatch } = React.useContext(AppInteractionContext)
	const { empresas, dispatchEmpresas } = React.useContext(EmpresasContext)
	const [letra, setLetra] = React.useState(null)
	const [editar, setEditar] = React.useState(true)
	const [isLoading, setIsLoading] = React.useState(false)
	const classes = useStyles()

	const info = () => {
		AuthTokenRequest.get('empresas/info', {
			params: {
				id_empresas: empresas.id_empresas
			}
		})
			.then(result => {
				dispatchEmpresas(['consultarInfo', result.data])
				setLetra(result.data.razonsocial.substr(0, 1))
			})
	}

	const guardar = () => {
		if (!isLoading) {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false)
				setEditar(true)
			}, 3000)
		}
	}

	const consultarAcciones = () => {
		AuthTokenRequest.post('acciones', { form: 'empresasInfo' })
			.then(result => {
				dispatch(['empresasInfo', '/empresas/info', 'función', interactions.formContent.funcionSecundaria, result.data])
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
								<Avatar className={classes.avatar}><Typography variant='h1'>{letra}</Typography></Avatar>
								<Typography variant="h5" className={classes.texto} color='secondary'>
									{empresas.informacion.razonsocial}
								</Typography>
								<Typography variant="body1" className={classes.texto} color='textPrimary'>
									{empresas.informacion.correo}
								</Typography>
								<Typography variant="body1" className={classes.texto} color='textSecondary'>
									{empresas.informacion.social}
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
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
										Perfil de empresa
						    	</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										name='razonsocial'
										value={empresas.informacion.razonsocial || ''}
										disabled={editar}
										margin='normal'
										autoFocus
										fullWidth
										helperText='razón social'
										type="text"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										name='ruc'
										value={empresas.informacion.ruc || ''}
										disabled={editar}
										margin='normal'
										fullWidth
										helperText='ruc'
										type="text"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										name='social'
										value={empresas.informacion.social || ''}
										disabled={editar}
										margin='normal'
										fullWidth
										helperText='Redes sociales'
										type="text"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										name='telefono'
										value={empresas.informacion.telefono || ''}
										disabled={editar}
										margin='normal'
										fullWidth
										helperText='Teléfono'
										type="text"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										name='correo'
										value={empresas.informacion.correo || ''}
										disabled={editar}
										margin='normal'
										fullWidth
										helperText='Correo'
										type="text"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										name='pais'
										value={empresas.informacion.pais === '1' ? 'Perú' : 'Venezuela' || ''}
										disabled={editar}
										margin='normal'
										fullWidth
										helperText='País'
										type="text"
									/>
								</Grid>
								<Grid item xs={12}>
									{isLoading && <LinearProgress color='secondary' />}
								</Grid>
								<Grid item xs={12} className={classes.buttons}>
									<Button color='secondary' className={classes.button} disabled={editar} onClick={() => setEditar(true)}>Cancelar</Button>
									<Button variant='contained' color='primary' className={classes.button} disabled={editar} onClick={() => guardar()}>Guardar</Button>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</Zoom>
		</React.Fragment>
	);
}