import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import Backdrop from '@material-ui/core/Backdrop';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(12),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    speedDial: {
        position: 'fixed',
        bottom: theme.spacing(7),
        right: theme.spacing(2),
    },
    back: {
        transform: 'translateZ(0px)',
        position: 'fixed',
        zIndex: 100
    },
    card: {
        width: 400,
        margin: theme.spacing(5)
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        width: 70,
        height: 70,
        margin: 'auto'
    },
    texto: {
        textAlign: 'center',
        marginTop: theme.spacing(1)
    },
    info: {
        marginTop: theme.spacing(1)
    },
    input: {
        display: 'none',
    }
}));


const actions = [
    { name: 'Volver' }
];

export default function Nuevo(props) {
    const [open, setOpen] = React.useState(false)
    const [denei, setDenei] = React.useState('')
    const [ruc, setRuc] = React.useState('')
    const [informacion1, setInformacion1] = React.useState({})
    const [informacion2, setInformacion2] = React.useState({})
    const [imagenAvatar, setImagenAvatar] = React.useState('')
    const [empresas, setEmpresas] = React.useState([])
    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleCloseButton = () => {
        setOpen(false);
    };

    const onChange = (e) => {
        setDenei(e.target.value)
    }

    const onChangeRuc = (e) => {
        setRuc(e.target.value)
    }

    const tecla = async (e) => {
        if (e.keyCode === 13) {
            if (typeof denei === 'undefined') {

            } else {
                await fetch(`https://dniruc.apisperu.com/api/v1/dni/${denei}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByb2dyYW1hZG9yQGdudC5wZSJ9.h0kKyOThfiofLhCBJIctabYiQb7dWpk_kOe0hVwUR4g`, {
                    method: 'GET',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }).then(respuesta => {
                    return respuesta.json()
                }).then(json => {
                    setInformacion1(json)
                })
            }
        }
    }

    const teclaRuc = async (e) => {
        if (e.keyCode === 13) {
            if (typeof ruc === 'undefined') {

            } else {
                await fetch(`https://dniruc.apisperu.com/api/v1/ruc/${ruc}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InByb2dyYW1hZG9yQGdudC5wZSJ9.h0kKyOThfiofLhCBJIctabYiQb7dWpk_kOe0hVwUR4g`, {
                    method: 'GET',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }).then(respuesta => {
                    return respuesta.json()
                }).then(json => {
                    setInformacion2(json)
                })
            }
        }
    }

    const imagenChange = (e) => {
        setImagenAvatar(e.target.value)
        console.log(imagenAvatar)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper elevation={4} className={classes.root}>
                    <Backdrop open={open} className={classes.back} />
                    <SpeedDial
                        ariaLabel="SpeedDial tooltip example"
                        className={classes.speedDial}
                        icon={<MenuIcon />}
                        onClose={handleCloseButton}
                        onOpen={handleOpen}
                        open={open}>

                        {actions.map(action => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.name === 'Volver' ? <ArrowBackOutlinedIcon /> : ''}
                                tooltipTitle={action.name}
                                onClick={action.name === 'Volver' ? () => props.history.push('/clientes') : ''}
                            />
                        ))}
                    </SpeedDial>
                    <Typography variant='h6' align="center" color='textSecondary'>Nuevo contacto</Typography>
                    <Divider />
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                name='dni'
                                value={denei}
                                margin='normal'
                                autoFocus
                                fullWidth
                                label="DNI"
                                onChange={onChange}
                                onKeyDown={tecla}
                                placeholder="Ingrese dni"
                                helperText='presione enter'
                                type="text"
                            />
                        </Grid>
                        <Grid item sx={12} sm={6}>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={imagenChange} />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <Avatar className={classes.avatar}>
                                        <PhotoCameraOutlinedIcon />
                                    </Avatar>
                                </IconButton>
                            </label>
                        </Grid>
                        <Grid item xs={12} sm={3} />
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='apellidoPaterno'
                                value={informacion1.apellidoPaterno}
                                margin='normal'
                                fullWidth
                                helperText="Apellido paterno"
                                placeholder="Ingrese apellido paterno"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='apellidoMaterno'
                                value={informacion1.apellidoMaterno}
                                margin='normal'
                                fullWidth
                                helperText="Apellido materno"
                                placeholder="Ingrese apellido materno"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                name='nombres'
                                value={informacion1.nombres}
                                margin='normal'
                                fullWidth
                                helperText="nombres"
                                placeholder="Ingrese nombres"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                name='fechanacimiento'
                                margin='normal'
                                fullWidth
                                helperText="Fecha de nacimiento"
                                placeholder="Ingrese fecha de nacimiento"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} />
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                name='ruc'
                                value={ruc}
                                margin='normal'
                                autoFocus
                                fullWidth
                                label="RUC"
                                onChange={onChangeRuc}
                                onKeyDown={teclaRuc}
                                placeholder="Ingrese Ruc"
                                helperText='presione enter'
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={9} />
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='razonSocial'
                                value={informacion2.razonSocial}
                                margin='normal'
                                fullWidth
                                helperText="Razón social"
                                placeholder="Ingrese razón social"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Fab color='secondary' size='small' aria-label='agregar'>
                                <AddIcon />
                            </Fab>
                        </Grid>
                        <Grid item xs={12} sm={3} />
                        <Divider />
                        <Grid item xs={12} sm={12}>
                            <List>
                                {empresas.length > 0 ?
                                    empresas.map((empresa, index) => (
                                        <ListItem key={index} button>
                                            <ListItemText primary={empresa.nombre} secondary={empresa.empresa} />
                                        </ListItem>
                                    ))
                                    :
                                    <ListItem>
                                        <ListItemText primary='No posee empresa agregada' />
                                    </ListItem>
                                }
                            </List>
                        </Grid>
                    </Grid>
                </Paper>
            </main>
        </React.Fragment>
    );
}