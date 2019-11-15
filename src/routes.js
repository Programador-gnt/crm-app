import React from 'react';

const Inicio = React.lazy(() => import('./Componentes/Inicio/Inicio'));
const Gmail = React.lazy(()=> import('./Componentes/Gmail/Gmail'))

const routes = [
	{ id: '0', path: '/', exact: true, name: 'Inicio' },
	{ id: '1', path: '/inicio', name: 'Inicio', component: Inicio },
	{ id: '2', path: '/gmail', name: 'Gmail', component: Gmail }
];

export default routes;