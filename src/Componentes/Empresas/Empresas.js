import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Redirect } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import AddIcon from '@material-ui/icons/Add';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import Backdrop from '@material-ui/core/Backdrop';
import MenuIcon from '@material-ui/icons/Menu';
import DomainIcon from '@material-ui/icons/Domain';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(10)
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

const clientes = [
	{ id: 0, nombre: 'New Transport S.A.', empresa: 'Perù' },
	{ id: 1, nombre: 'GNT S.A.', empresa: 'Perù' },
	{ id: 2, nombre: 'Nintendo', empresa: 'Japòn' },
	{ id: 3, nombre: 'FIAT', empresa: 'Estados Unidos' },
	{ id: 4, nombre: 'General Electric', empresa: 'Perù' },
	{ id: 5, nombre: 'Polar', empresa: 'Venezuela' },
	{ id: 6, nombre: 'Sony', empresa: 'Estados Unidos' },
	{ id: 7, nombre: 'Marvel', empresa: 'Estados Unidos' },
	{ id: 8, nombre: 'Disney', empresa: 'Estados Unidos' },
	{ id: 9, nombre: 'Honda', empresa: 'Japòn' },
	{ id: 10, nombre: 'Kawasaki', empresa: 'Japòn' }
]

const actions = [
	{ name: 'Nuevo' }
]

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});


export default function Clientes() {
	const [open, setOpen] = React.useState(false)
	const [nuevo, setNuevo] = React.useState(false)
	const [openDialog, setOpenDialog] = React.useState(false)
	const classes = useStyles()

	const handleOpen = () => {
		setOpen(true);
	};

	const handleCloseButton = () => {
		setOpen(false);
	};

	if (nuevo === true) {
		return (<Redirect to='/empresas/nuevo' />)
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<Backdrop open={open} className={classes.back} />
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
				<DialogTitle id="alert-dialog-slide-title">{"¿Seguro que deseas eliminar?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Una vez eliminada se perderá toda la información de esta empresa.
          			</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpenDialog(false)} color="secondary">
						Cancelar
          			</Button>
					<Button variant='contained' onClick={() => setOpenDialog(false)} color="secondary">
						Confirmar
          			</Button>
				</DialogActions>
			</Dialog>
			<Fade in={true} timeout={1000}>
				<Paper elevation={4} className={classes.root}>
					<List>
						{clientes.map((client, index) => (
							<ListItem key={index} button divider={true}>
								<ListItemAvatar>
									<Avatar className={classes.avatar}>
										<DomainIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={client.nombre} secondary={client.empresa} />
								<IconButton aria-label="información" onClick={() => alert('ver Empresa')}>
									<FindInPageOutlinedIcon color='primary' />
								</IconButton>
								<IconButton aria-label="editar" onClick={() => alert('editar empresa ' + client.id)}>
									<EditOutlinedIcon color='primary' />
								</IconButton>
								<IconButton aria-label="eliminar" onClick={() => setOpenDialog(true)}>
									<DeleteOutlineOutlinedIcon color='error' />
								</IconButton>
							</ListItem>
						))}
					</List>
				</Paper>
			</Fade>
		</React.Fragment>
	);
}