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
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import Backdrop from '@material-ui/core/Backdrop';
import MenuIcon from '@material-ui/icons/Menu';

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
	{ nombre: 'Bruno Zumaeta', empresa: 'New Transport S.A.' },
	{ nombre: 'Juan Lizama', empresa: 'GNT S.A.' },
	{ nombre: 'Alexander Rodríguez', empresa: 'GNT S.A.' },
	{ nombre: 'Wilder Lizama', empresa: 'GNT S.A.' },
	{ nombre: 'Carol Cajal', empresa: 'GNT S.A.' },
	{ nombre: 'Jorge Sevillano', empresa: 'GNT S.A.' },
	{ nombre: 'Aquaman', empresa: 'Super amigos' },
	{ nombre: 'Superman', empresa: 'Super amigos' },
	{ nombre: 'Spiderman', empresa: 'Avengers' },
	{ nombre: 'Capitan américa', empresa: 'Avengers' },
	{ nombre: 'Luigi', empresa: 'Nintendo' }
]

const actions = [
	{ name: 'Nuevo' }
]

export default function Clientes() {
	const [usuario, setUsuario] = React.useState(false)
	const [open, setOpen] = React.useState(false)
	const [nuevo, setNuevo] = React.useState(false)
	const classes = useStyles()

	const handleOpen = () => {
		setOpen(true);
	};

	const handleCloseButton = () => {
		setOpen(false);
	};

	if (usuario === true) {
		return (<Redirect to='/clientes/info' />)
	}

	if (nuevo === true) {
		return (<Redirect to='/clientes/nuevo' />)
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
			<Fade in={true} timeout={1000}>
				<Paper elevation={4} className={classes.root}>
					<List>
						{clientes.map((client, index) => (
							<ListItem key={index} button onClick={() => setUsuario(true)}>
								<ListItemAvatar>
									<Avatar className={classes.avatar}>
										<Typography variant='h6'>
											{client.nombre.substr(0, 1)}
										</Typography>
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={client.nombre} secondary={client.empresa} />
							</ListItem>
						))}
					</List>
				</Paper>
			</Fade>
		</React.Fragment>
	);
}