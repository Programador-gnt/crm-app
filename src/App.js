import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.scss';
import { UserProvider } from './Componentes/helpers/loginContext'

const loading = () => {
	return (
		<Box position="absolute" top="50%" left="50%">
			<CircularProgress color='primary' />
		</Box>
	);
}

function App() {
	const Login = React.lazy(() => import('./Componentes/Login/Login'));
	const Layout = React.lazy(() => import('./Componentes/Layout/Layout'));
	const user = React.useState({ name: '', avatar: '', correo: '', nickname: '', cargo: '', status: '' })
	console.log(`%c ________________________________________
	 ----------------------------------------
	 ███╗   ███╗ ██╗ ██╗ ██  ██╗
	 ████╗ ████║ ██║ ██║██   ██║
	 ██╔████╔██║ ██║ ████    ██║
	 ██║╚██╔╝██║ ██║ ██║██╗  ██║
	 ██║ ╚═╝ ██║ ██║ ██║ ██╗ ██║
	 ╚═╝     ╚═╝ ╚═╝ ╚═╝ ╚═╝ ╚═╝`, "font-family:monospace; color: #0F669D")
	return (
		<UserProvider value={user}>
			<Router>
				<React.Suspense fallback={loading()}>
					<Switch>
						<Route exact path='/login' name='Login' render={props => <Login {...props} />} />
						<Route path='/' name='Inicio' render={props => <Layout {...props} />} />
					</Switch>
				</React.Suspense>
			</Router>
		</UserProvider>
	);
}
export default App;
