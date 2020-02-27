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
    Button,
    Grid,
    Card,
    CardContent,
    Typography,
    Zoom,
    CardHeader,
    Tooltip,
    IconButton,
    Avatar
} from '@material-ui/core';
import MaterialTable from 'material-table';
import { AuthTokenRequest } from '../helpers/AxiosInstance';
import EmpresasContext from './empresasContext';
import AppInteractionContext from '../helpers/appInteraction';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const useStyles = makeStyles(theme => ({
    back: {
        transform: 'translateZ(0px)',
        position: 'fixed',
        zIndex: 100
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        width: 130,
        height: 130,
        margin: 'auto'
    },
    texto: {
        textAlign: 'center',
        marginTop: theme.spacing(1)
    },
    card: {
        width: '95%',
        transition: 'all .2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.02)'
        }
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} timeout={500} />;
});

export default function TablaEmpresas(data) {
    const { interactions, dispatch } = React.useContext(AppInteractionContext)
    const { empresas, dispatchEmpresas } = React.useContext(EmpresasContext)
    const [openDialog, setOpenDialog] = React.useState(false)
    const classes = useStyles();

    const consultarEmpresas = () => {
        AuthTokenRequest.get('empresas')
            .then(result => {
                dispatchEmpresas(['consultar', result.data])
            })

    }

    const eliminar = () => {
        AuthTokenRequest.get('empresas/eliminar', {
            params: {
                id_empresas: empresas.id_eliminar
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
            <Dialog open={openDialog} TransitionComponent={Transition} keepMounted onClose={() => setOpenDialog(false)}>
                <DialogTitle id="alert-dialog-slide-title">{`¿Seguro que deseas eliminar a ${empresas.nombreEliminar}?`}</DialogTitle>
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
                <Grid container spacing={2}>
                    {empresas.empresas.map((info, index) => (
                        <Zoom key={index} in={true} timeout={500}>
                            <Grid key={index} item xs={12} sm={4}>
                                <Card className={classes.card} raised={true}>
                                    <CardHeader
                                        action={
                                            <>
                                                <Tooltip title='Editar'>
                                                    <IconButton onClick={() => {
                                                        dispatch(['empresasInfo', `/empresas/info`, 'funcion', interactions.formContent.funcionSecundaria, interactions.acciones])
                                                        dispatchEmpresas(['abrirInfo', { id_empresas: info.id_empresas }])
                                                    }}>
                                                        <EditOutlinedIcon />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title='Eliminar'>
                                                    <IconButton onClick={() => {
                                                        setOpenDialog(true)
                                                        dispatchEmpresas(['eliminarEmpresa', { id_eliminar: info.id_empresas, nombreEliminar: info.razonsocial }])
                                                    }}>
                                                        <DeleteOutlineOutlinedIcon color='secondary' />
                                                    </IconButton>
                                                </Tooltip>
                                            </>
                                        } />
                                    <CardContent>
                                        <Avatar className={classes.avatar}>
                                            <Typography variant='h1'>{info.razonsocial.substr(0, 1)}</Typography>
                                        </Avatar>
                                        <Typography variant="h5" className={classes.texto} color='secondary'>
                                            {info.razonsocial}
                                        </Typography>
                                        <Typography variant="body1" className={classes.texto} color='textSecondary'>
                                            {info.correo}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Zoom>
                    ))}
                </Grid> :
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
                                onClick: (event, rowData) => {
                                    setOpenDialog(true)
                                    dispatchEmpresas(['eliminarEmpresa', { id_eliminar: rowData.id_empresas, nombreEliminar: rowData.razonsocial }])
                                }
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