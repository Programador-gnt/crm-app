import React from 'react';

const Inicio = React.lazy(() => import('./Componentes/Inicio/Inicio'))
const Gmail = React.lazy(() => import('./Componentes/Gmail/Gmail'))
const Agenda = React.lazy(() => import('./Componentes/Calendario/Calendario'))
const Contactos = React.lazy(() => import('./Componentes/Clientes/Clientes'))
const Info = React.lazy(() => import('./Componentes/Clientes/Info'))
const Nuevo = React.lazy(() => import('./Componentes/Clientes/Nuevo'))
const Empresas = React.lazy(() => import('./Componentes/Empresas/Empresas'))
const NuevaEmpresa = React.lazy(() => import('./Componentes/Empresas/Nuevo'))
const Chat = React.lazy(() => import('./Componentes/Chat/Chat'))
const InfoEmpresa = React.lazy(() => import('./Componentes/Empresas/Info'))

const routes = [
	{ id: '0', path: '/', exact: true, name: 'Inicio' },
	{ id: '1', path: '/inicio', exact: true, name: 'Inicio', component: Inicio },
	{ id: '2', path: '/gmail', exact: true, name: 'Gmail', component: Gmail },
	{ id: '3', path: '/agenda', exact: true, name: 'Agenda', component: Agenda },
	{ id: '4', path: '/contactos', exact: true, name: 'Contactos', component: Contactos },
	{ id: '5', path: '/chat', exact: true, name: 'Chat', component: Chat },
	{ id: '6', path: '/contactos/info', name: 'Información', component: Info },
	{ id: '7', path: '/contactos/nuevo', name: 'Nuevo cliente', component: Nuevo },
	{ id: '8', path: '/empresas', exact: true, name: 'Empresas', component: Empresas },
	{ id: '9', path: '/empresas/nuevo', name: 'Nueva empresa', component: NuevaEmpresa },
	{ id: '10', path: '/empresas/info', name: 'Información', component: InfoEmpresa }
];

export default routes;