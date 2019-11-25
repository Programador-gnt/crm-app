import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import theming from '../Services/Tema';


function SettingsDialog(props) {
	const [tema, setTema] = React.useState({})
	const theme = theming.defaultTheme

	const handleColorChange = (event) => {
		setTema({
			...tema,
			[event.target.name]: event.target.value
		})
	};

	const cambiarTema = () => {
		theming.changeTheme({
			primaryColor: tema.primaryColor,
			secondaryColor: tema.secondaryColor,
			type: tema.type
		})
	}

	return (
		<Dialog open={props.abrir} onClose={props.funcion}>
			<DialogTitle disableTypography>
				<Typography variant="h6">
					Cambiar paleta de colores
          </Typography>
			</DialogTitle>
			<DialogContent>
				<List disablePadding>
					<Box mb={1}>
						<ListItem>
							<ListItemIcon>
								<FiberManualRecord color="primary" />
							</ListItemIcon>

							<FormControl fullWidth>
								<InputLabel>Color primario</InputLabel>

								<Hidden smUp>
									<Select
										native
										value={theme.primaryColor.id}
										name='primaryColor'
										onChange={handleColorChange.bind()}
									>
										{Object.keys(theming.colors).map((color) => {
											color = theming.colors[color];

											return (
												<option key={color.id} value={color.id}>{color.name}</option>
											);
										})}
									</Select>
								</Hidden>

								<Hidden xsDown>
									<Select
										value={theme.primaryColor.id}
										name='primaryColor'
										onChange={handleColorChange.bind()}
									>
										{Object.keys(theming.colors).map((color) => {
											color = theming.colors[color];

											return (
												<MenuItem key={color.id} value={color.id}>{color.name}</MenuItem>
											);
										})}
									</Select>
								</Hidden>
							</FormControl>
						</ListItem>
					</Box>

					<Box mb={1}>
						<ListItem>
							<ListItemIcon>
								<FiberManualRecord color="secondary" />
							</ListItemIcon>

							<FormControl fullWidth>
								<InputLabel>Color secundario</InputLabel>

								<Hidden smUp>
									<Select
										native
										value={theme.secondaryColor.id}
										name='secondaryColor'
										onChange={handleColorChange.bind()}

									>
										{Object.keys(theming.colors).map((color) => {
											color = theming.colors[color];

											return (
												<option key={color.id} value={color.id}>{color.name}</option>
											);
										})}
									</Select>
								</Hidden>

								<Hidden xsDown>
									<Select
										value={theme.secondaryColor.id}
										name='secondaryColor'
										onChange={handleColorChange.bind()}

									>
										{Object.keys(theming.colors).map((color) => {
											color = theming.colors[color];

											return (
												<MenuItem key={color.id} value={color.id}>{color.name}</MenuItem>
											);
										})}
									</Select>
								</Hidden>
							</FormControl>
						</ListItem>
					</Box>

					<Box mb={1}>
						<ListItem>
							<ListItemIcon>
								<InvertColorsIcon />
							</ListItemIcon>

							<FormControl fullWidth>
								<InputLabel>Tipo</InputLabel>

								<Hidden smUp>
									<Select
										native
										value={theme.type.id}
										name='type'
										onChange={handleColorChange.bind()}

									>
										{Object.keys(theming.types).map((type) => {
											type = theming.types[type];

											return (
												<option key={type.id} value={type.id}>{type.name}</option>
											);
										})}
									</Select>
								</Hidden>

								<Hidden xsDown>
									<Select
										value={theme.type.id}
										name='type'
										onChange={handleColorChange.bind()}

									>
										{Object.keys(theming.types).map((type) => {
											type = theming.types[type];

											return (
												<MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
											);
										})}
									</Select>
								</Hidden>
							</FormControl>
						</ListItem>
					</Box>

					<Box mt={2} mb={1}>
						<Divider light />
					</Box>

					<ListItem>
						<Hidden xsDown>
							<Button
								color="secondary"
								variant="contained"
								onClick={() => cambiarTema()}>
								Cambiar
              				</Button>
						</Hidden>
					</ListItem>
				</List>
			</DialogContent>
		</Dialog>
	)
}

export default SettingsDialog;