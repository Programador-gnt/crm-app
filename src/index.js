import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CometChat } from '@cometchat-pro/chat';
import Config from './Componentes/Config/Config';
import * as serviceWorker from './serviceWorker';

var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(Config.chatRegion).build();

CometChat.init(Config.chatID, appSetting).then(
	() => {
	},
	error => {
		console.log("fallo el inicio de chat:", error);
	}
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
