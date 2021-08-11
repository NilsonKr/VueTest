const fetchUtil = apiUrl => {
	return fetch(apiUrl)
		.then(res => res.json())
		.catch(err => console.log(err));
};

export default fetchUtil;
