import Config from './Config';

export function consumeWSChat(Metodo, Url, parametrosPOST, parametrosGET) {

	let peticion = {}
	let url_ws = `${Config.urlChat}${Url}${parametrosGET}`;

	if (Metodo === 'POST') {
		peticion = {
			method: Metodo,
			body: JSON.stringify(parametrosPOST),
			headers: {
				"Content-type": "application/json"
			}
		}
	}

	if (Metodo === 'GET') {
		peticion = {
			method: Metodo,
			headers: {
				"Content-type": "application/json"
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

export default consumeWSChat;