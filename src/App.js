import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.scss';
import { AppInteractionContextProvider } from './Componentes/helpers/appInteraction';
import { LoginContextProviders } from './Componentes/helpers/loginContext';
import { ThemeContextProviders } from './Componentes/helpers/themeContext';

const loading = () => {
	return (
		<Box position="absolute" top="50%" left="50%">
			<CircularProgress color='primary' />
		</Box>
	);
}

function App() {
	const Login = React.lazy(() => import('./Componentes/Login'));
	const Layout = React.lazy(() => import('./Componentes/Layout'));
	// console.log(`%c ________________________________________
	//  ----------------------------------------
	//  ███╗   ███╗ ██╗ ██╗ ██  ██╗
	//  ████╗ ████║ ██║ ██║██   ██║
	//  ██╔████╔██║ ██║ ████    ██║
	//  ██║╚██╔╝██║ ██║ ██║██╗  ██║
	//  ██║ ╚═╝ ██║ ██║ ██║ ██╗ ██║
	//  ╚═╝     ╚═╝ ╚═╝ ╚═╝ ╚═╝ ╚═╝`, "font-family:monospace; color: #0F669D")

	console.log(`%c ________________________________________
	----------------------------------------
	 █████╗   ██████╗   ███╗   ███╗
	██║  ██╗  ██║  ██╗  ████╗ ████║
	██║  ╚═╝  ██████═╝  ██╔████╔██║
	██║  ██╗  ██║  ██╗  ██║╚██╔╝██║
	 █████╔╝  ██║  ██║  ██║ ╚═╝ ██║
	 ╚════╝   ╚═╝  ╚═╝  ╚═╝     ╚═╝`, "font-family:monospace; color: #0F669D")
	return (
		<LoginContextProviders>
			<AppInteractionContextProvider>
				<ThemeContextProviders>
					<Router>
						<React.Suspense fallback={loading()}>
							<Switch>
								<Route exact path='/login' name='Login' render={props => <Login {...props} />} />
								<Route path='/' name='Layout' render={props => <Layout {...props} />} />
							</Switch>
						</React.Suspense>
					</Router>
				</ThemeContextProviders>
			</AppInteractionContextProvider>
		</LoginContextProviders>
	);
}
export default App;
