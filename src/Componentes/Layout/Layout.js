import React from 'react';
import Cabecera from './Cabecera';
import Paper from '@material-ui/core/Paper';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import theming from '../Services/Tema';
import { MuiThemeProvider } from '@material-ui/core/styles';

function Layout() {
	const tema = theming.defaultTheme;

	return (
		<MuiThemeProvider theme={tema}>
			<React.Fragment>
				<CssBaseline />
				<Paper elevation={4}>
					<Cabecera />
				</Paper>
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
				<Footer />
			</React.Fragment>
		</MuiThemeProvider>
	);
}
export default Layout;