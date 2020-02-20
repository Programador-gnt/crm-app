import React from 'react'
import Contactos from './Clientes';
import { ContactosContextProviders } from './contactosContext';

function IndexContactos() {
    return (
        <ContactosContextProviders>
            <Contactos />
        </ContactosContextProviders>
    )
}

export default IndexContactos;