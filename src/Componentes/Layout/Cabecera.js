import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Redirect, withRouter, Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import GoogleIcon from 'mdi-material-ui/Google';
import EventIcon from '@material-ui/icons/Event';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Backdrop from '@material-ui/core/Backdrop';
import TemaDialog from '../Configuracion/TemaDialog';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import DomainIcon from '@material-ui/icons/Domain';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import ChatDialog from '../ChatDialog/ChatDialog';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import io from 'socket.io-client';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../../assets/images/Logo.svg';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
// import { CometChat } from '@cometchat-pro/chat';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	avatarButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		marginLeft: theme.spacing(22),
		[theme.breakpoints.down(768 + theme.spacing(2) * 2)]: {
			marginLeft: 'auto'
		}
	},
	bigAvatar: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		width: 120,
		height: 'auto'
	},
	back: {
		transform: 'translateZ(0px)',
		position: 'fixed',
		zIndex: 100
	},
	nombreMenu: {
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	lista: {
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.getContrastText(theme.palette.primary.main)
		}
	},
	snack: {
		opacity: '0.8'
	},
	message: {
		display: 'flex',
		alignItems: 'center'
	},
	avatarMensaje: {
		marginRight: theme.spacing(1)
	},
	close: {
		padding: theme.spacing(0.5)
	}
}));

const MenuNavegacion = [
	{ nombre: 'Inicio', link: '/inicio' },
	{ nombre: 'Contactos', link: '/contactos' },
	{ nombre: 'Empresas', link: '/empresas' },
	{ nombre: 'Agenda', link: '/agenda' },
	{ nombre: 'Chat', link: '/chat' },
	{ nombre: 'Cobranza', link: '/cobranza' },
	{ nombre: 'Caso', link: '/caso' }
]

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function Cabecera(props) {
	var socket = io.connect('http://172.19.39.179:5000', { 'forceNew': true })
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [notificacion, setNotificacion] = React.useState(false)
	const [infoNotificacion, setInfoNotificacion] = React.useState({})
	const abrir = Boolean(anchorEl);
	const [openDialog, setOpenDialog] = React.useState(false)
	const [openChatDialog, setOpenChatDialog] = React.useState(false)
	const [variable, setVariable] = React.useState(false)
	const perfil = JSON.parse(localStorage.getItem('perfilGoogle'))
	const path = window.location.pathname.split('/')[1]
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};


	const cerrarSesion = () => {
		if (localStorage.getItem('tokenGoogle')) {
			setVariable(true)
			var user = JSON.parse(localStorage.getItem('usuarioChat'))
			socket.emit('desconectado', user.uid)
			socket.emit('usuarios')
			localStorage.clear();
		}
		// CometChat.logout()
	}


	const dialog = () => {
		setOpenDialog(true)
		setAnchorEl(null);
	}

	const chatDialog = () => {
		setOpenChatDialog(true)
		setAnchorEl(null);
	}

	const cerrar = () => {
		setOpenDialog(false)
		return (props.location.pathname)
	}

	const cerrarChatDialog = () => {
		setOpenChatDialog(false)
	}

	const chat = () => {
		if (localStorage.getItem('tokenGoogle')) {
			socket.emit('conectado', perfil.nickname)
			socket.on('conectado/respuesta', result => {
				if (localStorage.getItem('usuarioChat')) {
					socket.emit('usuarios')
					socket.on('notificacion', mensaje => {
						setInfoNotificacion({ avatar: mensaje.avatar, nombre: mensaje.uid })
						setNotificacion(mensaje.uid === perfil.nickname ? false : true)
					})
				} else {
					localStorage.setItem('usuarioChat', JSON.stringify(result))
					socket.emit('usuarios')
				}
			})
		} else {

		}
	}

	React.useEffect(chat, [])

	if (localStorage.getItem('tokenGoogle') === null) {
		return (<Redirect to='/login' />)
	}

	if (variable === true) {
		return (<Redirect to='/login' />)
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Snackbar className={classes.snack} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={notificacion} TransitionComponent={Transition} autoHideDuration={3000} onClose={() => setNotificacion(false)}
				ContentProps={{ 'aria-describedby': 'mensaje' }}
				message={<Typography variant='button' className={classes.message}><Avatar src={infoNotificacion.avatar} alt='...' className={classes.avatarMensaje} />
					{`${infoNotificacion.nombre} se ha conectado`}</Typography>}
				action={[<IconButton key="close" aria-label="close" color="inherit" className={classes.close} onClick={() => setNotificacion(false)}><CloseIcon /></IconButton>,]} />
			<ChatDialog abrir={openChatDialog} funcion={() => cerrarChatDialog()} />
			<TemaDialog abrir={openDialog} funcion={() => cerrar()} />
			<Backdrop open={open} className={classes.back} onClick={() => handleDrawerClose()} />
			<AppBar
				position="fixed"
				// className={clsx(classes.appBar, {
				// 	[classes.appBarShift]: open,
				// })}
				className={classes.appBar}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						{path.charAt(0).toUpperCase() + path.slice(1)}
					</Typography>
					<>
						<div>
							<IconButton color="inherit">
								<NotificationsNoneOutlinedIcon />
							</IconButton>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<PersonOutlinedIcon />
							</IconButton>
							<IconButton onClick={cerrarSesion}
								color="inherit">
								<ExitToAppOutlinedIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={abrir}
								onClose={() => setAnchorEl(null)}>
								<MenuItem disabled><em>{perfil.name}</em></MenuItem>
								<MenuItem onClick={() => chatDialog()}>Configuraciones</MenuItem>
								<MenuItem onClick={() => dialog()}>Tema</MenuItem>
							</Menu>
						</div>
					</>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<img alt='...' src={Logo} className={classes.bigAvatar} />
				</div>
				<Typography variant='button' className={classes.nombreMenu}>NEW TRANSPORT S.A.</Typography>
				<Typography variant='body1' className={classes.nombreMenu}>CRM V1.0</Typography>
				<Divider />
				<List>
					{MenuNavegacion.map((items, index) => (
						<Link to={items.link} style={{ textDecoration: 'none', color: 'inherit' }} key={index}>
							<ListItem button key={index} onClick={handleDrawerClose} className={classes.lista}>
								<ListItemIcon>{items.nombre === 'Inicio' ? <HomeIcon /> :
									items.nombre === 'Gmail' ? <GoogleIcon /> :
										items.nombre === 'Agenda' ? <EventIcon /> :
											items.nombre === 'Empresas' ? <DomainIcon /> :
												items.nombre === 'Llamadas' ? <PhoneAndroidIcon /> :
													items.nombre === 'Caso' ? <FindInPageOutlinedIcon /> :
														items.nombre === 'Chat' ? <ForumOutlinedIcon /> :
															items.nombre === 'Cobranza' ? <MonetizationOnOutlinedIcon /> :
																items.nombre === 'Contactos' ? <GroupOutlinedIcon /> : ''}</ListItemIcon>
								<ListItemText primary={items.nombre} />
							</ListItem>
						</Link>
					))}
				</List>
				<Divider />
			</Drawer>
		</div>
	);
}

export default withRouter(Cabecera);