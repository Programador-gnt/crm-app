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
	Button
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import MaterialTable from 'material-table';
import { AuthTokenRequest } from '../helpers/AxiosInstance';

const useStyles = makeStyles(() => ({
	back: {
		transform: 'translateZ(0px)',
		position: 'fixed',
		zIndex: 100
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
						icon: 'edit',
						tooltip: 'Editar',
						onClick: (event, rowData) => alert(rowData.id_usuarios)
					},
					{
						icon: 'delete',
						tooltip: 'Eliminar',
						onClick: (event, rowData) => MensajeEliminar(rowData.id_usuarios, rowData.name)
					},
					{
						icon: 'filter_list',
						tooltip: 'Filtrar datos',
						isFreeAction: true,
						onClick: () => alert('filtrar')
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
		</>
	);
}