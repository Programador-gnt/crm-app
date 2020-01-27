import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect, Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import MenuIcon from '@material-ui/icons/Menu';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import {
	IconButton,
	Grid,
	CssBaseline,
	ListItemText,
	ListItem,
	List,
	ListItemAvatar,
	Avatar,
	Fade,
	Backdrop,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
	Button
} from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import consumeWSChat from '../Config/WebServiceChat';

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
	},
	back: {
		transform: 'translateZ(0px)',
		position: 'fixed',
		zIndex: 100
	},
}));

const actions = [
	{ name: 'Nuevo' }
]

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} timeout={500} />;
});

export default function Clientes() {
	const [open, setOpen] = React.useState(false)
	const [nuevo, setNuevo] = React.useState(false)
	const [openDialog, setOpenDialog] = React.useState(false);
	const [clientes, setClientes] = React.useState([])
	const [id, setId] = React.useState(null)
	const [nombre, setNombre] = React.useState(null)
	const classes = useStyles()

	const handleOpen = () => {
		setOpen(true);
	};

	const handleCloseButton = () => {
		setOpen(false);
	};

	const usuarios = () => {
		consumeWSChat('GET', 'contactos', '', '')
			.then(result => {
				setClientes(result)
			})
	}

	const MensajeEliminar = (ID, NOMBRE) => {
		setId(ID)
		console.log(id)
		setNombre(NOMBRE)
		setOpenDialog(true)
	}

	React.useEffect(usuarios, [])

	if (nuevo === true) {
		return (<Redirect to='/clientes/nuevo' />)
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<Backdrop open={open} className={classes.back} />
			<Backdrop open={openDialog} className={classes.back} />
			<SpeedDial
				ariaLabel="Speedial"
				className={classes.speedDial}
				icon={<MenuIcon />}
				onClose={handleCloseButton}
				onOpen={handleOpen}
				open={open}>

				{actions.map(action => (
					<SpeedDialAction
						key={action.name}
						icon={action.name === 'Nuevo' ? <AddIcon /> : ''}
						tooltipTitle={action.name}
						onClick={action.name === 'Nuevo' ? () => setNuevo(true) : ''}
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
					<Button variant='contained' onClick={() => setOpenDialog(false)} color="primary">
						Confirmar
          			</Button>
				</DialogActions>
			</Dialog>
			<Fade in={true} timeout={1000}>
				<Grid container spacing={1} className={classes.root}>
					<Grid item xs={12}>
						<List>
							{clientes.map((client, index) => (
								<ListItem key={index} button divider={true}>
									<ListItemAvatar>
										<Avatar className={classes.avatar} src={client.avatar} />
									</ListItemAvatar>
									<ListItemText primary={client.name} secondary={client.empresa} />
									<Link to={`/clientes/info?id=${client.id_usuarios}`}><IconButton aria-label="información">
										<FindInPageOutlinedIcon color='primary' />
									</IconButton></Link>
									<IconButton aria-label="editar" onClick={() => alert('editar contacto ' + client.id_usuarios)}>
										<EditOutlinedIcon color='primary' />
									</IconButton>
									<IconButton aria-label="eliminar" onClick={() => MensajeEliminar(client.id_usuarios, client.name)}>
										<DeleteOutlineOutlinedIcon color='error' />
									</IconButton>
								</ListItem>
							))}
						</List>
					</Grid>
				</Grid>
			</Fade>
		</React.Fragment>
	);
}