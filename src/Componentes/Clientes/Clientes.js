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
	Zoom
} from '@material-ui/core';
import TablaContactos from './TablaContactos';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import { AuthTokenRequest } from '../helpers/AxiosInstance';
// import appInteraction from '../helpers/appInteraction';


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


export default function Clientes() {
	const history = useHistory()
	const [open, setOpen] = React.useState(window.screen.width < 769 ? false : true)
	const [tarjeta, setTarjeta] = React.useState(false)
	const [actions, setActions] = React.useState([])
	// const [aplicacion, setAplicacion] = React.useContext(appInteraction)
	const classes = useStyles()

	const preventActionClickClose = (evt, action) => {
		evt.preventDefault()
		evt.stopPropagation()
		if (action.name === 'Nuevo') {
			history.push('/contactos/nuevo')
		}
		if (action.name === 'Table') {
			setTarjeta(false)
		}
		if (action.name === 'Tarjeta') {
			setTarjeta(true)
		}
	}

	const acciones = () => {
		AuthTokenRequest.post('acciones', { form: 'listaContactos' })
			.then(result => {
				setActions(result.data)
				// setAplicacion({ ...aplicacion, acciones: result.data })
			})
	}

	React.useEffect(acciones, [])

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
						icon={action.name === 'Nuevo' ? <AddIcon /> : action.name === 'Table' ? <TableChartOutlinedIcon /> : action.name === 'Tarjeta' ? <WidgetsOutlinedIcon /> : ''}
						tooltipTitle={action.name}
						onClick={evt => preventActionClickClose(evt, action)}
					/>
				))}
			</SpeedDial>
			<Zoom in={true} timeout={500}>
				<Grid container spacing={1} className={classes.root}>
					<Grid item xs={12}>
						<TablaContactos tarjeta={tarjeta} />
					</Grid>
				</Grid>
			</Zoom>
		</React.Fragment>
	);
}