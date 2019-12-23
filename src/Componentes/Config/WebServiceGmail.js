import Config from './Config';

export function consumeWSGmail(Metodo, Url, parametrosPOST, parametrosGET) {
	let tokenGoogle = '';

	if (localStorage.getItem("tokenGoogle")) {
		tokenGoogle = JSON.parse(localStorage.getItem("tokenGoogle"))
	}

	let peticion = {}
	let url_ws = `${Config.urlGmail}${Url}${parametrosGET}`;

	if (Metodo === 'POST') {
		peticion = {
			method: Metodo,
			body: JSON.stringify({
				"raw": parametrosPOST
			}),
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${tokenGoogle}`
			}
		}
	}

	if (Metodo === 'GET') {
		peticion = {
			method: Metodo,
			headers: {
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

export default consumeWSGmail;