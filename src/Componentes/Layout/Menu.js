import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import DomainIcon from '@material-ui/icons/Domain';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import HomeIcon from '@material-ui/icons/Home';
import GoogleIcon from 'mdi-material-ui/Google';
import EventIcon from '@material-ui/icons/Event';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { Drawer, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Logo from '../../assets/images/Logo.svg';


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		[theme.breakpoints.down(768 + theme.spacing(2) * 2)]: {
			display: 'none'
		}
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#364049',
	},
	drawerHeader: {
		backgroundColor: '#1f303d',
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	title: {
		flexGrow: 1,
	},
	bigAvatar: {
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		width: 120,
		height: 'auto'
	},
	lista: {
		color: theme.palette.getContrastText('#364049'),
		'&:hover': {
			backgroundColor: '#1f303d',
			color: theme.palette.getContrastText('#1f303d')
		}
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
	}
}));

function Menu() {
	const MenuNavegacion = [
		{ nombre: 'Inicio', link: '/inicio' },
		{ nombre: 'Contactos', link: '/contactos' },
		{ nombre: 'Empresas', link: '/empresas' },
		{ nombre: 'Agenda', link: '/agenda' },
		{ nombre: 'Chat', link: '/chat' },
		{ nombre: 'Cobranza', link: '/cobranza' },
		{ nombre: 'Caso', link: '/caso' }
	]
	const classes = useStyles()
	return (
		<Drawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={true}
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
						<ListItem button key={index} className={classes.lista}>
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
	);
}

export default withRouter(Menu);