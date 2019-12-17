import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CometChat } from '@cometchat-pro/chat';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(10)
	},
	close: {
		padding: theme.spacing(0.5)
	},
	appBar: {
		position: 'relative'
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	avatar: {
		backgroundColor: theme.palette.primary.main
	},
	linea: {
		width: '105%'
	},
	chatRight: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	me: {
		backgroundColor: theme.palette.primary.main,
		margin: 4,
		borderRadius: '10px 10px 0 10px',
		color: theme.palette.getContrastText(theme.palette.primary.main)
	},
	listame: {
		position: 'flex',
		justifyContent: 'flex-end'
	},
	them: {
		backgroundColor: theme.palette.secondary.main,
		margin: 4,
		borderRadius: '0 10px 10px 10px',
		color: theme.palette.getContrastText(theme.palette.secondary.main)
	},
	listathem: {
		position: 'flex',
		justifyContent: 'flex-start'
	}
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function Chat() {
	const [friends, setFriends] = React.useState([])
	const [friendisLoading, setFriendisLoading] = React.useState(true)
	const [selectedFriend, setSelectedFriend] = React.useState(null);
	const [selectedAvatar, setSelectedAvatar] = React.useState(null);
	const [selectedName, setSelectedName] = React.useState(null);
	const [selectedStatus, setSelectedStatus] = React.useState(null)
	const [chat, setChat] = React.useState([]);
	const [chatIsLoading, setChatIsLoading] = React.useState(false)
	const [dialogEvento, setDialogEvento] = React.useState(false)
	const MESSAGE_LISTENER_KEY = 'listener-key'
	const limit = 30
	const classes = useStyles()
	const user = JSON.parse(localStorage.getItem('usuarioChat'))


	const selectFriend = (uid, avatar, name, status) => {
		setSelectedFriend(uid);
		setSelectedAvatar(avatar);
		setSelectedName(name);
		setSelectedStatus(status);
		setChat([]);
		setChatIsLoading(true);
		setDialogEvento(true)
	}

	const handleCloseDialogEvento = () => {
		setDialogEvento(false);
	};

	React.useEffect(() => {
		let usersRequest = new CometChat.UsersRequestBuilder()
			.setLimit(limit)
			.build();

		usersRequest.fetchNext().then(
			userList => {
				setFriends(userList);
				setFriendisLoading(false);
			},
			error => {
				console.log('Error al recibir lista: ', error);
			}
		);

		return () => {
			CometChat.removeMessageListener(MESSAGE_LISTENER_KEY);
		};
	}, []);

	React.useEffect(() => {

		let listnerID = "UNIQUE_LISTENER_ID";
		CometChat.addCallListener(
			listnerID,
			new CometChat.CallListener({
				onIncomingCallReceived(call) {
					// let llamadaEntrante = [call]
					// setSelectedAvatarEntrante(llamadaEntrante[0].callInitiator.avatar)

					// setModalLlamadaEntrante(!modalLlamadaEntrante)
					// sessionStorage.setItem('sessionIdLlamadaEntrante', JSON.stringify(llamadaEntrante[0].sessionId))
				},

				onOutgoingCallAccepted(call) {
					console.log("Llamada Saliente aceptada: ", call);
					let sessionID = call.sessionID;

					// setModalLlamadaSaliente(false)
					// setModal(true)

					CometChat.startCall(sessionID, document.getElementById("callScreen"),
						new CometChat.OngoingCallListener({
							onUserJoined: user => {

								// console.log("El usuario se ha unido a la llamada: ", user);
							},
							onUserLeft: user => {
								// setModal(false)
								// console.log("Usuario abandonó la Llamada: ", user);
							},
							onCallEnded: call => {

								// console.log("LLamada Finalizada: ", call);
								// setModal(false)
							}
						})
					);
				},

				onOutgoingCallRejected(call) {
					// setModalLlamadaSaliente(false)
					// console.log("Llamada Saliente rechazada: ", call);
				},
				onIncomingCallCancelled(call) {
					// setModalLlamadaEntrante(false)
					// setModalLlamadaSaliente(false)
					// setModal(false)
					// console.log("Llamada entrante cancelada: ", call);
				}
			})
		);

		if (selectedFriend) {
			let messagesRequest = new CometChat.MessagesRequestBuilder()
				.setUID(selectedFriend)
				.setLimit(limit)
				.build();

			messagesRequest.fetchPrevious().then(
				messages => {
					setChat(messages);
					setChatIsLoading(false);
					// console.log('Mensajes recibidos: ', messages)
				},
				error => {
					// console.log('Error la recibir mensajes:', error);
				}
			);

			CometChat.removeMessageListener(MESSAGE_LISTENER_KEY);

			let listenerID = "UNIQUE_LISTENER_ID";

			CometChat.addMessageListener(listenerID,
				new CometChat.MessageListener({
					onTextMessageReceived: message => {
						// console.log('Mensaje Recibido', { message });
						if (selectedFriend === message.sender.uid) {
							// let music = new Audio(Musica)
							// music.play()
							setChat(prevState => [...prevState, message]);
						}
					},
					onMediaMessageReceived: mediaMessage => {
						// console.log("Mensaje Multimedia recibido", { mediaMessage });
						if (selectedFriend === mediaMessage.sender.uid) {
							setChat(prevState => [...prevState, mediaMessage]);
						}
					}
				})
			);
		}
	}, [selectedFriend]);

	if (friendisLoading) {
		return (
			<Box position="absolute" top="50%" left="50%">
				<CircularProgress color='primary' />
			</Box>
		);
	} else {
		return (
			<React.Fragment>
				<CssBaseline />
				<Dialog fullScreen open={dialogEvento} onClose={handleCloseDialogEvento} TransitionComponent={Transition}>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton edge="start" color="inherit" onClick={handleCloseDialogEvento} aria-label="cerrar">
								<CloseIcon />
							</IconButton>
							<Avatar className={classes.avatar} src={selectedAvatar} />
							<Typography variant="h6" className={classes.title}>
								{`${selectedName} - ${selectedStatus}`}
							</Typography>
						</Toolbar>
						{chatIsLoading ?
							<LinearProgress color='secondary' className={classes.linea} />
							: null}
					</AppBar>
					<List>
						{chatIsLoading ? null:
						chat.length ? <ListItem primary='chat cargado'/>: <ListItem primary='No hay mensajes para mostrar'/>}
					</List>
					{/* {chatIsLoading ?
						null :
						chat.length ?
							chat.map((mensajes, index) => (
								<ListItem key={index} className={mensajes.receiver !== user.uid ? classes.them : classes.me}>
									mensajes.receiver !== user.uid ?
											<Avatar src={selectedAvatar} alt='...' />
									<Paper elevation={4} className={classes.them}>
										<Typography variant='body1' style={{ padding: 6 }}>como estas menor ok?</Typography>
									</Paper>
									:
											<Paper elevation={4} className={classes.me}>
										<Typography variant='body1' style={{ padding: 6 }}>como estas menor ok?</Typography>
									</Paper>
									<Avatar src={user.avatar} alt='...' />
								</ListItem>
							))
							:
							<List>
								<ListItem primary='No hay mensajes para mostrar' />
							</List>} */}

				</Dialog>
				<Fade in={true} timeout={1000}>
					<Paper elevation={4} className={classes.root}>
						<List>
							{friends.map((lista, index) => (
								<ListItem key={index} button divider={true} onClick={() => selectFriend(lista.uid, lista.avatar, lista.name, lista.status)}>
									<ListItemAvatar>
										<Avatar className={classes.avatar} src={lista.avatar} />
									</ListItemAvatar>
									<ListItemText primary={lista.name} secondary={`${lista.uid} - ${lista.status}`} />
								</ListItem>
							))}
						</List>
					</Paper>
				</Fade>
			</React.Fragment>
		);
	}
}