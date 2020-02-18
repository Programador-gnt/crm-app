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

		case 'listaContactos':
			return { ...state, formContent: { path: path, funcion: funcion }, acciones: payload };

		case 'contactosNuevo':
			return { ...state, formContent: { path: path, funcion: funcion }, acciones: payload };

		default:
			return state;
	}
}