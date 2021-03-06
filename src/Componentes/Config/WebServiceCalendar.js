import Config from './Config';

export function consumeWSCalendar(Metodo, Url, ParametrosPOST, parametrosGET) {
	let tokenGoogle = '';

	if (localStorage.getItem("tokenGoogle")) {
        tokenGoogle = JSON.parse(localStorage.getItem("tokenGoogle"))
    }

	let peticion = {}
	let url_ws = `${Config.urlCalendar}${Url}${parametrosGET}`;

	if (Metodo === 'POST') {
		peticion = {
			method: Metodo,
			body: JSON.stringify(ParametrosPOST),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${tokenGoogle}`
			}
		}
	}

	if (Metodo === 'GET') {
		peticion = {
			method: Metodo,
			headers: {
				"Content-type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${tokenGoogle}`
			}
		}
	}

	return new Promise(async (resolve, reject) => {

		await fetch(url_ws, peticion)
			.then(response => response.json())
			.then(res => {
				resolve(res);
			})
			.catch(error => {
				reject(error);
			});
	});
};

export default consumeWSCalendar;