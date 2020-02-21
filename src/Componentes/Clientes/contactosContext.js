import React from 'react'

const ContactosContext = React.createContext()

const initialState = {
    contactos: [],
    informacion: {},
    id_usuarios: null
}

function contactosFunctionReducer(state, [action, payload]) {
    switch (action) {
        case 'consultar':
            return { ...state, contactos: payload };

        case 'consultarInfo':
            return { ...state, informacion: payload };

        case 'abrirInfo':
            return { ...state, id_usuarios: payload.id_usuarios }

        default:
            return state;
    }
}

export const ContactosContextProvider = ContactosContext.Provider

export const ContactosContextProviders = (props) => {
    const [contactos, dispatchContactos] = React.useReducer(contactosFunctionReducer, initialState)

    return (<ContactosContextProvider value={{ contactos, dispatchContactos }}>
        {props.children}
    </ContactosContextProvider>)
}

export default ContactosContext	