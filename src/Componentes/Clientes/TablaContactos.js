import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Slide,
	Backdrop,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
	Card,
	CardContent,
	Typography,
	Avatar,
	Grid,
	Tooltip,
	IconButton,
	CardHeader,
	Zoom,
	Menu,
	MenuItem,
	TextField
} from '@material-ui/core';
import MaterialTable from 'material-table';
import { AuthTokenRequest } from '../helpers/AxiosInstance';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ContactosContext from './contactosContext';
import AppInteractionContext from '../helpers/appInteraction'

const useStyles = makeStyles((theme) => ({
	back: {
		transform: 'translateZ(0px)',
		position: 'fixed',
		zIndex: 100
	},
	avatar: {
		backgroundColor: theme.palette.primary.main,
		width: 130,
		height: 130,
		margin: 'auto'
	},
	texto: {
		textAlign: 'center',
		marginTop: theme.spacing(1)
	},
	card: {
		width: '95%',
		transition: 'all .2s ease-in-out',
		'&:hover': {
			transform: 'scale(1.02)'
		}
	},
	typography: {
		padding: theme.spacing(2),
	}
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} timeout={500} />;
});

export default function TablaContactos() {
	const { interactions, dispatch } = React.useContext(AppInteractionContext)
	const { contactos, dispatchContactos } = React.useContext(ContactosContext)
	const [openDialog, setOpenDialog] = React.useState(false)
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const classes = useStyles();

	const usuarios = () => {
		AuthTokenRequest.get('contactos')
			.then(result => {
				dispatchContactos(['consultar', result.data])
			})
	}

	const eliminar = () => {
		AuthTokenRequest.get('contactos/eliminar', {
			params: {
				id_usuarios: contactos.id_eliminar
			}
		}).then(() => {
			setOpenDialog(false)
			usuarios()
		})
	}

	const consultarAcciones = () => {
		AuthTokenRequest.post('acciones', { form: 'listaContactos' })
			.then(result => {
				dispatch(['listaContactos', '/contactos', 'funcion', interactions.formContent.funcionSecundaria, result.data])
			})
	}

	React.useEffect(consultarAcciones, [])
	React.useEffect(usuarios, [])

	return (
		<>
			<Backdrop open={openDialog} className={classes.back} />
			<Dialog
				open={openDialog} TransitionComponent={Transition} keepMounted onClose={() => setOpenDialog(false)} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
				<DialogTitle id="alert-dialog-slide-title">{`¿Seguro que deseas eliminar a ${contactos.nombreEliminar}?`}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Una vez eliminado se perderá toda la información de este contacto.
          			</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpenDialog(false)} color="secondary">
						Cancelar
          			</Button>
					<Button variant='contained' onClick={() => eliminar()} color="primary">
						Confirmar
          			</Button>
				</DialogActions>
			</Dialog>
			{interactions.formContent.funcionSecundaria ?
				<Grid container spacing={2}>
					{contactos.contactos.map((info, index) => (
						<Zoom key={index} in={true} timeout={500}>
							<Grid key={index} item xs={12} sm={4}>
								<Card className={classes.card} raised={true}>
									<CardHeader
										action={
											<>
												<Tooltip title='Editar'>
													<IconButton onClick={() => {
														dispatch(['contactosInfo', `/contactos/info`, 'funcion', interactions.formContent.funcionSecundaria, interactions.acciones])
														dispatchContactos(['abrirInfo', { id_usuarios: info.id_usuarios }])
													}}>
														<EditOutlinedIcon />
													</IconButton>
												</Tooltip>
												<Tooltip title='Eliminar'>
													<IconButton onClick={() => {
														setOpenDialog(true)
														dispatchContactos(['eliminarContacto', { id_eliminar: info.id_usuarios, nombreEliminar: info.name }])
													}}>
														<DeleteOutlineOutlinedIcon color='secondary' />
													</IconButton>
												</Tooltip>
											</>
										} />
									<CardContent>
										<Avatar className={classes.avatar} variant="square" src={info.avatar} />
										<Typography variant="h5" className={classes.texto} color='secondary'>
											{info.name}
										</Typography>
										<Typography variant="body1" className={classes.texto} color='textSecondary'>
											{info.correo}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						</Zoom>
					))}
				</Grid>
				:
				<>
					<Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
						keepMounted
						transformOrigin={{ vertical: 'top', horizontal: 'right' }}
						open={open}
						onClose={() => setAnchorEl(null)}>
						<MenuItem>
							<Grid container spacing={1}>
								<Grid item xs={12} sm={6}>
									<TextField
										name='name'
										value={contactos.contactos.name || ''}
										margin='normal'
										autoFocus
										fullWidth
										label='Name'
										type="text"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										name='empresa'
										value={contactos.contactos.empresa || ''}
										margin='normal'
										fullWidth
										label='Empresa'
										type="text"
									/>
								</Grid>
							</Grid>
						</MenuItem>
						<MenuItem>
							<Grid container spacing={1}>
								<Grid item xs={12} sm={6}>
									<TextField
										name='telefono'
										value={contactos.contactos.telefono || ''}
										margin='normal'
										fullWidth
										label='Teléfono'
										type="text"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										name='correo'
										value={contactos.contactos.correo || ''}
										margin='normal'
										fullWidth
										label='Correo'
										type="text"
									/>
								</Grid>
							</Grid>
						</MenuItem>
						<MenuItem>
							<Grid container spacing={1}>
								<Grid item xs={12}>
									<TextField
										name='cargo'
										value={contactos.contactos.cargo || ''}
										margin='normal'
										autoFocus
										fullWidth
										label='Cargo'
										type="text"
									/>
								</Grid>
							</Grid>
						</MenuItem>
					</Menu>
					<MaterialTable
						title='Lista de contactos'
						columns={[
							{ title: 'Name', field: 'name' },
							{ title: 'Empresa', field: 'empresa' },
							{ title: 'Teléfono', field: 'telefono', type: 'numeric' },
							{ title: 'Correo', field: 'correo' },
						]}
						data={contactos.contactos}
						actions={[
							{
								icon: 'search',
								tooltip: 'Ver',
								onClick: (event, rowData) => {
									dispatch(['contactosInfo', `/contactos/info`, 'funcion', interactions.formContent.funcionSecundaria, interactions.acciones])
									dispatchContactos(['abrirInfo', { id_usuarios: rowData.id_usuarios }])
								}
							},
							{
								icon: 'delete',
								tooltip: 'Eliminar',
								onClick: (event, rowData) => {
									setOpenDialog(true)
									dispatchContactos(['eliminarContacto', { id_eliminar: rowData.id_usuarios, nombreEliminar: rowData.name }])
								}
							},
							{
								icon: 'refresh',
								tooltip: 'Actualizar',
								isFreeAction: true,
								onClick: () => { usuarios() }
							},
							{
								icon: 'filter_list',
								tooltip: 'Filtrar',
								isFreeAction: true,
								onClick: (event) => {
									setAnchorEl(event.currentTarget);
								}
							}
						]}
						localization={{
							pagination: {
								labelDisplayedRows: '{from}-{to} de {count}'
							},
							toolbar: {
								nRowsSelected: '{0} fila(s) seleccionadas'
							},
							header: {
								actions: 'Actions'
							},
							body: {
								emptyDataSourceMessage: 'No hay nada para mostrar',
								filterRow: {
									filterTooltip: 'Filter'
								}
							}
						}}
						options={{
							search: false
						}}
					/>
				</>}
		</>
	);
}