  
const url = 'https://restcountries.com/v3.1';

export function getAllCounrties() {
	return fetch(`${url}/all`)
		.then(response => response.json())
		.then(data => data);
}