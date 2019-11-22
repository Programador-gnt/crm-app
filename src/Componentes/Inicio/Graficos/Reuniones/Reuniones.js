import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import EventIcon from '@material-ui/icons/Event';
import { blue } from '@material-ui/core/colors';
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        width: '90%'
    },
    content: {
        alignItems: 'center',
        display: 'flex'
    },
    title: {
        fontWeight: 700
    },
    avatar: {
        backgroundColor: blue[600],
        height: 56,
        width: 56
    },
    icon: {
        height: 32,
        width: 32
    },
    difference: {
        display: 'flex',
        alignItems: 'center'
    },
    differenceIcon: {

    },
    differenceValue: {

    }
}));

const Reuniones = () => {
    const [reuniones, setReuniones] = React.useState(false)
    const classes = useStyles();

    if (reuniones === true) {
        return (<Redirect to='/calendario' />)
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid
                    container
                    justify="space-between"
                >
                    <Grid item>
                        <Typography
                            className={classes.title}
                            gutterBottom
                            variant="body2">
                            TOTAL REUNIONES
            </Typography>
                        <Typography variant="h3">30</Typography>
                    </Grid>
                    <Grid item onClick={() => setReuniones(true)} style={{ cursor: 'pointer' }}>
                        <Avatar className={classes.avatar}>
                            <EventIcon className={classes.icon} />
                        </Avatar>
                    </Grid>
                </Grid>
                <div className={classes.difference}>
                    <ArrowDownwardIcon className={classes.differenceIcon} />
                    <Typography
                        className={classes.caption}
                        variant="caption"
                    >
                        25% Ùltima semana
          </Typography>
                </div>
            </CardContent>
        </Card>
    );
};

Reuniones.propTypes = {
    className: PropTypes.string
};

export default Reuniones;