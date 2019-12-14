import React from 'react';

const Inicio = React.lazy(() => import('./Componentes/Inicio/Inicio'))
const Gmail = React.lazy(() => import('./Componentes/Gmail/Gmail'))
const Calendario = React.lazy(() => import('./Componentes/Calendario/Calendario'))
const Clientes = React.lazy(() => import('./Componentes/Clientes/Clientes'))
const Info = React.lazy(() => import('./Componentes/Clientes/Info'))
const Nuevo = React.lazy(() => import('./Componentes/Clientes/Nuevo'))
const Empresas = React.lazy(() => import('./Componentes/Empresas/Empresas'))
const NuevaEmpresa = React.lazy(() => import('./Componentes/Empresas/Nuevo'))

const routes = [
	{ id: '0', path: '/', exact: true, name: 'Inicio' },
	{ id: '1', path: '/inicio', exact: true, name: 'Inicio', component: Inicio },
	{ id: '2', path: '/gmail', exact: true, name: 'Gmail', component: Gmail },
	{ id: '3', path: '/calendario', exact: true, name: 'Calendario', component: Calendario },
	{ id: '4', path: '/clientes', exact: true, name: 'Clientes', component: Clientes },
	{ id: '5', path: '/clientes/info', name: 'Información', component: Info },
	{ id: '6', path: '/clientes/nuevo', name: 'Nuevo cliente', component: Nuevo },
	{ id: '7', path: '/empresas', exact: true, name: 'Empresas', component: Empresas },
	{ id: '8', patch: 'empresas/nuevo', name: 'Nueva empresa', component: NuevaEmpresa }
];

export default routes;