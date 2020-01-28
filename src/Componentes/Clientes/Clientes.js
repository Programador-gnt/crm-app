import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import {
	Grid,
	CssBaseline,
	Fade
} from '@material-ui/core';
import { AuthTokenRequest } from '../helpers/AxiosInstance';
import TablaContactos from './TablaContactos'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(8),
		paddingLeft: theme.spacing(4)
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

export default function Clientes() {
	const history = useHistory()
	const [open, setOpen] = React.useState(true)
	const [clientes, setClientes] = React.useState([])
	const classes = useStyles()

	const usuarios = () => {
		AuthTokenRequest.get('contactos')
			.then(result => {
				setClientes(result.data)
			})
	}

	const preventActionClickClose = (evt, action) => {
		evt.preventDefault()
		evt.stopPropagation()
		if (action.name === 'Nuevo') {
			history.push('/contactos/nuevo')
		}
	}

	React.useEffect(usuarios, [])

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
						<TablaContactos contactos={clientes} />
					</Grid>
				</Grid>
			</Fade>
		</React.Fragment>
	);
}