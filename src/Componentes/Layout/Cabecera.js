import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function MenuAppBar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	var log = 0


	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<AppBar>
				<Toolbar>
					<Typography variant="h6" noWrap>
						GNT CRM
          			</Typography>
					<Typography variant="h6" className={classes.title}>

					</Typography>
					{log === 1 &&
						<>
							<div>
								<IconButton
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleMenu}
									color="inherit"
								>
									<Avatar alt="..." src='https://i.imgur.com/qSZaqys.jpg' />
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
									open={open}
									onClose={() => setAnchorEl(null)}>
									<MenuItem disabled><em>Usuario</em></MenuItem>
									<MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
								</Menu>
							</div>
						</>
					}
					{log === 0 &&
						<>
							<Link to='/inicio'><Button color="secondary" variant="contained" onClick={() => log = log + 1}>Ingresar</Button></Link>
						</>
					}
				</Toolbar>
			</AppBar>
		</div>
	);
}