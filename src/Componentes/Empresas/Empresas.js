import React from 'react';
import { Grid, CssBaseline, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import TablaEmpresas from './TablaEmpresas'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(8),
		paddingLeft: theme.spacing(4)
	},
	avatar: {
		backgroundColor: theme.palette.secondary.main
	},
	speedDial: {
		position: 'fixed',
		bottom: theme.spacing(7),
		right: theme.spacing(2),
	}
}));


const actions = [
	{ name: 'Nuevo' }
]

export default function Empresas() {
	const history = useHistory()
	const [open, setOpen] = React.useState(window.screen.width < 769 ? false : true)
	const classes = useStyles()

	const preventActionClickClose = (evt, action) => {
		evt.preventDefault()
		evt.stopPropagation()
		if (action.name === 'Nuevo') {
			history.push('/empresas/nuevo')
		}
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<SpeedDial
				ariaLabel="Speedial"
				className={classes.speedDial}
				icon={<SpeedDialIcon />}
				onClick={() => setOpen(!open)}
				open={open}>

				{actions.map(action => (
					<SpeedDialAction
						tooltipOpen
						key={action.name}
						icon={action.name === 'Nuevo' ? <AddIcon /> : ''}
						tooltipTitle={action.name}
						onClick={evt => preventActionClickClose(evt, action)}
					/>
				))}
			</SpeedDial>
			<Fade in={true} timeout={1000}>
				<Grid container spacing={1} className={classes.root}>
					<Grid item xs={12}>
						<TablaEmpresas />
					</Grid>
				</Grid>
			</Fade>
		</React.Fragment>
	);
}