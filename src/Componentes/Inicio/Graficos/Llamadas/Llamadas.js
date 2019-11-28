import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, LinearProgress } from '@material-ui/core';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { deepPurple} from '@material-ui/core/colors';

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
		backgroundColor: deepPurple[600],
		height: 56,
		width: 56
	},
	icon: {
		height: 32,
		width: 32
	}
}));

const Llamadas = () => {
	const classes = useStyles();

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
							TOTAL LLAMADAS
            </Typography>
						<Typography variant="h3">50</Typography>
					</Grid>
					<Grid item>
						<Avatar className={classes.avatar}>
							<PhoneAndroidIcon className={classes.icon} />
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
						10% Ùltima semana
          </Typography>
				</div>
			</CardContent>
		</Card>
	);
};

Llamadas.propTypes = {
	className: PropTypes.string
};

export default Llamadas;