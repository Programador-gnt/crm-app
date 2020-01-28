import React from 'react';
import { Grid, CssBaseline, ListItemText, ListItem, List, ListItemAvatar, Avatar, Fade, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Slide, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import DomainIcon from '@material-ui/icons/Domain';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import { AuthTokenRequest } from '../helpers/AxiosInstance';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(8),
		paddingLeft: theme.spacing(4)
	},
	avatar: {
		backgroundColor: theme.palette.secondary.main
	},
	speedDial: {
		position: 'fixed',
		bottom: theme.spacing(7),
		right: theme.spacing(2),
	}
}));


const actions = [
	{ name: 'Nuevo' }
]

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});


export default function Clientes() {
	const history = useHistory()
	const [open, setOpen] = React.useState(true)
	const [openDialog, setOpenDialog] = React.useState(false)
	const [empresas, setEmpresas] = React.useState([])
	const [id, setId] = React.useState(null)
	const [razonSocial, setRazonSocial] = React.useState(null)
	const classes = useStyles()

	const consultarEmpresas = () => {
		AuthTokenRequest.get('empresas')
			.then(result => {
				setEmpresas(result.data)
			})

	}

	const MensajeEliminar = (ID, RAZONSOCIAL) => {
		setId(ID)
		setRazonSocial(RAZONSOCIAL)
		setOpenDialog(true)
	}

	const eliminar = () => {
		AuthTokenRequest.get('empresas/eliminar', {
			params: {
				id_empresas: id
			}
		})
			.then(() => {
				setOpenDialog(false)
				consultarEmpresas()
			})
	}

	const preventActionClickClose = (evt, action) => {
		evt.preventDefault()
		evt.stopPropagation()
		if (action.name === 'Nuevo') {
			history.push('/empresas/nuevo')
		}
	}

	React.useEffect(consultarEmpresas, [])

	return (
		<React.Fragment>
			<CssBaseline />
			<SpeedDial
				ariaLabel="Speedial"
				className={classes.speedDial}
				icon={<SpeedDialIcon />}
				onClick={() => setOpen(!open)}
				open={open}>

				{actions.map(action => (
					<SpeedDialAction
						tooltipOpen
						key={action.name}
						icon={action.name === 'Nuevo' ? <AddIcon /> : ''}
						tooltipTitle={action.name}
						onClick={evt => preventActionClickClose(evt, action)}
					/>
				))}
			</SpeedDial>
			<Dialog
				open={openDialog}
				TransitionComponent={Transition}
				keepMounted
				onClose={() => setOpenDialog(false)}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">{`¿Seguro que deseas eliminar a ${razonSocial}?`}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Una vez eliminada se perderá toda la información de esta empresa.
          			</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpenDialog(false)} color="secondary">
						Cancelar
          			</Button>
					<Button variant='contained' onClick={() => eliminar()} color="secondary">
						Confirmar
          			</Button>
				</DialogActions>
			</Dialog>
			<Fade in={true} timeout={1000}>
				<Grid className={classes.root}>
					<Grid item xs={12}>
						<List>
							{empresas.length ?
								empresas.map((empr, index) => (
									<ListItem key={index} button divider={true}>
										<ListItemAvatar>
											<Avatar className={classes.avatar}>
												<DomainIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary={empr.razonsocial} secondary={empr.pais === '1' ? 'Perú' : empr.pais === '2' ? 'Estados Unídos' : empr.pais === '3' ? 'Italia' : ''} />
										<Link to={`/empresas/info?id=${empr.id_empresas}`}><IconButton aria-label="información">
											<FindInPageOutlinedIcon color='primary' />
										</IconButton></Link>
										<IconButton aria-label="editar" onClick={() => alert('editar empresa ' + empr.id_empresas)}>
											<EditOutlinedIcon color='primary' />
										</IconButton>
										<IconButton aria-label="eliminar" onClick={() => MensajeEliminar(empr.id_empresas, empr.razonsocial)}>
											<DeleteOutlineOutlinedIcon color='error' />
										</IconButton>
									</ListItem>
								)) :
								<ListItem>
									<ListItemText primary='No hay Empresas agregadas' />
								</ListItem>
							}
						</List>
					</Grid>
				</Grid>
			</Fade>
		</React.Fragment>
	);
}