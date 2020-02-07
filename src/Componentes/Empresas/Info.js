import React from 'react';
import { CssBaseline, Grid, Card, CardContent, CardActions, Avatar, Typography, IconButton, Tooltip, Paper, Button, TextField, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { AuthTokenRequest } from '../helpers/AxiosInstance';
import { useHistory } from 'react-router-dom';

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

const actions = [
	{ name: 'Volver' }
];

export default function Info() {
	const history = useHistory()
	const [open, setOpen] = React.useState(window.screen.width < 769 ? false : true)
	const [infor, setInfor] = React.useState({})
	const [letra, setLetra] = React.useState(null)
	const [editar, setEditar] = React.useState(true)
	const [isLoading, setIsLoading] = React.useState(false)
	const id = window.location.search.split('=')[1]
	const classes = useStyles()

	const info = () => {
		AuthTokenRequest.get('empresas/info', {
			params: {
				id_empresas: id
			}
		})
			.then(result => {
				setInfor(result.data)
				setLetra(result.data.razonsocial.substr(0, 1))
			})
	}

	const preventActionClickClose = (evt, action) => {
		evt.preventDefault()
		evt.stopPropagation()
		if (action.name === 'Volver') {
			history.push('/empresas')
		}
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
			<Grid container className={classes.root} spacing={2}>
				<Grid item xs={12} sm={4}>
					<Card className={classes.card} raised={true}>
						<CardContent>
							<Avatar className={classes.avatar}><Typography variant='h1'>{letra}</Typography></Avatar>
							<Typography variant="h5" className={classes.texto} color='secondary'>
								{infor.razonsocial}
							</Typography>
							<Typography variant="body1" className={classes.texto} color='textPrimary'>
								{infor.correo}
							</Typography>
							<Typography variant="body1" className={classes.texto} color='textSecondary'>
								{infor.social}
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
									value={infor.razonsocial || ''}
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
									value={infor.ruc || ''}
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
									value={infor.social || ''}
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
									value={infor.telefono || ''}
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
									name='pais'
									value={infor.pais === '1' ? 'Perú' : 'Venezuela' || ''}
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
		</React.Fragment>
	);
}