import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import { blue } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import LoginContext from '../../../helpers/loginContext';
import InicioContext from '../../inicioContext';
import { AuthTokenRequest } from '../../../helpers/AxiosInstance';

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
	const { authLogin } = React.useContext(LoginContext)
	const { inicio, dispatchInicio } = React.useContext(InicioContext)
	const history = useHistory()
	const classes = useStyles();

	const consultarTotal = () => {
		AuthTokenRequest.get('eventos', {
			params: {
				creator: authLogin.correo
			}
		}).then(result => {
			dispatchInicio(['reuniones', result.data.length])
		})
	}

	React.useEffect(consultarTotal, [])


	return (
		<Card className={classes.root}>
			<CardContent>
				<Grid
					container
					justify="space-between">
					<Grid item>
						<Typography
							className={classes.title}
							gutterBottom
							variant="body2">
							TOTAL REUNIONES
            			</Typography>
						<Typography variant="h3">{inicio.reuniones}</Typography>
					</Grid>
					<Grid item onClick={() => history.push('/agenda')} style={{ cursor: 'pointer' }}>
						<Avatar className={classes.avatar}>
							<EventIcon className={classes.icon} />
						</Avatar>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

Reuniones.propTypes = {
	className: PropTypes.string
};

export default Reuniones;