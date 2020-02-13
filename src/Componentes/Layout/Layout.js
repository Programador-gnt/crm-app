import React, { Suspense } from 'react';
import Cabecera from './Cabecera';
import { Paper } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from './Menu';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import theming from '../Services/Tema'

const useStyles = makeStyles(theme => ({
	root: {
		width: '89%',
		paddingBottom: theme.spacing(5),
		marginLeft: theme.spacing(27),
		[theme.breakpoints.down(768 + theme.spacing(2) * 2)]: {
			width: '100%',
			marginLeft: 'auto'
		}
	}
}));

function Layout() {
	const theme = theming.defaultTheme
	const classes = useStyles()
	const ok = {
		palette: {
			primary: indigo,
			secondary: red,
			type: 'light'
		}
	}

	const theme2 = createMuiTheme(ok)


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
												<route.component key={route.id} {...props} />
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