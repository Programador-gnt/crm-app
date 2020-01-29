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
		width: drawerWidth
	},
	drawerHeader: {
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
	nombreMenu: {
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	lista: {
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.getContrastText(theme.palette.primary.main)
		}
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
			<Typography variant='button' className={classes.nombreMenu}>NEW TRANSPORT S.A.</Typography>
			<Typography variant='body1' className={classes.nombreMenu}>CRM V1.0</Typography>
			<Divider />
			<List>
				{MenuNavegacion.map((items, index) => (
					<Link to={items.link} style={{ textDecoration: 'none', color: 'inherit' }} key={index}>
						<ListItem button key={index} className={classes.lista}>
							<ListItemIcon>{items.nombre === 'Inicio' ? <HomeIcon /> :
								items.nombre === 'Gmail' ? <GoogleIcon className={classes.icono} /> :
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
	);
}

export default withRouter(Menu);