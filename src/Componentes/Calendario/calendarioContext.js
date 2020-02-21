import React from 'react'

const CalendarioContext = React.createContext()

const initialState = {
    calendario: [],
    invitados: [],
    evento: {}
}

function calendarioFunctionReducer(state, [action, payload]) {
    switch (action) {
        case 'consultarEventos':
            return { ...state, calendario: payload };

        case 'eventoConsultado':
            return { ...state, evento: payload };

        case 'consultarInvitados':
            return { ...state, invitados: payload };

        default:
            return state;
    }
}

export const CalendarioContextProvider = CalendarioContext.Provider

export const CalendarioContextProviders = (props) => {
    const [calendario, dispatchCalendario] = React.useReducer(calendarioFunctionReducer, initialState)

    return (<CalendarioContextProvider value={{ calendario, dispatchCalendario }}>
        {props.children}
    </CalendarioContextProvider>)
}

export default CalendarioContext	