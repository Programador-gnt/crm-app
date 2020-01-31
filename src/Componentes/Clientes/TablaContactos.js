import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Grid,
	Table,
	TableHeaderRow,
	PagingPanel,
	Toolbar,
	SearchPanel
} from '@devexpress/dx-react-grid-material-ui';
import {
	SortingState,
	IntegratedSorting,
	PagingState,
	IntegratedPaging,
	SearchState,
	IntegratedFiltering
} from '@devexpress/dx-react-grid';

export default function TablaContactos() {
	const [sorting, setSorting] = useState([{ columnName: '', direction: 'asc' }]);
	const [columns] = useState([
		{ name: "id_anexo", title: "Id" },
		{ name: "nm_anexo", title: "Nombre" },
		{ name: "nm_alias", title: "Alias" },
		{ name: "tdocumento", title: "Tipo documento" },
		{ name: "ruc", title: "N° documento" },
		{ name: "nomestado", title: "Nombre estado" }
	]);
	const [rows] = useState([
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 0,
			"nm_anexo": "(NINGUNO)",
			"nm_alias": "SMOMOA",
			"tdocumento": "RUC",
			"ruc": "15504401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 5,
			"nm_anexo": "IPANAQUE  IBARBURO LUCIA DEL SOCORRO",
			"nm_alias": "T y D TRANSPORTE",
			"tdocumento": "RUC",
			"ruc": "15604401989",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 8,
			"nm_anexo": "PORTAL  DE CESPEDES MECHE NATIVIDAD",
			"nm_alias": "PORTAL  DE CESPEDES MERCEDES NATIVIDAD",
			"tdocumento": "RUC",
			"ruc": "10034696581",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 24,
			"nm_anexo": "ABAD COLAN VICTOR MANUEL",
			"nm_alias": "FOTOGRAFO PROFESIONAL",
			"tdocumento": "RUC",
			"ruc": "15604401990",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 26,
			"nm_anexo": "MATAYOSHI OMINE HUMBERTO ",
			"nm_alias": "MATAYOSHI OMINE HUMBERTO ",
			"tdocumento": "RUC",
			"ruc": "10061893054",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 28,
			"nm_anexo": "FUENTES  MENDOZA  MAXIMO ALEJANDRO ",
			"nm_alias": "BICIMAX",
			"tdocumento": "RUC",
			"ruc": "10062010962",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 30,
			"nm_anexo": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"nm_alias": "AZABACHE  ALCANTARA  ALFREDO AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10062400469",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 49,
			"nm_anexo": "CESAR A. MUÑOZ PINTO",
			"nm_alias": "MUÑOZ  PINTO CESAR AUGUSTO",
			"tdocumento": "RUC",
			"ruc": "10067885371",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 53,
			"nm_anexo": "BRAVO  TELLO DE PAUCAR  MARTHA",
			"nm_alias": "FERRETERIA SANTA ROSA",
			"tdocumento": "RUC",
			"ruc": "10068655426",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 55,
			"nm_anexo": "NORONHA  RIOS   TEDDY ",
			"nm_alias": "NORONHA  RIOS   TEDDY ",
			"tdocumento": "RUC",
			"ruc": "10069701332",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 56,
			"nm_anexo": "DIAZ  CACERES URBANO J",
			"nm_alias": "DIAZ  CACERES URBANO J",
			"tdocumento": "RUC",
			"ruc": "10069749505",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 67,
			"nm_anexo": "RIVERA  CACERES CIRILA SIMEONA",
			"nm_alias": "VIRGEN DE COCHARCAS ",
			"tdocumento": "RUC",
			"ruc": "10071135336",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 76,
			"nm_anexo": "RODRIGUEZ  MACEDO HILDA ",
			"nm_alias": " COPIAS",
			"tdocumento": "RUC",
			"ruc": "10072445304",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 81,
			"nm_anexo": "PLASENCIA  LESCANO DE JAULES  MARIA",
			"nm_alias": "SERVICIOS GENERALES MARY'S ",
			"tdocumento": "RUC",
			"ruc": "10072946508",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 85,
			"nm_anexo": "YPARRAGUIRRE MEDINA ROBERTO",
			"nm_alias": "GRIFO ALAMEDA",
			"tdocumento": "RUC",
			"ruc": "10073874195",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 87,
			"nm_anexo": "MELGAR  CALDAS ROSA AMELIA",
			"nm_alias": "FERRETERIA ROSY",
			"tdocumento": "RUC",
			"ruc": "10074128161",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 93,
			"nm_anexo": "ROMERO QUISPE RUDY",
			"nm_alias": "\"GIAN PIER'S\"",
			"tdocumento": "RUC",
			"ruc": "10074941783",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 97,
			"nm_anexo": "FRANCIA  ROJAS CARLOS GUZMAN",
			"nm_alias": "FRANCIA  ROJAS CARLOS GUZMAN",
			"tdocumento": "RUC",
			"ruc": "10075253627",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 107,
			"nm_anexo": "LAOS  DE LAMA EDUARDO JOSE A.",
			"nm_alias": "NOTARIO",
			"tdocumento": "RUC",
			"ruc": "10077006309",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 108,
			"nm_anexo": "HORNA  CORRALES  GILMER W.",
			"nm_alias": "POLLOS A LA BRASA",
			"tdocumento": "RUC",
			"ruc": "10077117615",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 114,
			"nm_anexo": "SANCHEZ PEREIRA JANET MARIA",
			"nm_alias": "SANCHEZ PEREIRA JANET MARIA",
			"tdocumento": "RUC",
			"ruc": "10077517133",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 117,
			"nm_anexo": "DUEÑAS  CESPEDES GIOVANNA",
			"nm_alias": "REPUESTOS RALY",
			"tdocumento": "RUC",
			"ruc": "10077662796",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 118,
			"nm_anexo": "ZAGASTIZABAL ARNAO MARIA ELIZABETH",
			"nm_alias": "PIZZERIA DON ROSALINO ",
			"tdocumento": "RUC",
			"ruc": "10077715041",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 119,
			"nm_anexo": "MEJIA  ROSASCO ROSALIA MIRELLA",
			"nm_alias": "NOTARIA",
			"tdocumento": "RUC",
			"ruc": "10077744318",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 122,
			"nm_anexo": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"nm_alias": "SUCESION INDIVISA UGAZ  CABEZA DE BACA ARTIDORO",
			"tdocumento": "RUC",
			"ruc": "10077899052",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 123,
			"nm_anexo": "VARGAS DE LAS CASAS DE VIACAVA S ELENA",
			"nm_alias": "REPUESTOS",
			"tdocumento": "RUC",
			"ruc": "10077923051",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 124,
			"nm_anexo": "BARINOTTO  VARGAS  CESAR AUGUSTO",
			"nm_alias": "SERVICIO TAXI",
			"tdocumento": "RUC",
			"ruc": "10077979765",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 127,
			"nm_anexo": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"nm_alias": "LLOSA   MOSCOSO  LEONOR YSELA ",
			"tdocumento": "RUC",
			"ruc": "10078113184",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 130,
			"nm_anexo": "RODRIGUEZ VARGAS MARIO DANILO",
			"nm_alias": "\"SEMBRANDO\"",
			"tdocumento": "RUC",
			"ruc": "10078311806",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 131,
			"nm_anexo": "MORA  CH. CARLOS ",
			"nm_alias": "MINI MARKET GAMBOA",
			"tdocumento": "RUC",
			"ruc": "10078338844",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 133,
			"nm_anexo": "DONGO  JOULAIN MARIA DEL CARMEN",
			"nm_alias": "DONGO  JOULAIN MARIA DEL CARMEN",
			"tdocumento": "RUC",
			"ruc": "10078408974",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 137,
			"nm_anexo": "ODE  PEREYRA  SOFIA INES",
			"nm_alias": "NOTARIA-ABOGADA",
			"tdocumento": "RUC",
			"ruc": "10078573878",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 138,
			"nm_anexo": "SANCHEZ ASCURRA JORGE JAVIER",
			"nm_alias": "SANCHEZ ASCURRA JORGE JAVIER",
			"tdocumento": "RUC",
			"ruc": "10078671420",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 156,
			"nm_anexo": "HIDALGO  MORAN CAROLA CECILIA",
			"nm_alias": "NOTARIA HIDALGO",
			"tdocumento": "RUC",
			"ruc": "10081919149",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 158,
			"nm_anexo": "SOUZA FERREIRA MARCHESE VICTOR MANUEL",
			"nm_alias": "DE SOUZA  FERREIRA",
			"tdocumento": "RUC",
			"ruc": "10081946634",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 159,
			"nm_anexo": "DEL POZO VALDEZ JULIO ANTONIO ",
			"nm_alias": "NOTARIA DEL POZO VALDEZ",
			"tdocumento": "RUC",
			"ruc": "10081998642",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 169,
			"nm_anexo": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"nm_alias": "VENTURA WAINER DE VELAOCHAGA ESTER",
			"tdocumento": "RUC",
			"ruc": "10082455511",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 170,
			"nm_anexo": "BUSTAMANTE  NORTHCOTE LORENA AIDA",
			"nm_alias": "SUN FISH BAR CONSECIONARIO ",
			"tdocumento": "RUC",
			"ruc": "10082487676",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 173,
			"nm_anexo": "ASPAUZA  GAMARRA  JAVIER ERNESTO",
			"nm_alias": "NOTARIA JAVIER ASPAUZA GAMARRA ",
			"tdocumento": "RUC",
			"ruc": "10082682037",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 177,
			"nm_anexo": "VASQUEZ  VALDIVIA MARIA ALEJANDRINA",
			"nm_alias": "DISTRIB. JALA",
			"tdocumento": "RUC",
			"ruc": "10083629652",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 179,
			"nm_anexo": "BURGOS  LOPEZ  BENJAMIN E.",
			"nm_alias": "ESTUDIO CONTABLE",
			"tdocumento": "RUC",
			"ruc": "10083857183",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 182,
			"nm_anexo": "PILLACA  POLLO ANDRES",
			"nm_alias": "PILLACA POLLO ANDRES",
			"tdocumento": "RUC",
			"ruc": "10084152701",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 184,
			"nm_anexo": "LIU ROMERO  CARMEN MARIA",
			"nm_alias": "CHIFA \"WIN-WAI\"",
			"tdocumento": "RUC",
			"ruc": "10084362749",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 192,
			"nm_anexo": "CUBAS CUBAS HECTOR FELIX",
			"nm_alias": "GRIFO PETROLEO ",
			"tdocumento": "RUC",
			"ruc": "10085544557",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 195,
			"nm_anexo": "TURPO  BALLENA  EUSEBIO M.",
			"nm_alias": "MULTICOLOR",
			"tdocumento": "RUC",
			"ruc": "10085803951",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 197,
			"nm_anexo": "CALLIRGOS  VALLE  DARIO",
			"nm_alias": "COMERCIAL CRUZ",
			"tdocumento": "RUC",
			"ruc": "10086136975",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 199,
			"nm_anexo": "ROJAS DOMINGUEZ LEONOR",
			"nm_alias": "ROJAS DOMINGUEZ LEONOR",
			"tdocumento": "RUC",
			"ruc": "10086244361",
			"estado": 0,
			"nomestado": "Inactivo"
		},
		{
			"id_anexo": 200,
			"nm_anexo": "SUAREZ RIVERA DE LEAÑO AMELIA",
			"nm_alias": "MOBY DICK",
			"tdocumento": "RUC",
			"ruc": "10086331433",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 202,
			"nm_anexo": "REATEGUI HERRERA KATIA EDITH",
			"nm_alias": "REATEGUI HERRERA KATIA EDITH",
			"tdocumento": "RUC",
			"ruc": "10086448888",
			"estado": 1,
			"nomestado": "Activo"
		},
		{
			"id_anexo": 203,
			"nm_anexo": "DE LA TORRE  CASTRO MARIO GERMAN ",
			"nm_alias": "VIDRIERIA \"EL DIAMANTE\" ",
			"tdocumento": "RUC",
			"ruc": "10086466681",
			"estado": 1,
			"nomestado": "Activo"
		}
	]);
	const [currentPage, setCurrentPage] = useState(0);
	const [pageSize, setPageSize] = useState(5);
	const [pageSizes] = useState([5, 10, 20, 50]);
	const [searchValue, setSearchState] = useState('');

	return (
		<Paper>
			<Grid rows={rows} columns={columns}>
				<SortingState sorting={sorting} onSortingChange={setSorting} />
				<PagingState currentPage={currentPage} onCurrentPageChange={setCurrentPage} pageSize={pageSize} onPageSizeChange={setPageSize} />
				<SearchState value={searchValue} onValueChange={setSearchState} />
				<IntegratedSorting />
				<IntegratedPaging />
				<IntegratedFiltering />
				<Table />
				<TableHeaderRow showSortingControls />
				<Toolbar />
				<SearchPanel />
				<PagingPanel pageSizes={pageSizes} />
			</Grid>
		</Paper>
	);
};