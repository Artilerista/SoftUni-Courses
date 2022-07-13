async function loadRepos() {
	let username = document.getElementById('username');
	let ul = document.getElementById('repos');
	ul.innerHTML = "";
	let url = `https://api.github.com/users/${username.value}/repos`;
	try {
		let response = await fetch(url);
		console.log( response)
		if (response.status !== 200) {
			throw new Error (`${response.status} ${response.statusText}`)
		}
		let data = await response.json();
		for (const obj of data) {
			let li = document.createElement('li');
			let a = document.createElement('a');
			a.href = obj.html_url;
			a.textContent = obj.full_name;
			li.appendChild(a);
			ul.appendChild(li);
		}
	} catch(err) {
		let li = document.createElement('li');
		li.textContent = err.message;
		ul.appendChild(li);
	}
}