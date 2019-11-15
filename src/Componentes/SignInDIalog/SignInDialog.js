import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import GoogleIcon from 'mdi-material-ui/Google';
import { makeStyles } from '@material-ui/core/styles';
import Config from '../Config/Config';
import gapi from 'gapi-client';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(0.5)
    },

    divider: {
        margin: 'auto'
    },

    grid: {
        marginBottom: theme.spacing(2)
    }
}));


export default function SignInDialog(props) {
    const [irInicio, setIrInicio] = React.useState(false)
    const classes = useStyles()
    const { dialogProps } = props

    const ingresar = () => {
        const SCOPES = 'https://mail.google.com https://www.googleapis.com/auth/calendar https://www.google.com/m8/feeds/ https://www.googleapis.com/auth/contacts.readonly';
        gapi.load('auth2', initClient);
        function initClient() {
            gapi.auth2.authorize({
                client_id: `${Config.client_id}`,
                scope: SCOPES
            }, response => {
                localStorage.setItem('tokenGoogle', JSON.stringify(response.access_token))
                setIrInicio(true)
            });
        }
    }

    if (irInicio === true) {
        return (<Redirect to='/inicio' />)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Dialog fullWidth maxWidth="sm" {...dialogProps} open={props.abrir} onClose={props.cerrar}>
                <DialogTitle>
                    Ingresa tu cuenta
                </DialogTitle>

                <DialogContent>
                    <Hidden xsDown>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <Button
                                    color="primary"
                                    fullWidth
                                    onClick={() => ingresar()}
                                    startIcon={<GoogleIcon />}
                                    variant="contained"
                                >
                                    Google
						</Button>
                            </Grid>

                            <Grid item xs={1}>
                                <Divider className={classes.divider} orientation="vertical" />
                            </Grid>

                            <Grid item xs={7}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <TextField
                                            autoComplete="nickname"
                                            fullWidth
                                            label="Nickname"
                                            placeholder="Nickname"
                                            required
                                            type="text"
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid item >
                                        <TextField
                                            autoComplete="current-password"
                                            fullWidth
                                            label="Password"
                                            required
                                            type="password"
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden smUp>
                        <Grid container direction="column" spacing={2}>
                            <Button
                                color="primary"
                                fullWidth
                                onClick={() => ingresar()}
                                startIcon={<GoogleIcon />}
                                variant="contained">
                                Google
						</Button>
                            <Grid item xs>
                                <TextField
                                    autoComplete="nickname"
                                    fullWidth
                                    label="Nickname"
                                    placeholder="Nickname"
                                    required
                                    type="text"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    autoComplete="current-password"
                                    fullWidth
                                    label="Password"
                                    required
                                    type="password"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Hidden>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={props.cerrar}>Cancelar</Button>
                    <Button
                        color="primary"
                        variant="contained">
                        Ingresar
                    </Button>
                </DialogActions>
            </Dialog>

        </React.Fragment>
    );
}