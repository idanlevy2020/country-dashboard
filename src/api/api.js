  
const url = 'https://restcountries.eu/rest/v2';

export function getAllCounrties() {
	return fetch(`${url}/all`)
		.then(response => response.json())
		.then(body => body);
}