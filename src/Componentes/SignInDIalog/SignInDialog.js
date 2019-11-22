import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import consumeWSGmail from '../Config/WebServiceGmail'


export default function SignInDialog(props) {
    const [MensajeEnviar, setMensajeEnviar] = React.useState({})
    const { dialogProps } = props
    var Mensaje

    const enviarChange = (e) => {
        setMensajeEnviar({
            ...MensajeEnviar,
            [e.target.name]: e.target.value
        })
    }

    const enviarMensaje = () => {
        var BuildMail = require('buildmail')
        new BuildMail('text/plain').setContent(MensajeEnviar.Snippet).addHeader('From', '').addHeader('To', MensajeEnviar.To).addHeader('Subject', MensajeEnviar.Subject).build((err, mail) => {
            Mensaje = btoa(mail.toString())
        })
        if (Mensaje) {
            consumeWSGmail('POST', 'messages/send', Mensaje, `?alt=json`)
        } else {

        }
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Dialog fullWidth maxWidth="sm" {...dialogProps} open={props.abrir} onClose={props.cerrar}>
                <DialogTitle>
                    Enviar mensaje
                </DialogTitle>

                <DialogContent>
                    <Hidden xsDown>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <TextField
                                            autoComplete="to"
                                            name='To'
                                            fullWidth
                                            label="Destinatario"
                                            placeholder="Correo electrónico"
                                            required
                                            onChange={enviarChange.bind()}
                                            type="text"
                                            variant="outlined"
                                        />
                                    </Grid>

                                    <Grid item >
                                        <TextField
                                            autoComplete="motivo"
                                            fullWidth
                                            label="Subject"
                                            name='Subject'
                                            placeholder="Motivo del mensaje"
                                            onChange={enviarChange.bind()}
                                            required
                                            type="text"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item >
                                        <TextField
                                            autoComplete="mensaje"
                                            fullWidth
                                            multiline
                                            rows={5}
                                            label="Mensaje"
                                            name='Snippet'
                                            placeholder="Cuerpo del mensaje"
                                            onChange={enviarChange.bind()}
                                            required
                                            type="text"
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden smUp>
                        <Grid container direction="column" spacing={2}>
                            <Grid item xs>
                                <TextField
                                    autoComplete="to"
                                    name='To'
                                    fullWidth
                                    label="Destinatario"
                                    placeholder="Correo electrónico"
                                    onChange={enviarChange.bind()}
                                    required
                                    type="text"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    autoComplete="current-password"
                                    fullWidth
                                    label="Subject"
                                    name='Subject'
                                    placeholder="Motivo del mensaje"
                                    onChange={enviarChange.bind()}
                                    required
                                    type="password"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    autoComplete="mensaje"
                                    fullWidth
                                    multiline
                                    rows={5}
                                    label="Mensaje"
                                    name='Snippet'
                                    placeholder="Cuerpo del mensaje"
                                    onChange={enviarChange.bind()}
                                    required
                                    type="text"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Hidden>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={props.cerrar}>Cerrar</Button>
                    <Button
                        onClick={() => enviarMensaje()}
                        color="primary"
                        variant="contained">
                        Enviar
                    </Button>
                </DialogActions>
            </Dialog>

        </React.Fragment>
    );
}