let userData = [];

function fetchData() { 
	fetch('./data/users.json') //this is data of json
		.then((response) => response.json()) //get successfully data then i got a response and i take json data
		.then((data) => { //this is my all data
			const users = data.users;//data is an array and users is a variable where i store my data
			userData = users;//save users input in js object

			const keys = Object.keys(users);//get the value from users

			for (let i = 0; i <= keys.length - 1; i++) {
				createUI(users[keys[i]]);//this function is define to fetch and put createUI
			}
		});
}
fetchData();

function createUI(users) {
	const mainDiv = document.getElementById('tableDiv');//take a div from a id
	const ul = document.createElement('ul');//create ul
	// const span = document.createElement('span');
	// span.innerHTML = `${standerd}`
	mainDiv.appendChild(ul);//insert ul of mainDiv

	for (let i = 0; i <= users.length - 1; i++) {
		const li = document.createElement('li');
		li.setAttribute('class', 'userLi');
		li.innerHTML = `<span>${users[i].name}</span><span>${users[i].grade}</span>`;
		ul.appendChild(li);//put ul in li
	}
}

function searchFun(event) {
	const term = event.target.value;//when event handler is called the object value is target
	
	const keys = Object.keys(userData);//get the value from userData

		let filteredUsers = [];//this is a empty array
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
