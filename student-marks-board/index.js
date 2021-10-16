let userData = [];

function fetchData() {
	fetch('./data/users.json')
		.then((response) => response.json())
		.then((data) => {
			const users = data.users;
			userData = users;

			const keys = Object.keys(users);

			for (let i = 0; i <= keys.length - 1; i++) {
				createUI(users[keys[i]]);
			}
		});
}
fetchData();

function createUI(users) {
	const mainDiv = document.getElementById('tableDiv');
	const ul = document.createElement('ul');
	mainDiv.appendChild(ul);

	for (let i = 0; i <= users.length - 1; i++) {
		const li = document.createElement('li');
		li.setAttribute('class', 'userLi');
		li.innerHTML = `<span>${users[i].name}</span><span>${users[i].grade}</span>`;
		ul.appendChild(li);
	}
}

function searchFun(event) {
	const term = event.target.value;
	
	const keys = Object.keys(userData);

		let filteredUsers = [];
		for(let i = 0; i <= keys.length - 1; i++) {
			let find = userData[keys[i]].filter((user) => {
				return user.name.toLowerCase().includes(term.toLowerCase());
			});
			filteredUsers.push(...find);
		}

		const mainDiv = document.getElementById('tableDiv');
		mainDiv.innerHTML = '';
		createUI(filteredUsers);
	
}
