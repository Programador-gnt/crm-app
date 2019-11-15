import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Usuarios from './Graficos/Usuarios/Usuarios';
import Reuniones from './Graficos/Reuniones/Reuniones'
import { Grid } from '@material-ui/core';
import Llamadas from './Graficos/Llamadas/Llamadas';
import Gmail from './Graficos/Gmail/Gmail'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(8),
        paddingLeft: theme.spacing(4)
    },
    usuarios: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));


export default function Inicio() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <CssBaseline />
            <Paper elevation={4} className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item lg={3}
                        sm={6}
                        xl={3}
                        xs={12} className={classes.usuarios}>
                        <Usuarios />
                    </Grid>
                    <Grid item lg={3}
                        sm={6}
                        xl={3}
                        xs={12} className={classes.usuarios}>
                        <Reuniones />
                    </Grid>
                    <Grid item lg={3}
                        sm={6}
                        xl={3}
                        xs={12} className={classes.usuarios}>
                        <Llamadas />
                    </Grid>
                    <Grid item lg={3}
                        sm={6}
                        xl={3}
                        xs={12} className={classes.usuarios}>
                        <Gmail />
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}