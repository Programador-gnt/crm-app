import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import { green } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import { AuthTokenRequest } from '../../../helpers/AxiosInstance';
import InicioContext from '../../inicioContext';

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
		backgroundColor: green[600],
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

const Usuarios = () => {
	const history = useHistory()
	const { inicio, dispatchInicio } = React.useContext(InicioContext)
	const classes = useStyles();

	const consultarTotal = () => {
		AuthTokenRequest.get('contactos')
			.then(result => {
				dispatchInicio(['usuarios', result.data.length])
			}).catch(error => {
				if(error.response.status===401){
					history.push('/401')
				}
			})
	}

	React.useEffect(consultarTotal, [])


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
							TOTAL CONTACTOS
            </Typography>
						<Typography variant="h3">{inicio.usuarios}</Typography>
					</Grid>
					<Grid item onClick={() => history.push('/contactos')} style={{ cursor: 'pointer' }}>
						<Avatar className={classes.avatar}>
							<PeopleIcon className={classes.icon} />
						</Avatar>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

Usuarios.propTypes = {
	className: PropTypes.string
};

export default Usuarios;
