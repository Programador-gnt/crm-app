import React, { Suspense } from 'react';
import Cabecera from './Cabecera';
import { Paper } from '@material-ui/core';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import routes from '../../routes';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from './Menu';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import theming from '../Services/Tema';
import appInteraction from '../helpers/appInteraction';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import AddIcon from '@material-ui/icons/Add';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';

const useStyles = makeStyles(theme => ({
	root: {
		width: '89%',
		paddingBottom: theme.spacing(5),
		marginLeft: theme.spacing(27),
		[theme.breakpoints.down(768 + theme.spacing(2) * 2)]: {
			width: '100%',
			marginLeft: 'auto'
		}
	},
	speedDial: {
		position: 'fixed',
		bottom: theme.spacing(7),
		right: theme.spacing(2),
	}
}));

function Layout() {
	const theme = theming.defaultTheme
	const [open, setOpen] = React.useState(window.screen.width < 769 ? false : true)
	const history = useHistory()
	const [tarjeta, setTarjeta] = React.useState(false)
	const actions = React.useContext(appInteraction)[0];
	const classes = useStyles()
	const ok = {
		palette: {
			primary: indigo,
			secondary: red,
			type: 'light'
		}
	}
	const theme2 = createMuiTheme(ok)

	const preventActionClickClose = (evt, action) => {
		evt.preventDefault()
		evt.stopPropagation()
		if (action.name === 'Nuevo') {
			history.push(`${actions.formContent.path}/nuevo`)
		}
		if (action.name === 'Table') {
			setTarjeta(false)
		}
		if (action.name === 'Tarjeta') {
			setTarjeta(true)
		}
		if (action.name === 'Volver') {
			history.push(`/${window.location.pathname.split('/')[1]}`)
		}

		if (action.name === 'Guardar') {
			actions.formContent.funciones()
		}
	}


	return (
		<MuiThemeProvider theme={typeof theme === 'undefined' ? theme2 : theme}>
			<React.Fragment>
				<CssBaseline />
				<div className="app">
					<Paper elevation={4}>
						<Suspense>
							<Cabecera />
						</Suspense>
					</Paper>
					<Suspense style={{ position: 'fixed' }}>
						<Menu />
					</Suspense>

					<main className={classes.root}>
						{actions.formContent.path === '/inicio' ?
							null : actions.formContent.path === '/calendario' ? null
								: <SpeedDial
									ariaLabel="Speedial"
									className={classes.speedDial}
									icon={<SpeedDialIcon />}
									onClick={() => setOpen(!open)}
									open={open}>
									{actions.acciones.map(action => (
										<SpeedDialAction
											tooltipOpen
											key={action.name}
											icon={action.name === 'Guardar' ? <SaveOutlinedIcon /> : action.name === 'Volver' ? <ArrowBackOutlinedIcon /> : action.name === 'Nuevo' ? <AddIcon /> : action.name === 'Table' ? <TableChartOutlinedIcon /> : action.name === 'Tarjeta' ? <WidgetsOutlinedIcon /> : ''}
											tooltipTitle={action.name}
											onClick={evt => preventActionClickClose(evt, action)}
										/>
									))}
								</SpeedDial>}
						<Suspense>
							<Switch>
								{routes.map((route) => {
									return route.component ? (
										<Route
											key={route.id}
											path={route.path}
											exact={route.exact}
											name={route.name}
											render={props => (
												<route.component key={route.id} {...props} tarjeta={tarjeta} />
											)} />
									) : (null);
								})}
								<Redirect to="/login" />
							</Switch>
						</Suspense>
					</main>
					<Suspense >
						<Footer />
					</Suspense>
				</div>
			</React.Fragment>
		</MuiThemeProvider>
	);
}
export default Layout;