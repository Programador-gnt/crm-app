import React from 'react'
import Empresas from './Empresas';
import { EmpresasContextProviders } from './empresasContext';

function IndexEmpresas() {
    return (
        <EmpresasContextProviders>
            <Empresas />
        </EmpresasContextProviders>
    )
}

export default IndexEmpresas;