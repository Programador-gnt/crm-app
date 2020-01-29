import React from 'react';
import { CssBaseline, Grid, Card, CardContent, CardActions, Avatar, Typography, Divider, IconButton, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { AuthTokenRequest } from '../helpers/AxiosInstance';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(8),
		paddingLeft: theme.spacing(4)
	},
	speedDial: {
		position: 'fixed',
		bottom: theme.spacing(7),
		right: theme.spacing(2),
	},
	card: {
		width: 400,
		margin: theme.spacing(5)
	},
	avatar: {
		backgroundColor: theme.palette.primary.main,
		width: 150,
		height: 150,
		margin: 'auto'
	},
	texto: {
		textAlign: 'center',
		marginTop: theme.spacing(1)
	},
	info: {
		marginTop: theme.spacing(1)
	}
}));

const actions = [
	{ name: 'Volver' }
];

export default function Info(props) {
	const history = useHistory()
	const [open, setOpen] = React.useState(window.screen.width < 769 ? false : true)
	const [infor, setInfor] = React.useState({})
	const [letra, setLetra] = React.useState(null)
	const id = window.location.search.split('=')[1]
	const classes = useStyles()

	const info = () => {
		AuthTokenRequest.get('empresas/info', {
			params: {
				id_empresas: id
			}
		})
			.then(result => {
				setInfor(result.data)
				setLetra(result.data.razonsocial.substr(0, 1))
			})
	}

	const preventActionClickClose = (evt, action) => {
		evt.preventDefault()
		evt.stopPropagation()
		if (action.name === 'Volver') {
			history.push('/empresas')
		}
	}

	React.useEffect(info, [])

	return (
		<React.Fragment>
			<CssBaseline />
			<Grid className={classes.root}>
				<Grid item xs={12}>
					<Typography component="h1" variant="h4" align="center" color='textSecondary'>
						Información de empresa
          			</Typography>
					<SpeedDial
						ariaLabel="SpeedDial tooltip example"
						className={classes.speedDial}
						icon={<SpeedDialIcon />}
						onClick={() => setOpen(!open)}
						open={open}>

						{actions.map(action => (
							<SpeedDialAction
								tooltipOpen
								key={action.name}
								icon={action.name === 'Volver' ? <ArrowBackOutlinedIcon /> : ''}
								tooltipTitle={action.name}
								onClick={evt => preventActionClickClose(evt, action)}
							/>
						))}
					</SpeedDial>
					<Grid container alignItems='center' justify='center'>
						<Card className={classes.card}>
							<CardContent>
								<Avatar className={classes.avatar}><Typography variant='h1'>{letra}</Typography></Avatar>
								<Typography variant="h5" className={classes.texto} color='secondary'>
									{infor.razonsocial}
								</Typography>
								<Typography variant="body1" className={classes.texto} color='textSecondary'>
									{infor.social}
								</Typography>
								<Divider />
								<Typography variant="subtitle2" className={classes.info} color='textPrimary'>
									Email
                                {/* Incluso cuando todo es perfecto, siempre puedes mejorarlo. Rompe barreras en tu cabeza, crea algo loco y no olvides que programar es poesía... */}
								</Typography>
								<Typography variant="body1" color='textSecondary'>
									{infor.correo}
								</Typography>
								<Typography variant="subtitle2" className={classes.info} color='textPrimary'>
									Teléfono
                            </Typography>
								<Typography variant="body1" color='textSecondary'>
									{infor.telefono}
								</Typography>
								<Typography variant="subtitle2" className={classes.info} color='textPrimary'>
									Status
                            </Typography>
								<Chip
									icon={<FaceIcon />}
									label="Activa"
									color="primary"
									onDelete={() => console.log('status')}
									deleteIcon={<DoneIcon />}
									variant="outlined"
								/>
							</CardContent>
							<CardActions disableSpacing>
								<IconButton aria-label="Llamadas">
									<EditOutlinedIcon color='primary' />
								</IconButton>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}