import React from 'react'
import Calendario from './Calendario';
import { CalendarioContextProviders } from './calendarioContext';

function IndexCalendario() {
    return (
        <CalendarioContextProviders>
            <Calendario />
        </CalendarioContextProviders>
    )
}

export default IndexCalendario;