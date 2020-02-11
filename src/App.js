import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.scss';
import { AppInteractionProvider } from './Componentes/helpers/appInteraction'
import { LoginContextProvider } from './Componentes/helpers/loginContext'

const loading = () => {
	return (
		<Box position="absolute" top="50%" left="50%">
			<CircularProgress color='primary' />
		</Box>
	);
}

function App() {
	const data = localStorage.getItem('perfil') ? JSON.parse(localStorage.getItem('perfil')) : ''
	const Login = React.lazy(() => import('./Componentes/Login/Login'));
	const Layout = React.lazy(() => import('./Componentes/Layout/Layout'));
	const user = React.useState(localStorage.getItem('perfil') ? { name: data.name, avatar: data.avatar, correo: data.correo, nickname: data.nickname, cargo: data.correo } : {})
	const actions = React.useState(localStorage.getItem('token') ? { formContent: {}, acciones: [] } : { formContent: {}, acciones: [] })
	console.log(`%c ________________________________________
	 ----------------------------------------
	 ███╗   ███╗ ██╗ ██╗ ██  ██╗
	 ████╗ ████║ ██║ ██║██   ██║
	 ██╔████╔██║ ██║ ████    ██║
	 ██║╚██╔╝██║ ██║ ██║██╗  ██║
	 ██║ ╚═╝ ██║ ██║ ██║ ██╗ ██║
	 ╚═╝     ╚═╝ ╚═╝ ╚═╝ ╚═╝ ╚═╝`, "font-family:monospace; color: #0F669D")
	return (
		<LoginContextProvider value={user}>
			<AppInteractionProvider value={actions}>
				<Router>
					<React.Suspense fallback={loading()}>
						<Switch>
							<Route exact path='/login' name='Login' render={props => <Login {...props} />} />
							<Route path='/' name='Inicio' render={props => <Layout {...props} />} />
						</Switch>
					</React.Suspense>
				</Router>
			</AppInteractionProvider>
		</LoginContextProvider>
	);
}
export default App;
