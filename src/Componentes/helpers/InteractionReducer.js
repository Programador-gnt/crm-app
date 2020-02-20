export const initialState = {
	formContent: {
		path: '',
		funcion: ''
	},
	acciones: []
}


export function interactionFunctionReducer(state, [action, path, funcion, payload]) {
	switch (action) {
		case 'inicio':
			return { ...state, formContent: { path: path, funcion: funcion }, acciones: payload };

		case 'agenda':
			return { ...state, formContent: { path: path, funcion: funcion }, acciones: payload };

		case 'listaContactos':
			return { ...state, formContent: { path: path, funcion: funcion }, acciones: payload };

		case 'contactosNuevo':
			return { ...state, formContent: { path: path, funcion: funcion }, acciones: payload };

		case 'contactosInfo':
			return { ...state, formContent: { path: path, funcion: funcion }, acciones: payload };

		case 'listaEmpresas':
			return { ...state, formContent: { path: path, funcion: funcion }, acciones: payload };

		case 'empresasInfo':
			return { ...state, formContent: { path: path, funcion: funcion }, acciones: payload };

		case 'empresasNuevo':
			return { ...state, formContent: { path: path, funcion: funcion }, acciones: payload };

		case 'Volver':
			return { ...state, formContent: { path: path, funcion: funcion }, acciones: payload };

		default:
			return state;
	}
}