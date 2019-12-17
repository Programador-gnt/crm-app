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

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(10)
	},
	avatar: {
		backgroundColor: theme.palette.secondary.main
	},
	speedDial: {
		position: 'fixed',
		bottom: theme.spacing(7),
		right: theme.spacing(2),
	},
	back: {
		transform: 'translateZ(0px)',
		position: 'fixed',
		zIndex: 100
	},
}));

export default function Chat() {
	const [friends, setFriends] = React.useState([])
	const [friendisLoading, setFriendisLoading] = React.useState(true)
	const [selectedFriend, setSelectedFriend] = React.useState(null);
	const [selectedAvatar, setSelectedAvatar] = React.useState(null);
	const [selectedName, setSelectedName] = React.useState(null);
	const [selectedStatus, setSelectedStatus] = React.useState(null);
	const [chat, setChat] = React.useState([]);
	const [chatIsLoading, setChatIsLoading] = React.useState(false);
	const MESSAGE_LISTENER_KEY = 'listener-key'
	const limit = 30
	const classes = useStyles()


	const selectFriend = (uid, avatar, name, status) => {
		setSelectedFriend(uid);
		setSelectedAvatar(avatar);
		setSelectedName(name);
		setSelectedStatus(status);
		setChat([]);
		setChatIsLoading(true);
	}

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