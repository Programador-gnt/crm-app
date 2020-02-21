export const initialState = {
	formContent: {
		path: '',
		funcion: '',
		funcionSecundaria: false
	},
	acciones: []
}


export function interactionFunctionReducer(state, [action, path, funcion, funcionSecundaria, payload]) {
	switch (action) {
		case 'inicio':
			return { ...state, formContent: { path: path, funcion: funcion, funcionSecundaria: funcionSecundaria }, acciones: payload };

		case 'agenda':
			return { ...state, formContent: { path: path, funcion: funcion, funcionSecundaria: funcionSecundaria }, acciones: payload };

		case 'listaContactos':
			return { ...state, formContent: { path: path, funcion: funcion, funcionSecundaria: funcionSecundaria }, acciones: payload };

		case 'contactosNuevo':
			return { ...state, formContent: { path: path, funcion: funcion, funcionSecundaria: funcionSecundaria }, acciones: payload };

		case 'contactosInfo':
			return { ...state, formContent: { path: path, funcion: funcion, funcionSecundaria: funcionSecundaria }, acciones: payload };

		case 'listaEmpresas':
			return { ...state, formContent: { path: path, funcion: funcion, funcionSecundaria: funcionSecundaria }, acciones: payload };

		case 'empresasInfo':
			return { ...state, formContent: { path: path, funcion: funcion, funcionSecundaria: funcionSecundaria }, acciones: payload };

		case 'empresasNuevo':
			return { ...state, formContent: { path: path, funcion: funcion, funcionSecundaria: funcionSecundaria }, acciones: payload };

		case 'Volver':
			return { ...state, formContent: { path: path, funcion: funcion, funcionSecundaria: funcionSecundaria }, acciones: payload };

		case 'Nuevo':
			return { ...state, formContent: { path: path, funcion: funcion, funcionSecundaria: funcionSecundaria }, acciones: payload };

		case 'Tarjeta':
			return { ...state, formContent: { path: path, funcion: funcion, funcionSecundaria: funcionSecundaria }, acciones: payload };

		default:
			return state;
	}
}