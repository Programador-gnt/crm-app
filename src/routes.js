import React from 'react';

const Inicio = React.lazy(() => import('./Componentes/Inicio'))
const Gmail = React.lazy(() => import('./Componentes/Gmail'))
const Agenda = React.lazy(() => import('./Componentes/Calendario'))
const Contactos = React.lazy(() => import('./Componentes/Clientes'))
const Empresas = React.lazy(() => import('./Componentes/Empresas'))
const Chat = React.lazy(() => import('./Componentes/Chat'))

const routes = [
	{ id: '0', path: '/inicio', exact: true, name: 'Inicio', component: Inicio },
	{ id: '1', path: '/gmail', exact: true, name: 'Gmail', component: Gmail },
	{ id: '2', path: '/agenda', exact: true, name: 'Agenda', component: Agenda },
	{ id: '3', path: '/contactos', exact: true, name: 'Contactos', component: Contactos },
	{ id: '4', path: '/chat', exact: true, name: 'Chat', component: Chat },
	{ id: '5', path: '/empresas', exact: true, name: 'Empresas', component: Empresas }
];

export default routes;