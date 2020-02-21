import React from 'react'

const EmpresasContext = React.createContext()

const initialState = {
    empresas: [],
    informacion: {},
    id_empresas: null
}

function empresasFunctionReducer(state, [action, payload]) {
    switch (action) {
        case 'consultar':
            return { ...state, empresas: payload };

        case 'consultarInfo':
            return { ...state, informacion: payload };

        case 'abrirInfo':
            return { ...state, id_empresas: payload.id_empresas }

        default:
            return state;
    }
}

export const EmpresasContextProvider = EmpresasContext.Provider

export const EmpresasContextProviders = (props) => {
    const [empresas, dispatchEmpresas] = React.useReducer(empresasFunctionReducer, initialState)

    return (<EmpresasContextProvider value={{ empresas, dispatchEmpresas }}>
        {props.children}
    </EmpresasContextProvider>)
}

export default EmpresasContext	