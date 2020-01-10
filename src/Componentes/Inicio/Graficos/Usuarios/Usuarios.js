import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import { green } from '@material-ui/core/colors';
import { Redirect } from 'react-router-dom';

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

const Usuarios = (props) => {
	const [clientes, setClientes] = React.useState(false)
	const classes = useStyles();


	if (clientes === true) {
		return (<Redirect to='/clientes' />)
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
							TOTAL CONTACTOS
            </Typography>
						<Typography variant="h3">{props.total}</Typography>
					</Grid>
					<Grid item onClick={() => setClientes(true)} style={{ cursor: 'pointer' }}>
						<Avatar className={classes.avatar}>
							<PeopleIcon className={classes.icon} />
						</Avatar>
					</Grid>
				</Grid>
				{/* <div className={classes.difference}>
					<Typography className={classes.caption} variant="caption">5 Ùltima semana</Typography>
				</div> */}
			</CardContent>
		</Card>
	);
};

Usuarios.propTypes = {
	className: PropTypes.string
};

export default Usuarios;
