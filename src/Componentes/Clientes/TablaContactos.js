import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Paper,
	Slide,
	Backdrop,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import MaterialTable from 'material-table';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 750,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
	back: {
		transform: 'translateZ(0px)',
		position: 'fixed',
		zIndex: 100
	}
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} timeout={500} />;
});

export default function TablaContactos(data) {
	const [openDialog, setOpenDialog] = React.useState(false)
	const [id, setId] = React.useState(null)
	const [nombre, setNombre] = React.useState(null)
	const history = useHistory()
	const classes = useStyles();
	const rows = data.contactos;

	const MensajeEliminar = (ID, NOMBRE) => {
		setId(ID)
		setNombre(NOMBRE)
		setOpenDialog(true)
	}

	const eliminar = () => {
		console.log(id)
		setOpenDialog(false)
	}

	return (
		<div className={classes.root}>
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
			<Paper className={classes.paper}>
				<MaterialTable
					title=''
					columns={[
						{ title: 'Name', field: 'name' },
						{ title: 'Empresa', field: 'empresa' },
						{ title: 'Teléfono', field: 'telefono', type: 'numeric' },
						{ title: 'Correo', field: 'correo' },
					]}
					data={rows}
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
			</Paper>
		</div>
	);
}