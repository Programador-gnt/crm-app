import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { Drawer, CssBaseline, AppBar, Toolbar, List, ListItemAvatar, Badge, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Avatar, MenuItem, Menu, Backdrop, Slide } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Redirect, withRouter, Link, useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import GoogleIcon from 'mdi-material-ui/Google';
import EventIcon from '@material-ui/icons/Event';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TemaDialog from '../Configuracion/TemaDialog';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import DomainIcon from '@material-ui/icons/Domain';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import ChatDialog from '../ChatDialog/ChatDialog';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import io from 'socket.io-client';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../../assets/images/Logo.svg';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LoginContext from '../helpers/loginContext';
import ThemeContext from '../helpers/themeContext';

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
		width: drawerWidth,
		backgroundColor: '#364049'
	},
	drawerHeader: {
		backgroundColor: '#1f303d',
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
	lista: {
		color: theme.palette.getContrastText('#364049'),
		'&:hover': {
			backgroundColor: '#1f303d',
			color: theme.palette.getContrastText('#1f303d')
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
	},
	contenedorLetras: {
		backgroundColor: '#1f303d',
		width: '100%',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		color: theme.palette.getContrastText('#1f303d')
	},
	iconos: {
		color: theme.palette.getContrastText('#364049')
	},
	divisor: {
		backgroundColor: theme.palette.getContrastText('#364049')
	},
	textoPerfil: {
		width: '100%',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar
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

function Cabecera() {
	var socket = io.connect('http://172.19.39.179:5000', { 'forceNew': true })
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [conmutador, setConmutador] = React.useState(null);
	const abrirConfig = Boolean(conmutador)
	const [notificacion, setNotificacion] = React.useState(false)
	const [infoNotificacion, setInfoNotificacion] = React.useState({})
	const abrir = Boolean(anchorEl);
	const [openDialog, setOpenDialog] = React.useState(false)
	const [openChatDialog, setOpenChatDialog] = React.useState(false)
	const [variable, setVariable] = React.useState(false)
	const { authLogin } = React.useContext(LoginContext)
	const path = window.location.pathname.split('/')[1]
	const path2 = window.location.pathname.split('/')[2]
	const history = useHistory()
	const { dispatchTheme } = React.useContext(ThemeContext)

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleConfig = event => {
		setConmutador(event.currentTarget)
	}

	const LogOut = () => {
		setAnchorEl(null);
		if (localStorage.getItem('token')) {
			var palette = { primary: 'indigo', secondary: 'red', type: 'light' }
			dispatchTheme(['cambiarTema', palette])
			setVariable(true)
			var user = JSON.parse(localStorage.getItem('usuarioChat'))
			socket.emit('desconectado', user.uid)
			socket.emit('usuarios')
			localStorage.clear();
		}
	}


	const dialog = () => {
		setOpenDialog(true)
		setConmutador(null);
	}

	const chatDialog = () => {
		setOpenChatDialog(true)
		setConmutador(null);
	}

	const cerrar = () => {
		setOpenDialog(false)

		return (history.push(window.location.pathname))
	}

	const cerrarChatDialog = () => {
		setOpenChatDialog(false)
	}

	const chat = () => {
		if (localStorage.getItem('token')) {
			socket.emit('conectado', authLogin.nickname)
			socket.on('conectado/respuesta', result => {
				if (localStorage.getItem('usuarioChat')) {
					socket.emit('usuarios')
					socket.on('notificacion', mensaje => {
						setInfoNotificacion({ avatar: mensaje.avatar, nombre: mensaje.uid })
						setNotificacion(mensaje.uid === authLogin.nickname ? false : true)
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

	if (localStorage.getItem('token') === null) { return (<Redirect to='/login' />) }

	if (variable === true) { return (<Redirect to='/login' />) }

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
			<AppBar position="fixed" className={classes.appBar}>
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
					<Typography variant='body1' className={classes.title}>
						{typeof path2 === 'undefined' ? path.charAt(0).toUpperCase() + path.slice(1) : path.charAt(0).toUpperCase() + path.slice(1) + ' > ' + path2.charAt(0).toUpperCase() + path2.slice(1)}
					</Typography>
					<>
						<div>
							<IconButton color="inherit">
								<Badge badgeContent={5} color='secondary'>
									<NotificationsNoneOutlinedIcon />
								</Badge>
							</IconButton>
							<IconButton onClick={handleConfig} color="inherit">
								<AddOutlinedIcon />
							</IconButton>
							<Menu id="menu-config" anchorEl={conmutador} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={abrirConfig}
								onClose={() => setConmutador(null)}>
								<MenuItem onClick={() => chatDialog()}>Configuraciones</MenuItem>
								<MenuItem onClick={() => dialog()}>Tema</MenuItem>
							</Menu>
							<IconButton onClick={handleMenu} color="inherit">
								<PersonOutlineOutlinedIcon />
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
								<MenuItem>
									<List>
										<ListItem>
											<ListItemAvatar>
												<Avatar src={authLogin.avatar} alt='...' />
											</ListItemAvatar>
											<ListItemText primary={<div className={classes.textoPerfil}>
												<Typography align='center'>{authLogin.correo}</Typography>
												<Typography align='center'><b>{authLogin.name}</b></Typography>
												<Typography align='center'><em>{authLogin.cargo}</em></Typography>
											</div>} />
										</ListItem>
									</List>
								</MenuItem>
								<Divider />
								<MenuItem>Mi perfil</MenuItem>
								<MenuItem>Mi cuenta</MenuItem>
								<Divider />
								<MenuItem onClick={() => LogOut()}><ExitToAppOutlinedIcon /> Cerrar serión</MenuItem>
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
				<div className={classes.contenedorLetras}>
					<Typography variant='body1' align='center'>NEW TRANSPORT S.A.</Typography>
					<Typography variant='body2' align='center'>CRM V1.0</Typography>
				</div>
				<Divider className={classes.divisor} />
				<List>
					{MenuNavegacion.map((items, index) => (
						<Link to={items.link} style={{ textDecoration: 'none', color: 'inherit' }} key={index}>
							<ListItem button key={index} onClick={handleDrawerClose} className={classes.lista}>
								<ListItemIcon>{items.nombre === 'Inicio' ? <HomeIcon className={classes.iconos} /> :
									items.nombre === 'Gmail' ? <GoogleIcon className={classes.iconos} /> :
										items.nombre === 'Agenda' ? <EventIcon className={classes.iconos} /> :
											items.nombre === 'Empresas' ? <DomainIcon className={classes.iconos} /> :
												items.nombre === 'Llamadas' ? <PhoneAndroidIcon className={classes.iconos} /> :
													items.nombre === 'Caso' ? <FindInPageOutlinedIcon className={classes.iconos} /> :
														items.nombre === 'Chat' ? <ForumOutlinedIcon className={classes.iconos} /> :
															items.nombre === 'Cobranza' ? <MonetizationOnOutlinedIcon className={classes.iconos} /> :
																items.nombre === 'Contactos' ? <GroupOutlinedIcon className={classes.iconos} /> : ''}</ListItemIcon>
								<ListItemText primary={items.nombre} />
							</ListItem>
						</Link>
					))}
				</List>
				<Divider className={classes.divisor} />
			</Drawer>
		</div>
	);
}

export default withRouter(Cabecera);