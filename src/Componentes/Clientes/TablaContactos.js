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
	Zoom,
	Tooltip,
	IconButton,
	CardHeader,
	Popover
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import MaterialTable from 'material-table';
import { AuthTokenRequest } from '../helpers/AxiosInstance';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

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

export default function TablaContactos(props) {
	const [openDialog, setOpenDialog] = React.useState(false)
	const [id, setId] = React.useState(null)
	const [nombre, setNombre] = React.useState(null)
	const [clientes, setClientes] = React.useState([])
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const history = useHistory()
	const classes = useStyles();

	const usuarios = () => {
		AuthTokenRequest.get('contactos')
			.then(result => {
				setClientes(result.data)
			})
	}

	const MensajeEliminar = (ID, NOMBRE) => {
		setId(ID)
		setNombre(NOMBRE)
		setOpenDialog(true)
	}

	const eliminar = () => {
		AuthTokenRequest.get('contactos/eliminar', {
			params: {
				id_usuarios: id
			}
		}).then(() => {
			setOpenDialog(false)
			usuarios()
		})
	}

	const handleClose = () => {
		setAnchorEl(null);
	};

	React.useEffect(usuarios, [])

	return (
		<>
			<Backdrop open={openDialog} className={classes.back} />
			<Dialog
				open={openDialog}
				TransitionComponent={Transition}
				keepMounted
				onClose={() => setOpenDialog(false)}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">{`¿Seguro que deseas eliminar a ${nombre}?`}</DialogTitle>
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
			{props.tarjeta ?
				<Grid container spacing={2}>
					{clientes.map((info, index) => (
						<Zoom key={index} in={true} timeout={500}>
							<Grid key={index} item xs={12} sm={4}>
								<Card className={classes.card} raised={true}>
									<CardHeader
										action={
											<>
												<Tooltip title='Editar'>
													<IconButton onClick={() => history.push(`/contactos/info?id=${info.id_usuarios}`)}>
														<EditOutlinedIcon />
													</IconButton>
												</Tooltip>
												<Tooltip title='Eliminar'>
													<IconButton onClick={() => MensajeEliminar(info.id_usuarios, info.name)}>
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
					<Popover
						open={open}
						anchorEl={anchorEl}
						onClose={handleClose}
						anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
						transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
						<Typography className={classes.typography}>Contenido del filtro</Typography>
					</Popover>
					<MaterialTable
						title='Lista de contactos'
						columns={[
							{ title: 'Name', field: 'name' },
							{ title: 'Empresa', field: 'empresa' },
							{ title: 'Teléfono', field: 'telefono', type: 'numeric' },
							{ title: 'Correo', field: 'correo' },
						]}
						data={clientes}
						actions={[
							{
								icon: 'search',
								tooltip: 'Ver',
								onClick: (event, rowData) => history.push(`/contactos/info?id=${rowData.id_usuarios}`)
							},
							{
								icon: 'delete',
								tooltip: 'Eliminar',
								onClick: (event, rowData) => MensajeEliminar(rowData.id_usuarios, rowData.name)
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