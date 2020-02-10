import _ from 'lodash';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import brown from '@material-ui/core/colors/brown';
import gray from '@material-ui/core/colors/grey';
import blueGray from '@material-ui/core/colors/blueGrey';
import api from '../constants/api';
// import RalewayWoff2 from './raleway-v14-latin-regular.woff2';

const colors = {
	red: {
		id: 'red',
		name: 'Red',
		import: red
	},

	pink: {
		id: 'pink',
		name: 'Pink',
		import: pink
	},

	purple: {
		id: 'purple',
		name: 'Purple',
		import: purple
	},

	deepPurple: {
		id: 'deep-purple',
		name: 'Deep Purple',
		import: deepPurple
	},

	indigo: {
		id: 'indigo',
		name: 'Indigo',
		import: indigo
	},

	blue: {
		id: 'blue',
		name: 'Blue',
		import: blue
	},

	lightBlue: {
		id: 'light-blue',
		name: 'Light Blue',
		import: lightBlue
	},

	cyan: {
		id: 'cyan',
		name: 'Cyan',
		import: cyan
	},

	teal: {
		id: 'teal',
		name: 'Teal',
		import: teal
	},

	green: {
		id: 'green',
		name: 'Green',
		import: green
	},

	lightGreen: {
		id: 'light-green',
		name: 'Light Green',
		import: lightGreen
	},

	lime: {
		id: 'lime',
		name: 'Lime',
		import: lime
	},

	yellow: {
		id: 'yellow',
		name: 'Yellow',
		import: yellow
	},

	amber: {
		id: 'amber',
		name: 'Amber',
		import: amber
	},

	orange: {
		id: 'orange',
		name: 'Orange',
		import: orange
	},

	deepOrange: {
		id: 'deep-orange',
		name: 'Deep Orange',
		import: deepOrange
	},

	brown: {
		id: 'brown',
		name: 'Brown',
		import: brown
	},

	gray: {
		id: 'gray',
		name: 'Gray',
		import: gray
	},

	blueGray: {
		id: 'blue-gray',
		name: 'Blue Gray',
		import: blueGray
	},
	// black: {
	// 	id: 'black',
	// 	name: 'Black',
	// 	import: '#000000'
	// }
};

const types = {
	light: {
		id: 'light',
		name: 'Light'
	},

	dark: {
		id: 'dark',
		name: 'Dark'
	}
};

const getColor = (colorId) => {
	if (!colorId) {
		return null;
	}

	colorId = _.camelCase(colorId);

	return colors[colorId];
};

const getType = (typeId) => {
	if (!typeId) {
		return null;
	}

	return types[typeId];
};

const defaultPrimaryColor = getColor(`${api.primary_color}`);
const defaultSecondaryColor = getColor(`${api.secondary_color}`);
const defaultType = getType(`${api.type}`);

// const raleway = {
// 	fontFamily: 'Raleway',
// 	fontStyle: 'normal',
// 	fontDisplay: 'swap',
// 	fontWeight: 400,
// 	src: `
// 	  local('Raleway'),
// 	  local('Raleway-Regular'),
// 	  url(${RalewayWoff2}) format('woff2')
// 	`,
// 	unicodeRange:
// 		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };

const defaultTheme = createMuiTheme({
	palette: {
		primary: defaultPrimaryColor.import,
		secondary: defaultSecondaryColor.import,
		type: defaultType.id
	},
	primaryColor: defaultPrimaryColor,
	secondaryColor: defaultSecondaryColor,
	type: defaultType,
	// typography: {
	// 	fontFamily: 'Raleway, Arial',
	// },
	// overrides: {
	// 	MuiCssBaseline: {
	// 		'@global': {
	// 			'@font-face': [raleway],
	// 		},
	// 	},
	// },
});

var theming = {};

theming.colors = colors;
theming.types = types;

theming.defaultPrimaryColor = defaultPrimaryColor;
theming.defaultSecondaryColor = defaultSecondaryColor;
theming.defaultType = defaultType;

theming.defaultTheme = defaultTheme;

//-----esta es la funcion necesaria----

/**
 * Changes the theme for the current user.
 * @param theme
 * @returns {Promise<unknown>}
 */
theming.changeTheme = (theme) => {
	return new Promise((resolve, reject) => {

		let primaryColor = getColor(theme.primaryColor);
		let secondaryColor = getColor(theme.secondaryColor);
		let type = getType(theme.type);

		theme = createMuiTheme({
			palette: {
				primary: primaryColor.import,
				secondary: secondaryColor.import,
				type: type.id
			},

			primaryColor: primaryColor,
			secondaryColor: secondaryColor,
			type: type
		});
		theming.defaultTheme = theme;
		resolve(theming)
	});
};

export default theming;
