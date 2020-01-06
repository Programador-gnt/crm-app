import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
	},
	bigAvatar: {
		marginLeft: theme.spacing(5),
		marginRight: theme.spacing(5),
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		width: 60,
		height: 60,
	},
	back: {
		transform: 'translateZ(0px)',
		position: 'fixed',
		zIndex: 100
	},
	nombreMenu: {
		marginLeft: theme.spacing(6)
	},
	lista: {
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.getContrastText(theme.palette.primary.main)
		}
	}
}));

const MenuNavegacion = [
	{ nombre: 'Inicio', link: '/inicio' },
	{ nombre: 'Contactos', link: '/clientes' },
	{ nombre: 'Empresas', link: '/empresas' },
	{ nombre: 'Agenda', link: '/calendario' },
	{ nombre: 'Chat', link: '/chat' },
	{ nombre: 'Cobranza', link: '/cobranza' },
	{ nombre: 'Caso', link: '/caso' }
]

function Cabecera(props) {
	var socket = io.connect('http://172.19.39.179:5000', { 'forceNew': true })
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const abrir = Boolean(anchorEl);
	const [openDialog, setOpenDialog] = React.useState(false)
	const [openChatDialog, setOpenChatDialog] = React.useState(false)
	const perfil = JSON.parse(localStorage.getItem('perfilGoogle'))

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
		if (localStorage.getItem('usuarioChat')) {
			var user = JSON.parse(localStorage.getItem('usuarioChat'))
			socket.emit('desconectado', user.uid)
			socket.emit('usuarios')
			localStorage.clear();
		} else {
			localStorage.clear()
		}
		// CometChat.logout()
	};

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
		props.history.push(props.location.pathname)
	}

	const cerrarChatDialog = () => {
		setOpenChatDialog(false)
	}

	if (localStorage.getItem('tokenGoogle') === null) {
		return (<Redirect to='/login' />)
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<ChatDialog abrir={openChatDialog} funcion={() => cerrarChatDialog()} />
			<TemaDialog abrir={openDialog} funcion={() => cerrar()} />
			<Backdrop open={open} className={classes.back} onClick={() => handleDrawerClose()} />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
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
					<Typography variant="h6" noWrap>
						GNT CRM
          			</Typography>
					<Typography variant="h6" className={classes.title}>

					</Typography>
					<Typography variant="h6" className={classes.title}>

					</Typography>
					<>
						<div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								className={classes.menuButton}
								onClick={handleMenu}
								color="inherit"
							>
								<Avatar alt="..." src={perfil.picture} />
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
								<MenuItem onClick={() => chatDialog()}>Conectar chat</MenuItem>
								<MenuItem onClick={() => dialog()}>Tema</MenuItem>
								<MenuItem onClick={() => handleClose()}>Cerrar Sesión</MenuItem>
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
					<Avatar alt="..." src={perfil.picture} className={classes.bigAvatar} />

					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Typography variant='button' className={classes.nombreMenu}>{perfil.name}</Typography>
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