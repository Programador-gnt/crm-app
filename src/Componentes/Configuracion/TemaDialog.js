import React from 'react';
import {
	Dialog,
	DialogTitle,
	Typography,
	DialogContent,
	Box,
	List,
	ListItem,
	ListItemIcon,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Divider,
	Hidden,
	Button
} from '@material-ui/core';
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import theming from '../Services/Tema';
import { AuthTokenRequest } from '../helpers/AxiosInstance'


function TemaDialog({ abrir, funcion }) {
	const datos = JSON.parse(localStorage.getItem('perfil'))
	const palette = JSON.parse(localStorage.getItem('palette'))
	const [tema, setTema] = React.useState({
		primaryColor: palette.primary,
		secondaryColor: palette.secondary,
		type: palette.type
	})
	const theme = theming.defaultTheme

	const handleColorChange = (event) => {
		setTema({
			...tema,
			id_usuarios: datos.id_usuarios,
			[event.target.name]: event.target.value
		})
	};

	const cambiarTema = () => {
		AuthTokenRequest.post('tema/editar', tema)
			.then(() => {
				theming.changeTheme({
					primaryColor: typeof tema.primaryColor === 'undefined' ? theme.primaryColor.id : tema.primaryColor,
					secondaryColor: typeof tema.secondaryColor === 'undefined' ? theme.secondaryColor.id : tema.secondaryColor,
					type: typeof tema.type === 'undefined' ? theme.type.id : tema.type
				})
				var palette = { primary: tema.primaryColor, secondary: tema.secondaryColor, type: tema.type }
				localStorage.setItem('palette', JSON.stringify(palette))
				funcion()
			})
	}

	return (
		<Dialog open={abrir} onClose={funcion}>
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
								<OpacityOutlinedIcon color='primary' />
							</ListItemIcon>

							<FormControl fullWidth>
								<InputLabel>Color primario</InputLabel>

								<Hidden smUp>
									<Select
										native
										value={tema.primaryColor}
										name='primaryColor'
										onChange={handleColorChange}
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
										value={tema.primaryColor}
										name='primaryColor'
										onChange={handleColorChange}
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
								<OpacityOutlinedIcon color='secondary' />
							</ListItemIcon>

							<FormControl fullWidth>
								<InputLabel>Color secundario</InputLabel>

								<Hidden smUp>
									<Select
										native
										value={tema.secondaryColor}
										name='secondaryColor'
										onChange={handleColorChange}

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

										value={tema.secondaryColor}
										name='secondaryColor'
										onChange={handleColorChange}
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
										value={tema.type}
										name='type'
										onChange={handleColorChange}

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
										value={tema.type}
										name='type'
										onChange={handleColorChange}
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
						<Box mb={1}>
							<Hidden smUp>
								<Button
									color="secondary"
									variant="contained"
									onClick={() => cambiarTema()}>
									Cambiar
              				</Button>
							</Hidden>
							<Hidden xsDown>
								<Button
									color="secondary"
									variant="contained"
									onClick={() => cambiarTema()}>
									Cambiar
              				</Button>
							</Hidden>
						</Box>
					</ListItem>
				</List>
			</DialogContent>
		</Dialog>
	)
}

export default TemaDialog;
