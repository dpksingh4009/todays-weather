const url = 'https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?units=auto&lang=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e8ede355c7mshd5f9bb5f09470eap1d25c3jsn6de7e9c87606',
		'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}