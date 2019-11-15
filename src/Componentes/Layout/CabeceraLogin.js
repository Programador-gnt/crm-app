import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SignInDialog from '../SignInDIalog/SignInDialog';


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
	const [openDialog, setOpenDialog] = React.useState(false)

	const closeDialog = () => {
		setOpenDialog(false)
	}

	return (
		<div className={classes.root}>
			<AppBar>
				<Toolbar>
					<Typography variant="h6" noWrap>
						GNT CRM
          			</Typography>
					<Typography variant="h6" className={classes.title}>

					</Typography>
					<>
						<Button color="secondary" variant="contained" onClick={() => setOpenDialog(true)}>Ingresar</Button>
						<SignInDialog abrir={openDialog} cerrar={closeDialog.bind()} />
					</>
				</Toolbar>
			</AppBar>
		</div>
	);
}