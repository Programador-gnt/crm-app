import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Slide,
    Backdrop,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from '@material-ui/core';
import MaterialTable from 'material-table';
import { AuthTokenRequest } from '../helpers/AxiosInstance';
import EmpresasContext from './empresasContext';
import AppInteractionContext from '../helpers/appInteraction'

const useStyles = makeStyles(() => ({
    back: {
        transform: 'translateZ(0px)',
        position: 'fixed',
        zIndex: 100
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} timeout={500} />;
});

export default function TablaEmpresas(data) {
    const { interactions, dispatch } = React.useContext(AppInteractionContext)
    const { empresas, dispatchEmpresas } = React.useContext(EmpresasContext)
    const [openDialog, setOpenDialog] = React.useState(false)
    const [id, setId] = React.useState(null)
    const [nombre, setNombre] = React.useState(null)
    const classes = useStyles();

    const consultarEmpresas = () => {
        AuthTokenRequest.get('empresas')
            .then(result => {
                dispatchEmpresas(['consultar', result.data])
            })

    }

    const MensajeEliminar = (ID, NOMBRE) => {
        setId(ID)
        setNombre(NOMBRE)
        setOpenDialog(true)
    }

    const eliminar = () => {
        AuthTokenRequest.get('empresas/eliminar', {
            params: {
                id_empresas: id
            }
        }).then(() => {
            setOpenDialog(false)
            consultarEmpresas()
        })
    }

    const consultarAcciones = () => {
        AuthTokenRequest.post('acciones', { form: 'listaEmpresas' })
            .then(result => {
                dispatch(['listaEmpresas', '/empresas', 'funcion', interactions.formContent.funcionSecundaria, result.data])
            })
    }

    React.useEffect(consultarAcciones, [])
    React.useEffect(consultarEmpresas, [])

    return (
        <>
            <Backdrop open={openDialog} className={classes.back} />
            <Dialog
                open={openDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpenDialog(false)}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{`¿Seguro que deseas eliminar a ${nombre}?`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Una vez eliminado se perderá toda la información de esta empresa.
          			</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="secondary">
                        Cancelar
          			</Button>
                    <Button variant='contained' onClick={() => eliminar()} color="primary">
                        Confirmar
          			</Button>
                </DialogActions>
            </Dialog>
            {interactions.formContent.funcionSecundaria ?
                <p>aqui van las tarjetas</p> :
                <>
                    <MaterialTable
                        title='Lista de empresas'
                        columns={[
                            { title: 'Razón social', field: 'razonsocial' },
                            { title: 'Ruc', field: 'ruc' },
                            { title: 'Teléfono', field: 'telefono', type: 'numeric' },
                            { title: 'País', field: 'pais' },
                        ]}
                        data={empresas.empresas}
                        actions={[
                            {
                                icon: 'search',
                                tooltip: 'Ver',
                                onClick: (event, rowData) => {
                                    dispatch(['empresasInfo', `/empresas/info`, 'funcion', interactions.formContent.funcionSecundaria, interactions.acciones])
                                    dispatchEmpresas(['abrirInfo', { id_empresas: rowData.id_empresas }])
                                }
                            },
                            {
                                icon: 'delete',
                                tooltip: 'Eliminar',
                                onClick: (event, rowData) => MensajeEliminar(rowData.id_empresas, rowData.razonsocial)
                            },
                            {
                                icon: 'refresh',
                                tooltip: 'Actualizar',
                                isFreeAction: true,
                                onClick: () => { consultarEmpresas() }
                            },
                            {
                                icon: 'filter_list',
                                tooltip: 'Filtrar datos',
                                isFreeAction: true,
                                onClick: () => alert('filtrar')
                            }
                        ]}
                        localization={{
                            pagination: {
                                labelDisplayedRows: '{from}-{to} de {count}'
                            },
                            toolbar: {
                                nRowsSelected: '{0} fila(s) seleccionadas'
                            },
                            header: {
                                actions: 'Actions'
                            },
                            body: {
                                emptyDataSourceMessage: 'No hay nada para mostrar',
                                filterRow: {
                                    filterTooltip: 'Filter'
                                }
                            }
                        }}
                        options={{
                            search: false
                        }}
                    />
                </>}
        </>
    );
}