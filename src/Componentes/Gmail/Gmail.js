import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GoogleIcon from 'mdi-material-ui/Google';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import consumeWSGmail from '../Config/WebServiceGmail';
// import gapi from 'gapi-client';
// import Config from '../Config/Config';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			<Box>{children}</Box>
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(10),
	},
	card: {
		width: 400,
		margin: theme.spacing(5)
	},
	media: {
		height: 100,
		paddingTop: '56.25%', // 16:9
	},
	avatar: {
		backgroundColor: red[700],
	},
	pestaña: {
		backgroundColor: theme.palette.background.paper,
		width: '100%',
		position: 'fixed',
	}
}));

function Gmail() {
	const [valor, setValor] = React.useState(0);
	const [perfil, setPerfil] = React.useState({})
	const classes = useStyles();
	const theme = useTheme();
	const [label, setLabel] = React.useState('INBOX')
	const [Mensajes, setMensajes] = React.useState({})
	const [ids, setIds] = React.useState([])
	var correo = 'google'
	// const SCOPES = 'https://mail.google.com https://www.googleapis.com/auth/calendar https://www.google.com/m8/feeds/ https://www.googleapis.com/auth/contacts.readonly';

	const handleCambio = (event, newValue) => {
		setValor(newValue);
	};

	const handleChangeIndex = index => {
		setValor(index);
	};

	const mensajes = () => {
		consumeWSGmail('GET', 'messages', '', `?q=${correo}&labelIds=${label}`)
			.then(result => {
				setMensajes(result)
				if (Mensajes.hasOwnProperty('error')) {
					// gapi.load('auth2', initClient);

					// function initClient() {
					// 	gapi.auth2.authorize({
					// 		client_id: `${Config.client_id}`,
					// 		scope: SCOPES
					// 	}, (response) => {
					// 		localStorage.setItem('tokenGoogle', JSON.stringify(response.access_token));
					// 		window.location.reload(true)
					// 	})
					// }
				} else {
					if (result.resultSizeEstimate > 0) {
						for (let i = 0; i < result.messages.length; i++) {
							consumeWSGmail('GET', 'messages/', '', `${result.messages[i].id}?q=${correo}&labelIds=${label}`)
								.then(result => {
									setIds([...ids, result])
								})
							// Ids(result.messages[i].id, label)
						}
					} else {
						// this.setState({
						// 	aviso: !this.state.aviso
						// })

					}
				}
			})
	}

	const Ids = (Id, label) => {
		consumeWSGmail('GET', 'messages/', '', `${Id}?q=${correo}&labelIds=${label}`)
			.then(result => {
				setIds([...ids, { result }])
			})
	}

	const perfilUsuario = () => {
		consumeWSGmail('GET', 'profile', '', '')
			.then(result => {
				setPerfil(result)
			})
	}

	React.useEffect(perfilUsuario, []);

	React.useEffect(mensajes, []);


	return (
		<React.Fragment>
			<CssBaseline />
			<Paper elevation={4} className={classes.root} >
				<Grid container alignItems='center' justify='center'>
					<Card className={classes.card}>
						<CardHeader
							avatar={
								<Avatar aria-label="recipe" className={classes.avatar}>
									<GoogleIcon />
								</Avatar>
							}
							title={perfil.emailAddress}
						/>
						<CardMedia
							className={classes.media}
							image="https://i.imgur.com/RGf2v43.jpg"
						/>
						<CardContent>
							<Typography variant="button" color="textSecondary" component="p">
								{`Mensajes totales: ${perfil.messagesTotal}`}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
						</CardActions>
					</Card>
				</Grid>
				<Fade in={true} mountOnEnter unmountOnExit timeout={1000}>
					<div className={classes.pestaña}>
						<AppBar position="static" color='primary'>
							<Tabs
								value={valor}
								onChange={handleCambio}
								indicatorColor="secondary"
								variant="fullWidth"
								aria-label="full width tabs example"
							>
								<Tab label={<Typography variant='caption'>Inbox</Typography>} {...a11yProps(0)} />
								<Tab label={<Typography variant='caption'>Enviados</Typography>} {...a11yProps(1)} />
								<Tab label={<Typography variant='caption'>Chat</Typography>} {...a11yProps(2)} />
							</Tabs>
						</AppBar>
						<SwipeableViews
							axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
							index={valor}
							onChangeIndex={handleChangeIndex}
						>
							<TabPanel value={valor} index={0} dir={theme.direction}>
								Item 1
							</TabPanel>
							<TabPanel value={valor} index={1} dir={theme.direction}>
								Item 2
        				</TabPanel>
							<TabPanel value={valor} index={2} dir={theme.direction}>
								Item 3
        				</TabPanel>
						</SwipeableViews>
					</div>

				</Fade>
			</Paper>
		</React.Fragment>
	);
}
export default Gmail;