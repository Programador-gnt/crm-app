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

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(10)
	},
	avatar: {
		backgroundColor: theme.palette.secondary.main
	}
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

export default function Clientes() {
	const [usuario, setUsuario] = React.useState(false)
	const classes = useStyles()

	if (usuario === true) {
		return (<Redirect to='/clientes/info' />)
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<Fade in={true} mountOnEnter unmountOnExit timeout={1000}>
				<Paper elevation={4} className={classes.root}>
					<List>
						{clientes.map((client, index) => (
							<ListItem key={index} button onClick={() => setUsuario(true)}>
								<ListItemAvatar>
									<Avatar className={classes.avatar}>
										{client.nombre.substr(0, 1)}
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