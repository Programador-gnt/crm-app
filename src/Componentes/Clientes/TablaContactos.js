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
	CardActions,
	Tooltip,
	IconButton
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
		width: '95%'
	}
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} timeout={500} />;
});

export default function TablaContactos() {
	const [openDialog, setOpenDialog] = React.useState(false)
	const [id, setId] = React.useState(null)
	const [nombre, setNombre] = React.useState(null)
	const [clientes, setClientes] = React.useState([])
	const [tarjetas, setTarjetas] = React.useState(false)
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
			{tarjetas ?
				<Grid container spacing={2}>
					{clientes.map((info, index) => (
						<Zoom key={index} in={true} timeout={500}>
							<Grid key={index} item xs={12} sm={4}>
								<Card className={classes.card} raised={true}>
									<CardContent>
										<Avatar className={classes.avatar} src={info.avatar} />
										<Typography variant="h5" className={classes.texto} color='secondary'>
											{info.name}
										</Typography>
										<Typography variant="body1" className={classes.texto} color='textSecondary'>
											{info.correo}
										</Typography>
									</CardContent>
									<CardActions disableSpacing>
										<Tooltip title='Editar'>
											<IconButton>
												<EditOutlinedIcon color='primary' />
											</IconButton>
										</Tooltip>
										<Tooltip title='Eliminar'>
											<IconButton>
												<DeleteOutlineOutlinedIcon color='primary' />
											</IconButton>
										</Tooltip>
									</CardActions>
								</Card>
							</Grid>
						</Zoom>
					))}
				</Grid>
				:
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
							icon: 'widgets',
							tooltip: 'Cards',
							isFreeAction: true,
							onClick: () => setTarjetas(true)
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
				/>}
		</>
	);
}