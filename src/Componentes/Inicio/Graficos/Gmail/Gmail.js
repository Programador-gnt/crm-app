import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, LinearProgress } from '@material-ui/core';
import GoogleIcon from 'mdi-material-ui/Google';
import { red } from '@material-ui/core/colors';
import { Redirect } from 'react-router-dom'  

const useStyles = makeStyles(theme => ({
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
        backgroundColor: red[600],
        height: 56,
        width: 56
    },
    icon: {
        height: 32,
        width: 32
    }
}));

const Gmail = () => {
    const [correo, setCorreo] = React.useState(false)

    const classes = useStyles();

    if(correo===true){
        return(<Redirect to='/gmail'/>)
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
                            variant="body2"
                        >
                            TOTAL CORREOS
            </Typography>
                        <Typography variant="h3">70</Typography>
                    </Grid>
                    <Grid item onClick={()=>setCorreo(true)} style={{cursor: 'pointer'}}>
                        <Avatar className={classes.avatar}>
                            <GoogleIcon className={classes.icon} />
                        </Avatar>
                    </Grid>
                </Grid>
                <LinearProgress
                    className={classes.progress}
                    value={50}
                    variant="determinate"
                />
                <div >
                    <Typography
                        className={classes.caption}
                        variant="caption"
                    >
                        20% Ùltima semana
          </Typography>
                </div>
            </CardContent>
        </Card>
    );
};

Gmail.propTypes = {
    className: PropTypes.string
};

export default Gmail;